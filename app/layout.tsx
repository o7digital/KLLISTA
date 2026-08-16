import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KLLISTA Café Tacuba",
  description: "Café, matcha y algo rico en el corazón de Tacuba, CDMX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
