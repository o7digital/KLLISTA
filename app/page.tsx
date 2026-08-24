import Image from "next/image";
import { siteData } from "./site-data";

export default function Home() {
  return (
    <main>
      <div className="topline">
        <span>{siteData.opening.label}</span>
        <span className="topline-center">{siteData.opening.area}</span>
        <span>{siteData.opening.schedule}</span>
      </div>

      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="KALLISTA Café, inicio">
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
          {siteData.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#visitanos">
          QUIERO IR <span>↗</span>
        </a>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" /> {siteData.hero.eyebrow}
          </div>
          <h1>
            {siteData.hero.title.map((line, index) => (
              <span key={line}>
                {index === siteData.hero.title.length - 1 ? <em>{line}</em> : line}
                {index < siteData.hero.title.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="hero-intro">{siteData.hero.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#menu">
              {siteData.hero.ctaPrimary} <span>↓</span>
            </a>
            <a className="text-link" href="#visitanos">
              {siteData.hero.ctaSecondary} <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Bebidas y café KALLISTA sobre una mesa">
          <Image
            fill
            priority
            className="hero-image"
            src="/kallista-hero.png"
            alt={siteData.hero.imageAlt}
            sizes="(max-width: 900px) 100vw, 53vw"
          />
          <div className="hero-art-tint" />
          <div className="art-label">
            {siteData.hero.artLabel[0]}
            <br />
            {siteData.hero.artLabel[1]}
            <br />
            {siteData.hero.artLabel[2]}
          </div>
          <div className="round-sticker">
            <span>{siteData.hero.stickerTop}</span>
            <strong>☻</strong>
            <span>{siteData.hero.stickerBottom}</span>
          </div>
          <div className="rating-pill">
            <span>★★★★★</span> {siteData.hero.mood}
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          {[...siteData.ticker, ...siteData.ticker, ...siteData.ticker].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              <span>{item}</span>
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      <section className="menu-section shell" id="menu">
        <div className="section-heading">
          <div>
            <p className="kicker">{siteData.menu.kicker}</p>
            <h2>
              {siteData.menu.title[0]}
              <br />
              <i>{siteData.menu.title[1]}</i>
            </h2>
          </div>
          <p className="section-note">{siteData.menu.note}</p>
        </div>

        <div className="menu-grid">
          {siteData.menu.items.map((item) => (
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
        <p className="mockup-note">{siteData.menu.footnote}</p>
      </section>

      <section className="spot-section" id="experiencia">
        <div className="spot-inner shell">
          <div className="spot-copy">
            <p className="kicker light">{siteData.place.kicker}</p>
            <h2>
              {siteData.place.title[0]}
              <br />
              {siteData.place.title[1]} <i>{siteData.place.title[2]}</i>
            </h2>
            <p>{siteData.place.body}</p>
            <p className="origin-note">{siteData.place.origin}</p>
            <div className="perks">
              {siteData.place.perks.map((perk) => (
                <span key={perk.label}><b aria-hidden="true">{perk.icon}</b>{perk.label}</span>
              ))}
            </div>
          </div>

          <div className="loyalty-card">
            <div className="loyalty-head">
              <span>{siteData.club.brand}</span>
              <small>{siteData.club.subtitle}</small>
            </div>
            <p>{siteData.club.note}</p>
            <div className="stamps">
              <span>☕</span>
              <span>☕</span>
              <span>☕</span>
              <span>☕</span>
              <span>+</span>
              <span>♡</span>
            </div>
            <div className="loyalty-foot">
              <span>{siteData.club.member}</span>
              <strong>{siteData.club.tagline}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="events-section shell" id="eventos">
        <div className="events-heading">
          <p className="kicker">{siteData.events.kicker}</p>
          <h2>
            {siteData.events.title[0]}
            <br />
            <i>{siteData.events.title[1]}</i>
          </h2>
        </div>
        <article className="event-card">
          <div className="event-date" aria-hidden="true">
            <span>✦</span>
            <strong>PRONTO</strong>
          </div>
          <div className="event-copy">
            <p>{siteData.events.status}</p>
            <h3>{siteData.events.title.join(" ")}</h3>
            <span>{siteData.events.description}</span>
          </div>
          <a href="#eventos">{siteData.events.cta} <span>↗</span></a>
        </article>
      </section>

      <section className="visit shell" id="visitanos">
        <div className="visit-copy">
          <p className="kicker">{siteData.visit.kicker}</p>
          <h2>
            {siteData.visit.title[0]}
            <br />
            <i>{siteData.visit.title[1]}</i>
          </h2>
          <p className="address">
            {siteData.visit.area}
            <br />
            {siteData.visit.city}
          </p>
        </div>
        <div className="visit-card">
          <div className="map-cross" aria-hidden="true">
            <span className="road road-a" />
            <span className="road road-b" />
            <span className="road road-c" />
            <span className="map-pin">
              <b>K</b>
            </span>
          </div>
          <div className="visit-details">
            <div>
              <span>{siteData.visit.scheduleLabel}</span>
              <strong>
                {siteData.visit.schedule[0]}
                <br />
                {siteData.visit.schedule[1]}
              </strong>
            </div>
            <a href={siteData.visit.mapsUrl} target="_blank" rel="noreferrer">
              {siteData.visit.mapsLabel} <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p>{siteData.final.instagramHandle}</p>
        <h2>
          {siteData.final.title[0]}
          <br />
          <i>{siteData.final.title[1]}</i>
        </h2>
        <a href={siteData.final.instagramUrl} target="_blank" rel="noreferrer">
          {siteData.final.cta} <span>↗</span>
        </a>
      </section>

      <footer className="footer shell">
        <a className="brand footer-brand" href="#inicio" aria-label="KALLISTA Café, inicio">
          <Image
            className="brand-logo"
            src="/kallista-logo.png"
            alt="KALLISTA Café"
            width={290}
            height={320}
          />
        </a>
        <p>{siteData.footer.line1}</p>
        <p>{siteData.footer.line2}</p>
      </footer>
    </main>
  );
}
