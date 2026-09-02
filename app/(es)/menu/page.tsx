import type { Metadata } from "next";
import { DetailPage } from "../../detail-page";

export const metadata: Metadata = {
  title: "Menú de café y bebidas | KALLISTA Café Popotla",
  description: "Conoce el menú de café de especialidad, matcha y bebidas de KALLISTA Café en Popotla, CDMX.",
  alternates: { canonical: "/menu", languages: { "es-MX": "/menu", en: "/en/menu", "x-default": "/menu" } },
  openGraph: { url: "/menu", title: "Menú | KALLISTA Café", description: "Café de especialidad, matcha y bebidas en Popotla, CDMX." },
};

export default function MenuPage() { return <DetailPage language="es" kind="menu" />; }
