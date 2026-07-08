import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs Hypnose & Communication Animale | Katia Burgun 76",
  description: "Découvrez les tarifs clairs des consultations d'hypnose, communication animale et formations à Houdetot (Seine-Maritime) et à distance. Mutuelles acceptées.",
  keywords: [
    "tarifs hypnose Seine-Maritime", "prix communication animale", "tarif hypnothérapeute Houdetot", 
    "remboursement hypnose mutuelle 76", "tarif formation communication animale"
  ],
  openGraph: {
    title: "Tarifs et Modalités | Katia Burgun",
    description: "Des tarifs clairs et transparents pour chaque type d'accompagnement.",
    url: "https://www.katiaburgun.com/tarifs",
  }
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
