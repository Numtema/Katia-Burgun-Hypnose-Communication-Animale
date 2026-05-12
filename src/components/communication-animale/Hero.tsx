"use client";

import React from 'react';
import Link from 'next/link';
import { SectionBadge, BlurText, PrimaryButton } from '../UI';

interface HeroProps {
  image: string;
}

export const Hero = ({ image }: HeroProps) => {
  return (
    <section className="px-6 lg:px-16 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionBadge>Consultation à distance partout dans le monde</SectionBadge>
          <BlurText text="Communication animale intuitive :" delay={50} className="mt-8 text-4xl sm:text-6xl italic font-heading text-site" />
          <BlurText text="écouter ce que votre animal a à vous dire" delay={100} className="mt-2 text-4xl sm:text-6xl italic font-heading text-[#8ba394]" />
          
          <div className="mt-8 space-y-4 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
            <p>Votre animal ressent, perçoit et exprime bien plus qu’il n’y paraît. Grâce à la communication animale intuitive, je me relie à son ressenti pour mieux comprendre ce qu’il vit, ce qu’il cherche à être, et ce qui peut aujourd’hui perturber votre relation ou son équilibre.</p>
            <p>Que votre compagnon soit un chien, un chat, un cheval, un lapin, un oiseau, un reptile ou un autre animal, cette approche permet d’ouvrir un espace d’écoute subtil, sensible et profondément respectueux.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
             <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">80 €</div> Consultation</div>
             <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">Échange complet</div> Restitution incluse</div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
             <PrimaryButton href="#contact">Réserver une consultation</PrimaryButton>
             <Link href="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-transparent hover:border-[#8ba394]">Voir les tarifs</Link>
          </div>
        </div>
        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-2xl">
          <img src={image} alt="Communication intuitive avec les animaux" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};
