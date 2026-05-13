import React from 'react';
import BreadcrumbsJsonLd from '../../components/BreadcrumbsJsonLd';
import { Sparkles, Wind, Heart, Moon } from 'lucide-react';
import { SectionBadge, BlurText } from '../../components/UI';

export const metadata = {
  title: "Mieux-être et Libération | Katia Burgun",
  description: "Retrouvez votre équilibre intérieur avec les séances de mieux-être et de libération émotionnelle proposées par Katia Burgun.",
};

export default function MieuxEtrePage() {
  return (
    <main className="min-h-screen bg-[var(--site-bg)]">
      <BreadcrumbsJsonLd 
        items={[
          { name: "Accueil", item: "/" },
          { name: "Services", item: "/services" },
          { name: "Mieux-être & Libération", item: "/mieux-etre-liberation" }
        ]} 
      />
      
      <section className="pt-40 pb-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionBadge>Harmonie</SectionBadge>
          <BlurText 
            text="Mieux-être & Libération" 
            delay={50} 
            className="mt-8 text-4xl md:text-7xl font-heading italic text-site leading-tight" 
          />
          
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <p className="text-xl text-[var(--site-muted)] font-light leading-relaxed">
                Parfois, la vie nous amène à porter des poids invisibles, des blocages émotionnels ou un stress qui finit par masquer notre véritable nature.
              </p>
              <p className="text-lg text-[var(--site-muted)] font-light leading-relaxed">
                Mon approche du mieux-être vise à créer un espace de sécurité et de douceur pour identifier ces freins et s'en libérer progressivement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { i: Wind, t: 'Apaisement', d: 'Retrouver un souffle calme et serein.' },
                { i: Heart, t: 'Libération', d: 'Se détacher des émotions limitantes.' },
                { i: Moon, t: 'Équilibre', d: 'Réharmoniser le corps et l\'esprit.' },
                { i: Sparkles, t: 'Énergie', d: 'Retrouver sa vitalité naturelle.' }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-[2rem] bg-[var(--site-surface)] border border-site shadow-sm">
                  <item.i className="w-8 h-8 text-[#8ba394] mb-4" />
                  <h3 className="text-site font-bold text-sm mb-2">{item.t}</h3>
                  <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
