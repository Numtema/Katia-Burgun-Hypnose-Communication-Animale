import React from 'react';
import Link from 'next/link';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-site pt-32 pb-16 px-6 lg:px-16 relative overflow-hidden transition-colors duration-500">
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="text-site text-2xl font-heading italic block mb-6 hover:text-[var(--text-sage)] transition-colors">Katia Burgun</Link>
            <p className="text-[var(--site-muted)] font-light text-sm max-w-md leading-relaxed mb-4">
              KB Hypnose Ericksonienne & Mieux-être, communication intuitive avec les animaux, consultations en cabinet à Houdetot et à distance.
            </p>
            <div className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest mb-8">
              5 route de Bourville, 76740 Houdetot
            </div>
            <div className="flex gap-4">
               <div className="h-10 w-10 rounded-full border border-site flex items-center justify-center text-[var(--site-muted)] hover:text-site hover:border-[var(--text-sage)] transition-all cursor-pointer">
                 <Sparkles className="h-4 w-4" />
               </div>
               <div className="h-10 w-10 rounded-full border border-site flex items-center justify-center text-[var(--site-muted)] hover:text-site hover:border-[var(--text-sage)] transition-all cursor-pointer">
                 <Heart className="h-4 w-4" />
               </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { l: 'Accueil', h: '/' },
                { l: 'Qui suis-je', h: '/qui-suis-je' },
                { l: 'Services', h: '/services' },
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

          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Nos Services</h3>
            <ul className="space-y-4">
              {[
                { l: 'Hypnose Ericksonienne', h: '/hypnose' },
                { l: 'Communication Animale', h: '/communication-animale' },
                { l: 'Mieux-être & Libération', h: '/mieux-etre-liberation' },
                { l: 'Écoute Intuitive', h: '/ecoute-intuitive' },
                { l: 'Formation Initiation', h: '/formation' }
              ].map((item) => (
                <li key={item.l}>
                  <Link href={item.h} className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest hover:text-[var(--text-sage)] transition-colors">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-site mb-8">Légal</h3>
            <ul className="space-y-4">
              {[
                { l: 'Mentions légales', h: '/legal/mentions-legales' },
                { l: 'Politique de confidentialité', h: '/legal/politique-confidentialite' },
                { l: 'Conditions générales', h: '/legal/cgv' }
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
