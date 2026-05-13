import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Facebook, Instagram, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-site pt-32 pb-16 px-6 lg:px-16 relative overflow-hidden transition-colors duration-500">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-site text-2xl font-heading italic block mb-6 hover:text-[var(--text-sage)] transition-colors">Katia Burgun</Link>
            <p className="text-[var(--site-muted)] font-light text-sm max-w-md leading-relaxed mb-4">
              KB Hypnose Ericksonienne & Mieux-être, communication intuitive avec les animaux, consultations en cabinet à Houdetot et à distance.
            </p>
            <div className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest mb-8">
              5 route de Bourville, 76740 Houdetot
            </div>
            <div className="flex gap-4 mb-10">
               <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-site flex items-center justify-center text-[var(--site-muted)] hover:text-site hover:border-[var(--text-sage)] transition-all cursor-pointer">
                 <Instagram className="h-4 w-4" />
               </a>
               <a href="https://www.facebook.com/people/KB-Hypnose-Ericksonienne-Mieux-%C3%AAtre/100083082141262/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-site flex items-center justify-center text-[var(--site-muted)] hover:text-site hover:border-[var(--text-sage)] transition-all cursor-pointer">
                 <Facebook className="h-4 w-4" />
               </a>
            </div>

            <div className="pt-8 border-t border-site/20 max-w-xs">
              <p className="text-site font-heading italic text-lg mb-1">Votre expérience compte</p>
              <p className="text-[var(--site-muted)] text-[11px] mb-6 opacity-70 leading-relaxed">Merci pour vos précieux retours et avis.</p>
              <a 
                href="https://g.page/r/CccBc3gVxtbjEBM/review" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#8ba394] hover:text-site text-[9px] uppercase tracking-[0.2em] font-bold transition-colors group"
              >
                <Star className="w-3.5 h-3.5 fill-[#8ba394] group-hover:fill-site group-hover:scale-110 transition-all" />
                Donner mon avis Google
              </a>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { l: 'Accueil', h: '/' },
                { l: 'Qui suis-je', h: '/qui-suis-je' },
                { l: 'Tarifs', h: '/tarifs' },
                { l: 'Témoignages', h: '/temoignages' },
                { l: 'Contact', h: '#contact' }
              ].map((item) => (
                <li key={item.l}>
                  <Link href={item.h} className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest hover:text-[var(--text-sage)] transition-colors">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Services</h3>
            <ul className="space-y-4">
              {[
                { l: 'Hypnose', h: '/hypnose' },
                { l: 'Com. Animale', h: '/communication-animale' },
                { l: 'Formation', h: '/formation' }
              ].map((item) => (
                <li key={item.l}>
                  <Link href={item.h} className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest hover:text-[var(--text-sage)] transition-colors">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Outils</h3>
            <ul className="space-y-4">
              {[
                { l: 'Libération', h: '/mieux-etre-liberation' },
                { l: 'Écoute Intuitive', h: '/ecoute-intuitive' }
              ].map((item) => (
                <li key={item.l}>
                  <Link href={item.h} className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest hover:text-[var(--text-sage)] transition-colors">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Légal</h3>
            <ul className="space-y-4">
              {[
                { l: 'Mentions légales', h: '/legal/mentions-legales' },
                { l: 'Confidentialité', h: '/legal/politique-confidentialite' },
                { l: 'CGV', h: '/legal/cgv' }
              ].map((link) => (
                <li key={link.l}>
                  <Link href={link.h} className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest hover:text-[var(--text-sage)] transition-colors">{link.l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-site flex flex-col items-center gap-8">
          <div className="text-[9px] text-[var(--site-muted)] opacity-70 uppercase tracking-widest text-center max-w-4xl leading-relaxed">
            Disclaimer : L'hypnose et la communication animale sont des approches complémentaires visant le mieux-être. Elles ne se substituent en aucun cas à un avis, un diagnostic ou un traitement médical ou vétérinaire professionnel.
          </div>
          <div className="text-[10px] text-[var(--site-muted)] uppercase tracking-[0.3em] font-bold">© 2026 Katia Burgun. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
}
