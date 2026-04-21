import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionBadge, BlurText, PrimaryButton } from '../components/UI';

export default function Testimonials() {
  const testimonials = [
    { t: "L'approche de Katia a complètement transformé ma façon de gérer le stress. Ses séances d'hypnose sont une véritable bulle d'oxygène. Je me sens profondément apaisée depuis.", n: "Sophie L.", r: "Rouen · Anxiété", c: "hypno", cat: "Hypnose" },
    { t: "Une expérience incroyable avec mon chien Milo qui avait des troubles de comportement. Katia a su mettre des mots sur ses maux. Je recommande les yeux fermés.", n: "Marc D.", r: "Dieppe · Pour Milo, berger", c: "anim", cat: "Animal" },
    { t: "La formation en communication animale est fascinante. Katia transmet son savoir avec tellement de bienveillance et de clarté. Une vraie découverte intérieure.", n: "Élise M.", r: "Yvetot · Initiation 2024", c: "form", cat: "Formation" },
    { t: "J'ai arrêté de fumer après 15 ans et deux séances avec Katia. Elle a une écoute rare, une présence qui rassure. Plus besoin de volonté — c'est juste tombé tout seul.", n: "Thomas B.", r: "Fécamp · Arrêt du tabac", c: "hypno", cat: "Hypnose" },
    { t: "Mon chat Hugo était malpropre depuis 6 mois. Après la séance, Katia m'a révélé qu'il supportait mal le nouveau chat de la voisine. En changeant quelques habitudes, tout est rentré dans l'ordre en une semaine.", n: "Julia K.", r: "Saint-Valery · Pour Hugo", c: "anim", cat: "Animal" },
    { t: "Je dormais mal depuis des années. En trois séances, mes nuits sont redevenues sereines. Katia a une façon unique de vous emmener loin, tout en vous gardant en sécurité.", n: "Claire P.", r: "Rouen · Troubles du sommeil", c: "hypno", cat: "Hypnose" },
    { t: "Communication pour ma jument Osha avant une compétition. Katia a décelé une gêne au niveau du dos que le véto n'avait pas vue. Diagnostic confirmé quelques jours plus tard. Bluffant.", n: "Marine H.", r: "Yvetot · Pour Osha, jument", c: "anim", cat: "Animal" },
    { t: "Journée magique. Katia nous accompagne pas à pas, dans un cadre intimiste. Je n'aurais jamais cru ressentir ce que j'ai ressenti avec ses animaux. Merci.", n: "Valérie R.", r: "Luneray · Initiation 2024", c: "form", cat: "Formation" },
    { t: "Après un deuil difficile, Katia m'a aidé à retrouver le goût de vivre. Elle n'a jamais cherché à forcer quoi que ce soit. Un accompagnement respectueux et profond.", n: "Bernard T.", r: "Cany-Barville · Deuil", c: "hypno", cat: "Hypnose" },
    { t: "J'étais sceptique. Katia m'a transmis des informations sur ma chienne que personne ne pouvait connaître. Depuis, notre relation a changé. C'est inexplicable mais réel.", n: "Aude F.", r: "Doudeville · Pour Lila, golden", c: "anim", cat: "Animal" },
    { t: "Phobie de l'avion depuis 20 ans. J'avais tout essayé. Une seule séance avec Katia a suffi pour ma première fois sans angoisse. Je ne comprends toujours pas comment, mais ça marche.", n: "Pauline M.", r: "Paris (visio) · Phobie", c: "hypno", cat: "Hypnose" },
    { t: "Avant d'euthanasier mon vieux Loup, j'ai demandé à Katia de lui parler. Savoir qu'il était prêt et en paix m'a permis de le laisser partir dignement. Je lui serai éternellement reconnaissante.", n: "Isabelle D.", r: "Veules-les-Roses · Fin de vie", c: "anim", cat: "Animal" }
  ];

  const [filter, setFilter] = useState('all');
  const filteredItems = filter === 'all' ? testimonials : testimonials.filter(i => i.c === filter);

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-24">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>
      <section className="px-6 lg:px-16 py-12 text-center">
        <SectionBadge>Témoignages</SectionBadge>
        <BlurText text="Leurs histoires" delay={50} className="mt-8 justify-center text-5xl sm:text-7xl italic font-heading text-site" />
        <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Quelques mots de ceux et celles qui ont partagé un bout de chemin avec moi. Merci pour leur confiance.
        </p>

        <div className="mt-16 flex justify-center flex-wrap gap-4 mb-20">
          {[
            { l: 'Tous', v: 'all' },
            { l: 'Hypnose', v: 'hypno' },
            { l: 'Communication animale', v: 'anim' },
            { l: 'Formations', v: 'form' }
          ].map(f => (
            <button key={f.v} onClick={() => setFilter(f.v)} className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all ${filter === f.v ? 'bg-[#8ba394] border-[#8ba394] text-[#ffffff]' : 'border-site text-[var(--site-muted)] hover:text-site'}`}>{f.l}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto pb-24">
          {filteredItems.map((item, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              key={item.n + i}
              className="p-10 rounded-[2.5rem] bg-[var(--site-surface)] border border-site backdrop-blur-sm relative text-left group"
            >
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] mb-4">{item.cat}</div>
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 text-[#8ba394] fill-[#8ba394]" />)}
              </div>
              <p className="text-lg text-site font-heading italic leading-relaxed mb-10 opacity-90">“{item.t}”</p>
              <div className="pt-8 border-t border-site flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-[#8ba394]/20 border border-[#8ba394]/20 flex items-center justify-center font-heading text-lg italic text-[#8ba394]">{item.n.charAt(0)}</div>
                 <div>
                    <div className="text-site font-medium text-xs font-body">{item.n}</div>
                    <div className="mt-1 text-[9px] text-[var(--site-muted)] uppercase tracking-widest">{item.r}</div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 text-center bg-[var(--site-surface)]">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl sm:text-5xl text-site font-heading italic mb-8">À votre tour d'écrire votre histoire ?</h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Une séance, un échange, une question. Je suis disponible pour vous accompagner avec la même attention.
          </p>
          <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
