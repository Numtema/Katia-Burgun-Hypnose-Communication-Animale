import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { ThemeProvider } from "../context/ThemeContext";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://katia-burgun.fr"),
  title: {
    default: "Katia Burgun | Hypnose Ericksonienne & Communication Animale",
    template: "%s | Katia Burgun"
  },
  description: "Katia Burgun, praticienne en hypnose ericksonienne et communication animale en Normandie. Retrouvez équilibre et bien-être à Houdetot et à distance.",
  keywords: ["hypnose", "communication animale", "Normandie", "Houdetot", "bien-être", "équilibre", "stress", "animaux", "praticienne hypnose Normandie"],
  authors: [{ name: "Katia Burgun" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Katia Burgun | Hypnose & Communication Animale",
    description: "Retrouvez équilibre et bien-être avec l'hypnose ericksonienne et la communication animale en Normandie.",
    url: "https://katia-burgun.fr",
    siteName: "Katia Burgun",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/assets/katia-burgun-hypnotherapeute-normandie.jpeg",
        width: 1200,
        height: 630,
        alt: "Katia Burgun - Hypnose & Communication Animale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katia Burgun | Hypnose & Communication Animale",
    description: "Retrouvez équilibre et bien-être avec l'hypnose ericksonienne et la communication animale en Normandie.",
    images: ["/assets/katia-burgun-hypnotherapeute-normandie.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Katia Burgun | Hypnose & Communication Animale",
    "image": "https://katia-burgun.fr/assets/katia-burgun-hypnotherapeute-normandie.jpeg",
    "@id": "https://katia-burgun.fr",
    "url": "https://katia-burgun.fr",
    "telephone": "0677495288",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 route de Bourville",
      "addressLocality": "Houdetot",
      "postalCode": "76740",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.8000,
      "longitude": 0.8167
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Katia Burgun",
    "url": "https://katia-burgun.fr",
    "jobTitle": "Praticienne en hypnose et communication animale",
    "knowsAbout": [
      "Hypnose ericksonienne",
      "Communication animale",
      "Écoute intuitive",
      "Mieux-être",
      "Formation initiation"
    ],
    "sameAs": [
      "https://www.facebook.com/katiaburgun",
      "https://www.instagram.com/katiaburgun"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Katia Burgun",
    "url": "https://katia-burgun.fr",
    "logo": "https://katia-burgun.fr/assets/katia-burgun-hypnotherapeute-normandie.jpeg"
  }
];

import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body className="antialiased font-body" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <div className="bg-site text-site transition-colors duration-500 min-h-screen selection:bg-[#8ba394]/30">
            <Navigation />
            <main className="relative z-10">{children}</main>
            <ContactSection />
            <Footer />
            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
