import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://kallistacafe.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: { es: "https://kallistacafe.com", en: "https://kallistacafe.com/en" } },
    },
    {
      url: "https://kallistacafe.com/en",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { es: "https://kallistacafe.com", en: "https://kallistacafe.com/en" } },
    },
    {
      url: "https://kallistacafe.com/aviso-de-privacidad",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
