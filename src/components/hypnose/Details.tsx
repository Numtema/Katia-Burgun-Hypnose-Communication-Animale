"use client";

import React from 'react';
import { MessageCircle, Compass, Brain, Heart, CheckCircle, MapPin, Receipt, Wallet } from 'lucide-react';
import { SectionBadge, PrimaryButton } from '../UI';
import Link from 'next/link';

// --- Process ---
const steps = [
  { i: MessageCircle, t: '1. Échange initial — anamnèse', d: 'Nous prenons un temps pour faire connaissance, clarifier votre besoin, comprendre votre contexte et cerner votre objectif. Cette première étape, appelée anamnèse, permet de poser un cadre clair et d’adapter l’accompagnement à ce que vous vivez.' },
  { i: Compass, t: '2. Installation', d: 'Vous vous installez confortablement. Je vous guide progressivement vers un état de détente, d’écoute intérieure et de disponibilité, dans le respect de votre rythme.' },
  { i: Brain, t: '3. Travail hypnotique', d: 'Votre inconscient peut alors explorer de nouvelles pistes à travers des protocoles, des métaphores, des images et des suggestions adaptées. Vous restez toujours présent, libre et aux commandes de votre expérience.' },
  { i: Heart, t: '4. Retour et intégration', d: 'La séance se termine par un retour progressif ici et maintenant. Nous prenons ensuite un court temps pour accueillir ce qui s’est présenté et permettre à l’expérience de commencer à s’intégrer.' }
];

export const Process = () => (
  <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-20">
        <SectionBadge>Processus</SectionBadge>
        <h2 className="text-4xl sm:text-6xl text-site font-heading italic mt-8 mb-8">Comment se passe <span className="text-[#8ba394]">une séance ?</span></h2>
      </div>
      <div className="space-y-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-8 group">
            <div className="text-5xl font-heading italic text-[#8ba394]/20 group-hover:text-[#8ba394]/50 transition-colors shrink-0">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
            <div>
              <h3 className="text-site font-heading italic text-2xl mb-2">{step.t}</h3>
              <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Pricing ---
export const Pricing = () => (
  <section className="py-24 px-6 lg:px-16">
    <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[var(--site-surface)] border border-site rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ba394]/5 rounded-full blur-3xl group-hover:bg-[#8ba394]/10 transition-colors" />
      
      <div className="relative z-10">
        <SectionBadge>Accompagnement individuel</SectionBadge>
        <h2 className="mt-6 text-3xl sm:text-4xl font-heading italic text-site mb-2">Hypnose ericksonienne</h2>
        <p className="text-[var(--site-muted)] text-sm font-light mb-8 italic">Un espace de calme pour votre évolution personnelle.</p>
        <div className="text-6xl font-heading italic text-[#8ba394] mb-4">60 €</div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--site-muted)] mb-8">
          Les effets d’un accompagnement hypnotique peuvent continuer à se déployer après le rendez-vous, selon votre rythme et ce qui a été travaillé pendant la séance.
        </p>
        <Link href="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-[#8ba394]/20 pb-1">Voir tous les tarifs & mutuelles</Link>
      </div>
      <div className="space-y-6 relative z-10">
        <ul className="space-y-6 mb-12 border-t border-site/50 pt-8">
          {[
            { label: 'L’approche', items: ['Échange préalable complet', 'Accompagnement personnalisé'] },
            { label: 'La séance', items: ['Durée : 1h à 1h30', 'Facture pour mutuelle'] },
            { label: 'Lieux', items: ['Cabinet (Houdetot) ou Visio'] }
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
        <div className="pt-6">
           <PrimaryButton href="#contact" className="w-full justify-center">Réserver une séance</PrimaryButton>
        </div>
      </div>
    </div>
  </section>
);

// --- PracticalInfo ---
export const PracticalInfo = () => (
  <section className="pb-24 px-6 lg:px-16">
    <div className="mx-auto max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/30 transition-colors shadow-sm">
          <MapPin className="h-6 w-6 text-[#8ba394] mb-4" />
          <h3 className="text-site font-heading italic text-xl mb-2">Lieu de consultation</h3>
          <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
            Les séances peuvent avoir lieu en cabinet à Houdetot ou à distance, en visioconférence.
          </p>
        </div>
        <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/30 transition-colors shadow-sm">
          <Receipt className="h-6 w-6 text-[#8ba394] mb-4" />
          <h3 className="text-site font-heading italic text-xl mb-2">Facture</h3>
          <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
            Une facture vous est remise à l’issue de la séance.
          </p>
        </div>
        <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/30 transition-colors shadow-sm">
          <Wallet className="h-6 w-6 text-[#8ba394] mb-4" />
          <h3 className="text-site font-heading italic text-xl mb-2">Moyens de paiement</h3>
          <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
            PayPal, chèque, virement bancaire et espèces.
          </p>
        </div>
      </div>
    </div>
  </section>
);
