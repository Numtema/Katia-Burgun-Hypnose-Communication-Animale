import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communication Animale à distance | Katia Burgun Normandie",
  description: "Séances de communication animale intuitive pour décoder le comportement, les émotions et besoins de vos chiens, chats, chevaux et NAC partout en France.",
  keywords: [
    "communication animale",
    "communication intuitive animaux",
    "télépathie chien chat",
    "comprendre comportement chat",
    "problème comportement chien",
    "relation cavalier cheval",
    "fin de vie animal",
    "deuil animal",
    "interprète animalier",
    "communication animale Normandie",
    "communication animale 76"
  ],
  openGraph: {
    title: "Communication Animale | Katia Burgun",
    description: "Établissez un dialogue d'âme à d'âme avec vos compagnons pour mieux comprendre leurs besoins et renforcer votre lien.",
    url: "https://www.katiaburgun.com/communication-animale",
    images: [
      {
        url: "/assets/chat-katia-burgun.jpeg",
        width: 1200,
        height: 630,
        alt: "Communication Animale Katia Burgun",
      }
    ]
  }
};

export default function CommunicationAnimaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
