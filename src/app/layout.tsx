import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.discosybrocasdelistmo.com"),
  title: {
    default: "Discos y Brocas del Istmo | Herramientas de Diamante Premium en Panamá",
    template: "%s | Discos y Brocas del Istmo",
  },
  description:
    "Distribuidor autorizado de herramientas de diamante premium en Panamá. Discos de corte, brocas diamantadas, copas de desbaste, equipos de perforación y maquinaria profesional KERN-DEUDIAM. Calidad alemana Made in Germany. Envíos a todo Panamá.",
  keywords: [
    "discos de diamante Panamá",
    "brocas diamantadas",
    "herramientas de corte profesional",
    "equipos de perforación hormigón",
    "cortadora de suelo",
    "KERN-DEUDIAM Panamá",
    "herramientas construcción Panamá",
    "discos corte concreto",
    "brocas perforación húmeda",
    "copas de desbaste",
    "maquinaria construcción",
    "herramientas alemanas Panamá",
    "distribuidor herramientas diamante",
    "corte asfalto",
    "perforación profesional",
  ],
  authors: [{ name: "Discos y Brocas del Istmo" }],
  creator: "Discos y Brocas del Istmo",
  publisher: "Discos y Brocas del Istmo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "https://www.discosybrocasdelistmo.com",
    siteName: "Discos y Brocas del Istmo",
    title: "Discos y Brocas del Istmo | Herramientas de Diamante Premium",
    description:
      "Distribuidor autorizado de herramientas de diamante premium en Panamá. Discos, brocas, copas y maquinaria profesional. Calidad alemana Made in Germany.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Discos y Brocas del Istmo - Herramientas de Diamante Premium en Panamá",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discos y Brocas del Istmo | Herramientas de Diamante Premium",
    description:
      "Distribuidor autorizado de herramientas de diamante premium en Panamá. Calidad alemana.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.discosybrocasdelistmo.com",
  },
  verification: {
    // Agregar cuando tengas los códigos de verificación
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Discos y Brocas del Istmo",
  image: "https://www.discosybrocasdelistmo.com/images/logo-full.png",
  "@id": "https://www.discosybrocasdelistmo.com",
  url: "https://www.discosybrocasdelistmo.com",
  telephone: "+507-6660-4603",
  email: "ventas@discosybrocasdelistmo.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.0192,
    longitude: -79.5195,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [],
  description:
    "Distribuidor autorizado de herramientas de diamante premium en Panamá. Discos de corte, brocas diamantadas y maquinaria profesional KERN-DEUDIAM. Calidad alemana.",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Panamá",
  },
  brand: {
    "@type": "Brand",
    name: "KERN-DEUDIAM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a3a5c" />
        <meta name="geo.region" content="PA" />
        <meta name="geo.placename" content="Ciudad de Panamá" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
