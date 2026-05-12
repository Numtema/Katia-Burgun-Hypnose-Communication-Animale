"use client";

import React from 'react';
import { Camera, Sparkles, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { SectionBadge, PrimaryButton } from '../UI';

const steps = [
  { i: Camera, t: '1. Prise de contact', d: 'Vous m’envoyez une photo où l’on voit distinctement son visage et ses yeux, son nom et vos questions.' },
  { i: Sparkles, t: '2. Connexion à distance', d: 'Je me relie à votre animal dans un temps de connexion intérieure et d’écoute.' },
  { i: Phone, t: '3. Échange', d: 'Nous échangeons ensemble sur vos questions et les points importants de la communication.' },
  { i: MessageCircle, t: '4. Restitution', d: 'Je vous transmets l’ensemble des ressentis, émotions, messages et pistes d’apaisement.' }
];

export const Process = () => {
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionBadge>Processus</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Comment se déroule <span className="text-[#8ba394]">une consultation ?</span></h2>
          <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-12">Je pratique exclusivement à distance, ce qui permet à l'animal de rester dans son cadre habituel sans le stress d'une présence étrangère.</p>
          <div className="space-y-12">
             {steps.map((step, i) => (
               <div key={i} className="flex gap-6">
                  <div className="h-12 w-12 shrink-0 rounded-full border border-site flex items-center justify-center text-[#8ba394]">
                    <step.i className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-site font-medium mb-1">{step.t}</h3>
                    <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
        <div className="bg-[var(--site-surface-solid)] p-8 sm:p-12 rounded-[3.5rem] border border-site sticky top-32">
           <SectionBadge>Contenu de la consultation</SectionBadge>
           <h2 className="mt-8 text-3xl font-heading italic text-site mb-6">Communication animale intuitive</h2>
           <div className="text-5xl font-heading italic text-[#8ba394] mb-8">80 €</div>
           <ul className="space-y-6 mb-12 border-t border-site/50 pt-8">
             {[
               { label: 'L’expérience', items: ['Connexion intuitive approfondie', 'Jusqu’à 5 questions'] },
               { label: 'Restitution', items: ['Échange téléphonique ou visio', 'Compte-rendu écrit détaillé'] },
               { label: 'Modalités', items: ['Consultation à distance partout dans le monde'] }
             ].map((section) => (
               <div key={section.label}>
                 <h4 className="text-[10px] uppercase tracking-[0.1em] font-bold text-site opacity-40 mb-3">{section.label}</h4>
                 <ul className="space-y-3">
                   {section.items.map((i) => (
                     <li key={i} className="flex gap-3 text-site text-[12px] font-light leading-relaxed">
                       <CheckCircle className="h-4 w-4 text-[#8ba394] shrink-0 translate-y-0.5" /> 
                       {i}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </ul>
           <PrimaryButton href="#contact" className="w-full justify-center">Réserver une consultation</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
