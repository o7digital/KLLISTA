export const siteDataEn = {
  opening: { label: "OPENING SOON", area: "POPOTLA · MEXICO CITY", schedule: "MON — FRI · 8:00 — 20:00" },
  navigation: [
    { href: "#nosotros", label: "WHO WE ARE" },
    { href: "#menu", label: "MENU" },
    { href: "#experiencia", label: "EXPERIENCE" },
    { href: "#eventos", label: "EVENTS" },
    { href: "#contacto", label: "CONTACT" },
  ],
  navCta: "LET'S GO",
  hero: {
    eyebrow: "KALLISTA CAFÉ · POPOTLA",
    title: ["COME FOR", "THE COFFEE.", "STAY FOR", "THE MOMENT."],
    intro: "Specialty coffee, something delicious, and a pet-friendly place with Wi-Fi to share, work, or enjoy your time in Popotla, CDMX. Welcome to KALLISTA CAFÉ.",
    ctaPrimary: "EXPLORE THE MENU", ctaSecondary: "HOW TO GET HERE",
    artLabel: ["COFFEE", "FRIENDS", "QUALITY TIME"], stickerTop: "MADE WITH", stickerBottom: "CARE",
    mood: "MAKE YOURSELF AT HOME", imageAlt: "Coffee, a refreshing drink, and pastries served at KALLISTA Café",
  },
  ticker: ["COFFEE", "BREAKFAST", "WI-FI", "PET FRIENDLY", "FRIENDS", "EVENTS", "QUALITY TIME"],
  about: {
    kicker: "GET TO KNOW US",
    title: ["WE ARE", "KALLISTA CAFÉ."],
    lead: "A Greek name that celebrates the beauty of everyday moments.",
    body: "The name KALLISTA CAFÉ takes KALLISTA from the Greek κάλλιστα (kállista), a word that expresses doing or living something “in the best and most beautiful way.” We chose it because beauty does not have to be formal: it lives in a well-made coffee, something delicious, a conversation, and time shared together. KALLISTA CAFÉ is our simple promise to care about every detail and turn the everyday into a good moment.",
    signature: "KALLISTA CAFÉ: everyday life, in its most beautiful form.",
    values: ["COFFEE MADE WITH CARE", "FOOD TO ENJOY", "A PLACE FOR EVERYONE"],
  },
  menu: {
    kicker: "SOMETHING DELICIOUS FOR YOU", title: ["CHOOSE YOUR", "CRAVING."],
    note: "Drinks with personality, carefully brewed coffee, and something delicious to make the moment complete.",
    items: [
      { number: "01", name: "PINK CLOUD", detail: "Strawberry · milk · cold foam", price: "$72", className: "sky" },
      { number: "02", name: "KALLISTA CAFÉ ICED COFFEE", detail: "High-altitude coffee · orange", price: "$68", className: "coffee" },
      { number: "03", name: "LEMON MATCHA", detail: "Matcha · yellow lemon", price: "$75", className: "matcha" },
    ],
    footnote: "* Menu, products, and prices are illustrative. Final information coming soon.",
  },
  place: {
    kicker: "QUALITY TIME", title: ["A PLACE TO", "ENJOY", "YOUR TIME"],
    body: "Come to work, have breakfast, share something delicious, meet friends, or take a break in Popotla, CDMX. KALLISTA CAFÉ wants to become the place you always feel like coming back to.",
    origin: "KALLISTA CAFÉ takes its name from the Greek κάλλιστα: doing things in the best and most beautiful way.",
    perks: [
      { icon: "⌁", label: "WI-FI" }, { icon: "♡", label: "PET FRIENDLY" },
      { icon: "✎", label: "WORK FRIENDLY" }, { icon: "☻", label: "A PLACE TO SHARE" },
      { icon: "☕", label: "GREAT COFFEE & FOOD" },
    ],
  },
  events: {
    kicker: "WHERE THE COMMUNITY MEETS", title: ["EVENTS AT", "KALLISTA CAFÉ"], status: "COMING SOON", shortStatus: "SOON",
    description: "We are preparing gatherings where we can share, discover, and have a great time together.", cta: "VIEW UPCOMING EVENTS",
  },
  club: {
    brand: "KALLISTA CAFÉ\nCLUB", subtitle: "A GROWING\nCOMMUNITY", note: "FOR REGULARS · FRIENDS · EVENTS",
    member: "COMING SOON", tagline: "COME FOR THE COFFEE.\nCOME BACK FOR THE PEOPLE.",
  },
  visit: {
    kicker: "LET'S TALK", title: ["GET IN", "TOUCH."], area: "Mar Negro 204, Popotla",
    city: "Miguel Hidalgo, Mexico City", scheduleLabel: "HOURS", schedule: ["Monday to Friday", "8:00 to 20:00"],
    mapsLabel: "OPEN IN MAPS", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mar+Negro+204%2C+Popotla%2C+Miguel+Hidalgo%2C+CDMX",
    mapTitle: "KALLISTA Café location on Google Maps",
    mapEmbedUrl: "https://www.google.com/maps?q=Mar+Negro+204%2C+Popotla%2C+Miguel+Hidalgo%2C+CDMX&output=embed",
    form: {
      name: "NAME", email: "EMAIL", phone: "PHONE (OPTIONAL)", message: "MESSAGE",
      namePlaceholder: "Your name", emailPlaceholder: "you@email.com", phonePlaceholder: "+52 55 0000 0000",
      messagePlaceholder: "How can we help?", submit: "SEND MESSAGE",
    },
  },
  final: {
    instagramHandle: "@KALLISTA.CAFE", title: ["GREAT COFFEE.", "TIME WELL SPENT."],
    cta: "FOLLOW US ON INSTAGRAM", instagramUrl: "https://instagram.com/kallista.cafe",
  },
  footer: { line1: "MAR NEGRO 204 · POPOTLA · MEXICO CITY", line2: "COFFEE · COMMUNITY · QUALITY TIME", privacy: "PRIVACY NOTICE" },
} as const;
