import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import { Calendar, Clock, MapPin, Laptop } from 'lucide-react';

export const metadata = {
  title: "Prendre rendez-vous | Katia Burgun",
  description: "Réservez votre séance d'hypnose ou de communication animale avec Katia Burgun. En cabinet ou à distance.",
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[var(--site-bg)]">
      <Navigation />
      
      <section className="pt-40 pb-20 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8ba394] font-bold mb-6 block text-center">Planification</span>
          <h1 className="text-4xl md:text-6xl font-heading italic text-site mb-12 text-center leading-tight">
            Prendre <span className="text-[#8ba394]">Rendez-vous</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-[var(--site-surface)] p-10 rounded-[3rem] border border-site shadow-sm">
              <h2 className="text-2xl font-heading italic text-site mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#8ba394]" /> En cabinet
              </h2>
              <p className="text-[var(--site-muted)] font-light leading-relaxed mb-6">
                Je vous accueille à Houdetot (76740) dans un cadre paisible et bienveillant pour vos séances d'hypnose ou de communication animale.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)]">
                  <Calendar className="w-4 h-4 text-[#8ba394]" /> Sur rendez-vous uniquement
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)]">
                  <Clock className="w-4 h-4 text-[#8ba394]" /> Durée : 1h à 1h30
                </li>
              </ul>
            </div>
            
            <div className="bg-[var(--site-surface)] p-10 rounded-[3rem] border border-site shadow-sm">
              <h2 className="text-2xl font-heading italic text-site mb-6 flex items-center gap-3">
                <Laptop className="w-6 h-6 text-[#8ba394]" /> À distance (Partout dans le monde)
              </h2>
              <p className="text-[var(--site-muted)] font-light leading-relaxed mb-6">
                Les séances peuvent également se dérouler en visioconférence ou par téléphone, avec la même qualité d'écoute et d'accompagnement.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)]">
                  <Clock className="w-4 h-4 text-[#8ba394]" /> Flexibilité horaire
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--site-muted)]">
                  <Laptop className="w-4 h-4 text-[#8ba394]" /> Lien sécurisé envoyé par email
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-site font-light italic text-lg mb-4">Utilisez le formulaire ci-dessous pour m'envoyer votre demande de réservation ou de renseignements.</p>
          </div>
        </div>
      </section>

      {/* The global ContactSection is in layout.tsx */}
      
      <Footer />
    </main>
  );
}
