import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: "Contact | Katia Burgun",
  description: "Contactez Katia Burgun pour une séance d'hypnose ou de communication animale en Normandie ou à distance.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--site-bg)]">
      <Navigation />
      
      <section className="pt-40 pb-20 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8ba394] font-bold mb-6 block text-center">Disponibilité & Échange</span>
          <h1 className="text-4xl md:text-6xl font-heading italic text-site mb-12 text-center leading-tight">
            Me <span className="text-[#8ba394]">Contacter</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            <div className="bg-[var(--site-surface)] p-8 rounded-[2.5rem] border border-site text-center transition-all hover:border-[#8ba394]">
              <Phone className="w-6 h-6 text-[#8ba394] mx-auto mb-4" />
              <h3 className="text-site font-bold text-[10px] uppercase tracking-widest mb-2">Téléphone</h3>
              <p className="text-[var(--site-muted)] text-sm font-light">06 77 49 52 88</p>
            </div>
            
            <div className="bg-[var(--site-surface)] p-8 rounded-[2.5rem] border border-site text-center transition-all hover:border-[#8ba394]">
              <Mail className="w-6 h-6 text-[#8ba394] mx-auto mb-4" />
              <h3 className="text-site font-bold text-[10px] uppercase tracking-widest mb-2">Email</h3>
              <p className="text-[var(--site-muted)] text-sm font-light">contact@katia-burgun.fr</p>
            </div>
            
            <div className="bg-[var(--site-surface)] p-8 rounded-[2.5rem] border border-site text-center transition-all hover:border-[#8ba394]">
              <MapPin className="w-6 h-6 text-[#8ba394] mx-auto mb-4" />
              <h3 className="text-site font-bold text-[10px] uppercase tracking-widest mb-2">Cabinet</h3>
              <p className="text-[var(--site-muted)] text-sm font-light">Houdetot, Normandie</p>
            </div>

            <div className="bg-[var(--site-surface)] p-8 rounded-[2.5rem] border border-site text-center transition-all hover:border-[#8ba394]">
              <Clock className="w-6 h-6 text-[#8ba394] mx-auto mb-4" />
              <h3 className="text-site font-bold text-[10px] uppercase tracking-widest mb-2">Horaires</h3>
              <p className="text-[var(--site-muted)] text-sm font-light">Lun - Ven : 9h - 19h</p>
            </div>
          </div>
        </div>
      </section>

      {/* The global ContactSection is already in layout.tsx, 
          so it will appear here as well. 
          But we can add some specific context if needed. */}
          
      <Footer />
    </main>
  );
}
