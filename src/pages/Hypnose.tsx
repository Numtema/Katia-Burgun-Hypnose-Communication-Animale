import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Moon, Sun, Heart, RefreshCw, Shield, Zap, CheckCircle, ArrowLeft } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../components/UI';

const hypnoseImg = "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200";

export default function Hypnose() {
  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>
      <section className="px-6 lg:px-16 py-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge>Hypnose</SectionBadge>
            <BlurText text="Hypnose Ericksonienne" delay={50} className="mt-8 text-5xl sm:text-7xl italic font-heading text-site" />
            <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
              Un voyage intérieur bienveillant pour libérer vos blocages, apaiser votre mental et retrouver votre pleine puissance. L'hypnose Ericksonienne respecte votre rythme et votre unicité.
            </p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">60€</div> Par séance</div>
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">1h30</div> Durée moyenne</div>
               <div><div className="text-xl text-nowrap font-heading italic text-[#8ba394] mb-1">Visio / Cabinet</div> Modalités</div>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-6">
               <PrimaryButton href="#contact">Réserver une séance</PrimaryButton>
               <Link to="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-transparent hover:border-[#8ba394]">Voir les tarifs</Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site">
            <img src={hypnoseImg} alt="Femme en relaxation profonde" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 text-center mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-heading italic text-[#8ba394] mb-8 leading-tight">
          « L'inconscient est un puissant allié. L'hypnose lui parle sa langue. »
        </h2>
        <p className="text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
          L'hypnose Ericksonienne, développée par Milton Erickson, est une approche douce et respectueuse. Vous restez toujours conscient(e), pleinement acteur(rice) du changement. C'est un dialogue avec votre inconscient qui connaît déjà les ressources dont vous avez besoin.
        </p>
      </section>

      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionBadge>Domaines d'accompagnement</SectionBadge>
          <h2 className="mt-8 text-4xl text-site font-heading italic mb-4">Pour qui, pour quoi ?</h2>
          <p className="text-[var(--site-muted)] font-light text-sm sm:text-base mb-16 max-w-2xl">
            L'hypnose Ericksonienne s'adresse à toute personne souhaitant dépasser un blocage ou retrouver un équilibre intérieur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Moon, title: 'Sommeil & Stress', desc: 'Retrouver un sommeil profond, apaiser l\'anxiété, calmer les pensées incessantes.' },
              { icon: Zap, title: 'Confiance en soi', desc: 'Affirmer sa valeur, oser prendre sa place, se libérer du syndrome de l\'imposteur.' },
              { icon: RefreshCw, title: 'Deuils & Émotions', desc: 'Traverser une séparation, un deuil, un bouleversement. Retrouver de l\'apaisement.' },
              { icon: RefreshCw, title: 'Addictions', desc: 'Arrêter de fumer, se libérer du grignotage, sortir de comportements automatiques.' },
              { icon: Shield, title: 'Phobies & Peurs', desc: 'Dépasser une phobie, apprivoiser ses peurs, retrouver sa liberté d\'agir.' },
              { icon: Heart, title: 'Blessures anciennes', desc: 'Apaiser les traumatismes, couper les cordes du passé, se reconstruire en douceur.' },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-3xl border border-site bg-[var(--site-surface-solid)] hover:border-[#8ba394]/30 transition-all">
                <item.icon className="h-6 w-6 text-[#8ba394] mb-6" />
                <h3 className="text-site font-body font-medium mb-3">{item.title}</h3>
                <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 lg:px-16">
         <div className="mx-auto max-w-3xl text-center">
           <SectionBadge>Déroulé</SectionBadge>
           <h2 className="text-4xl text-site font-heading italic mt-8 mb-8">Le déroulé d'une séance</h2>
           <div className="space-y-12 text-left mt-16">
             {[
               { n: '01', t: 'Échange initial', d: 'Un temps pour faire connaissance et cerner votre objectif. Vos attentes, votre histoire, votre besoin.' },
               { n: '02', t: 'Installation', d: 'Vous vous installez confortablement. Je vous guide dans une relaxation profonde, à votre rythme.' },
               { n: '03', t: 'Travail hypnotique', d: 'Votre inconscient prend le relais. Images, sensations, métaphores. Vous restez toujours aux commandes.' },
               { n: '04', t: 'Retour et ancrage', d: 'Un retour en douceur, un temps d\'échange, des clés pour ancrer les changements dans votre quotidien.' }
             ].map(step => (
               <div key={step.n} className="flex gap-8 group">
                 <span className="text-5xl font-heading italic text-[#8ba394]/30 group-hover:text-[#8ba394]/60 transition-colors">{step.n}</span>
                 <div>
                   <h4 className="text-site font-body font-medium text-lg mb-2">{step.t}</h4>
                   <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[var(--site-surface-solid)] border border-site rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ba394]/5 rounded-full blur-3xl group-hover:bg-[#8ba394]/10 transition-colors" />
          
          <div className="relative z-10">
            <SectionBadge>Tarif unique</SectionBadge>
            <h2 className="mt-6 text-3xl font-heading italic text-site mb-2">Séance d'Hypnose Ericksonienne</h2>
            <p className="text-[var(--site-muted)] text-sm font-light mb-8">Une séance complète, sans limite d'objectif, à votre rythme.</p>
            <div className="text-5xl font-heading italic text-[#8ba394] mb-4">60€</div>
            <Link to="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors">Remboursement possible selon votre mutuelle — voir la liste</Link>
          </div>
          <div className="space-y-6 relative z-10">
            <ul className="space-y-4">
              {['Entretien préalable approfondi', 'Séance complète (1h à 1h30)', 'Outils & exercices pour continuer chez vous', 'Facture pour remboursement mutuelle', 'Choix : cabinet ou visio'].map(item => (
                <li key={item} className="flex gap-4 text-site text-sm font-light"><CheckCircle className="h-5 w-5 text-[#8ba394] shrink-0" /> {item}</li>
              ))}
            </ul>
            <div className="pt-6">
               <PrimaryButton href="#contact" className="w-full justify-center">Réserver maintenant</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Un premier pas</SectionBadge>
          <h2 className="mt-8 text-4xl text-site font-heading italic mb-8">Prêt(e) à retrouver votre paix intérieure ?</h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Réservez votre première séance ou échangeons au téléphone pour vérifier que l'hypnose est adaptée à votre besoin. C'est gratuit, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
             <a href="tel:0677495288" className="px-8 py-3 rounded-full border border-site text-[10px] uppercase tracking-widest font-bold text-site hover:bg-[var(--site-surface)] transition-all">06 77 49 52 88</a>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-16 pb-8 mx-auto max-w-7xl text-center">
         <p className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest font-bold opacity-60">
           Disclaimer : L'hypnose ne se substitue en aucun cas à un avis, un diagnostic ou un traitement médical professionnel.
         </p>
      </div>
    </div>
  );
}
