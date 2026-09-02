"use client";

import Script from "next/script";
import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const measurementId = "G-240QGZ90LB";
const storageKey = "kallista-analytics-consent";
const consentEvent = "kallista-consent-change";

type Consent = "accepted" | "rejected" | null;

function getConsentSnapshot(): Consent {
  const saved = window.localStorage.getItem(storageKey);
  return saved === "accepted" || saved === "rejected" ? saved : null;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(consentEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(consentEvent, callback);
  };
}

export default function GoogleAnalytics() {
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, () => null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const english = typeof window !== "undefined" && window.location.pathname.startsWith("/en");

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem(storageKey, value);
    window.dispatchEvent(new Event(consentEvent));
    setSettingsOpen(false);

    if (value === "rejected") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        if (name.startsWith("_ga")) document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      });
    }
  }

  const showBanner = consent === null || settingsOpen;

  return (
    <>
      {consent === "accepted" && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${measurementId}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {showBanner ? (
        <aside className="cookie-consent" role="dialog" aria-label={english ? "Analytics preferences" : "Preferencias de analítica"}>
          <div>
            <strong>{english ? "Your privacy matters" : "Tu privacidad importa"}</strong>
            <p>{english ? "With your permission, we use Google Analytics to understand visits and improve the KALLISTA experience." : "Con tu permiso, usamos Google Analytics para entender las visitas y mejorar la experiencia KALLISTA."} <Link href="/aviso-de-privacidad">{english ? "Privacy notice" : "Aviso de privacidad"}</Link>.</p>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => choose("rejected")}>{english ? "REJECT" : "RECHAZAR"}</button>
            <button className="cookie-accept" type="button" onClick={() => choose("accepted")}>{english ? "ACCEPT" : "ACEPTAR"}</button>
          </div>
        </aside>
      ) : (
        <button className="cookie-settings" type="button" onClick={() => setSettingsOpen(true)}>{english ? "Cookie settings" : "Configurar cookies"}</button>
      )}
    </>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
