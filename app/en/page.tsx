import type { Metadata } from "next";
import { KallistaPage } from "../page";

export const metadata: Metadata = {
  title: "KALLISTA Café | Coffee Shop in Popotla, Mexico City",
  description: "Specialty coffee, delicious food, and a welcoming place to share at Mar Negro 204, Popotla, Mexico City.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    locale: "en_US",
    url: "/en",
    title: "KALLISTA Café | Coffee Shop in Popotla, Mexico City",
    description: "Specialty coffee, delicious food, and quality time in Popotla, Mexico City.",
  },
  twitter: {
    title: "KALLISTA Café | Coffee Shop in Popotla, Mexico City",
    description: "Specialty coffee, delicious food, and quality time in Popotla, Mexico City.",
  },
};

export default function EnglishHome() {
  return <KallistaPage language="en" />;
}
