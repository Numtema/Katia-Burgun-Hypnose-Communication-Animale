"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { PrimaryButton, SectionBadge } from '../../components/UI';
import Script from 'next/script';
import { Hero } from '../../components/communication-animale/Hero';
import { Definition, Mirror, Applications, Species, Philosophy } from '../../components/communication-animale/Sections';
import { Benefits } from '../../components/communication-animale/Benefits';
import { Process } from '../../components/communication-animale/Process';
import { FAQ } from '../../components/communication-animale/FAQ';
import BreadcrumbsJsonLd from '../../components/BreadcrumbsJsonLd';

const commImg = "/assets/chat-katia-burgun.jpeg";

const faqs = [
  { 
    q: "La communication animale peut-elle remplacer un vétérinaire ?", 
    a: "Non. La communication animale est une approche complémentaire. Elle ne remplace jamais un avis, un diagnostic ou un traitement vétérinaire." 
  },
  { 
    q: "Peut-on faire une communication animale à distance ?", 
    a: "Oui. La consultation se fait à distance partout dans le monde à partir d’une photo et des informations que vous me transmettez." 
  },
  { 
    q: "Avec quels animaux peut-on faire une communication animale ?", 
    a: "Je peux communiquer avec tous les animaux : chiens, chats, chevaux, NAC, oiseaux, lapins, reptiles et autres compagnons." 
  },
  { 
    q: "Que puis-je demander pendant une séance ?", 
    a: "Vous pouvez poser des questions sur son comportement, son bien-être, ses émotions, son adaptation, ses réactions, votre lien avec lui ou une situation précise que vous traversez ensemble." 
  },
  { 
    q: "La communication animale peut-elle aider pour un animal perdu ?", 
    a: "Elle peut être tentée dans ce contexte pour recueillir des perceptions ou indices, sans garantie de résultat." 
  },
  { 
    q: "Combien de temps dure une consultation ?", 
    a: "La consultation comprend un temps de connexion, une restitution et un échange. Le format exact peut varier selon la situation et les besoins." 
  },
  { 
    q: "Est-ce possible pour un animal en fin de vie ?", 
    a: "Oui. C’est même une demande fréquente, lorsque la relation a besoin d’être accompagnée avec douceur dans un moment délicat. Il est également possible de communiquer avec un animal décédé." 
  }
];

export default function CommunicationAnimale() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <BreadcrumbsJsonLd 
        items={[
          { name: "Accueil", item: "/" },
          { name: "Communication Animale", item: "/communication-animale" }
        ]} 
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>

      <Hero image={commImg} />
      <Definition />
      <Benefits />
      <Mirror />
      <Applications />
      <Species />
      <Process />
      <Philosophy />
      <FAQ items={faqs} />

      {/* Final CTA Section */}
      <section className="py-32 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Rendez-vous</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Offrez à votre animal un espace pour <span className="text-[#8ba394]">être entendu</span></h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Si vous ressentez le besoin de mieux comprendre votre animal, je vous accompagne dans cette rencontre sensible, profonde et respectueuse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="/prendre-rendez-vous">Réserver une consultation</PrimaryButton>
             <Link href="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">Voir les tarifs</Link>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-16 pb-16 mx-auto max-w-4xl text-center">
         <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] flex flex-col sm:flex-row items-center gap-6 text-left opacity-80">
            <ShieldCheck className="h-8 w-8 text-[#8ba394] shrink-0" />
            <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">
              <strong>Disclaimer :</strong> La communication animale est une approche complémentaire de mieux-être. Elle ne se substitue en aucun cas à un avis, un diagnostic ou un traitement vétérinaire professionnel.
            </p>
         </div>
      </div>
    </div>
  );
}
