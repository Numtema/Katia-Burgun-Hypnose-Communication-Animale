"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { PrimaryButton } from '../UI';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-site py-24 sm:py-32 px-6 lg:px-16 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl text-site font-heading italic leading-tight max-w-2xl">Des accompagnements vécus avec <span className="text-[var(--text-sage)]">confiance</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "J’ai eu la chance de faire une communication animale avec Katia pour mon cheval. L’expérience a été tellement bouleversante et juste que je vais renouveler sans hésiter. Katia est d’une finesse d’analyse absolument remarquable. Ce qu’elle transmet est d’une précision étonnante, avec des détails impossibles à inventer.", r: "Louise Q. - Communication animale" },
            { t: "Une séance d’hypnose qui m’a énormément apporté. Un véritable voyage intérieur qui m’a permis de débloquer certaines problématiques de mon passé. Katia est d’une douceur et d’une bienveillance rares. Une approche holistique que je recommande les yeux fermés.", r: "Louise Q. - Hypnose Ericksonienne" },
            { t: "Consultée pour des problèmes de colères, Katia a su très vite me mettre en confiance en comprenant mes besoins mieux que moi. Sa voix est rassurante et chaleureuse. Cela m’a permis d’entrer en hypnose très vite et profondément. Je recommande vivement !", r: "Jérémie - Hypnose Ericksonienne" }
          ].map((it, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-10 rounded-[2.5rem] bg-[var(--site-surface)] border border-site backdrop-blur-sm relative flex flex-col h-full">
              <div className="flex gap-0.5 mb-6">{[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 text-[#8ba394] fill-[#8ba394]" />)}</div>
              <p className="text-base text-site opacity-90 font-heading italic leading-relaxed mb-10 flex-1">“{it.t}”</p>
              <div className="mt-auto border-t border-site pt-6">
                <div className="mt-1 text-[10px] text-[var(--text-sage)] uppercase tracking-widest font-bold font-body">{it.r}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <PrimaryButton href="/temoignages" className="bg-[var(--site-surface)] border border-site px-10">
            Voir tous les témoignages
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
