import type { Metadata } from "next";
import { Sora, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SMG — Bueno, Rico y Barato | Distribución de Golosinas, Los Lagos",
  description:
    "Distribución de golosinas y snacks en la Región de Los Lagos. Frutillar, Llanquihue, Puerto Varas, Puerto Montt y Carretera Austral hasta Hornopirén. Autoventa directa, precios competitivos, variedad garantizada.",
  keywords: [
    "golosinas",
    "snacks",
    "distribución",
    "Los Lagos",
    "Chile",
    "Carretera Austral",
    "mayorista",
    "kiosco",
    "minimarket",
    "Trento",
    "Kryzpo",
    "SMG",
  ],
  openGraph: {
    title: "SMG Distribuciones — Bueno, Rico y Barato",
    description:
      "Distribución directa de golosinas y snacks en la Región de Los Lagos.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
