"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Moon, Heart, RefreshCw, Shield, Zap, CheckCircle, ArrowLeft, Brain, Plus, Compass, Anchor, Cloud, ShieldCheck, MessageCircle, MapPin, Receipt, Wallet } from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../../components/UI';
import Script from 'next/script';

const hypnoseImg = "/assets/hypnose-katia-burgun-houdetot-normandie.png";

const faqs = [
  { 
    q: "Qu’est-ce que l’hypnose ericksonienne ?", 
    a: "L’hypnose ericksonienne est une approche d’accompagnement qui utilise un état naturel de concentration intérieure pour faciliter l’accès à vos ressources inconscientes. Elle repose sur des suggestions, des images, des métaphores et des protocoles adaptés à votre situation personnelle." 
  },
  { 
    q: "Vais-je perdre le contrôle ?", 
    a: "Non. Pendant une séance d’hypnose, vous ne perdez pas le contrôle. Vous restez conscient de ce qui se passe, vous entendez ma voix, vous pouvez parler, bouger ou interrompre la séance si vous en ressentez le besoin. L’hypnose ericksonienne respecte votre rythme, votre sécurité intérieure et votre liberté." 
  },
  { 
    q: "L’hypnose fonctionne-t-elle sur tout le monde ?", 
    a: "Chaque personne est différente. Certaines entrent facilement dans l’expérience hypnotique, d’autres ont besoin de plus de temps pour se sentir en confiance. L’hypnose n’est pas une question de performance. Elle repose surtout sur l’alliance, la disponibilité intérieure et le respect du rythme de chacun." 
  },
  { 
    q: "Combien de séances sont nécessaires ?", 
    a: "Le nombre de séances dépend de votre objectif, de votre rythme et de ce qui émerge au fil de l’accompagnement. Certaines problématiques peuvent évoluer en une séance, tandis que d’autres demandent plusieurs rendez-vous. Il arrive aussi qu’au cours d’une séance, une autre problématique apparaisse ou soit abordée, car l’inconscient amène parfois ce qui est le plus juste à travailler à ce moment-là. Nous avançons donc pas à pas, en respectant votre rythme et vos besoins." 
  },
  { 
    q: "Proposez-vous des séances en ligne ?", 
    a: "Oui. Les séances peuvent avoir lieu en cabinet à Houdetot ou à distance, en visioconférence. La séance en ligne se déroule dans les mêmes conditions d’écoute, de confidentialité et d’accompagnement. Il est simplement important de vous installer dans un endroit calme, où vous ne serez pas dérangé." 
  },
  { 
    q: "Est-ce remboursé ?", 
    a: "Certaines mutuelles peuvent prendre en charge une partie des séances d’hypnose selon les garanties prévues dans votre contrat. Une facture vous est remise à l’issue de la séance. Je vous invite à vous rapprocher directement de votre mutuelle pour connaître vos conditions de prise en charge. L’hypnose gagne en reconnaissance auprès des organismes de santé, qui valorisent de plus en plus les approches complémentaires du mieux-être." 
  },
  {
    q: "L’hypnose remplace-t-elle un suivi médical ?",
    a: "Non. L’hypnose ericksonienne est une approche complémentaire du mieux-être. Elle ne se substitue jamais à un avis médical, un diagnostic, un traitement ou un suivi par un professionnel de santé. En cas de trouble important, de douleur, de symptôme ou de traitement en cours, il est essentiel de consulter un médecin ou un professionnel compétent."
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
            <BlurText text="Hypnose ericksonienne à Houdetot" delay={50} className="mt-8 text-4xl sm:text-6xl italic font-heading text-site" />
            <h1 className="mt-4 text-xl sm:text-2xl font-light text-[var(--site-muted)] leading-relaxed opacity-90 max-w-xl">
              Un accompagnement bienveillant pour apaiser votre mental, dépasser certains blocages et retrouver un meilleur équilibre intérieur.
            </h1>
            
            <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
              L’hypnose ericksonienne est une approche respectueuse qui s’appuie sur vos propres ressources inconscientes. Elle vous accompagne dans un état de détente et de disponibilité intérieure, afin de favoriser le changement, à votre rythme.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">60 €</div> Par séance</div>
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">1h à 1h30</div> Durée moyenne</div>
               <div><div className="text-xl text-nowrap font-heading italic text-[#8ba394] mb-1">Houdetot / Visio</div> Lieux de consultation</div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
               <PrimaryButton href="#contact">Réserver une séance</PrimaryButton>
               <a href="tel:0677495288" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-transparent hover:border-[#8ba394]">06 77 49 52 88</a>
            </div>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-2xl">
            <img src={hypnoseImg} alt="Séance d'hypnose apaisante à Houdetot" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 lg:px-16 text-center mx-auto max-w-4xl">
        <SectionBadge>Hypnose ericksonienne</SectionBadge>
        <h2 className="mt-8 text-3xl sm:text-5xl font-heading italic text-site mb-8 leading-tight">
          Une approche douce du changement intérieur
        </h2>
        <div className="text-2xl sm:text-3xl font-heading italic text-[#8ba394] mb-8">
          « L’hypnose travaille avec son allié : l’inconscient. »
        </div>
        <div className="mx-auto w-16 h-px bg-[#8ba394]/30 mb-12" />
        <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base max-w-3xl mx-auto text-left sm:text-center">
          <p>
            L’hypnose ericksonienne, développée par Milton Erickson, est une approche humaine, souple et personnalisée.
          </p>
          <p>
            L’état hypnotique est un état naturel de concentration intérieure. Il ne s’agit pas de dormir, ni de perdre le contrôle, mais d’entrer dans une forme de présence différente, plus tournée vers vos ressentis, vos images intérieures et vos ressources profondes.
          </p>
          <p>
            Dans cet état, le mental peut relâcher une partie de ses résistances habituelles. Cela permet d’ouvrir un espace de travail avec l’inconscient, afin d’accompagner certains changements, apaisements ou prises de recul.
          </p>
        </div>
      </section>

      {/* Domaines d'application */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <SectionBadge>Mieux-être</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Pourquoi consulter <span className="text-[#8ba394]">en hypnose ?</span></h2>
            <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto italic">L’hypnose peut vous accompagner lorsque vous ressentez le besoin de dépasser un blocage, de traverser une période difficile ou de retrouver un meilleur équilibre intérieur.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
            {[
              { icon: Moon, title: 'Sommeil & stress', desc: 'Retrouver un sommeil plus apaisé, calmer les ruminations, apaiser l’anxiété et relâcher les tensions mentales ou émotionnelles.' },
              { icon: Zap, title: 'Confiance en soi', desc: 'Affirmer sa valeur, oser prendre sa place, se libérer progressivement du regard des autres et retrouver davantage de sécurité intérieure.' },
              { icon: RefreshCw, title: 'Blocages émotionnels & deuil', desc: 'Traverser une séparation, un deuil, un changement de vie ou un bouleversement avec plus de sérénité, en retrouvant progressivement des ressources intérieures.' },
              { icon: Anchor, title: 'Addictions & habitudes', desc: 'Accompagner l’arrêt du tabac, apaiser les comportements automatiques, le grignotage ou certaines habitudes devenues pesantes dans le quotidien.' },
              { icon: Shield, title: 'Phobies & peurs', desc: 'Apprivoiser certaines peurs, phobies ou réactions disproportionnées afin de retrouver davantage de liberté dans vos choix et vos actions.' },
              { icon: Cloud, title: 'Mieux-être durable', desc: 'Retrouver de l’énergie, de la clarté mentale, une relation plus sereine avec soi-même et une meilleure capacité à avancer.' },
            ].map((item, idx) => (
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

      {/* Language Section / Approche */}
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
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-site shadow-2xl">
               <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" alt="Méditation et calme intérieur" className="w-full h-full object-cover grayscale opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-1000" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[var(--site-surface)] border border-site rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-xl">
              <div className="text-2xl font-heading italic text-[#8ba394]">100%</div>
              <div className="text-[8px] uppercase tracking-widest font-bold text-site">Naturel</div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Progress / Processus */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <SectionBadge>Processus</SectionBadge>
            <h2 className="text-4xl sm:text-6xl text-site font-heading italic mt-8 mb-8">Comment se passe <span className="text-[#8ba394]">une séance ?</span></h2>
          </div>
          <div className="space-y-12">
            {[
              { i: MessageCircle, t: '1. Échange initial — anamnèse', d: 'Nous prenons un temps pour faire connaissance, clarifier votre besoin, comprendre votre contexte et cerner votre objectif. Cette première étape, appelée anamnèse, permet de poser un cadre clair et d’adapter l’accompagnement à ce que vous vivez.' },
              { i: Compass, t: '2. Installation', d: 'Vous vous installez confortablement. Je vous guide progressivement vers un état de détente, d’écoute intérieure et de disponibilité, dans le respect de votre rythme.' },
              { i: Brain, t: '3. Travail hypnotique', d: 'Votre inconscient peut alors explorer de nouvelles pistes à travers des protocoles, des métaphores, des images et des suggestions adaptées. Vous restez toujours présent, libre et aux commandes de votre expérience.' },
              { i: Heart, t: '4. Retour et intégration', d: 'La séance se termine par un retour progressif ici et maintenant. Nous prenons ensuite un court temps pour accueillir ce qui s’est présenté et permettre à l’expérience de commencer à s’intégrer.' }
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

      {/* Pricing Section / Accompagnement */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[var(--site-surface)] border border-site rounded-[3rem] p-8 sm:p-12 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ba394]/5 rounded-full blur-3xl group-hover:bg-[#8ba394]/10 transition-colors" />
          
          <div className="relative z-10">
            <SectionBadge>Accompagnement individuel</SectionBadge>
            <h2 className="mt-6 text-3xl sm:text-4xl font-heading italic text-site mb-2">Hypnose ericksonienne</h2>
            <p className="text-[var(--site-muted)] text-sm font-light mb-8 italic">Un espace de calme pour votre évolution personnelle.</p>
            <div className="text-6xl font-heading italic text-[#8ba394] mb-4">60 €</div>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--site-muted)] mb-8">
              Les effets d’un accompagnement hypnotique peuvent continuer à se déployer après le rendez-vous, selon votre rythme et ce qui a été travaillé pendant la séance.
            </p>
            <Link href="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-[#8ba394]/20 pb-1">Voir tous les tarifs & mutuelles</Link>
          </div>
          <div className="space-y-6 relative z-10">
            <ul className="space-y-6 mb-12 border-t border-site/50 pt-8">
              {[
                { label: 'L’approche', items: ['Échange préalable complet', 'Accompagnement personnalisé'] },
                { label: 'La séance', items: ['Durée : 1h à 1h30', 'Facture pour mutuelle'] },
                { label: 'Lieux', items: ['Cabinet (Houdetot) ou Visio'] }
              ].map((section) => (
                <div key={section.label}>
                  <h4 className="text-[10px] uppercase tracking-[0.1em] font-bold text-site opacity-40 mb-3">{section.label}</h4>
                  <ul className="space-y-3">
                    {section.items.map((i) => (
                      <li key={i} className="flex gap-3 text-site text-[12px] font-light leading-relaxed">
                        <CheckCircle className="h-4 w-4 text-[#8ba394] shrink-0 translate-y-0.5" /> 
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
            <div className="pt-6">
               <PrimaryButton href="#contact" className="w-full justify-center">Réserver une séance</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Informations Pratiques Section */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/30 transition-colors shadow-sm">
              <MapPin className="h-6 w-6 text-[#8ba394] mb-4" />
              <h3 className="text-site font-heading italic text-xl mb-2">Lieu de consultation</h3>
              <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
                Les séances peuvent avoir lieu en cabinet à Houdetot ou à distance, en visioconférence.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/30 transition-colors shadow-sm">
              <Receipt className="h-6 w-6 text-[#8ba394] mb-4" />
              <h3 className="text-site font-heading italic text-xl mb-2">Facture</h3>
              <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
                Une facture vous est remise à l’issue de la séance.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/30 transition-colors shadow-sm">
              <Wallet className="h-6 w-6 text-[#8ba394] mb-4" />
              <h3 className="text-site font-heading italic text-xl mb-2">Moyens de paiement</h3>
              <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
                PayPal, chèque, virement bancaire et espèces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[var(--site-surface)] py-24 sm:py-32 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Questions <span className="text-[#8ba394]">fréquentes</span></h2>
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
                      <div className="px-8 pb-8 text-[var(--site-muted)] text-sm font-light leading-relaxed border-t border-site pt-6 mx-8 text-pretty">
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
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Prêt(e) à retrouver un espace <span className="text-[#8ba394]">d’apaisement intérieur ?</span></h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Vous avez encore des questions ? Vous pouvez me contacter directement pour un premier échange gratuit et sans engagement, afin de voir si l’hypnose ericksonienne correspond à votre besoin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
             <a href="tel:0677495288" className="px-8 py-3 rounded-full border border-site text-[10px] uppercase tracking-widest font-bold text-site hover:bg-[var(--site-surface)] transition-all">06 77 49 52 88</a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="px-6 lg:px-16 pb-16 mx-auto max-w-4xl text-center">
         <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] flex flex-col sm:flex-row items-center gap-6 text-left opacity-80 shadow-sm">
            <ShieldCheck className="h-8 w-8 text-[#8ba394] shrink-0" />
            <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">
              <strong>Disclaimer :</strong> L’hypnose ericksonienne est une approche complémentaire du mieux-être. Elle ne se substitue en aucun cas à un avis, un diagnostic ou un traitement médical professionnel.
            </p>
         </div>
      </div>
    </div>
  );
}
