import type { Metadata } from "next";
import { MenuViewer } from "../../../menu-viewer";

export const metadata: Metadata = {
  title: "Coffee and drinks menu | KALLISTA Café Popotla",
  description: "Explore the full KALLISTA Café menu: crêpes, waffles, breakfast, salads, baguettes, coffee, and cold drinks in Popotla.",
  alternates: { canonical: "/en/menu", languages: { "es-MX": "/menu", en: "/en/menu", "x-default": "/menu" } },
  openGraph: { url: "/en/menu", title: "Menu | KALLISTA Café", description: "Specialty coffee, matcha, and drinks in Popotla, Mexico City." },
};

export default function MenuPage() { return <MenuViewer language="en" />; }
