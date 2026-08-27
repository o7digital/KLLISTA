import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kallistacafe.com"),
  title: "KALLISTA Café | Café en Popotla, CDMX",
  description: "Café de especialidad, comida rica y un espacio para compartir en Mar Negro 204, Popotla, CDMX. Conoce KALLISTA Café.",
  keywords: [
    "KALLISTA Café CDMX",
    "café en Popotla CDMX",
    "cafetería en Popotla CDMX",
    "café en Miguel Hidalgo CDMX",
    "cafetería en Miguel Hidalgo CDMX",
    "café de especialidad CDMX",
    "café pet friendly CDMX",
    "café con Wi-Fi CDMX",
    "café para trabajar CDMX",
    "desayuno en Popotla CDMX",
    "matcha en CDMX",
    "eventos en cafetería CDMX",
  ],
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: "/",
    siteName: "KALLISTA Café",
    title: "KALLISTA Café | Café en Popotla, CDMX",
    description: "Café de especialidad, comida rica y tiempo de calidad en Popotla, CDMX.",
    images: [{ url: "/kallista-hero.png", width: 1672, height: 941, alt: "Café y pan dulce en KALLISTA Café" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KALLISTA Café | Café en Popotla, CDMX",
    description: "Café de especialidad, comida rica y tiempo de calidad en Popotla, CDMX.",
    images: ["/kallista-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
