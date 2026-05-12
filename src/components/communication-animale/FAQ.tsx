"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { SectionBadge, cn } from '../UI';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-site py-24 sm:py-32 px-6 lg:px-16 border-b border-site">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Communication <span className="text-[#8ba394]">Animale</span></h2>
        </div>
        
        <div className="space-y-4">
          {items.map((faq, idx) => (
            <div key={idx} className="border border-site bg-[var(--site-surface)] rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--site-surface-solid)] transition-colors"
              >
                <span className="text-site font-body font-medium text-sm">{faq.q}</span>
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
  );
};
