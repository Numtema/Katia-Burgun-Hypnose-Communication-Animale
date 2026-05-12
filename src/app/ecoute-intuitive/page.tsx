import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import BreadcrumbsJsonLd from '../../components/BreadcrumbsJsonLd';
import { Eye, MessageCircle, Heart, Star } from 'lucide-react';
import { SectionBadge, BlurText } from '../../components/UI';

export const metadata = {
  title: "Écoute Intuitive | Katia Burgun",
  description: "Découvrez l'écoute intuitive, une approche sensible pour comprendre les messages subtils de votre environnement et de vos animaux.",
};

export default function EcouteIntuitivePage() {
  return (
    <main className="min-h-screen bg-[var(--site-bg)]">
      <Navigation />
      <BreadcrumbsJsonLd 
        items={[
          { name: "Accueil", item: "/" },
          { name: "Services", item: "/services" },
          { name: "Écoute Intuitive", item: "/ecoute-intuitive" }
        ]} 
      />
      
      <section className="pt-40 pb-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionBadge>Sensibilité</SectionBadge>
          <BlurText 
            text="Écoute Intuitive" 
            delay={50} 
            className="mt-8 text-4xl md:text-7xl font-heading italic text-site leading-tight" 
          />
          
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <p className="text-xl text-[var(--site-muted)] font-light leading-relaxed">
                L'écoute intuitive est une porte ouverte vers une compréhension plus profonde, au-delà des mots et des apparences.
              </p>
              <p className="text-lg text-[var(--site-muted)] font-light leading-relaxed">
                C'est une pratique qui demande du calme, de la présence et une grande ouverture de cœur pour recevoir les messages subtils que nos compagnons ou notre propre intuition cherchent à nous transmettre.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { i: Eye, t: 'Perception', d: 'Voir au-delà du visible et du tangible.' },
                { i: MessageCircle, t: 'Dialogue', d: 'Établir une connexion d\'âme à âme.' },
                { i: Heart, t: 'Empathie', d: 'Ressentir avec justesse et bienveillance.' },
                { i: Star, t: 'Clarté', d: 'Recevoir des messages pour avancer.' }
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

      <Footer />
    </main>
  );
}
