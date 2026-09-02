import type { Metadata } from "next";
import { DetailPage } from "../../../detail-page";

export const metadata: Metadata = {
  title: "Coffee and drinks menu | KALLISTA Café Popotla",
  description: "Explore specialty coffee, matcha, and signature drinks at KALLISTA Café in Popotla, Mexico City.",
  alternates: { canonical: "/en/menu", languages: { "es-MX": "/menu", en: "/en/menu", "x-default": "/menu" } },
  openGraph: { url: "/en/menu", title: "Menu | KALLISTA Café", description: "Specialty coffee, matcha, and drinks in Popotla, Mexico City." },
};

export default function MenuPage() { return <DetailPage language="en" kind="menu" />; }
