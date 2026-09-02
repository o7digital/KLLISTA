import type { Metadata } from "next";
import { DetailPage } from "../../../detail-page";

export const metadata: Metadata = {
  title: "Coffee shop events in Popotla | KALLISTA Café",
  description: "Discover upcoming gatherings, activities, and events at KALLISTA Café in Popotla, Mexico City.",
  alternates: { canonical: "/en/events", languages: { "es-MX": "/eventos", en: "/en/events", "x-default": "/eventos" } },
  openGraph: { url: "/en/events", title: "Events | KALLISTA Café", description: "Gatherings and activities at our coffee shop in Popotla." },
};

export default function EventsPage() { return <DetailPage language="en" kind="events" />; }
