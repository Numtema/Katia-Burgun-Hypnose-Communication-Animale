"use client";

import React from 'react';
import Image from 'next/image';
import { SectionBadge, BlurText, PrimaryButton } from '../UI';

interface HeroProps {
  image: string;
}

export const Hero = ({ image }: HeroProps) => (
  <section className="px-6 lg:px-16 py-12 relative overflow-hidden">
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <SectionBadge>Accompagnement doux</SectionBadge>
        <BlurText text="Hypnose ericksonienne à Houdetot" delay={50} className="mt-8 text-4xl sm:text-6xl italic font-heading text-site" />
        <h1 className="mt-4 text-xl sm:text-2xl font-light text-[var(--site-muted)] leading-relaxed opacity-90 max-w-xl">
          Un accompagnement bienveillant pour apaiser votre mental, dépasser certains blocages et retrouver un meilleur équilibre intérieur.
        </h1>
        
        <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
          L’hypnose ericksonienne est une approche respectueuse qui s’appuie sur vos propres ressources inconscientes. Elle vous accompagne dans un état de détente et de disponibilité intérieure, afin de favoriser le changement, à votre rythme.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
           <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">60 €</div> Par séance</div>
           <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">1h à 1h30</div> Durée moyenne</div>
           <div><div className="text-xl text-nowrap font-heading italic text-[#8ba394] mb-1">Houdetot / Visio</div> Lieux de consultation</div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
           <PrimaryButton href="#contact">Réserver une séance</PrimaryButton>
           <a href="tel:0677495288" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-transparent hover:border-[#8ba394]">06 77 49 52 88</a>
        </div>
      </div>
      <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-2xl">
        <Image 
          src={image} 
          alt="Séance d'hypnose apaisante à Houdetot" 
          fill
          className="object-cover" 
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  </section>
);

export const Intro = () => (
  <section className="py-24 px-6 lg:px-16 text-center mx-auto max-w-4xl">
    <SectionBadge>Hypnose ericksonienne</SectionBadge>
    <h2 className="mt-8 text-3xl sm:text-5xl font-heading italic text-site mb-8 leading-tight">
      Une approche douce du changement intérieur
    </h2>
    <div className="text-2xl sm:text-3xl font-heading italic text-[#8ba394] mb-8">
      « L’hypnose travaille avec son allié : l’inconscient. »
    </div>
    <div className="mx-auto w-16 h-px bg-[#8ba394]/30 mb-12" />
    <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base max-w-3xl mx-auto text-left sm:text-center">
      <p>
        L’hypnose ericksonienne, développée par Milton Erickson, est une approche humaine, souple et personnalisée.
      </p>
      <p>
        L’état hypnotique est un état naturel de concentration intérieure. Il ne s’agit pas de dormir, ni de perdre le contrôle, mais d’entrer dans une forme de présence différente, plus tournée vers vos ressentis, vos images intérieures et vos ressources profondes.
      </p>
      <p>
        Dans cet état, le mental peut relâcher une partie de ses résistances habituelles. Cela permet d’ouvrir un espace de travail avec l’inconscient, afin d’accompagner certains changements, apaisements ou prises de recul.
      </p>
    </div>
  </section>
);
