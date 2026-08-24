import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "KALLISTA Café | Popotla, CDMX",
  description: "Café rico, comida y tiempo de calidad en Mar Negro 204, Popotla, CDMX.",
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
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
