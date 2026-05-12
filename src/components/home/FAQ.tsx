"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { cn } from '../UI';

const faqs = [
  { q: "Quelle est la différence entre l'hypnose Ericksonienne et la communication animale ?", a: "L'hypnose Ericksonienne s'adresse à l'humain. Elle vise à mobiliser vos ressources intérieures pour retrouver un mieux-être, dépasser certains blocages ou apaiser le stress.\nLa communication animale s'adresse à la compréhension de l'animal, de ses émotions, de ses besoins et de la relation que vous vivez avec lui." },
  { q: "Comment savoir quel accompagnement choisir ?", a: "Si votre besoin concerne votre état émotionnel, votre stress, votre sommeil ou un blocage personnel, l'hypnose est la voie la plus adaptée.\nSi vous cherchez à mieux comprendre votre animal, un comportement ou une situation que vous vivez avec lui, la communication animale est la bonne porte d'entrée." },
  { q: "Les séances peuvent-elles se faire à distance ?", a: "Oui. Les séances d'hypnose comme les consultations en communication animale peuvent être proposées à distance selon votre situation." },
  { q: "La communication animale remplace-t-elle un vétérinaire ?", a: "Non. La communication animale ne remplace jamais un avis, un diagnostic ou un suivi vétérinaire. Elle vient en complément d'une démarche de soin et de compréhension." },
  { q: "Combien de séances d'hypnose faut-il prévoir ?", a: "Cela dépend de votre objectif et de votre rythme. Certaines personnes ressentent un apaisement dès les premières séances, d'autres ont besoin d'un accompagnement sur plusieurs rendez-vous." },
  { q: "Comment se passe une consultation en communication animale ?", a: "Vous m'envoyez une photo récente de votre animal ainsi que vos questions. Après la séance, je vous fais une restitution des informations perçues et nous échangeons ensemble." }
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[var(--site-surface)] py-24 sm:py-32 px-6 lg:px-16 border-t border-site transition-colors duration-500">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-20">
           <h2 className="text-3xl sm:text-4xl text-site font-heading italic leading-tight">Questions <span className="text-[var(--text-sage)]">fréquentes</span></h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-site bg-[var(--site-bg)] rounded-3xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--site-surface-solid)] transition-colors"
              >
                <span className="text-site font-body text-sm font-medium">{faq.q}</span>
                <div className={cn("p-2 rounded-full border border-site transition-transform duration-300", openFaq === idx ? "rotate-45" : "")}>
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
                    <div className="px-8 pb-8 text-[var(--site-muted)] text-sm font-light leading-relaxed border-t border-site pt-6 mx-8 whitespace-pre-line">
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
  );
}
