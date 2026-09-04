import Image from "next/image";
import Link from "next/link";
import { MenuPhotoSlider } from "./menu-photo-slider";
import { siteData } from "./site-data";
import { siteDataEn } from "./site-data.en";

type DetailKind = "menu" | "experience" | "events";

const copy = {
  es: {
    back: "VOLVER AL INICIO", visit: "VISÍTANOS EN POPOTLA",
    menu: { kicker: "CAFÉ Y ALGO RICO", title: "Menú de KALLISTA Café", intro: "Descubre bebidas con personalidad, café de especialidad y opciones pensadas para acompañar desayunos, reuniones y pausas en Popotla.", body: "Nuestro menú final estará disponible próximamente. Mientras tanto, conoce una muestra de las bebidas que estamos preparando con ingredientes seleccionados y atención a cada detalle." },
    experience: { kicker: "TIEMPO DE CALIDAD", title: "Una cafetería para disfrutar Popotla", intro: "KALLISTA Café es un espacio pet friendly con Wi-Fi para trabajar, desayunar, reunirte con amigos o simplemente hacer una pausa.", body: "Queremos que cada visita se sienta cercana y cómoda: café bien hecho, comida rica y un ambiente pensado para quedarse. Nos encontrarás en Mar Negro 204, Popotla, Miguel Hidalgo, CDMX." },
    events: { kicker: "COMUNIDAD KALLISTA", title: "Eventos en KALLISTA Café", intro: "Estamos preparando encuentros, actividades y experiencias para compartir en nuestra cafetería de Popotla.", body: "Publicaremos aquí las próximas fechas, horarios y formas de registro. También puedes seguir a @kallista.cafe en Instagram para enterarte de las novedades." },
  },
  en: {
    back: "BACK TO HOME", visit: "VISIT US IN POPOTLA",
    menu: { kicker: "COFFEE AND SOMETHING DELICIOUS", title: "KALLISTA Café menu", intro: "Discover signature drinks, specialty coffee, and options created for breakfast, meetings, and relaxed breaks in Popotla.", body: "Our final menu is coming soon. In the meantime, explore a sample of the drinks we are preparing with selected ingredients and careful attention to every detail." },
    experience: { kicker: "QUALITY TIME", title: "A coffee shop made for enjoying Popotla", intro: "KALLISTA Café is a pet-friendly space with Wi-Fi where you can work, enjoy breakfast, meet friends, or simply take a break.", body: "We want every visit to feel warm and comfortable: carefully brewed coffee, delicious food, and a place made for staying. Find us at Mar Negro 204, Popotla, Miguel Hidalgo, Mexico City." },
    events: { kicker: "KALLISTA COMMUNITY", title: "Events at KALLISTA Café", intro: "We are preparing gatherings, activities, and shared experiences at our coffee shop in Popotla.", body: "Upcoming dates, times, and registration details will be published here. Follow @kallista.cafe on Instagram for the latest news." },
  },
} as const;

export function DetailPage({ language, kind }: { language: "es" | "en"; kind: DetailKind }) {
  const text = copy[language];
  const page = text[kind];
  const data = language === "en" ? siteDataEn : siteData;
  const home = language === "en" ? "/en" : "/";

  return (
    <main className="detail-page">
      <nav className="detail-nav shell" aria-label={language === "en" ? "Secondary navigation" : "Navegación secundaria"}>
        <Link href={home} className="brand" aria-label="KALLISTA Café">
          <Image className="brand-logo" src="/kallista-logo.png" alt="KALLISTA Café" width={290} height={320} priority />
        </Link>
        <Link href={home}>{text.back} ←</Link>
      </nav>
      <header className="detail-hero shell">
        <p className="kicker">{page.kicker}</p>
        <h1>{page.title}</h1>
        <p className="detail-lead">{page.intro}</p>
      </header>
      <section className="detail-content shell">
        <p>{page.body}</p>
        {kind === "menu" && <MenuPhotoSlider
          label={data.menu.sliderLabel}
          imageAlt={data.menu.imageAlt}
          previousLabel={data.menu.previousLabel}
          nextLabel={data.menu.nextLabel}
        />}
        {kind === "experience" && <div className="detail-features">{data.place.perks.map((perk) => <span key={perk.label}><b aria-hidden="true">{perk.icon}</b>{perk.label}</span>)}</div>}
        {kind === "events" && <div className="detail-notice"><strong>{data.events.status}</strong><p>{data.events.description}</p></div>}
        <Link className="button button-dark detail-button" href={`${home}#contacto`}>{text.visit} ↗</Link>
      </section>
    </main>
  );
}
