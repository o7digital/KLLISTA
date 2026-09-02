import type { Metadata } from "next";
import { DetailPage } from "../../detail-page";

export const metadata: Metadata = {
  title: "Eventos en cafetería en Popotla | KALLISTA Café",
  description: "Consulta próximos encuentros, actividades y eventos de KALLISTA Café en Popotla, CDMX.",
  alternates: { canonical: "/eventos", languages: { "es-MX": "/eventos", en: "/en/events", "x-default": "/eventos" } },
  openGraph: { url: "/eventos", title: "Eventos | KALLISTA Café", description: "Encuentros y actividades en nuestra cafetería de Popotla." },
};

export default function EventsPage() { return <DetailPage language="es" kind="events" />; }
