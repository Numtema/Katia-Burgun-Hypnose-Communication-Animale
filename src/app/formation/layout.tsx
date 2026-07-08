import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Communication Animale Normandie | Stage d'Initiation 76",
  description: "Participez aux journées de formation et d'initiation à la communication animale à Houdetot (Normandie) près d'Yvetot et Dieppe. Apprenez à écouter vos animaux.",
  keywords: [
    "formation communication animale", "stage communication animale Normandie", 
    "initiation communication animale 76", "apprendre communication animale Rouen", 
    "communication intuitive stage Dieppe", "formation animaux Yvetot", 
    "formation communication animale Fécamp", "stage communication animale Le Havre"
  ],
  openGraph: {
    title: "Formation Initiation Communication Animale | Katia Burgun",
    description: "Développez votre sensibilité et votre écoute intuitive avec les animaux en Normandie.",
    url: "https://www.katiaburgun.com/formation",
  }
};

export default function FormationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
