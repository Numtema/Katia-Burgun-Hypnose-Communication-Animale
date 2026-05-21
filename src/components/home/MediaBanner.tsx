"use client";

import React from 'react';
import { Newspaper, Linkedin, Facebook, Palette, MapPin } from 'lucide-react';
import { cn } from '../UI';

const REFERENCES = [
  {
    name: "Actu.fr",
    icon: Newspaper,
    label: "Presse Locale Caux",
    desc: "Salon des Calètes & Actu",
    link: "https://actu.fr",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    label: "Profil Pro",
    desc: "Cabinet d'Hypnothérapie",
    link: "https://fr.linkedin.com/in/katia-burgun-365b55195",
  },
  {
    name: "Facebook",
    icon: Facebook,
    label: "Échanges & Conseils",
    desc: "Com. Intuitive Animaux",
    link: "https://www.facebook.com/100068454903116",
  },
  {
    name: "Galerie-Création",
    icon: Palette,
    label: "Art & Créations",
    desc: "Œuvres sous signature Slessareff",
    link: "https://galerie-creation.com/_shop/katia-burgun-slessareff/10546/",
  },
  {
    name: "Autour de moi",
    icon: MapPin,
    label: "Annuaire Pro",
    desc: "Présence Locale Houdetot",
    link: "https://service-d-hypnotherapie.autour-de-moi.com/",
  }
];

export default function MediaBanner() {
  return (
    <section className="w-full bg-[var(--site-bg)] border-y border-site py-12 relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--text-sage)]">
            Présence en ligne & Références locales
          </span>
          <h2 className="mt-2 text-xl sm:text-2xl font-heading italic text-site">
            Retrouvez mes publications, profils & activités artistiques
          </h2>
        </div>

        {/* Responsive Grid of Elegant Outbound Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          {REFERENCES.map((ref) => {
            const Icon = ref.icon;
            return (
              <a
                key={ref.name}
                href={ref.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "liquid-glass flex items-center gap-4 p-4 rounded-[2rem] border border-site w-full sm:w-[calc(50%-8px)] lg:w-60",
                  "transition-all duration-300 hover:scale-[1.02] hover:border-[var(--text-sage)]/30 group cursor-pointer"
                )}
              >
                <div className="h-10 w-10 shrink-0 rounded-2xl bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center transition-colors group-hover:bg-[#8ba394]/20">
                  <Icon className="h-5 w-5 text-[var(--text-sage)] transition-transform group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-site">
                    {ref.name}
                  </h3>
                  <p className="text-[9px] text-[var(--site-muted)] font-medium mt-0.5">{ref.label}</p>
                  <p className="text-[8px] text-[var(--site-muted)] font-light mt-0.5 line-clamp-1 opacity-80">{ref.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
