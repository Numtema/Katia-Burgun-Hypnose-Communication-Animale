"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { PrimaryButton, SectionBadge } from '../../components/UI';
import Script from 'next/script';
import { Hero, Intro } from '../../components/hypnose/HeroIntro';
import { Applications, Approach } from '../../components/hypnose/ApplicationsApproach';
import { Process, Pricing, PracticalInfo } from '../../components/hypnose/Details';
import { FAQ } from '../../components/hypnose/FAQ';
import BreadcrumbsJsonLd from '../../components/BreadcrumbsJsonLd';

const hypnoseImg = "/assets/hypnose-katia-burgun-houdetot-normandie.png";

const faqs = [
  { 
    q: "Qu’est-ce que l’hypnose ericksonienne ?", 
    a: "L’hypnose ericksonienne est une approche d’accompagnement qui utilise un état naturel de concentration intérieure pour faciliter l’accès à vos ressources inconscientes. Elle repose sur des suggestions, des images, des métaphores et des protocoles adaptés à votre situation personnelle." 
  },
  { 
    q: "Vais-je perdre le contrôle ?", 
    a: "Non. Pendant une séance d’hypnose, vous ne perdez pas le contrôle. Vous restez conscient de ce qui se passe, vous entendez ma voix, vous pouvez parler, bouger ou interrompre la séance si vous en ressentez le besoin. L’hypnose ericksonienne respecte votre rythme, votre sécurité intérieure et votre liberté." 
  },
  { 
    q: "L’hypnose fonctionne-t-elle sur tout le monde ?", 
    a: "Chaque personne est différente. Certaines entrent facilement dans l’expérience hypnotique, d’autres ont besoin de plus de temps pour se sentir en confiance. L’hypnose n’est pas une question de performance. Elle repose surtout sur l’alliance, la disponibilité intérieure et le respect du rythme de chacun." 
  },
  { 
    q: "Combien de séances sont nécessaires ?", 
    a: "Le nombre de séances dépend de votre objectif, de votre rythme et de ce qui émerge au fil de l’accompagnement. Certaines problématiques peuvent évoluer en une séance, tandis que d’autres demandent plusieurs rendez-vous. Il arrive aussi qu’au cours d’une séance, une autre problématique apparaisse ou soit abordée, car l’inconscient amène parfois ce qui est le plus juste à travailler à ce moment-là. Nous avançons donc pas à pas, en respectant votre rythme et vos besoins." 
  },
  { 
    q: "Proposez-vous des séances en ligne ?", 
    a: "Oui. Les séances peuvent avoir lieu en cabinet à Houdetot ou à distance, en visioconférence. La séance en ligne se déroule dans les mêmes conditions d’écoute, de confidentialité et d’accompagnement. Il est simplement important de vous installer dans un endroit calme, où vous ne serez pas dérangé." 
  },
  { 
    q: "Est-ce remboursé ?", 
    a: "Certaines mutuelles peuvent prendre en charge une partie des séances d’hypnose selon les garanties prévues dans votre contrat. Une facture vous est remise à l’issue de la séance. Je vous invite à vous rapprocher directement de votre mutuelle pour connaître vos conditions de prise en charge. L’hypnose gagne en reconnaissance auprès des organismes de santé, qui valorisent de plus en plus les approches complémentaires du mieux-être." 
  },
  {
    q: "L’hypnose remplace-t-elle un suivi médical ?",
    a: "Non. L’hypnose ericksonienne est une approche complémentaire du mieux-être. Elle ne se substitue jamais à un avis médical, un diagnostic, un traitement ou un suivi par un professionnel de santé. En cas de trouble important, de douleur, de symptôme ou de traitement en cours, il est essentiel de consulter un médecin ou un professionnel compétent."
  }
];

export default function Hypnose() {
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
          { name: "Hypnose", item: "/hypnose" }
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

      <Hero image={hypnoseImg} />
      <Intro />
      <Applications />
      <Approach />
      <Process />
      <Pricing />
      <PracticalInfo />
      <FAQ items={faqs} />

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Premier pas</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Prêt(e) à retrouver un espace <span className="text-[#8ba394]">d’apaisement intérieur ?</span></h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Vous avez encore des questions ? Vous pouvez me contacter directement pour un premier échange gratuit et sans engagement, afin de voir si l’hypnose ericksonienne correspond à votre besoin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="/prendre-rendez-vous">Prendre rendez-vous</PrimaryButton>
             <a href="tel:0677495288" className="px-8 py-3 rounded-full border border-site text-[10px] uppercase tracking-widest font-bold text-site hover:bg-[var(--site-surface)] transition-all">06 77 49 52 88</a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="px-6 lg:px-16 pb-16 mx-auto max-w-4xl text-center">
         <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] flex flex-col sm:flex-row items-center gap-6 text-left opacity-80 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-[#8ba394] shrink-0" />
            <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">
              <strong>Disclaimer :</strong> L’hypnose ericksonienne est une approche complémentaire du mieux-être. Elle ne se substitue en aucun cas à un avis, un diagnostic ou un traitement médical professionnel.
            </p>
         </div>
      </div>
    </div>
  );
}
