"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Moon, Heart, RefreshCw, Shield, Zap, CheckCircle, ArrowLeft, Brain, Plus, Compass, Anchor, Cloud, ShieldCheck, MessageCircle } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';
import Script from 'next/script';

const hypnoseImg = "/assets/hypnose-katia-burgun-houdetot-normandie.png";

const faqs = [
  { 
    q: "Qu'est-ce que l'hypnose Ericksonienne ?", 
    a: "Contrairement à l'hypnose de spectacle, c'est une méthode douce et respectueuse où l'inconscient est considéré comme un réservoir de ressources. Le praticien utilise des métaphores et des suggestions indirectes pour aider le patient à trouver ses propres solutions." 
  },
  { 
    q: "Vais-je perdre le contrôle ?", 
    a: "Pas du tout. Vous restez conscient(e) pendant toute la séance. Vous ne ferez rien qui aille à l'encontre de vos valeurs. C'est un état de relaxation profonde, un peu comme lorsque vous êtes 'dans la lune' ou absorbé par un bon film." 
  },
  { 
    q: "L'hypnose fonctionne-t-elle sur tout le monde ?", 
    a: "Chaque personne est hypnotisable, car l'état de transe est un état naturel que nous expérimentons tous plusieurs fois par jour sans le savoir. La seule condition est d'être volontaire et d'avoir envie de vivre l'expérience." 
  },
  { 
    q: "Combien de séances sont nécessaires ?", 
    a: "L'hypnose fait partie des thérapies brèves. Parfois, un déclic se produit en une seule séance. Cependant, pour ancrer un changement profond et durable, un accompagnement de 3 à 5 séances est souvent recommandé." 
  },
  { 
    q: "Proposez-vous des séances en ligne ?", 
    a: "Oui, les séances en visio sont tout aussi efficaces qu'en cabinet. L'essentiel est que vous soyez dans un environnement calme et confortable où vous ne serez pas dérangé." 
  },
  { 
    q: "Est-ce remboursé ?", 
    a: "L'hypnose n'est pas remboursée par la Sécurité Sociale, mais de nombreuses mutuelles le font. Je vous remets une facture à la fin de chaque séance pour vos démarches." 
  }
];

export default function Hypnose() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-16 py-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge>Accompagnement doux</SectionBadge>
            <BlurText text="Hypnose Ericksonienne" delay={50} className="mt-8 text-4xl sm:text-6xl italic font-heading text-site" />
            <h1 className="mt-4 text-3xl sm:text-5xl italic font-heading text-[#8ba394] leading-tight opacity-90">Hypnose Ericksonienne à Houdetot</h1>
            
            <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
              Un voyage intérieur bienveillant pour libérer vos blocages, apaiser votre mental et retrouver votre équilibre. Une approche respectueuse qui s'appuie sur vos propres ressources inconscientes.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">60 €</div> Par séance</div>
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">1h30</div> Durée moyenne</div>
               <div><div className="text-xl text-nowrap font-heading italic text-[#8ba394] mb-1">Houdetot / Visio</div> Lieux</div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
               <PrimaryButton href="#contact">Réserver une séance</PrimaryButton>
               <a href="tel:0677495288" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-transparent hover:border-[#8ba394]">06 77 49 52 88</a>
            </div>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-2xl">
            <img src={hypnoseImg} alt="Séance d'hypnose apaisante" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-24 px-6 lg:px-16 text-center mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-heading italic text-[#8ba394] mb-8 leading-tight">
          « L'inconscient est un puissant allié. L'hypnose lui parle sa langue. »
        </h2>
        <div className="mx-auto w-16 h-px bg-[#8ba394]/30 mb-8" />
        <p className="text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
          L'hypnose Ericksonienne, développée par Milton Erickson, est une approche humaine et personnalisée. L'état de transe hypnotique est un état naturel de relaxation profonde qui permet de communiquer avec vos ressources intérieures pour initier le changement.
        </p>
      </section>

      {/* Domaines d'application */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <SectionBadge>Mieux-être</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Pourquoi consulter <span className="text-[#8ba394]">en hypnose ?</span></h2>
            <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto italic">Un accompagnement doux pour dépasser vos blocages et retrouver un équilibre intérieur.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
            {[
              { image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e4d?auto=format&fit=crop&q=80&w=800', icon: Moon, title: 'Sommeil & Stress', desc: 'Retrouver un sommeil profond, apaiser l\'anxiété, calmer les ruminations et les pensées incessantes.' },
              { image: 'https://images.unsplash.com/photo-1542598953-41525a720dc5?auto=format&fit=crop&q=80&w=800', icon: Zap, title: 'Confiance en soi', desc: 'Affirmer sa valeur, oser prendre sa place, se libérer du regard des autres et du doute de soi.' },
              { image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800', icon: RefreshCw, title: 'Bloquages émotionnels', desc: 'Traverser une séparation, un changement de vie ou un bouleversement avec sérénité.' },
              { image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800', icon: Anchor, title: 'Addictions & Habitudes', desc: 'Arrêter de fumer, se libérer du grignotage, sortir de comportements automatiques néfastes.' },
              { image: 'https://images.unsplash.com/photo-1454486847846-928ef231b25f?auto=format&fit=crop&q=80&w=800', icon: Shield, title: 'Phobies & Peurs', desc: 'Dompter ses phobies (avion, insectes, etc.), apprivoiser ses peurs et retrouver sa liberté d\'agir.' },
              { image: 'https://images.unsplash.com/photo-1515377905703-c47fea345719?auto=format&fit=crop&q=80&w=800', icon: Cloud, title: 'Mieux-être durable', desc: 'Retrouver de l\'énergie, une clarté mentale et une relation plus sereine avec soi-même.' },
            ].map((item, idx) => (
              <div key={idx} className="relative pt-12 group">
                <div className="absolute inset-x-0 bottom-0 top-12 border border-[#8ba394]/30 rounded-[2.5rem] bg-[var(--site-bg)] translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#8ba394]/50" />
                <div className="bg-[var(--site-surface-solid)] rounded-[2.5rem] border border-site p-8 sm:p-10 relative z-10 flex flex-col h-full shadow-xl">
                  <div className="absolute -top-10 left-8">
                    <div className="relative">
                      <img src={item.image} alt={item.title} className="w-20 h-20 rounded-[1.5rem] object-cover border-4 border-[var(--site-surface-solid)] shadow-md grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" />
                      <div className="absolute -bottom-3 -left-3 bg-[#8ba394] text-[var(--site-bg)] p-2 rounded-xl border-[4px] border-[var(--site-surface-solid)]">
                        <item.icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-8 right-8">
                     <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-site text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-medium">
                       <CheckCircle className="w-3 h-3 text-[#8ba394]" /> Objectif
                     </div>
                  </div>
                  <div className="mt-12 flex-1">
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

      {/* Language Section */}
      <section className="py-24 px-6 lg:px-16 overflow-hidden relative">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <SectionBadge>Approche</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic mb-8">Le langage de <span className="text-[#8ba394]">votre inconscient</span></h2>
            <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
              <p>Contrairement aux idées reçues, vous restez maître de vous-même pendant une séance d'hypnose. Vous entendez ma voix, vous pouvez bouger, parler. L'état hypnotique est simplement une focalisation étroite de l'attention qui permet au mental de lâcher prise.</p>
              <p>C'est à ce moment que nous pouvons travailler ensemble avec votre inconscient, en utilisant des suggestions bienveillantes, des histoires et des images qui feront écho à vos propres solutions intérieures.</p>
              <p>Je vous accompagne pas à pas, sans jugement, dans un cadre sécurisant à Houdetot ou depuis le confort de votre domicile en visio.</p>
            </div>
          </div>
          <div className="lg:order-1 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-site">
               <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" alt="Méditation et calme intérieur" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[var(--site-surface)] border border-site rounded-3xl p-6 flex flex-col items-center justify-center text-center">
              <div className="text-2xl font-heading italic text-[#8ba394]">100%</div>
              <div className="text-[8px] uppercase tracking-widest font-bold text-site">Naturel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Progress */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <SectionBadge>Processus</SectionBadge>
            <h2 className="text-4xl text-site font-heading italic mt-8 mb-8">Comment se passe <span className="text-[#8ba394]">une séance ?</span></h2>
          </div>
          <div className="space-y-12">
            {[
              { i: MessageCircle, t: '1. Échange initial', d: 'Un temps pour faire connaissance et cerner votre objectif. Vos attentes, votre histoire, votre besoin.' },
              { i: Compass, t: '2. Installation', d: 'Vous vous installez confortablement. Je vous guide dans une relaxation douce et progressive.' },
              { i: Brain, t: '3. Travail hypnotique', d: 'Votre inconscient explore de nouvelles pistes via des métaphores. Vous restez toujours aux commandes.' },
              { i: Heart, t: '4. Retour et ancrage', d: 'Un retour en douceur ici et maintenant, avec des clés pour ancrer les changements durablement.' }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="text-5xl font-heading italic text-[#8ba394]/20 group-hover:text-[#8ba394]/50 transition-colors shrink-0">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</div>
                <div>
                  <h3 className="text-site font-heading italic text-2xl mb-2">{step.t}</h3>
                  <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[var(--site-surface)] border border-site rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ba394]/5 rounded-full blur-3xl group-hover:bg-[#8ba394]/10 transition-colors" />
          
          <div className="relative z-10">
            <SectionBadge>Séance individuelle</SectionBadge>
            <h2 className="mt-6 text-3xl font-heading italic text-site mb-2">Hypnose Ericksonienne</h2>
            <p className="text-[var(--site-muted)] text-sm font-light mb-8 italic">Un espace de calme pour votre évolution personnelle.</p>
            <div className="text-5xl font-heading italic text-[#8ba394] mb-4">60 €</div>
            <Link href="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-[#8ba394]/20 pb-1">Toutes les mutuelles — voir la liste</Link>
          </div>
          <div className="space-y-6 relative z-10">
            <ul className="space-y-4">
              {['Échange préalable complet', 'Séance personnalisée (1h à 1h30)', 'Outils pratiques pour le quotidien', 'En cabinet à Houdetot ou en visioconférence', 'Accompagnement bienveillant et discret'].map(item => (
                <li key={item} className="flex gap-4 text-site text-sm font-light"><CheckCircle className="h-5 w-5 text-[#8ba394] shrink-0" /> {item}</li>
              ))}
            </ul>
            <div className="pt-6">
               <PrimaryButton href="#contact" className="w-full justify-center">Réserver une séance</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[var(--site-surface)] py-24 sm:py-32 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Questions <span className="text-[#8ba394]">Fréquentes</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-site bg-[var(--site-bg)] rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--site-surface)] transition-colors"
                >
                  <span className="text-site font-body text-sm font-medium">{faq.q}</span>
                  <div className={cn("p-1.5 rounded-full border border-site transition-transform duration-300", openFaq === idx ? "rotate-45" : "")}>
                    <Plus className="h-4 w-4 text-[#8ba394]" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-[var(--site-muted)] text-sm font-light leading-relaxed border-t border-site pt-6 mx-8">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Premier pas</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Prêt(e) à retrouver <span className="text-[#8ba394]">votre paix intérieure ?</span></h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Vous avez encore des questions ? N'hésitez pas à me contacter directement par téléphone pour un premier échange gratuit et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
             <a href="tel:0677495288" className="px-8 py-3 rounded-full border border-site text-[10px] uppercase tracking-widest font-bold text-site hover:bg-[var(--site-surface)] transition-all">06 77 49 52 88</a>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-16 pb-16 mx-auto max-w-4xl text-center">
         <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] flex flex-col sm:flex-row items-center gap-6 text-left opacity-80">
            <ShieldCheck className="h-8 w-8 text-[#8ba394] shrink-0" />
            <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">
              <strong>Disclaimer :</strong> L'hypnose Ericksonienne est une approche complémentaire de mieux-être. Elle ne se substitue en aucun cas à un avis, un diagnostic ou un traitement médical professionnel.
            </p>
         </div>
      </div>
    </div>
  );
}
