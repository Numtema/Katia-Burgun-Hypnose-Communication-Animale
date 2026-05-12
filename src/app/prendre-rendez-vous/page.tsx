"use client";

import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Calendar, Clock, MapPin, Laptop, Heart, Zap, CheckCircle } from 'lucide-react';
import { cn } from '../../components/UI';

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<'hypnose' | 'communication'>('hypnose');

  return (
    <main className="min-h-screen bg-[var(--site-bg)]">
      <Navigation />
      
      <section className="pt-40 pb-20 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8ba394] font-bold mb-6 block text-center">Planification</span>
          <h1 className="text-4xl md:text-6xl font-heading italic text-site mb-12 text-center leading-tight">
            Prendre <span className="text-[#8ba394]">Rendez-vous</span>
          </h1>

          {/* Service Selector Tabs */}
          <div className="max-w-2xl mx-auto mb-16 p-2 rounded-full bg-[var(--site-surface)] border border-site flex gap-2">
            <button 
              onClick={() => setSelectedService('hypnose')}
              className={cn(
                "flex-1 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2",
                selectedService === 'hypnose' 
                  ? "bg-[#8ba394] text-white shadow-lg" 
                  : "text-[var(--site-muted)] hover:text-site"
              )}
            >
              <Zap className={cn("w-3.5 h-3.5", selectedService === 'hypnose' ? "text-white" : "text-[#8ba394]")} />
              Hypnose
            </button>
            <button 
              onClick={() => setSelectedService('communication')}
              className={cn(
                "flex-1 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2",
                selectedService === 'communication' 
                  ? "bg-[#8ba394] text-white shadow-lg" 
                  : "text-[var(--site-muted)] hover:text-site"
              )}
            >
              <Heart className={cn("w-3.5 h-3.5", selectedService === 'communication' ? "text-white" : "text-[#8ba394]")} />
              Communication Animale
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-[var(--site-surface)] p-10 rounded-[3rem] border border-site shadow-sm transition-all duration-500 hover:border-[#8ba394]/30">
              <h2 className="text-2xl font-heading italic text-site mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#8ba394]" /> En cabinet
              </h2>
              <p className="text-[var(--site-muted)] font-light leading-relaxed mb-6">
                Je vous accueille à Houdetot (76740) dans un cadre paisible et bienveillant pour vos séances {selectedService === 'hypnose' ? "d'hypnose" : "de communication animale"}.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)] font-light">
                  <CheckCircle className="w-4 h-4 text-[#8ba394]" /> Sur rendez-vous uniquement
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)] font-light">
                  <Clock className="w-4 h-4 text-[#8ba394]" /> Durée : {selectedService === 'hypnose' ? "1h à 1h30" : "Format flexible"}
                </li>
              </ul>
            </div>
            
            <div className="bg-[var(--site-surface)] p-10 rounded-[3rem] border border-site shadow-sm transition-all duration-500 hover:border-[#8ba394]/30">
              <h2 className="text-2xl font-heading italic text-site mb-6 flex items-center gap-3">
                <Laptop className="w-6 h-6 text-[#8ba394]" /> À distance (Partout dans le monde)
              </h2>
              <p className="text-[var(--site-muted)] font-light leading-relaxed mb-6">
                Les séances peuvent également se dérouler en visioconférence ou par téléphone, avec la même qualité d'écoute et d'accompagnement.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)] font-light">
                  <CheckCircle className="w-4 h-4 text-[#8ba394]" /> Flexibilité horaire
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)] font-light">
                  <Laptop className="w-4 h-4 text-[#8ba394]" /> Lien sécurisé envoyé par email
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-site font-light italic text-lg mb-4">
              Veuillez utiliser le formulaire de contact ci-dessous pour m'envoyer votre demande pour une séance 
              <span className="text-[#8ba394] font-medium"> {selectedService === 'hypnose' ? "d'Hypnose" : "de Communication Animale"}</span>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
