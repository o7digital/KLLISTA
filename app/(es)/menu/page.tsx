import type { Metadata } from "next";
import { MenuViewer } from "../../menu-viewer";

export const metadata: Metadata = {
  title: "Menú de café y bebidas | KALLISTA Café Popotla",
  description: "Consulta el menú completo de KALLISTA Café: crepas, waffles, desayunos, ensaladas, baguettes, café y bebidas en Popotla, CDMX.",
  alternates: { canonical: "/menu", languages: { "es-MX": "/menu", en: "/en/menu", "x-default": "/menu" } },
  openGraph: { url: "/menu", title: "Menú completo | KALLISTA Café", description: "Crepas, waffles, desayunos, café y bebidas en Popotla, CDMX." },
};

export default function MenuPage() { return <MenuViewer language="es" />; }
