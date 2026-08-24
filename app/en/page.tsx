import type { Metadata } from "next";
import { KallistaPage } from "../page";

export const metadata: Metadata = {
  title: "KALLISTA Café | Popotla, Mexico City",
  description: "Great coffee, food, and quality time at Mar Negro 204, Popotla, Mexico City.",
  alternates: {
    canonical: "/en",
    languages: { es: "/", en: "/en" },
  },
};

export default function EnglishHome() {
  return <KallistaPage language="en" />;
}
