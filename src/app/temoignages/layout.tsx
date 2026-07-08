import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages & Avis Hypnose et Communication Animale | Katia Burgun",
  description: "Découvrez les avis et retours d'expérience des consultants et stagiaires sur les séances d'hypnose et de communication animale en Normandie.",
  keywords: [
    "avis Katia Burgun", "témoignages hypnose Normandie", 
    "avis communication animale Seine-Maritime", "avis formation communication animale"
  ],
  openGraph: {
    title: "Témoignages clients | Katia Burgun",
    description: "Ce que disent mes consultants et stagiaires de mes accompagnements.",
    url: "https://www.katiaburgun.com/temoignages",
  }
};

export default function TemoignagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
