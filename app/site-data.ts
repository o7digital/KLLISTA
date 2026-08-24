export const siteData = {
  opening: { label: "PRÓXIMA APERTURA", area: "POPOTLA · CDMX", schedule: "LUN — VIE · 8:00 — 20:00" },
  navigation: [
    { href: "#nosotros", label: "QUIÉNES SOMOS" },
    { href: "#menu", label: "MENÚ" },
    { href: "#experiencia", label: "EXPERIENCIA" },
    { href: "#eventos", label: "EVENTOS" },
    { href: "#visitanos", label: "VISÍTANOS" },
  ],
  navCta: "QUIERO IR",
  hero: {
    eyebrow: "KALLISTA CAFÉ · POPOTLA",
    title: ["VEN POR", "EL CAFÉ.", "QUÉDATE POR", "EL MOMENTO."],
    intro: "Café rico, algo delicioso y un lugar para compartir, trabajar o simplemente disfrutar tu tiempo. Bienvenido a KALLISTA CAFÉ.",
    ctaPrimary: "CONOCE EL MENÚ", ctaSecondary: "CÓMO LLEGAR",
    artLabel: ["CAFÉ", "AMIGOS", "TIEMPO DE CALIDAD"], stickerTop: "HECHO CON", stickerBottom: "CARIÑO",
    mood: "SIÉNTETE EN CASA", imageAlt: "Café, bebida y pan dulce servidos en una mesa de KALLISTA Café",
  },
  ticker: ["CAFÉ", "DESAYUNO", "WI-FI", "PET FRIENDLY", "AMIGOS", "EVENTOS", "TIEMPO DE CALIDAD"],
  about: {
    kicker: "CONÓCENOS",
    title: ["SOMOS", "KALLISTA CAFÉ."],
    lead: "Un nombre griego para celebrar la belleza de los momentos cotidianos.",
    body: "El nombre KALLISTA CAFÉ toma KALLISTA del griego κάλλιστα (kállista), una palabra que expresa hacer o vivir algo «de la mejor y más bella manera». Elegimos este nombre porque creemos que la belleza no tiene que ser solemne: aparece en un café bien hecho, algo rico, una conversación y el tiempo compartido. KALLISTA CAFÉ es nuestra promesa de cuidar cada detalle para convertir lo cotidiano en un buen momento.",
    signature: "KALLISTA CAFÉ: lo cotidiano, de la manera más bella.",
    values: ["CAFÉ CON CARIÑO", "COMIDA PARA DISFRUTAR", "ESPACIO PARA TODXS"],
  },
  menu: {
    kicker: "ALGO RICO PARA TI", title: ["ELIGE TU", "ANTOJO."],
    note: "Bebidas con personalidad, café bien hecho y algo delicioso para acompañar tu momento.",
    items: [
      { number: "01", name: "NUBE ROSA", detail: "Fresa · leche · espuma fría", price: "$72", className: "sky" },
      { number: "02", name: "CAFÉ FRÍO DE KALLISTA CAFÉ", detail: "Café de altura · naranja", price: "$68", className: "coffee" },
      { number: "03", name: "MATCHA LIMÓN", detail: "Matcha · limón amarillo", price: "$75", className: "matcha" },
    ],
    footnote: "* Menú, productos y precios ilustrativos. Información final próximamente.",
  },
  place: {
    kicker: "TIEMPO DE CALIDAD", title: ["UN LUGAR PARA", "DISFRUTAR", "TU TIEMPO"],
    body: "Ven a trabajar, compartir algo rico, encontrarte con amigos o hacer una pausa. KALLISTA CAFÉ quiere convertirse en ese lugar al que siempre tienes ganas de volver.",
    origin: "KALLISTA CAFÉ toma su nombre del griego κάλλιστα: hacer las cosas de la mejor y más bella manera.",
    perks: [
      { icon: "⌁", label: "WI-FI" },
      { icon: "♡", label: "PET FRIENDLY" },
      { icon: "✎", label: "PARA TRABAJAR" },
      { icon: "☻", label: "PARA COMPARTIR" },
      { icon: "☕", label: "CAFÉ Y COMIDA RICA" },
    ],
  },
  events: {
    kicker: "LA COMUNIDAD SE ENCUENTRA", title: ["EVENTOS EN", "KALLISTA CAFÉ"], status: "PRÓXIMAMENTE", shortStatus: "PRONTO",
    description: "Estamos preparando encuentros para compartir, descubrir y pasarla bien juntos.", cta: "VER PRÓXIMOS EVENTOS",
  },
  club: {
    brand: "KALLISTA CAFÉ\nCLUB", subtitle: "UNA COMUNIDAD\nQUE CRECE",
    note: "PARA CLIENTES FRECUENTES · AMIGOS · EVENTOS", member: "PRÓXIMAMENTE",
    tagline: "VEN POR EL CAFÉ.\nVUELVE POR LA GENTE.",
  },
  visit: {
    kicker: "NOS VEMOS AQUÍ", title: ["POPOTLA", "TIENE PLAN."], area: "Mar Negro 204, Popotla",
    city: "Miguel Hidalgo, CDMX", scheduleLabel: "HORARIO", schedule: ["Lunes a viernes", "8:00 a 20:00"],
    mapsLabel: "ABRIR EN MAPAS", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mar+Negro+204%2C+Popotla%2C+Miguel+Hidalgo%2C+CDMX",
  },
  final: {
    instagramHandle: "@KALLISTA.CAFE", title: ["CAFÉ RICO.", "TIEMPO BIEN VIVIDO."],
    cta: "SÍGUENOS EN INSTAGRAM", instagramUrl: "https://instagram.com/kallista.cafe",
  },
  footer: { line1: "MAR NEGRO 204 · POPOTLA · CDMX", line2: "CAFÉ · COMUNIDAD · TIEMPO DE CALIDAD", privacy: "AVISO DE PRIVACIDAD" },
} as const;
