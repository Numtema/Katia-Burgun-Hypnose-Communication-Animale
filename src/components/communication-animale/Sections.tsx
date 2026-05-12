"use client";

import React from 'react';
import { SectionBadge } from '../UI';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Zap, Activity, Search, Users, Heart, Sparkles, CheckCircle, GraduationCap } from 'lucide-react';
import Link from 'next/link';

// --- Definition ---
export const Definition = () => (
  <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 text-center">
    <div className="mx-auto max-w-4xl">
      <SectionBadge>Définition</SectionBadge>
      <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Qu’est-ce que la <span className="text-[#8ba394]">communication animale ?</span></h2>
      <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
        <p>La communication animale intuitive est une approche fondée sur l’écoute subtile du vivant. Elle consiste, pour moi, à entrer en connexion avec votre animal afin de capter ses ressentis, ses émotions, ses perceptions, ses images ou les messages qu’il souhaite transmettre.</p>
        <p>Cette communication ne passe pas par les mots au sens habituel. Elle se fait par une forme de perception intérieure, d’intuition et de dialogue sensible avec l’animal.</p>
        <p>Mon rôle est ensuite de vous transmettre avec clarté ce que je reçois, afin de vous aider à mieux comprendre son état émotionnel, ses besoins profonds, ses comportements ou la nature du lien qu’il entretient avec vous.</p>
      </div>
    </div>
  </section>
);

// --- Mirror ---
export const Mirror = () => (
  <section className="bg-[var(--site-surface-solid)] py-24 px-6 lg:px-16 border-y border-site overflow-hidden relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ba394]/5 rounded-full blur-3xl" />
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <SectionBadge>Relationnel</SectionBadge>
        <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic mb-8">L’animal <span className="text-[#8ba394]">comme miroir</span></h2>
        <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
          <p>Dans toute communication, l’animal apparaît comme un véritable miroir de son humain. Ses comportements, ses réactions, ses peurs ou ses modes d’expression peuvent parfois faire écho à ce que vit la personne qui partage sa vie.</p>
          <p>Il ne s’agit pas de jugement, mais d’une lecture plus profonde du lien. Un animal qui semble “exprimer fort” quelque chose peut aussi révéler un déséquilibre, une tension ou une posture que son humain n’ose pas toujours regarder.</p>
          <p>Cette lecture permet souvent de donner du sens à ce qui semblait n’être qu’un problème de comportement, ouvrant un chemin d’apaisement pour l’un comme pour l’autre.</p>
        </div>
      </div>
      <div className="relative aspect-square sm:aspect-video lg:aspect-square">
        <div className="absolute inset-0 border border-site rounded-[3rem] overflow-hidden">
           <Image 
             src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200" 
             alt="Lien profond chien humain" 
             fill
             className="object-cover" 
             sizes="(max-width: 1024px) 100vw, 50vw"
           />
        </div>
      </div>
    </div>
  </section>
);

// --- Applications ---
const appItems = [
  { icon: Zap, t: 'Comportements inexpliqués', d: 'Agressivité, stress, agitation, destruction, malpropreté, peur ou tristesse.' },
  { icon: Activity, t: 'Difficultés physiques', d: 'En complément vétérinaire, pour comprendre le ressenti physique de l’animal.' },
  { icon: Search, t: 'Animal perdu ou en fugue', d: 'Tenter de capter des indices sur son état ou son environnement (sans garantie).' },
  { icon: Users, t: 'Adoption & transition', d: 'Arrivée dans un nouveau foyer, séparation, voyage ou déménagement.' },
  { icon: Heart, t: 'Fin de vie', d: 'Entendre son ressenti et accompagner ce moment délicat avec douceur et paix.' },
  { icon: Sparkles, t: 'Effet miroir de l’animal', d: 'Comprendre comment le message que reçoit l’animal a une résonance bien plus profonde, un miroir avec son « moi ».' }
];

export const Applications = () => (
  <section className="py-24 px-6 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionBadge>Cas d'application</SectionBadge>
        <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic">Dans quelles situations <span className="text-[#8ba394]">me consulter ?</span></h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
        {appItems.map((item, idx) => (
          <div key={idx} className="relative pt-12 group">
            <div className="absolute inset-0 top-16 bg-[#8ba394]/5 dark:bg-[#8ba394]/10 rounded-[3rem] transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.02] border border-[#8ba394]/20" />
            <div className="bg-[var(--site-surface-solid)] rounded-[2.5rem] border border-site p-8 sm:p-10 relative z-10 flex flex-col h-full shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#8ba394]/50 text-left">
              <div className="absolute -top-4 left-8 bg-[#8ba394] text-[#ffffff] p-3 rounded-xl shadow-lg z-30 transform -rotate-3 group-hover:rotate-0 transition-transform border-2 border-[var(--site-surface-solid)]">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="absolute top-8 right-8">
                 <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-site text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-medium">
                   <CheckCircle className="w-3 h-3 text-[#8ba394]" /> Situation
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
                 <p className="text-[9px] uppercase tracking-widest text-[#8ba394]/80">Communication</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Species ---
const species = [
  { name: 'Chiens', image: '/assets/species/dog.png' },
  { name: 'Chats', image: '/assets/species/cat.png' },
  { name: 'Chevaux', image: '/assets/species/horse.png' },
  { name: 'Lapins', image: '/assets/species/rabbit.png' },
  { name: 'Oiseaux', image: '/assets/species/bird.png' },
  { name: 'Reptiles', image: '/assets/species/reptile.png' },
  { name: 'NAC', image: '/assets/species/nac.png' }
];

export const Species = () => (
  <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <SectionBadge>Tous les animaux</SectionBadge>
        <h2 className="mt-8 text-4xl text-site font-heading italic">Avec quels animaux <span className="text-[#8ba394]">je communique ?</span></h2>
        <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto">La connexion ne dépend pas du langage humain, mais du ressenti et du lien universel.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 mt-12">
        {species.map(animal => (
          <motion.div 
            key={animal.name} 
            whileHover={{ y: -10 }}
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-site bg-[var(--site-surface)] transition-all hover:border-[#8ba394]/50 shadow-sm hover:shadow-xl"
          >
            <Image 
              src={animal.image} 
              alt={animal.name} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 15vw"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--site-bg)] to-transparent pointer-events-none">
              <span className="text-site font-heading italic text-lg sm:text-xl block text-center">{animal.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-16 text-center text-[var(--site-muted)] italic font-light text-base">Et bien d'autres animaux encore...</p>
    </div>
  </section>
);

// --- Philosophy ---
export const Philosophy = () => (
  <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
    <div className="mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <SectionBadge>Philosophie</SectionBadge>
        <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic">Ma manière <span className="text-[#8ba394]">de travailler</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
          <p>J’aborde chaque communication avec sérieux, respect et délicatesse. Je ne cherche pas à plaquer une interprétation toute faite sur votre animal. Chaque consultation est unique.</p>
          <p>J’écoute ce qui se présente, je transmets ce que je perçois avec honnêteté, et nous mettons ensemble du sens sur ce qui émerge pour favoriser un mieux-être relationnel.</p>
        </div>
        <div className="p-8 bg-[var(--site-surface-solid)] rounded-3xl border border-site">
          <h3 className="text-site font-medium mb-6 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#8ba394]" /> Mes engagements :</h3>
          <ul className="space-y-4 text-sm text-[var(--site-muted)] font-light">
             <li>• Mieux comprendre l’animal</li>
             <li>• Mieux comprendre votre lien</li>
             <li>• Ouvrir des pistes concrètes</li>
             <li>• Remettre de l’écoute et du sens</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-24 p-8 rounded-[2rem] border border-[#8ba394]/20 bg-[#8ba394]/5 flex flex-col sm:flex-row items-center gap-8">
        <GraduationCap className="h-10 w-10 text-[#8ba394] shrink-0" />
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-site font-medium mb-2">Envie d'apprendre ?</h3>
          <p className="text-[var(--site-muted)] text-sm font-light mb-4 text-balance">Je propose également des formations pour découvrir ou approfondir la communication intuitive.</p>
          <Link href="/formation" className="text-xs uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">Découvrir la formation →</Link>
        </div>
      </div>
    </div>
  </section>
);
