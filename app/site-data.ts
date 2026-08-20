export const siteData = {
  opening: {
    label: "PRÓXIMA APERTURA",
    area: "TACUBA · CDMX",
    schedule: "LUN — SÁB",
  },
  navigation: [
    { href: "#menu", label: "MENÚ" },
    { href: "#lugar", label: "LUGAR" },
    { href: "#visitanos", label: "VISÍTANOS" },
  ],
  hero: {
    eyebrow: "CAFÉ DE BARRIO · HECHO PARA TI",
    title: ["TU PAUSA,", "PERO HAZLA", "KALLISTA."],
    intro:
      "Café, matcha y algo rico para ese momento entre clases, tareas y planes. Tu nuevo punto de encuentro en Tacuba.",
    ctaPrimary: "VER EL MENÚ",
    ctaSecondary: "Av. Marina Nacional · Miguel Hidalgo",
    artLabel: ["HECHO", "FRESCO", "CADA DÍA"],
    stickerTop: "NUEVO LUGAR",
    stickerBottom: "EN TACUBA",
    mood: "BUENA VIBRA",
    imageAlt: "Café, bebida rosa y pan dulce en una mesa de KALLISTA",
  },
  ticker: ["CAFÉ", "MATCHA", "PAN DULCE", "WI-FI", "CHISME"],
  menu: {
    kicker: "LO MÁS PEDIDO",
    title: ["ELIGE TU", "ANTOJO."],
    note:
      "Bebidas con personalidad, café bien hecho y combinaciones que sí vas a querer subir a historias.",
    items: [
      {
        number: "01",
        name: "NUBE ROSA",
        detail: "Fresa · leche · espuma fría",
        price: "$72",
        className: "pink",
      },
      {
        number: "02",
        name: "CAFÉ FRÍO KALLISTA",
        detail: "Café de altura · naranja",
        price: "$68",
        className: "coffee",
      },
      {
        number: "03",
        name: "MATCHA LIMÓN",
        detail: "Matcha · limón amarillo",
        price: "$75",
        className: "matcha",
      },
    ],
    footnote: "* Menú y precios ilustrativos para la propuesta visual.",
  },
  place: {
    kicker: "MÁS QUE CAFÉ",
    title: ["UN LUGAR", "PARA", "QUEDARTE."],
    body:
      "Una mesa para estudiar. Un enchufe cuando te queda 3 %. Un café para ponerte al día. KALLISTA es ese lugar que faltaba en el barrio.",
    perks: ["WI-FI RÁPIDO", "ENCHUFES", "ACEPTAMOS MASCOTAS"],
  },
  club: {
    brand: "KALLISTA\nCLUB",
    subtitle: "EL CLUB DEL\nBUEN CAFÉ",
    note: "JUNTA 6 · EL SIGUIENTE VA POR NOSOTRXS",
    member: "MIEMBRO N.º 0001",
    tagline: "LOS BUENOS DÍAS\nEMPIEZAN AQUÍ.",
  },
  visit: {
    kicker: "NOS VEMOS AQUÍ",
    title: ["TACUBA", "TIENE PLAN."],
    area: "Colonia Tacuba · Miguel Hidalgo",
    city: "Ciudad de México",
    scheduleLabel: "HORARIO",
    schedule: ["Lun-Vie · 7:30-20:00", "Sáb · 9:00-18:00"],
    mapsLabel: "ABRIR EN MAPAS",
    mapsUrl: "https://maps.google.com/?q=Tacuba+Miguel+Hidalgo+CDMX",
  },
  final: {
    instagramHandle: "@KALLISTA.CAFE",
    title: ["CAFÉ. AMIGXS.", "OTRA VEZ."],
    cta: "SÍGUENOS EN INSTAGRAM",
    instagramUrl: "https://instagram.com/kallista.cafe",
  },
  footer: {
    line1: "CAFÉ DE BARRIO · TACUBA · CDMX",
    line2: "HECHO CON BUENA VIBRA ☻",
  },
} as const;
