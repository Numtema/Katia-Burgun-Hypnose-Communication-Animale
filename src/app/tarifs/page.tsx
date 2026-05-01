"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle, CreditCard, Landmark, Banknote, Receipt, ArrowLeft, ExternalLink, HelpCircle } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';

export default function Tarifs() {
  const mutuelles = [
    { name: "Harmonie Mutuelle", url: "https://www.harmonie-mutuelle.fr/", domain: "harmonie-mutuelle.fr" },
    { name: "MGEN", url: "https://www.mgen.fr/", domain: "mgen.fr" },
    { name: "Malakoff Humanis", url: "https://www.malakoffhumanis.com/", domain: "malakoffhumanis.com" },
    { name: "Alan", url: "https://alan.com/", domain: "alan.com" },
    { name: "AXA", url: "https://www.axa.fr/mutuelle-sante.html", domain: "axa.fr" },
    { name: "Allianz", url: "https://www.allianz.fr/assurance-sante.html", domain: "allianz.fr" },
    { name: "SwissLife", url: "https://www.swisslife.fr/", domain: "swisslife.fr" },
    { name: "Mutuelle Bleue", url: "https://www.mutuellebleue.fr/", domain: "mutuellebleue.fr" }
  ];

  const pricing = [
    {
      title: 'Communication animale',
      price: '80 €',
      duration: 'Séance à distance',
      desc: 'Une consultation complète pour mieux comprendre votre animal, ses ressentis, ses comportements et ses messages.',
      items: [
        'Une connexion intuitive approfondie',
        'Jusqu’à 5 questions',
        'Une restitution écrite détaillée',
        'Un échange téléphonique ou visio',
        'Consultation à distance accessible partout'
      ],
      cta: '/communication-animale#contact'
    },
    {
      title: 'Hypnose Ericksonienne',
      price: '60 €',
      duration: 'Durée : 1h30',
      desc: 'Un accompagnement personnalisé pour avancer à votre rythme, dans un cadre bienveillant et confidentiel.',
      items: [
        'Entretien préalable approfondi',
        'Une séance complète d’hypnose',
        'Outils & exercices pour le quotidien',
        'Facture remise à l’issue de la séance',
        'En cabinet à Houdetot ou en visioconférence'
      ],
      featured: true,
      cta: '/hypnose#contact'
    },
    {
      title: 'Formation',
      price: '150 €',
      duration: 'Par personne',
      desc: 'Une journée complète pour découvrir, comprendre et expérimenter la communication animale.',
      items: [
        '8 heures de formation (9h-17h)',
        'Déjeuner inclus sur place',
        'Livret de formation et supports fournis',
        'Petit groupe (4 à 6 personnes)',
        'Accompagnement personnalisé'
      ],
      cta: '/formation#contact'
    }
  ];

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-24">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>

      <section className="px-6 lg:px-16 py-12 flex flex-col items-center">
        <SectionBadge>Transparence</SectionBadge>
        <BlurText text="Tarifs, paiement et remboursement" delay={50} className="mt-8 justify-center text-5xl sm:text-7xl italic font-heading text-site text-center" />
        <h1 className="mt-6 text-xl sm:text-2xl font-body font-light text-[var(--site-muted)] max-w-2xl mx-auto text-center leading-relaxed">
          Des tarifs clairs, sans mauvaise surprise. Je vous accueille avec une approche simple et transparente pour chaque accompagnement.
        </h1>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-7xl">
          {pricing.map((p) => (
            <div 
              key={p.title} 
              className={cn(
                "p-10 rounded-[3rem] border flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                p.featured 
                  ? "border-[#8ba394] bg-[var(--site-surface-solid)] relative shadow-xl shadow-[#8ba394]/5" 
                  : "border-site bg-[var(--site-surface)]"
              )}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8ba394] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-6 py-1.5 rounded-full shadow-lg">
                  Populaire
                </div>
              )}
              <h3 className="text-site text-2xl font-heading italic mb-1">{p.title}</h3>
              <p className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest mb-8">{p.duration}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-6xl font-heading italic text-[#8ba394]">{p.price.split(' ')[0]}</span>
                <span className="text-2xl font-heading italic text-[#8ba394]">{p.price.split(' ')[1]}</span>
              </div>
              <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed mb-10 min-h-[4rem]">
                {p.desc}
              </p>
              <ul className="space-y-4 mb-12 flex-1 border-t border-site/50 pt-8">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-4 text-[var(--site-muted)] text-[13px] font-light leading-relaxed">
                    <CheckCircle className="h-5 w-5 text-[#8ba394] shrink-0" /> 
                    {i}
                  </li>
                ))}
              </ul>
              <PrimaryButton href={p.cta} className={cn("w-full justify-center", !p.featured && "bg-transparent border border-site")}>
                Réserver
              </PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      {/* Prise en charge mutuelle */}
      <section className="bg-[var(--site-surface)] py-24 sm:py-32 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionBadge>Santé</SectionBadge>
              <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic leading-tight">Prise en charge <span className="text-[#8ba394]">mutuelle</span></h2>
              <div className="mt-10 space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Certaines mutuelles peuvent prendre en charge une partie des séances d’hypnose, selon les garanties prévues dans votre contrat.
                </p>
                <div className="p-8 rounded-3xl bg-[var(--site-bg)] border-l-4 border-[#8ba394] shadow-sm">
                  <p className="italic font-medium text-site">
                    « Une facture vous est remise systématiquement pour vos démarches. Je vous invite à vous rapprocher directement de votre mutuelle afin de connaître vos conditions de remboursement. »
                  </p>
                </div>
                <p>
                  L’hypnose gagne en reconnaissance auprès des organismes de santé qui valorisent de plus en plus les approches complémentaires de mieux-être.
                </p>
              </div>
            </div>
            <div className="bg-[var(--site-surface-solid)] p-10 sm:p-12 rounded-[3.5rem] border border-site shadow-inner">
              <h3 className="text-site font-heading italic text-2xl mb-8">Mutuelles courantes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mutuelles.map((m) => (
                  <a 
                    key={m.name} 
                    href={m.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-site bg-[var(--site-bg)] hover:border-[#8ba394]/50 hover:bg-[var(--site-surface)] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://www.google.com/s2/favicons?domain=${m.domain}&sz=128`} 
                        alt={`Logo ${m.name}`} 
                        className="w-6 h-6 object-contain rounded bg-white p-0.5"
                      />
                      <span className="text-[11px] uppercase tracking-widest font-bold text-site opacity-80">{m.name}</span>
                    </div>
                    <ExternalLink className="h-3 w-3 text-[#8ba394] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              <p className="mt-8 text-[10px] text-[var(--site-muted)] italic text-center">Liste non exhaustive. Vérifiez votre contrat personnel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Moyens de paiement & Conditions Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
             <SectionBadge>Paiement</SectionBadge>
             <h2 className="mt-8 text-4xl text-site font-heading italic mb-12">Moyens de <span className="text-[#8ba394]">paiement</span></h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { i: CreditCard, t: 'Carte bancaire', d: 'En cabinet ou via lien sécurisé Stripe pour la visio.' },
                 { i: Landmark, t: 'Virement bancaire', d: 'Préféré pour les formations et forfaits.' },
                 { i: Banknote, t: 'Espèces', d: 'Accepté en séance présentielle.' },
                 { i: Receipt, t: 'Chèque', d: 'À l’ordre de Katia Burgun.' }
               ].map((item, idx) => (
                 <div key={idx} className="space-y-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#8ba394]/10 flex items-center justify-center text-[#8ba394]">
                      <item.i className="h-5 w-5" />
                    </div>
                    <h3 className="text-site font-body font-medium">{item.t}</h3>
                    <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{item.d}</p>
                 </div>
               ))}
             </div>
          </div>

          <div className="space-y-12">
            <div>
              <SectionBadge>Annulation</SectionBadge>
              <h2 className="mt-8 text-2xl font-heading italic text-site mb-6">Conditions d’annulation</h2>
              <div className="p-8 rounded-[2.5rem] bg-[var(--site-surface)] border border-site space-y-4">
                <p className="text-sm font-light text-[var(--site-muted)] leading-relaxed">
                  Toute séance peut être annulée ou reportée sans frais jusqu’à 48 heures avant le rendez-vous.
                </p>
                <p className="text-sm font-light text-[var(--site-muted)] leading-relaxed border-t border-site/50 pt-4">
                  Passé ce délai, la séance est considérée comme due, sauf cas de force majeure dûment justifié.
                </p>
              </div>
            </div>

            <div>
              <SectionBadge>Formations</SectionBadge>
              <h2 className="mt-8 text-2xl font-heading italic text-site mb-6">Conditions pour les formations</h2>
              <ul className="space-y-4">
                {[
                  'Un acompte de 50 € est demandé pour valider l’inscription.',
                  'Le solde est réglé le jour de la formation.',
                  'Annulation plus de 15 jours avant : acompte remboursé.'
                ].map(item => (
                  <li key={item} className="flex gap-4 text-sm font-light text-[var(--site-muted)]"><CheckCircle className="h-4 w-4 text-[#8ba394] shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Reassurance Section */}
      <section className="py-24 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-3xl p-12 sm:p-20 rounded-[4rem] bg-[var(--site-surface-solid)] border border-site shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8ba394]/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <HelpCircle className="h-10 w-10 text-[#8ba394] mx-auto mb-8 animate-bounce" />
            <h2 className="text-3xl sm:text-5xl text-site font-heading italic mb-8">Une question sur les tarifs ?</h2>
            <p className="text-[var(--site-muted)] font-light leading-relaxed mb-12 text-sm sm:text-base">
              Je reste disponible pour vous renseigner sur les modalités de prise en charge ou les facilités de paiement avant votre prise de rendez-vous.
            </p>
            <PrimaryButton href="#contact" className="px-12 py-5 text-sm">Me contacter</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
