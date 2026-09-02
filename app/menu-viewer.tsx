import Image from "next/image";
import Link from "next/link";

const pages = [
  { id: "crepas", image: "/menu-kallista-01.webp", es: "Crepas", en: "Crêpes" },
  { id: "comida", image: "/menu-kallista-02.webp", es: "Comida", en: "Food" },
  { id: "bebidas", image: "/menu-kallista-03.webp", es: "Bebidas", en: "Drinks" },
  { id: "pequenos", image: "/menu-kallista-04.webp", es: "Pequeños exploradores", en: "Kids" },
] as const;

export function MenuViewer({ language }: { language: "es" | "en" }) {
  const english = language === "en";
  const home = english ? "/en" : "/";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: english ? "KALLISTA Café menu" : "Menú de KALLISTA Café",
    url: english ? "https://www.kallistacafe.com/en/menu" : "https://www.kallistacafe.com/menu",
    hasMenuSection: pages.map((page) => ({ "@type": "MenuSection", name: page[language] })),
  };

  return (
    <main className="menu-viewer-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="detail-nav shell" aria-label={english ? "Menu navigation" : "Navegación del menú"}>
        <Link href={home} className="menu-wordmark">KALLISTA CAFÉ</Link>
        <Link href={home}>{english ? "BACK TO HOME" : "VOLVER AL INICIO"} ←</Link>
      </nav>

      <header className="menu-viewer-hero shell">
        <div>
          <p className="kicker">{english ? "COFFEE, FOOD & GOOD TIMES" : "CAFÉ, COMIDA Y BUENOS MOMENTOS"}</p>
          <h1>{english ? "The KALLISTA menu." : "El menú KALLISTA."}</h1>
        </div>
        <div className="menu-viewer-intro">
          <p>{english ? "Explore our crêpes, breakfast dishes, salads, baguettes, coffee, cold drinks, and kids’ favorites." : "Explora nuestras crepas, desayunos, ensaladas, baguettes, café, bebidas frías y opciones para pequeños exploradores."}</p>
          <div className="menu-document-actions">
            <a className="button button-dark" href="/menu-kallista.pdf" target="_blank" rel="noreferrer">{english ? "OPEN FULL MENU" : "VER MENÚ COMPLETO"} ↗</a>
            <a className="menu-download" href="/menu-kallista.pdf" download>{english ? "Download PDF ↓" : "Descargar PDF ↓"}</a>
          </div>
        </div>
      </header>

      <div className="menu-category-bar" aria-label={english ? "Menu categories" : "Categorías del menú"}>
        <div className="shell">{pages.map((page, index) => <a href={`#${page.id}`} key={page.id}><span>0{index + 1}</span>{page[language]}</a>)}</div>
      </div>

      <section className="menu-pages shell" aria-label={english ? "Full menu pages" : "Páginas del menú completo"}>
        {pages.map((page, index) => (
          <article id={page.id} className="menu-page-card" key={page.id}>
            <div className="menu-page-label"><span>0{index + 1}</span><h2>{page[language]}</h2><a href="/menu-kallista.pdf" target="_blank" rel="noreferrer" aria-label={`${english ? "Open" : "Abrir"} ${page[language]}`}>↗</a></div>
            <Image src={page.image} alt={`${english ? "KALLISTA Café menu page" : "Página del menú de KALLISTA Café"}: ${page[language]}`} width={1241} height={1755} priority={index === 0} sizes="(max-width: 800px) 100vw, 760px" />
          </article>
        ))}
      </section>

      <aside className="menu-allergy shell">✦ {english ? "If you have a food allergy, please tell your server before ordering." : "En caso de alergia a algún alimento, avisa a tu mesero antes de ordenar."}</aside>
    </main>
  );
}
