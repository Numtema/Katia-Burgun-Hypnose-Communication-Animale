import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hypnose Ericksonienne Houdetot | Proche Saint-Valery-en-Caux, Yvetot, Fécamp",
  description: "Cabinet d'hypnose ericksonienne à Houdetot (Seine-Maritime) & consultations en visio. Séance personnalisée : stress, anxiété, sommeil, phobies, confiance en soi, deuil et arrêt du tabac.",
  keywords: [
    // Recherche locale / géociblée
    "hypnose ericksonienne",
    "hypnothérapeute Houdetot",
    "cabinet hypnose Saint-Valery-en-Caux",
    "hypnose Yvetot",
    "hypnothérapeute Fécamp",
    "hypnose Luneray",
    "hypnothérapeute Doudeville",
    "cabinet hypnose Cany-Barville",
    "hypnothérapeute Dieppe",
    "hypnose Seine-Maritime",
    "hypnothérapeute 76",
    "hypnose Normandie",
    "cabinet hypnothérapie Normandie",
    "hypnose thérapeutique Normandie",
    "hypnologue 76",
    // Recherches par symptômes (Maux)
    "arrêter de fumer hypnose 76",
    "sevrage tabagique hypnose",
    "hypnose troubles du sommeil insomnie",
    "gestion du stress et angoisses",
    "crise d'angoisse hypnose",
    "vaincre phobies hypnose",
    "confiance en soi hypnose",
    "accompagnement deuil et séparation",
    "burnout épuisement professionnel",
    "bruxisme serrer les dents hypnose",
    "soulager acouphènes hypnose",
    "perte de poids grignotage hypnose",
    "gestion des émotions hypnose",
    "hypnothérapeute remboursement mutuelle"
  ],
  openGraph: {
    title: "Hypnose Ericksonienne | Katia Burgun",
    description: "Retrouvez votre calme intérieur et dépassez vos blocages à Houdetot ou à distance.",
    url: "https://www.katiaburgun.com/hypnose",
    images: [
      {
        url: "/assets/hypnose-katia-burgun-houdetot-normandie.png",
        width: 1200,
        height: 630,
        alt: "Cabinet d'hypnose Katia Burgun en Normandie",
      }
    ]
  }
};

export default function HypnoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
