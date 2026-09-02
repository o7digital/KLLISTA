import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "../globals.css";
import OliviaWidget from "../olivia-widget";
import GoogleAnalytics from "../google-analytics";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kallistacafe.com"),
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        {children}
        <GoogleAnalytics />
        <OliviaWidget />
      </body>
    </html>
  );
}
