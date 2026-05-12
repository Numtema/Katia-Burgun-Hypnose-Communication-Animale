import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SectionBadge } from '../UI';

const hypnoseImg = "/assets/hypnose-katia-burgun-houdetot-normandie.png";
const communicationImg = "/assets/chat-katia-burgun.jpeg";

export default function ServicesOrientation() {
  return (
    <section className="bg-[var(--site-surface-solid)] py-16 px-6 lg:px-16 border-y border-site">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl text-site font-heading italic leading-tight px-4">Vous êtes au bon endroit si...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/hypnose" className="rounded-[2.5rem] bg-[var(--site-bg)] border border-site flex flex-col h-full hover:border-[#8ba394]/50 transition-all duration-500 overflow-hidden group shadow-lg hover:shadow-xl">
             <div className="h-56 relative overflow-hidden">
               <Image 
                 src={hypnoseImg} 
                 alt="Apaisement et relaxation" 
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-90 pointer-events-none" />
             </div>
             <div className="p-8 sm:p-10 pt-4 flex-1 flex flex-col relative z-10">
               <SectionBadge className="self-start mb-6 !bg-[#8ba394]/10 !text-[var(--text-sage)] !border-[#8ba394]/20">Pour vous</SectionBadge>
               <p className="text-[var(--site-muted)] text-sm sm:text-base font-light leading-relaxed mb-10 flex-1">
                 Vous ressentez du stress, des blocages, une fatigue émotionnelle, des difficultés de sommeil ou le besoin de retrouver un apaisement intérieur.
               </p>
               <span className="text-xs uppercase tracking-widest font-bold text-[var(--text-sage)] transition-colors self-start border-b border-[#8ba394]/30 group-hover:border-[#8ba394]">
                 Découvrir l'hypnose →
               </span>
             </div>
          </Link>

          <Link href="/communication-animale" className="rounded-[2.5rem] bg-[var(--site-bg)] border border-site flex flex-col h-full hover:border-[#8ba394]/50 transition-all duration-500 overflow-hidden group shadow-lg hover:shadow-xl">
             <div className="h-56 relative overflow-hidden">
               <Image 
                 src={communicationImg} 
                 alt="Chien et humain" 
                 fill
                 className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-90 pointer-events-none" />
             </div>
             <div className="p-8 sm:p-10 pt-4 flex-1 flex flex-col relative z-10">
               <SectionBadge className="self-start mb-6 !text-[var(--text-sage)]">Pour votre animal</SectionBadge>
               <p className="text-[var(--site-muted)] text-sm sm:text-base font-light leading-relaxed mb-10 flex-1">
                 Vous souhaitez mieux comprendre un comportement, une émotion, un changement, une inquiétude, ou renforcer votre lien avec votre compagnon.
               </p>
               <span className="text-xs uppercase tracking-widest font-bold text-[var(--text-sage)] transition-colors self-start border-b border-[#8ba394]/30 group-hover:border-[#8ba394]">
                 Découvrir la communication animale →
               </span>
             </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
