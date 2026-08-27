"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Message = { role: "user" | "assistant"; content: string };

const API = "https://olivia-ai.o7digital.com/api";

function richText(text: string): ReactNode[] {
  return text.split(/(\*\*.+?\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  );
}

function Reply({ text }: { text: string }) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  const blocks: ReactNode[] = [];
  let bullets: string[] = [];
  const flushBullets = () => {
    if (!bullets.length) return;
    const current = bullets;
    blocks.push(<ul key={`list-${blocks.length}`}>{current.map((line, index) => <li key={index}>{richText(line)}</li>)}</ul>);
    bullets = [];
  };
  lines.forEach((line) => {
    const clean = line.trim();
    if (/^[-•]\s+/.test(clean)) bullets.push(clean.replace(/^[-•]\s+/, ""));
    else {
      flushBullets();
      blocks.push(<p key={`p-${blocks.length}`}>{richText(clean)}</p>);
    }
  });
  flushBullets();
  return <>{blocks}</>;
}

export default function OliviaWidget() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const identity = useRef("");
  const visitorId = useRef("");
  const english = usePathname().startsWith("/en");

  useEffect(() => {
    visitorId.current = localStorage.getItem("kallista-olivia-visitor") || crypto.randomUUID();
    localStorage.setItem("kallista-olivia-visitor", visitorId.current);
  }, []);

  const copy = english ? {
    title: "Olivia", subtitle: "KALLISTA Café host", open: "Ask Olivia",
    welcome: "Hi, I’m Olivia. Ask me about KALLISTA Café, our location, published hours, experience or illustrative menu.",
    placeholder: "Write your question…", send: "Send", consent: "I accept the privacy notice to use the chat.",
    consentError: "Please accept the privacy notice before sending your question.",
    error: "I can’t answer right now. You can contact KALLISTA Café using the form on this page.",
    contact: "Contact KALLISTA Café"
  } : {
    title: "Olivia", subtitle: "Anfitriona de KALLISTA Café", open: "Pregunta a Olivia",
    welcome: "Hola, soy Olivia. Pregúntame sobre KALLISTA Café, la ubicación, el horario publicado, la experiencia o el menú ilustrativo.",
    placeholder: "Escribe tu pregunta…", send: "Enviar", consent: "Acepto el aviso de privacidad para usar el chat.",
    consentError: "Acepta el aviso de privacidad antes de enviar tu pregunta.",
    error: "No puedo responder ahora. Puedes contactar a KALLISTA Café mediante el formulario de esta página.",
    contact: "Contactar a KALLISTA Café"
  };

  const getIdentity = async (refresh = false) => {
    if (refresh) identity.current = "";
    if (identity.current) return identity.current;
    const response = await fetch(`${API}/widget/identity`, { cache: "no-store" });
    const data = await response.json();
    if (!response.ok || data.clientCode !== "kallistacafe" || !data.identity) throw new Error("Identity failed");
    identity.current = data.identity;
    return identity.current;
  };

  const send = async (event: FormEvent) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;
    if (!consent) {
      setMessages((current) => [...current, { role: "assistant", content: copy.consentError }]);
      return;
    }
    const history = messages.map(({ role, content }) => ({ role, content })).slice(-10);
    setMessages((current) => [...current, { role: "user", content: message }]);
    setInput("");
    setLoading(true);
    try {
      const token = await getIdentity();
      let response = await fetch(`${API}/olivia/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Olivia-Widget-Identity": token },
        body: JSON.stringify({
          clientCode: "kallistacafe", visitorId: visitorId.current, message,
          language: english ? "en" : "es", history,
          metadata: { page: location.pathname, pageUrl: location.href, pageTitle: document.title,
            pageContent: (document.querySelector("main")?.textContent || "").replace(/\s+/g, " ").slice(0, 5000) }
        })
      });
      if (response.status === 401) {
        const refreshed = await getIdentity(true);
        response = await fetch(`${API}/olivia/chat`, {
          method: "POST", headers: { "Content-Type": "application/json", "X-Olivia-Widget-Identity": refreshed },
          body: JSON.stringify({ clientCode: "kallistacafe", visitorId: visitorId.current, message,
            language: english ? "en" : "es", history, metadata: { page: location.pathname, pageUrl: location.href } })
        });
      }
      if (!response.ok) throw new Error("Chat failed");
      const data = await response.json();
      setMessages((current) => [...current, { role: "assistant", content: data.reply || copy.error }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: copy.error }]);
    } finally {
      setLoading(false);
    }
  };

  return <div className="olivia-kallista">
    {open && <section className="olivia-kallista-panel" aria-label={copy.title}>
      <header><div><strong>{copy.title}</strong><span>{copy.subtitle}</span></div><button onClick={() => setOpen(false)} aria-label="Cerrar">×</button></header>
      <div className="olivia-kallista-messages" aria-live="polite">
        <div className="assistant"><p>{copy.welcome}</p></div>
        {messages.map((message, index) => <div className={message.role} key={index}><Reply text={message.content} /></div>)}
        {loading && <div className="assistant olivia-kallista-typing">•••</div>}
      </div>
      <label className="olivia-kallista-consent"><input type="checkbox" checked={consent} onChange={(event) => {
        setConsent(event.target.checked);
        localStorage.setItem("kallista-olivia-consent", event.target.checked ? "accepted" : "declined");
      }} /> <span>{copy.consent} <a href="/aviso-de-privacidad">Aviso de privacidad</a></span></label>
      <form onSubmit={send}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder={copy.placeholder} /><button disabled={loading}>{copy.send}</button></form>
      <a className="olivia-kallista-contact" href="#contacto">{copy.contact} →</a>
    </section>}
    <button className="olivia-kallista-launcher" onClick={() => { setOpen(true); void getIdentity().catch(() => undefined); }}><b>O</b><span>{copy.open}</span></button>
  </div>;
}
