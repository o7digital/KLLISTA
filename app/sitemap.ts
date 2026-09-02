import type { MetadataRoute } from "next";

const origin = "https://www.kallistacafe.com";
const lastModified = new Date("2026-09-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const bilingualPages = [
    { es: "", en: "/en", priority: 1 },
    { es: "/menu", en: "/en/menu", priority: 0.9 },
    { es: "/experiencia", en: "/en/experience", priority: 0.8 },
    { es: "/eventos", en: "/en/events", priority: 0.8 },
  ];

  return [
    ...bilingualPages.flatMap(({ es, en, priority }) => {
      const languages = { "es-MX": `${origin}${es}`, en: `${origin}${en}`, "x-default": `${origin}${es}` };
      return [
        { url: `${origin}${es}`, lastModified, changeFrequency: "monthly" as const, priority, alternates: { languages } },
        { url: `${origin}${en}`, lastModified, changeFrequency: "monthly" as const, priority: priority - 0.1, alternates: { languages } },
      ];
    }),
    {
      url: `${origin}/aviso-de-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
