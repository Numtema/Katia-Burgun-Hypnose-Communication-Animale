"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { GraduationCap, Users, Clock, MapPin, CheckCircle, BookOpen, Star, Shield, HandHeart, Sparkles, ArrowLeft, Heart, Zap, Coffee, ScrollText } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';

export default function Formation() {
  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-16 py-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge>Formation initiation</SectionBadge>
            <BlurText text="Formation initiation à la communication animale" delay={50} className="mt-8 text-5xl sm:text-7xl italic font-heading text-site" />
            <h2 className="mt-6 text-xl sm:text-2xl font-heading italic text-[#8ba394]">
              Apprenez à développer votre communication intuitive avec les animaux
            </h2>
            <div className="mt-8 space-y-4 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
              <p>Je propose une journée d’initiation à la communication animale pour vous permettre de découvrir cette approche dans un cadre à la fois chaleureux, structuré et accessible.</p>
              <p>Cette formation s’adresse aux personnes qui souhaitent explorer leurs capacités intuitives, mieux comprendre le lien subtil qui les relie aux animaux, et vivre une première expérience guidée de communication animale.</p>
              <p>Je travaille en petit groupe, afin de préserver la qualité de présence, d’écoute et d’accompagnement tout au long de la journée.</p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">150 €</div> Par personne</div>
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">9h à 17h</div> Horaires</div>
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">1 journée</div> Durée</div>
               <div><div className="text-xl text-nowrap font-heading italic text-[#8ba394] mb-1">4 à 6</div> Participants</div>
            </div>
            <div className="mt-12">
               <PrimaryButton href="#contact">Réserver ma place</PrimaryButton>
            </div>
          </div>
          <div className="relative aspect-[4/5] sm:aspect-square rounded-[3rem] overflow-hidden border border-site shadow-2xl">
            <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=1200" alt="Lien privilégié animal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Intention Section */}
      <section className="py-24 px-6 lg:px-16 text-center bg-[var(--site-surface)]">
        <div className="mx-auto max-w-4xl">
          <SectionBadge>L'esprit de la journée</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Une journée pour <span className="text-[#8ba394]">comprendre, ressentir et pratiquer</span></h2>
          <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
            <p>Cette formation d’initiation a été pensée pour les débutants, mais aussi pour toutes les personnes sensibles au monde animal qui souhaitent poser des bases solides.</p>
            <p>Mon intention n’est pas de vous noyer dans des notions abstraites ni de vous faire croire qu’en une journée tout sera “acquis”. Je vous propose un cadre clair pour découvrir, expérimenter et commencer à développer votre propre sensibilité.</p>
            <p>Au fil de la journée, je vous transmets les fondements de la communication animale, tout en vous guidant dans des exercices concrets pour apprendre à calmer le mental, affiner vos perceptions et reconnaître vos ressentis.</p>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Vous ressentez un appel vers la communication animale",
                  "Vous souhaitez découvrir cette pratique de manière sérieuse et encadrée",
                  "Vous aimez les animaux et souhaitez approfondir votre lien avec eux",
                  "Vous avez besoin de repères clairs pour faire la différence entre mental, intuition et ressenti",
                  "Vous avez envie de vivre une expérience concrète, sans pression de résultat"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-[var(--site-surface)] border border-site group hover:border-[#8ba394]/30 transition-all">
                    <CheckCircle className="h-5 w-5 text-[#8ba394] shrink-0" />
                    <p className="text-sm text-[var(--site-muted)] font-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <SectionBadge>Public</SectionBadge>
              <h2 className="mt-8 text-4xl text-site font-heading italic mb-8">À qui s’adresse cette formation ?</h2>
              <div className="space-y-6 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed">
                <p><strong>Aucun prérequis n’est nécessaire.</strong></p>
                <p>Il n’est pas utile d’avoir “un don particulier”. Je pars du principe que chacun possède une sensibilité intuitive, et que celle-ci peut se développer avec de la pratique, de l’attention et un bon accompagnement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Detailed Section */}
      <section className="bg-[var(--site-surface-solid)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <SectionBadge>Programme</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Le programme de la <span className="text-[#8ba394]">journée</span></h2>
          </div>

          <div className="space-y-16">
            <ProgramItem 
              time="09h00"
              title="Accueil, présentations et mise en présence"
              desc="La journée commence dans un cadre convivial, à mon domicile. Nous prenons le temps de nous rencontrer, de poser l’intention de la journée et d’entrer progressivement dans une qualité de présence plus fine. J’introduis dès le départ quelques exercices simples de centrage, d’ancrage et d’apaisement du mental."
              icon={Users}
            />
            <ProgramItem 
              time="09h30 — 12h30"
              title="Les bases théoriques"
              desc="Matinée consacrée à la compréhension du cadre de travail : définition, intuition vs mental, canaux de perception, éthique, communication à distance et limites de la pratique. J'intègre des exercices pour apprendre à faire le vide et se rendre disponible."
              icon={BookOpen}
              details={[
                "Définition et fonctionnement",
                "Les différents canaux de perception",
                "Fréquence et résonance",
                "Éthique et limites"
              ]}
            />
            <ProgramItem 
              time="12h30 — 14h00"
              title="Déjeuner partagé"
              desc="Un moment convivial pris sur place pour échanger librement et intégrer les notions du matin dans une atmosphère détendue."
              icon={Coffee}
            />
            <ProgramItem 
              time="14h00 — 16h30"
              title="Mise en pratique et expérimentations"
              desc="L’après-midi est dédié à la pratique sur photos de mes propres animaux pour un accompagnement précis et validé. Nous explorons les signaux subtils, le décodage des ressentis et l'effet miroir quand le groupe est prêt."
              icon={Zap}
              details={[
                "Techniques de concentration et ancrage",
                "Connexion sur photo",
                "Lecture et décodage des ressentis",
                "Notion d'effet miroir"
              ]}
            />
            <ProgramItem 
              time="16h30 — 17h00"
              title="Intégration et clôture"
              desc="Temps de partage final, mise en mots et transmission de pistes concrètes pour continuer à pratiquer chez vous avec confiance et discernement."
              icon={HandHeart}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 lg:px-16 overflow-hidden relative">
        <div className="mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Sticky Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <SectionBadge>Résultats</SectionBadge>
              <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic mb-8">
                Ce que cette formation <br className="hidden lg:block"/> <span className="text-[#8ba394]">vous apporte</span>
              </h2>
              <p className="text-[var(--site-muted)] font-light leading-relaxed mb-12 text-base sm:text-lg max-w-md">
                À l’issue de la journée, vous repartez avec des fondations solides pour ouvrir votre propre chemin de pratique personnel.
              </p>
              
              {/* Quote Box */}
              <div className="relative p-8 sm:p-10 overflow-hidden rounded-[2.5rem] bg-[var(--site-surface-solid)] border border-site shadow-xl group">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#8ba394]" />
                <div className="absolute -top-8 -right-4 text-[12rem] font-heading font-bold italic text-[#8ba394] opacity-10 leading-none transition-transform duration-700 group-hover:scale-110">
                  "
                </div>
                <p className="relative z-10 text-site italic font-medium leading-relaxed text-lg sm:text-xl">
                  "Cette journée n’a pas pour but de faire de vous un professionnel en un jour. Elle vous permet de poser des fondations, de vivre une immersion et d'ouvrir votre chemin."
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { t: 'Compréhension claire', d: 'Les bases théoriques et le cadre de la communication animale.' },
                { t: 'Expérience pratique', d: 'Une première expérience guidée et structurée.' },
                { t: 'Repères intuitifs', d: 'Reconnaître vos propres perceptions et signaux.' },
                { t: 'Exercices concrets', d: 'Des outils simples pour continuer de vous entraîner.' },
                { t: 'Vision juste', d: 'Savoir ce que la pratique permet et ses limites.' },
                { t: 'Support écrit', d: 'Un livret récapitulatif pour prolonger le travail.' }
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-[2.5rem] border border-site bg-[var(--site-surface)] hover:bg-[var(--site-surface-solid)] hover:border-[#8ba394]/40 transition-all duration-500 p-8 sm:p-10 shadow-sm hover:shadow-xl">
                  <div className="absolute -right-6 -bottom-6 text-[10rem] font-heading font-black italic text-[#8ba394] opacity-[0.03] group-hover:opacity-10 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-700 pointer-events-none select-none leading-none z-0">
                    {(i+1).toString().padStart(2, '0')}
                  </div>
                  
                  <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    <div className="flex-shrink-0 w-16 h-16 rounded-[1.25rem] bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center text-[#8ba394] font-heading text-2xl italic group-hover:scale-110 group-hover:bg-[#8ba394] group-hover:text-[var(--site-bg)] shadow-inner transition-all duration-500">
                      {(i+1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl text-site font-medium mb-3 group-hover:text-[#8ba394] transition-colors">{item.t}</h3>
                      <p className="text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">{item.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Infos Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionBadge>Informations pratiques</SectionBadge>
              <h2 className="mt-8 text-4xl text-site font-heading italic mb-12">Préparer votre venue</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { i: MapPin, t: "Lieu", d: "À mon domicile : 5 route de Bourville, 76740 Fontaine-le-Dun" },
                   { i: Clock, t: "Horaires", d: "De 9h à 17h" },
                   { i: Users, t: "Effectif", d: "4 à 6 personnes maximum" },
                   { i: GraduationCap, t: "Tarif", d: "150 € par personne" }
                 ].map(item => (
                   <div key={item.t} className="flex gap-4">
                     <div className="h-10 w-10 shrink-0 rounded-xl bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center text-[#8ba394]">
                       <item.i className="h-5 w-5" />
                     </div>
                     <div>
                       <h3 className="text-site font-medium text-sm mb-1">{item.t}</h3>
                       <p className="text-[var(--site-muted)] text-sm font-light">{item.d}</p>
                     </div>
                   </div>
                 ))}
              </div>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                   <h3 className="text-site font-body font-medium mb-6 flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#8ba394]" /> Ce qui est inclus</h3>
                   <ul className="space-y-3">
                     {["La journée complète de formation", "Les temps de pratique guidée", "Le déjeuner partagé", "Le support récapitulatif"].map(i => (
                       <li key={i} className="flex gap-3 text-sm text-[var(--site-muted)] font-light"><CheckCircle className="h-4 w-4 text-[#8ba394] shrink-0 translate-y-0.5" /> {i}</li>
                     ))}
                   </ul>
                </div>
                <div>
                   <h3 className="text-site font-body font-medium mb-6 flex items-center gap-2"><ScrollText className="h-4 w-4 text-[#8ba394]" /> À prévoir</h3>
                   <ul className="space-y-3">
                     {["Une photo de votre animal", "Une tenue confortable", "De quoi prendre quelques notes"].map(i => (
                       <li key={i} className="flex gap-3 text-sm text-[var(--site-muted)] font-light"><div className="h-1.5 w-1.5 rounded-full bg-[#8ba394] mt-2 shrink-0" /> {i}</li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>

            <div className="bg-[var(--site-surface-solid)] p-8 sm:p-12 rounded-[3rem] border border-site relative flex flex-col justify-between shadow-xl">
              <div>
                <SectionBadge>Réservation</SectionBadge>
                <div className="mt-8 text-4xl font-heading italic text-[#8ba394] mb-4">150 €</div>
                <p className="text-[var(--site-muted)] text-sm font-light mb-6">Un acompte de 50 € est demandé pour confirmer l’inscription.</p>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[var(--site-bg)] border border-site text-xs text-[var(--site-muted)] font-light leading-relaxed">
                  Cette journée est idéale si vous cherchez une formation sérieuse, en petit groupe, mêlant théorie, pratique et éthique.
                </div>
                <PrimaryButton href="#contact" className="w-full justify-center">Réserver ma place</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Contact</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Envie de participer ?</h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Si cette journée résonne pour vous, je vous invite à me contacter pour connaître les prochaines dates ou réserver votre place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
             <a href="tel:0677495288" className="px-8 py-3.5 rounded-full border border-site text-[10px] uppercase tracking-widest font-bold text-site hover:bg-[var(--site-surface)] transition-all">06 77 49 52 88</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProgramItem({ time, title, desc, icon: Icon, details }: any) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 group">
      <div className="shrink-0 flex sm:flex-col items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-[var(--site-surface)] border border-site flex items-center justify-center text-[#8ba394] group-hover:border-[#8ba394]/50 transition-colors shadow-sm">
          <Icon className="h-6 w-6" />
        </div>
        <div className="sm:h-full w-px bg-site hidden sm:block opacity-20" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8ba394] mb-2">{time}</div>
        <h3 className="text-site text-2xl font-body font-medium mb-4 group-hover:text-[#8ba394] transition-colors">{title}</h3>
        <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed mb-6">{desc}</p>
        {details && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
            {details.map((d: string) => (
              <div key={d} className="flex items-center gap-3 text-xs text-[var(--site-muted)] font-light">
                <div className="h-1.5 w-1.5 rounded-full bg-[#8ba394]" />
                {d}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
