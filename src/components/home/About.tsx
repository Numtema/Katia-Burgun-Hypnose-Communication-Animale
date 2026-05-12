"use client";

import React from 'react';
import Image from 'next/image';
import { PrimaryButton } from '../UI';

const portraitKatia2 = "/assets/katia-burgun-hypnotherapeute-normandie.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-site py-24 sm:py-32 px-6 lg:px-16 overflow-hidden transition-colors duration-500 border-b border-site">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-site group">
            <Image 
              src={portraitKatia2} 
              alt="Portrait Katia Burgun" 
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-105" 
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl text-site font-heading italic leading-tight">Une approche sensible du vivant, au service de <span className="text-[#8ba394]">l'humain et de l'animal</span></h2>
          <div className="mt-8 space-y-6 text-[var(--site-muted)] font-light text-sm sm:text-base max-w-xl leading-relaxed">
            <p>Depuis toujours, je ressens un lien profond avec les animaux et une attention particulière à ce qui ne se dit pas toujours avec des mots. Avec le temps, une évidence s'est imposée : le bien-être de l'animal et celui de son humain sont souvent intimement liés.</p>
            <p>C'est cette compréhension qui m'a conduite à développer une double approche. D'un côté, l'hypnose ericksonienne m'offre un cadre d'accompagnement pour aider l'humain à retrouver de l'apaisement, du recul et un nouvel équilibre intérieur. De l'autre, la communication animale me permet d'explorer les ressentis, les besoins et les messages de l'animal.</p>
            <p>Aujourd'hui, j'accompagne chacun avec bienveillance, en cabinet à Houdetot et à distance, dans le respect de son rythme, de sa sensibilité et de son histoire.</p>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 w-full border-t border-site pt-10">
            {[
              ['800h', 'De pratique'], 
              ['+250', 'Accompagnés'], 
              ['2', 'Spécialités complémentaires']
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-3xl font-heading italic text-[#6d8b7a] dark:text-[#8ba394]">{v}</div>
                <div className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-medium leading-tight mt-1">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <PrimaryButton href="/qui-suis-je" className="bg-[var(--site-surface)] border border-site px-10">
              En savoir plus sur mon parcours
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
