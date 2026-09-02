import type { Metadata } from "next";
import { KallistaPage } from "../../kallista-page";

export const metadata: Metadata = {
  title: "KALLISTA Café | Coffee Shop in Popotla, CDMX",
  description: "Specialty coffee, breakfast, matcha, Wi-Fi, and a pet-friendly place at Mar Negro 204, Popotla, CDMX.",
  keywords: [
    "KALLISTA Café CDMX",
    "coffee shop Popotla CDMX",
    "coffee shop Miguel Hidalgo CDMX",
    "specialty coffee CDMX",
    "pet-friendly coffee shop CDMX",
    "coffee shop with Wi-Fi CDMX",
    "coffee shop to work from CDMX",
    "breakfast in Popotla CDMX",
    "matcha in CDMX",
    "coffee shop events CDMX",
  ],
  alternates: {
    canonical: "/en",
    languages: { "es-MX": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    locale: "en_US",
    url: "/en",
    title: "KALLISTA Café | Coffee Shop in Popotla, CDMX",
    description: "Specialty coffee, delicious food, and quality time in Popotla, CDMX.",
  },
  twitter: {
    title: "KALLISTA Café | Coffee Shop in Popotla, CDMX",
    description: "Specialty coffee, delicious food, and quality time in Popotla, CDMX.",
  },
};

export default function EnglishHome() {
  return <KallistaPage language="en" />;
}
