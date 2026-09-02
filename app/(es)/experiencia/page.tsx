import type { Metadata } from "next";
import { DetailPage } from "../../detail-page";

export const metadata: Metadata = {
  title: "Café pet friendly con Wi-Fi en Popotla | KALLISTA",
  description: "Un café pet friendly con Wi-Fi para trabajar, desayunar y compartir en Mar Negro 204, Popotla, CDMX.",
  alternates: { canonical: "/experiencia", languages: { "es-MX": "/experiencia", en: "/en/experience", "x-default": "/experiencia" } },
  openGraph: { url: "/experiencia", title: "La experiencia KALLISTA Café", description: "Café, Wi-Fi y un espacio pet friendly en Popotla." },
};

export default function ExperiencePage() { return <DetailPage language="es" kind="experience" />; }
