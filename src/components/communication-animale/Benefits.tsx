"use client";

import React from 'react';
import { Heart, Activity, PawPrint, Clock, MessageCircle, ShieldCheck, CheckCircle } from 'lucide-react';
import { SectionBadge } from '../UI';

const benefits = [
  { icon: Heart, t: 'Comprendre ses émotions', d: 'Votre animal peut exprimer du stress, de l’inconfort, de la peur ou une joie que l’observation seule ne permet pas toujours d’identifier.' },
  { icon: Activity, t: 'Éclairer les comportements', d: 'Agressivité, anxiété, malpropreté, agitation... Comprendre ce que l’animal cherche à exprimer à travers ses agissements.' },
  { icon: PawPrint, t: 'Renforcer le lien', d: 'Mieux comprendre son animal, c’est souvent apaiser la relation, rétablir la confiance et retrouver une communication plus juste.' },
  { icon: Clock, t: 'Accompagner les étapes', d: 'Adoption, déménagement, séparation, vieillissement ou fin de vie : des moments qui demandent une écoute particulière.' },
  { icon: MessageCircle, t: 'Recevoir un message', d: 'L’animal peut venir montrer quelque chose du lien qu’il partage avec son humain, mettant en lumière des dynamiques émotionnelles.' },
  { icon: ShieldCheck, t: 'Résonance & Éthique', d: 'Une approche respectueuse de l’animal, de son rythme et de son intégrité, toujours en complément d’un suivi classique.' }
];

export const Benefits = () => {
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <SectionBadge>Bénéfices</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Pourquoi faire une <span className="text-[#8ba394]">communication animale ?</span></h2>
          <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto">La communication animale peut vous aider à mieux comprendre votre compagnon lorsque quelque chose semble flou, bloqué ou difficile à expliquer.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="relative pt-12 group">
              <div className="absolute inset-0 top-16 bg-[#8ba394]/5 dark:bg-[#8ba394]/10 rounded-[3rem] transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.02] border border-[#8ba394]/20" />
              
              <div className="bg-[var(--site-surface-solid)] rounded-[2.5rem] border border-site p-8 sm:p-10 relative z-10 flex flex-col h-full shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#8ba394]/50 text-left">
                <div className="absolute -top-4 left-8 bg-[#8ba394] text-[#ffffff] p-3 rounded-xl shadow-lg z-30 transform -rotate-3 group-hover:rotate-0 transition-transform border-2 border-[var(--site-surface-solid)]">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="absolute top-8 right-8">
                   <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-site text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-medium">
                     <CheckCircle className="w-3 h-3 text-[#8ba394]" /> Bénéfice
                   </div>
                </div>
                <div className="mt-8 flex-1">
                  <p className="text-xl sm:text-2xl text-site font-heading italic leading-relaxed">
                    "{item.d}"
                  </p>
                </div>
                <div className="w-full h-px bg-site opacity-10 my-8" />
                <div>
                   <h3 className="text-[11px] text-site uppercase tracking-widest font-bold mb-1.5">{item.t}</h3>
                   <p className="text-[9px] uppercase tracking-widest text-[#8ba394]/80">Communication • Lien</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
