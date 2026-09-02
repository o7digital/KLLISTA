import type { Metadata } from "next";
import { DetailPage } from "../../../detail-page";

export const metadata: Metadata = {
  title: "Pet-friendly coffee shop with Wi-Fi in Popotla | KALLISTA",
  description: "A pet-friendly coffee shop with Wi-Fi for working, breakfast, and quality time in Popotla, Mexico City.",
  alternates: { canonical: "/en/experience", languages: { "es-MX": "/experiencia", en: "/en/experience", "x-default": "/experiencia" } },
  openGraph: { url: "/en/experience", title: "The KALLISTA Café experience", description: "Coffee, Wi-Fi, and a pet-friendly space in Popotla." },
};

export default function ExperiencePage() { return <DetailPage language="en" kind="experience" />; }
