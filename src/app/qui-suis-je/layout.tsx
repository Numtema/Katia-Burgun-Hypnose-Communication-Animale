import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui suis-je | Katia Burgun, Praticienne certifiée en Normandie",
  description: "Découvrez le parcours de Katia Burgun Slessareff, praticienne en hypnose ericksonienne et communication animale en Seine-Maritime (Houdetot).",
  keywords: [
    "Katia Burgun Slessareff", "Katia Burgun", "parcours hypnothérapeute Normandie", 
    "praticienne hypnose Houdetot", "cabinet hypnose Yvetot Dieppe"
  ],
  openGraph: {
    title: "À propos de Katia Burgun",
    description: "Découvrez mon histoire, mes certifications et ma philosophie d'accompagnement.",
    url: "https://www.katiaburgun.com/qui-suis-je",
  }
};

export default function QuiSuisJeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
