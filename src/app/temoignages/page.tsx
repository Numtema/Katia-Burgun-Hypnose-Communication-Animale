"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';

export default function Testimonials() {
  const testimonials = [
    { t: "J’ai également eu la chance de faire appel à Katia pour une communication animale avec le poney de ma fille, et l’expérience a été tout simplement incroyable. Katia a fait preuve d’un grand professionnalisme et d’une écoute attentive. Les informations partagées étaient d’une justesse impressionnante, décrivant avec précision son caractère, ses émotions. Ça a renforcé encore davantage le lien.", n: "Mère d'une cavalière", r: "Pour un poney", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=200&h=200&fit=crop" },
    { t: "Katia est une formatrice exceptionnelle, à la fois passionnée, bienveillante et profondément à l’écoute. Elle transmet son savoir avec clarté et une authenticité rare. Sa pédagogie est structurée et intuitive. Cette formation est une véritable expérience personnelle qui invite à développer sa sensibilité. Une formation riche, transformante et profondément humaine.", n: "Anissa", r: "Formation Init.", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    { t: "L'approche de Katia a complètement transformé ma façon de gérer le stress. Ses séances d'hypnose sont une véritable bulle d'oxygène. Je me sens profondément apaisée depuis.", n: "Sophie L.", r: "Rouen", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
    { t: "Une expérience incroyable avec mon chien Milo qui avait des troubles de comportement. Katia a su mettre des mots sur ses maux. Je recommande les yeux fermés.", n: "Marc D.", r: "Dieppe · Pour Milo", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop" },
    { t: "La formation en communication animale est fascinante. Katia transmet son savoir avec tellement de bienveillance et de clarté. Une vraie découverte intérieure.", n: "Élise M.", r: "Yvetot", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" },
    { t: "J'ai arrêté de fumer après 15 ans et deux séances avec Katia. Elle a une écoute rare, une présence qui rassure. Plus besoin de volonté — c'est juste tombé tout seul.", n: "Thomas B.", r: "Fécamp", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { t: "Mon chat Hugo était malpropre depuis 6 mois. Après la séance, Katia m'a révélé qu'il supportait mal le nouveau chat de la voisine. En changeant quelques habitudes, tout est rentré dans l'ordre en une semaine.", n: "Julia K.", r: "Saint-Valery · Pour Hugo", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop" },
    { t: "Je dormais mal depuis des années. En trois séances, mes nuits sont redevenues sereines. Katia a une façon unique de vous emmener loin, tout en vous gardant en sécurité.", n: "Claire P.", r: "Rouen", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { t: "Communication pour ma jument Osha avant une compétition. Katia a décelé une gêne au niveau du dos que le véto n'avait pas vue. Diagnostic confirmé quelques jours plus tard. Bluffant.", n: "Marine H.", r: "Yvetot · Pour Osha", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
    { t: "Journée magique. Katia nous accompagne pas à pas, dans un cadre intimiste. Je n'aurais jamais cru ressentir ce que j'ai ressenti avec ses animaux. Merci.", n: "Valérie R.", r: "Luneray", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop" },
    { t: "Après un deuil difficile, Katia m'a aidé à retrouver le goût de vivre. Elle n'a jamais cherché à forcer quoi que ce soit. Un accompagnement respectueux et profond.", n: "Bernard T.", r: "Cany-Barville", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
    { t: "J'étais sceptique. Katia m'a transmis des informations sur ma chienne que personne ne pouvait connaître. Depuis, notre relation a changé. C'est inexplicable mais réel.", n: "Aude F.", r: "Doudeville · Pour Lila", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1537151608804-ea2f1423f8c8?w=200&h=200&fit=crop" },
    { t: "Phobie de l'avion depuis 20 ans. J'avais tout essayé. Une seule séance avec Katia a suffi pour ma première fois sans angoisse. Je ne comprends toujours pas comment, mais ça marche.", n: "Pauline M.", r: "Paris", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" },
    { t: "Avant d'euthanasier mon vieux Loup, j'ai demandé à Katia de lui parler. Savoir qu'il était prêt et en paix m'a permis de le laisser partir dignement.", n: "Isabelle D.", r: "Veules-les-Roses", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=200&h=200&fit=crop" }
  ];

  const [filter, setFilter] = useState('all');
  const filteredItems = filter === 'all' ? testimonials : testimonials.filter(i => i.c === filter);

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-24">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>
      <section className="px-6 lg:px-16 py-12 text-center">
        <SectionBadge>Témoignages</SectionBadge>
        <BlurText text="Leurs histoires" delay={50} className="mt-8 justify-center text-5xl sm:text-7xl italic font-heading text-site" />
        <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Quelques mots de ceux et celles qui ont partagé un bout de chemin avec moi. Merci pour leur confiance.
        </p>

        <div className="mt-16 flex justify-center flex-wrap gap-4 mb-24">
          {[
            { l: 'Tous', v: 'all' },
            { l: 'Hypnose', v: 'hypno' },
            { l: 'Communication animale', v: 'anim' },
            { l: 'Formations', v: 'form' }
          ].map(f => (
            <button key={f.v} onClick={() => setFilter(f.v)} className={cn("px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all", filter === f.v ? 'bg-[#8ba394] border-[#8ba394] text-[#ffffff]' : 'border-site text-[var(--site-muted)] hover:text-site')}>{f.l}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 max-w-7xl mx-auto pb-24">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4 }}
                key={item.n + i}
                className="relative pt-8 px-2 pb-6 group"
              >
                <div className="absolute inset-0 top-16 bg-[#8ba394]/5 dark:bg-[#8ba394]/10 rounded-[3rem] transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.02] border border-[#8ba394]/20" />
                
                <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-[var(--site-surface-solid)] border border-site shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:border-[#8ba394]/50 z-10 flex flex-col h-full text-left">
                  
                  <div className="absolute -top-12 left-8 w-24 h-24 rounded-3xl overflow-hidden border-4 border-[var(--site-surface-solid)] shadow-xl rotate-[-3deg] group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 z-20">
                    <img src={item.img} alt={item.n} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>

                  <div className="absolute top-2 left-6 bg-[#8ba394] text-[#ffffff] text-[11px] font-bold px-3 py-1.5 rounded-xl shadow-lg z-30 transform -rotate-12 group-hover:-rotate-6 transition-transform">
                    5/5
                  </div>

                  <div className="ml-auto inline-flex items-center gap-1.5 border border-[#8ba394]/30 bg-[#8ba394]/10 px-3 py-1 rounded-full text-[8.5px] uppercase tracking-widest font-bold text-[#8ba394] mb-6 shadow-sm">
                     <CheckCircle2 className="w-3 h-3 text-[#8ba394]" /> Avis vérifié
                  </div>
                  
                  <p className="text-lg text-site font-heading italic leading-relaxed mb-10 flex-1 opacity-90 mt-2">
                    “{item.t}”
                  </p>

                  <div className="pt-6 border-t border-site flex items-center justify-between">
                     <div>
                        <div className="text-site font-bold text-xs uppercase tracking-widest mb-1">{item.n}</div>
                        <div className="text-[9px] text-[#8ba394] uppercase tracking-widest font-bold">{item.cat} • <span className="text-[var(--site-muted)] font-normal">{item.r}</span></div>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 text-center bg-[var(--site-surface)]">
        <div className="mx-auto max-w-2xl">
           <h2 className="text-4xl sm:text-5xl text-site font-heading italic mb-8">À votre tour d'écrire votre histoire ?</h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Une séance, un échange, une question. Je suis disponible pour vous accompagner avec la même attention.
          </p>
          <PrimaryButton href="/#contact">Prendre rendez-vous</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
