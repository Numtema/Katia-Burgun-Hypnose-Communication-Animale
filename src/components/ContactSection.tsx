"use client";
import React, { useState } from 'react';
import { Phone, MapPin, Calendar, ChevronRight, MessageSquare } from 'lucide-react';
import { SectionBadge } from './UI';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hypnose Ericksonienne',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Bonjour Katia, je vous contacte via votre site web.\n\n*Nom :* ${formData.name}\n*Email :* ${formData.email}\n*Téléphone :* ${formData.phone}\n*Service :* ${formData.service}\n*Message :* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/33677495288?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="bg-site py-24 sm:py-32 px-6 lg:px-16 border-t border-site transition-colors duration-500">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* ... existing left column ... */}
        <div>
          <SectionBadge>Contact</SectionBadge>
          <h2 className="mt-8 text-5xl sm:text-6xl text-site font-heading italic leading-tight">Prenons <span className="text-[#8ba394]">rendez-vous</span></h2>
          <p className="mt-6 text-[var(--site-muted)] font-light leading-relaxed max-w-md">Une question, un besoin, une envie d'explorer ? Écrivez-moi, appelez-moi, ou prenez rendez-vous directement. Je réponds personnellement à chaque message sous 48h.</p>
          
          <div className="mt-12 space-y-10">
            <div className="flex items-center gap-6 group">
              <div className="h-14 w-14 rounded-2xl bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center transition-all group-hover:scale-110"><Phone className="h-6 w-6 text-[#8ba394]" /></div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-bold mb-1 font-body">Téléphone</div>
                <div className="text-site text-xl font-heading italic tracking-wide">06 77 49 52 88</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="h-14 w-14 rounded-2xl bg-[#b5a496]/10 border border-[#b5a496]/20 flex items-center justify-center transition-all group-hover:scale-110"><MapPin className="h-6 w-6 text-[#b5a496]" /></div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-bold mb-1 font-body">Adresse</div>
                <div className="text-site text-xl font-heading italic tracking-wide">5 route de Bourville, 76740 Fontaine-le-Dun</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="h-14 w-14 rounded-2xl bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center transition-all group-hover:scale-110"><Calendar className="h-6 w-6 text-[#8ba394]" /></div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-bold mb-1 font-body">Disponibilité</div>
                <div className="text-site text-xl font-heading italic tracking-wide">Lundi – Samedi · Sur RDV</div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-site">
            <div className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold mb-6">Zone d'intervention</div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 max-w-lg">
              {["Saint-Valery-en-Caux", "Veules-les-Roses", "Yvetot", "Dieppe", "Cany-Barville", "Doudeville", "Saint-Aubin-sur-Mer", "Luneray", "Fécamp", "Rouen"].map(city => (
                <span key={city} className="text-xs text-[var(--site-muted)] font-light flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-[#8ba394]/60" /> {city}</span>
              ))}
            </div>
            <p className="mt-4 text-[9px] text-[#8ba394]/80 uppercase tracking-widest font-medium italic">Cabinet à Fontaine-le-Dun (76) & À distance</p>
          </div>
        </div>

        <div className="bg-[var(--site-surface-solid)] rounded-[3.5rem] p-8 sm:p-12 border border-site shadow-2xl transition-colors duration-500">
          <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
             <div className="space-y-2">
               <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Nom complet</label>
               <input 
                 required
                 placeholder="Votre nom" 
                 value={formData.name}
                 onChange={e => setFormData({...formData, name: e.target.value})}
                 className="w-full bg-[var(--site-bg)] border border-site rounded-2xl px-6 py-4 text-site text-sm focus:border-[#8ba394] outline-none transition-colors" 
               />
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="vous@exemple.fr" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[var(--site-bg)] border border-site rounded-2xl px-6 py-4 text-site text-sm focus:border-[#8ba394] outline-none transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Téléphone</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="06 00 00 00 00" 
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[var(--site-bg)] border border-site rounded-2xl px-6 py-4 text-site text-sm focus:border-[#8ba394] outline-none transition-colors" 
                  />
                </div>
             </div>
             <div className="space-y-2">
               <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Service</label>
               <select 
                 value={formData.service}
                 onChange={e => setFormData({...formData, service: e.target.value})}
                 className="w-full bg-[var(--site-bg)] border border-site rounded-2xl px-6 py-4 text-site text-sm focus:border-[#8ba394] outline-none transition-colors appearance-none"
               >
                  <option className="bg-[var(--site-bg)] text-site">Hypnose Ericksonienne</option>
                  <option className="bg-[var(--site-bg)] text-site">Communication Animale</option>
                  <option className="bg-[var(--site-bg)] text-site">Formation Initiation</option>
               </select>
             </div>
             <div className="space-y-2">
               <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Votre message</label>
               <textarea 
                 required
                 rows={4} 
                 placeholder="Parlez-moi de votre besoin..." 
                 value={formData.message}
                 onChange={e => setFormData({...formData, message: e.target.value})}
                 className="w-full bg-[var(--site-bg)] border border-site rounded-2xl px-6 py-4 text-site text-sm focus:border-[#8ba394] outline-none transition-colors resize-none"
               ></textarea>
             </div>
             <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1fb355] py-5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] text-[white] flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] shadow-lg shadow-[#25D366]/20">
               Envoyer via WhatsApp <MessageSquare className="h-4 w-4" />
             </button>
             <p className="text-[10px] text-center text-[var(--site-muted)] italic">Le message sera pré-rempli et s'ouvrira dans WhatsApp.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
