"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';

export default function Testimonials() {
  const testimonials = [
    { t: "Katia est très à l'écoute de toutes nos remarques et questions. Cette journée de formation a été très intéressante et enrichissante. Merci à elle. Je vous la recommande !", n: "Inès", r: "Formation", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=200&h=200&fit=crop" },
    { t: "Je recommande Madame Burgun qui est très professionnelle, extrêmement bienveillante ; on se sent apaisée dès son accueil tout en douceur.", n: "Sandra C.", r: "Hypnothérapie", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" },
    { t: "La formation proposée par Madame Burgun est enrichissante. Cette professionnelle possède une grande capacité intuitive avec les animaux, et ses analyses sont tout en finesse et pertinentes.", n: "Sandra C.", r: "Communication Animale", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
    { t: "Katia a effectué deux communications animales. Une pour ma minette qui est partie et une autre pour mon chat qui est toujours auprès de moi. Elle a pu obtenir une véritable communication avec eux. J’ai été époustouflée par les informations transmises, leur rôle et leur place dans ma vie. Je conseille fortement Katia pour la qualité de son travail et la douceur de la transmission.", n: "Cindy", r: "Pour ses chats", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop" },
    { t: "J’ai bénéficié d’une communication avec Katia et même si j’étais un peu dubitatif au départ, elle m’a révélé une situation familiale que très peu de personnes connaissaient. Je suis impressionné qu’elle ait pu voir cela à travers ce que lui a dit mon chat. Bravo à elle. Cela laisse réfléchir.", n: "Michel", r: "Pour son chat", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop" },
    { t: "J’étais inquiète concernant mon cheval blessé à l’œil. Grâce à cette communication, j’ai pu comprendre l’origine du problème et réussir à le soigner alors qu’il refusait qu’on l’approche. La communication animale nous a vraiment aidés. Merci à Katia.", n: "Pauline et Simon", r: "Pour leur cheval", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { t: "Au top ! Katia est une personne bienveillante. Nous avons appris et découvert la communication animale, travaillé sur nos ressentis et réussi à pratiquer nous-mêmes. Nous recommandons Katia, une très belle personne.", n: "Romuald", r: "Formation", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200&h=200&fit=crop" },
    { t: "Pour l'hypnose nous avions fait un léger pont somatique sur un retour de grossesse difficile. Le travail a été très juste.", n: "Romuald", r: "Consultation", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { t: "J’ai eu la chance de suivre une formation en communication animale avec Katia. C’est une formatrice bienveillante, à l’écoute et passionnée. Elle transmet son savoir avec simplicité, authenticité et respect. Grâce à elle, j’ai développé ma sensibilité, affiné mes ressentis et gagné en confiance. Je recommande cette formation dans un cadre sérieux, humain et inspirant.", n: "Participante", r: "Formation", c: "form", cat: "Formation", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" },
    { t: "Je ne savais pas trop à quoi m’attendre et j’ai été agréablement surpris par la douceur de la séance. Tout s’est fait naturellement. J’ai même pu mettre en lumière une origine de stress oubliée. J’ai ressenti un réel apaisement. Une expérience vraiment bénéfique que je recommande.", n: "Pascal", r: "Consultation", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop" },
    { t: "Souffrant depuis longtemps d’une phobie en voiture, mon quotidien était devenu très contraignant. Grâce à la séance d’hypnose, j’ai ressenti une libération impressionnante et retrouvé l’origine de cette peur. Tout s’est fait avec douceur et justesse. Aujourd’hui, je me sens apaisée et sereine. Un immense merci à Madame Burgun pour son professionnalisme.", n: "Véronique", r: "Consultation", c: "hypno", cat: "Hypnose", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" },
    { t: "Merci à Katia pour les deux communications avec notre chat. Nous avons été impressionnés : tout correspondait parfaitement à notre animal. Cela nous a aidés à mieux le comprendre. Je recommande à 1000 % !", n: "Laureline", r: "Pour son chat", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1537151608804-ea2f1423f8c8?w=200&h=200&fit=crop" },
    { t: "Merci encore pour ce que tu nous as apporté sur l’état d’esprit de notre chien Seven après son accident. Tout était cohérent. Technique impressionnante ! Katia est une excellente praticienne.", n: "Romuald", r: "Pour Seven", c: "anim", cat: "Animal", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" }
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
