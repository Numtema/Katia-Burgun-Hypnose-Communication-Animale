"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';

export default function Testimonials() {
  const testimonials = [
    { t: "J’ai eu la chance de faire une communication animale avec Katia pour mon cheval avec qui je rencontrais de nombreuses problématiques. L’expérience a été tellement bouleversante et juste que je vais renouveler sans hésiter. Katia est d’une finesse d’analyse absolument remarquable. Elle ne se contente pas de décrire un état émotionnel : elle va beaucoup plus loin, avec une compréhension profonde du lien entre l’animal et son gardien. Ce qu’elle transmet est d’une précision étonnante, avec des détails et des ressentis qui m’ont sincèrement stupéfaite. Je recommande les yeux fermés.", n: "Louise Q.", r: "Pour son cheval", c: "anim", cat: "Animal" },
    { t: "J’ai eu la chance de faire une séance d’hypnose avec Katia et cette expérience m’a énormément apporté. Un véritable voyage intérieur qui m’a permis de débloquer certaines problématiques liées à mon passé. Katia est d’une douceur et d’une bienveillance rares. Son approche est profondément holistique : elle prend le temps d’écouter, de comprendre et d’accompagner avec beaucoup d’humanité. Je me suis sentie en totale confiance, et les bénéfices ont été réels dès les jours suivants.", n: "Louise Q.", r: "Consultation", c: "hypno", cat: "Hypnose" },
    { t: "Consultée pour des problèmes de colères, Katia a su très vite me mettre en confiance en comprenant mes besoins mieux que moi. Sa voix est rassurante et chaleureuse. Cela m’a permis d’entrer en hypnose très vite et profondément. Je recommande vivement !", n: "Jérémie", r: "Consultation", c: "hypno", cat: "Hypnose" },
    { t: "Katia est très à l'écoute de toutes nos remarques et questions. Cette journée de formation a été très intéressante et enrichissante. Merci à elle. Je vous la recommande !", n: "Inès", r: "Formation", c: "form", cat: "Formation" },
    { t: "Je recommande Madame Burgun qui est très professionnelle, extrêmement bienveillante ; on se sent apaisée dès son accueil tout en douceur.", n: "Sandra C.", r: "Hypnothérapie", c: "hypno", cat: "Hypnose" },
    { t: "La formation proposée par Madame Burgun est enrichissante. Cette professionnelle possède une grande capacité intuitive avec les animaux, et ses analyses sont tout en finesse et pertinentes.", n: "Sandra C.", r: "Communication Animale", c: "form", cat: "Formation" },
    { t: "Katia a effectué deux communications animales. Une pour ma minette qui est partie et une autre pour mon chat qui est toujours auprès de moi. Elle a pu obtenir une véritable communication avec eux. J’ai été époustouflée par les informations transmises, leur rôle et leur place dans ma vie. Je conseille fortement Katia pour la qualité de son travail et la douceur de la transmission.", n: "Cindy", r: "Pour ses chats", c: "anim", cat: "Animal" },
    { t: "J’ai bénéficié d’une communication avec Katia et même si j’étais un peu dubitatif au départ, elle m’a révélé une situation familiale que très peu de personnes connaissaient. Je suis impressionné qu’elle ait pu voir cela à travers ce que lui a dit mon chat. Bravo à elle. Cela laisse réfléchir.", n: "Michel", r: "Pour son chat", c: "anim", cat: "Animal" },
    { t: "J’étais inquiète concernant mon cheval blessé à l’œil. Grâce à cette communication, j’ai pu comprendre l’origine du problème et réussir à le soigner alors qu’il refusait qu’on l’approche. La communication animale nous a vraiment aidés. Merci à Katia.", n: "Pauline et Simon", r: "Pour leur cheval", c: "anim", cat: "Animal" },
    { t: "Au top ! Katia est une personne bienveillante. Nous avons appris et découvert la communication animale, travaillé sur nos ressentis et réussi à pratiquer nous-mêmes. Nous recommandons Katia, une très belle personne.", n: "Romuald", r: "Formation", c: "form", cat: "Formation" },
    { t: "Pour l'hypnose nous avions fait un léger pont somatique sur un retour de grossesse difficile. Le travail a été très juste.", n: "Romuald", r: "Consultation", c: "hypno", cat: "Hypnose" },
    { t: "J’ai eu la chance de suivre une formation en communication animale avec Katia. C’est une formatrice bienveillante, à l’écoute et passionnée. Elle transmet son savoir avec simplicité, authenticité et respect. Grâce à elle, j’ai développé ma sensibilité, affiné mes ressentis et gagné en confiance. Je recommande cette formation dans un cadre sérieux, humain et inspirant.", n: "Participante", r: "Formation", c: "form", cat: "Formation" },
    { t: "Je ne savais pas trop à quoi m’attendre et j’ai été agréablement surpris par la douceur de la séance. Tout s’est fait naturellement. J’ai même pu mettre en lumière une origine de stress oubliée. J’ai ressenti un réel apaisement. Une expérience vraiment bénéfique que je recommande.", n: "Pascal", r: "Consultation", c: "hypno", cat: "Hypnose" },
    { t: "Souffrant depuis longtemps d’une phobie en voiture, mon quotidien était devenu très contraignant. Grâce à la séance d’hypnose, j’ai ressenti une libération impressionnante et retrouvé l’origine de cette peur. Tout s’est fait avec douceur et justesse. Aujourd’hui, je me sens apaisée et sereine. Un immense merci à Madame Burgun pour son professionnalisme.", n: "Véronique", r: "Consultation", c: "hypno", cat: "Hypnose" },
    { t: "Merci à Katia pour les deux communications avec notre chat. Nous avons été impressionnés : tout correspondait parfaitement à notre animal. Cela nous a aidés à mieux le comprendre. Je recommande à 1000 % !", n: "Laureline", r: "Pour son chat", c: "anim", cat: "Animal" },
    { t: "Merci encore pour ce que tu nous as apporté sur l’état d’esprit de notre chien Seven après son accident. Tout était cohérent. Technique impressionnante ! Katia est une excellente praticienne.", n: "Romuald", r: "Pour Seven", c: "anim", cat: "Animal" }
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
                  

                  <div className="absolute -top-4 left-8 bg-[#8ba394] text-[#ffffff] text-[11px] font-bold px-4 py-2 rounded-xl shadow-lg z-30 transform -rotate-3 group-hover:rotate-0 transition-transform border-2 border-[var(--site-surface-solid)]">
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

        {/* Google Review CTA */}
        <div className="mt-20 mx-auto max-w-3xl p-10 sm:p-12 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-[#8ba394]/20 shadow-2xl text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ba394]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl text-site font-heading italic mb-4">Vous avez vécu une séance avec moi ?</h3>
            <p className="text-[var(--site-muted)] font-light text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Votre retour aide d’autres personnes à franchir le pas en confiance. Merci pour votre partage.
            </p>
            <a 
              href="https://g.page/r/CccBc3gVxtbjEBM/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#8ba394] hover:bg-[#7a9283] text-white px-8 py-4 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all hover:scale-105 shadow-lg shadow-[#8ba394]/20"
            >
              <Star className="w-4 h-4 fill-white" />
              Laisser un avis Google
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[var(--site-surface-solid)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge>Ma Philosophie</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic">Une pratique guidée par <span className="text-[#8ba394]">des valeurs fortes</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
            {[
              { t: 'Respect', d: 'Respecter votre rythme, votre histoire, votre sensibilité, mais aussi celle de l’animal.' },
              { t: 'Écoute', d: 'Prendre le temps d’entendre ce qui se dit, mais aussi ce qui se ressent, ce qui se répète ou ce qui reste silencieux.' },
              { t: 'Délicatesse', d: 'Avancer avec prudence, sans jugement, sans brusquer ce qui demande à être accueilli.' },
              { t: 'Clarté', d: 'Mettre des mots simples sur ce qui émerge, afin que chacun puisse mieux comprendre ce qu’il vit.' },
              { t: 'Humilité', d: 'Je ne prétends pas tout savoir ni tout résoudre. J’accompagne avec sincérité, dans le respect de mes compétences et de mes limites.' }
            ].map(item => (
              <div key={item.t} className="space-y-4 text-center">
                 <div className="h-px w-12 bg-[#8ba394]/30 mx-auto" />
                 <h3 className="text-site text-lg font-medium tracking-wide">{item.t}</h3>
                 <p className="text-[var(--site-muted)] text-[11px] font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
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
