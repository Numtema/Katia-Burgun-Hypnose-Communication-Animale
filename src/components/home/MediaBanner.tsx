"use client";

import React from 'react';
import { Newspaper, Linkedin, Facebook, Palette, MapPin } from 'lucide-react';

const REFERENCES = [
  {
    name: "Actu.fr",
    icon: Newspaper,
    label: "Presse Locale Caux",
    link: "https://actu.fr",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    label: "Profil Pro",
    link: "https://fr.linkedin.com/in/katia-burgun-365b55195",
  },
  {
    name: "Facebook",
    icon: Facebook,
    label: "Échanges & Conseils",
    link: "https://www.facebook.com/100068454903116",
  },
  {
    name: "Galerie-Création",
    icon: Palette,
    label: "Art & Créations",
    link: "https://galerie-creation.com/_shop/katia-burgun-slessareff/10546/",
  },
  {
    name: "Autour de moi",
    icon: MapPin,
    label: "Annuaire Pro",
    link: "https://service-d-hypnotherapie.autour-de-moi.com/",
  }
];

export default function MediaBanner() {
  // Triple the references to ensure the screen width is fully occupied and the marquee loops seamlessly
  const duplicatedReferences = [...REFERENCES, ...REFERENCES, ...REFERENCES, ...REFERENCES];

  return (
    <section className="w-full bg-[var(--site-surface)]/30 border-y border-site py-8 relative overflow-hidden transition-colors duration-500">
      {/* Premium Vignette/Blur Fade Out on Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--site-bg)] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--site-bg)] to-transparent z-20" />

      <div className="w-full relative z-10 flex flex-col items-center">
        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-[#8ba394] mb-5">
          Présence en ligne & Références
        </span>

        {/* Infinite Ticker Container */}
        <div className="w-full overflow-hidden py-2 flex">
          <div className="animate-marquee flex items-center">
            {duplicatedReferences.map((ref, idx) => {
              const Icon = ref.icon;
              return (
                <a
                  key={`${ref.name}-${idx}`}
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-2.5 rounded-full border border-site bg-[var(--site-surface)] transition-all duration-300 hover:border-[#8ba394]/30 hover:bg-[#8ba394]/5 hover:text-site whitespace-nowrap text-[var(--site-muted)] font-medium tracking-wide mx-3 group shrink-0"
                >
                  <Icon className="h-4 w-4 text-[#8ba394] transition-transform group-hover:scale-110" />
                  <span className="text-[10px] uppercase tracking-widest">{ref.name}</span>
                  <span className="text-[8px] opacity-60 font-light border-l border-site pl-2">{ref.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
