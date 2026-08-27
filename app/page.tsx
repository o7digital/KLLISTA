import Image from "next/image";
import { MobileMenu } from "./mobile-menu";
import { siteData } from "./site-data";
import { siteDataEn } from "./site-data.en";

export function KallistaPage({ language }: { language: "es" | "en" }) {
  const content = language === "en" ? siteDataEn : siteData;
  const alternateLanguage = language === "en" ? "ES" : "EN";
  const alternateHref = language === "en" ? "/" : "/en";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: "KALLISTA Café",
    description: language === "en"
      ? "Specialty coffee, breakfast, matcha, Wi-Fi, and a pet-friendly space in Popotla, CDMX."
      : "Café de especialidad, desayuno, matcha, Wi-Fi y un espacio pet friendly en Popotla, CDMX.",
    image: "https://kallistacafe.com/kallista-hero.png",
    url: "https://kallistacafe.com",
    sameAs: ["https://instagram.com/kallista.cafe"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mar Negro 204",
      addressLocality: "Miguel Hidalgo",
      addressRegion: "Ciudad de México",
      addressCountry: "MX",
    },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    }],
    priceRange: "$$",
  };

  return (
    <main lang={language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <div className="topline">
        <span>{content.opening.label}</span>
        <span className="topline-center">{content.opening.area}</span>
        <span>{content.opening.schedule}</span>
      </div>

      <nav className="nav shell" aria-label={language === "en" ? "Main navigation" : "Navegación principal"}>
        <a className="brand" href="#inicio" aria-label={language === "en" ? "KALLISTA Café, home" : "KALLISTA Café, inicio"}>
          <Image
            className="brand-logo"
            src="/kallista-logo.png"
            alt="KALLISTA Café"
            width={290}
            height={320}
            priority
          />
        </a>
        <div className="nav-links">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="language-switch" href={alternateHref} aria-label={language === "en" ? "Ver sitio en español" : "View site in English"}>{alternateLanguage}</a>
          <a className="nav-cta" href="#contacto">{content.navCta} <span>↗</span></a>
          <MobileMenu items={content.navigation} cta={content.navCta} language={language} />
        </div>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> {content.hero.eyebrow}
          </div>
          <h1>
            {content.hero.title.map((line, index) => (
              <span key={line}>
                {index === content.hero.title.length - 1 ? <em>{line}</em> : line}
                {index < content.hero.title.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero-intro">{content.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">
              {content.hero.ctaPrimary} <span>↓</span>
            </a>
            <a className="text-link" href="#contacto">
              {content.hero.ctaSecondary} <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label={content.hero.imageAlt}>
          <Image
            fill
            priority
            className="hero-image"
            src="/kallista-hero.png"
            alt={content.hero.imageAlt}
            sizes="(max-width: 900px) 100vw, 53vw"
          />
          <div className="hero-art-tint" />
          <div className="art-label">
            {content.hero.artLabel[0]}
            <br />
            {content.hero.artLabel[1]}
            <br />
            {content.hero.artLabel[2]}
          </div>
          <div className="round-sticker">
            <span>{content.hero.stickerTop}</span>
            <strong>☻</strong>
            <span>{content.hero.stickerBottom}</span>
          </div>
          <div className="rating-pill">
            <span>★★★★★</span> {content.hero.mood}
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          {[...content.ticker, ...content.ticker, ...content.ticker].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              <span>{item}</span>
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      <section className="about-section shell" id="nosotros">
        <div className="about-title">
          <p className="kicker">{content.about.kicker}</p>
          <h2>
            {content.about.title[0]}
            <br />
            <i>{content.about.title[1]}</i>
          </h2>
          <span className="about-doodle" aria-hidden="true">⌁ ✦ ⌁</span>
        </div>
        <div className="about-story">
          <p className="about-lead">{content.about.lead}</p>
          <p>{content.about.body}</p>
          <strong>{content.about.signature}</strong>
          <div className="about-values">
            {content.about.values.map((value, index) => (
              <span key={value}><b>0{index + 1}</b>{value}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="menu-section shell" id="menu">
        <div className="section-heading">
          <div>
            <p className="kicker">{content.menu.kicker}</p>
            <h2>
              {content.menu.title[0]}
              <br />
              <i>{content.menu.title[1]}</i>
            </h2>
          </div>
          <p className="section-note">{content.menu.note}</p>
        </div>

        <div className="menu-grid">
          {content.menu.items.map((item) => (
            <article className={`menu-card ${item.className}`} key={item.name}>
              <div className="menu-top">
                <span>{item.number}</span>
                <span className="menu-plus">+</span>
              </div>
              <div className="drink" aria-hidden="true">
                <div className="cup-lid" />
                <div className="cup-body">
                  <span>K</span>
                </div>
              </div>
              <div className="menu-info">
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="mockup-note">{content.menu.footnote}</p>
      </section>

      <section className="spot-section" id="experiencia">
        <div className="spot-inner shell">
          <div className="spot-copy">
            <p className="kicker light">{content.place.kicker}</p>
            <h2>
              {content.place.title[0]}
              <br />
              {content.place.title[1]} <i>{content.place.title[2]}</i>
            </h2>
            <p>{content.place.body}</p>
            <p className="origin-note">{content.place.origin}</p>
            <div className="perks">
              {content.place.perks.map((perk) => (
                <span key={perk.label}><b aria-hidden="true">{perk.icon}</b>{perk.label}</span>
              ))}
            </div>
          </div>

          <div className="loyalty-card">
            <div className="loyalty-head">
              <span>{content.club.brand}</span>
              <small>{content.club.subtitle}</small>
            </div>
            <p>{content.club.note}</p>
            <div className="stamps">
              <span>☕</span>
              <span>☕</span>
              <span>☕</span>
              <span>☕</span>
              <span>+</span>
              <span>♡</span>
            </div>
            <div className="loyalty-foot">
              <span>{content.club.member}</span>
              <strong>{content.club.tagline}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section shell" id="eventos">
        <div className="events-heading">
          <p className="kicker">{content.events.kicker}</p>
          <h2>
            {content.events.title[0]}
            <br />
            <i>{content.events.title[1]}</i>
          </h2>
        </div>
        <article className="event-card">
          <div className="event-date" aria-hidden="true">
            <span>✦</span>
            <strong>{content.events.shortStatus}</strong>
          </div>
          <div className="event-copy">
            <p>{content.events.status}</p>
            <h3>{content.events.title.join(" ")}</h3>
            <span>{content.events.description}</span>
          </div>
          <a href="#eventos">{content.events.cta} <span>↗</span></a>
        </article>
      </section>

      <section className="visit shell" id="contacto">
        <div className="visit-copy">
          <p className="kicker">{content.visit.kicker}</p>
          <h2>
            {content.visit.title[0]}
            <br />
            <i>{content.visit.title[1]}</i>
          </h2>
          <p className="address">
            {content.visit.area}
            <br />
            {content.visit.city}
          </p>
        </div>
        <div className="contact-content">
          <form className="contact-form" action="https://formspree.io/f/mrpgzqjp" method="POST">
            <div className="contact-field">
              <label htmlFor={`${language}-name`}>{content.visit.form.name}</label>
              <input id={`${language}-name`} name="name" type="text" placeholder={content.visit.form.namePlaceholder} autoComplete="name" required />
            </div>
            <div className="contact-fields-row">
              <div className="contact-field">
                <label htmlFor={`${language}-email`}>{content.visit.form.email}</label>
                <input id={`${language}-email`} name="email" type="email" placeholder={content.visit.form.emailPlaceholder} autoComplete="email" required />
              </div>
              <div className="contact-field">
                <label htmlFor={`${language}-phone`}>{content.visit.form.phone}</label>
                <input id={`${language}-phone`} name="phone" type="tel" placeholder={content.visit.form.phonePlaceholder} autoComplete="tel" />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor={`${language}-message`}>{content.visit.form.message}</label>
              <textarea id={`${language}-message`} name="message" placeholder={content.visit.form.messagePlaceholder} rows={5} required />
            </div>
            <button type="submit">{content.visit.form.submit} <span>↗</span></button>
          </form>

          <div className="visit-card">
            <iframe
              className="google-map"
              src={content.visit.mapEmbedUrl}
              title={content.visit.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="visit-details">
              <div>
                <span>{content.visit.scheduleLabel}</span>
                <strong>
                  {content.visit.schedule[0]}
                  <br />
                  {content.visit.schedule[1]}
                </strong>
              </div>
              <a href={content.visit.mapsUrl} target="_blank" rel="noreferrer">
                {content.visit.mapsLabel} <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section shell" id="preguntas-frecuentes">
        <div className="faq-heading">
          <p className="kicker">{content.faq.kicker}</p>
          <h2>
            {content.faq.title[0]}
            <br />
            <i>{content.faq.title[1]}</i>
          </h2>
        </div>
        <div className="faq-list">
          {content.faq.items.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p>{content.final.instagramHandle}</p>
        <h2>
          {content.final.title[0]}
          <br />
          <i>{content.final.title[1]}</i>
        </h2>
        <a href={content.final.instagramUrl} target="_blank" rel="noreferrer">
          {content.final.cta} <span>↗</span>
        </a>
      </section>

      <footer className="footer shell">
        <a className="brand footer-brand" href="#inicio" aria-label={language === "en" ? "KALLISTA Café, home" : "KALLISTA Café, inicio"}>
          <Image
            className="brand-logo"
            src="/kallista-logo.png"
            alt="KALLISTA Café"
            width={290}
            height={320}
          />
        </a>
        <p>{content.footer.line1}</p>
        <p>{content.footer.line2}</p>
        <a className="privacy-link" href="/aviso-de-privacidad">{content.footer.privacy}</a>
      </footer>
    </main>
  );
}

export default function Home() {
  return <KallistaPage language="es" />;
}
