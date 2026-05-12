"use client";

import React from 'react';
import Image from 'next/image';
import { Moon, Zap, RefreshCw, Anchor, Shield, Cloud } from 'lucide-react';
import { SectionBadge } from '../UI';

const appItems = [
  { icon: Moon, title: 'Sommeil & stress', desc: 'Retrouver un sommeil plus apaisé, calmer les ruminations, apaiser l’anxiété et relâcher les tensions mentales ou émotionnelles.' },
  { icon: Zap, title: 'Confiance en soi', desc: 'Affirmer sa valeur, oser prendre sa place, se libérer progressivement du regard des autres et retrouver davantage de sécurité intérieure.' },
  { icon: RefreshCw, title: 'Blocages émotionnels & deuil', desc: 'Traverser une séparation, un deuil, un changement de vie ou un bouleversement avec plus de sérénité, en retrouvant progressivement des ressources intérieures.' },
  { icon: Anchor, title: 'Addictions & habitudes', desc: 'Accompagner l’arrêt du tabac, apaiser les comportements automatiques, le grignotage ou certaines habitudes devenues pesantes dans le quotidien.' },
  { icon: Shield, title: 'Phobies & peurs', desc: 'Apprivoiser certaines peurs, phobies ou réactions disproportionnées afin de retrouver davantage de liberté dans vos choix et vos actions.' },
  { icon: Cloud, title: 'Mieux-être durable', desc: 'Retrouver de l’énergie, de la clarté mentale, une relation plus sereine avec soi-même et une meilleure capacité à avancer.' },
];

export const Applications = () => (
  <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-20">
        <SectionBadge>Mieux-être</SectionBadge>
        <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Pourquoi consulter <span className="text-[#8ba394]">en hypnose ?</span></h2>
        <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto italic">L’hypnose peut vous accompagner lorsque vous ressentez le besoin de dépasser un blocage, de traverser une période difficile ou de retrouver un meilleur équilibre intérieur.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
        {appItems.map((item, idx) => (
          <div key={idx} className="relative pt-12 group">
            <div className="absolute inset-0 top-16 bg-[#8ba394]/5 dark:bg-[#8ba394]/10 rounded-[3rem] transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.02] border border-[#8ba394]/20" />
            <div className="bg-[var(--site-surface-solid)] rounded-[2.5rem] border border-site p-8 sm:p-10 relative z-10 flex flex-col h-full shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#8ba394]/50 text-left">
              <div className="absolute -top-4 left-8 bg-[#8ba394] text-[#ffffff] p-3 rounded-xl shadow-lg z-30 transform -rotate-3 group-hover:rotate-0 transition-transform border-2 border-[var(--site-surface-solid)]">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="mt-8 flex-1">
                <p className="text-xl sm:text-2xl text-site font-heading italic leading-relaxed">
                  "{item.desc}"
                </p>
              </div>
              <div className="w-full h-px bg-site opacity-10 my-8" />
              <div>
                 <h3 className="text-[11px] text-site uppercase tracking-widest font-bold mb-1.5">{item.title}</h3>
                 <p className="text-[9px] uppercase tracking-widest text-[#8ba394]/80">Hypnose • Mieux-être</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Approach = () => (
  <section className="py-24 px-6 lg:px-16 overflow-hidden relative">
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="lg:order-2">
        <SectionBadge>Approche</SectionBadge>
        <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic mb-8">Le langage de <span className="text-[#8ba394]">votre inconscient</span></h2>
        <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
          <p>Contrairement aux idées reçues, vous restez maître de vous-même pendant une séance d’hypnose.</p>
          <p>Vous entendez ma voix, vous pouvez bouger, parler, exprimer un besoin ou interrompre l’expérience si nécessaire. L’état hypnotique est simplement une focalisation particulière de l’attention, qui permet au mental de se déposer et à l’inconscient de devenir plus disponible.</p>
          <p>Avant le travail hypnotique, nous prenons un temps d’échange, aussi appelé anamnèse, afin de faire connaissance, clarifier votre demande, comprendre votre contexte et cerner votre objectif.</p>
          <p>Cet échange permet d’adapter l’accompagnement à votre situation. Le travail se fait ensuite à travers des protocoles, des images et des suggestions adaptés à votre propre solution intérieure.</p>
          <p>Je vous accompagne pas à pas, sans jugement, dans un cadre sécurisant, que la séance ait lieu au cabinet à Houdetot ou à distance en visioconférence.</p>
          <p>L’hypnose ne force rien. Elle ouvre un espace dans lequel vos ressources peuvent se remettre en mouvement, à votre rythme.</p>
        </div>
      </div>
      <div className="lg:order-1 relative">
        <div className="aspect-square rounded-[3rem] overflow-hidden border border-site shadow-2xl relative">
           <Image 
             src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" 
             alt="Méditation et calme intérieur" 
             fill
             className="object-cover grayscale opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-1000" 
             sizes="(max-width: 1024px) 100vw, 40vw"
           />
        </div>
        <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[var(--site-surface)] border border-site rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-xl">
          <div className="text-2xl font-heading italic text-[#8ba394]">100%</div>
          <div className="text-[8px] uppercase tracking-widest font-bold text-site">Naturel</div>
        </div>
      </div>
    </div>
  </section>
);
