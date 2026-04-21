import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, CreditCard, Landmark, Banknote, Receipt, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../components/UI';

export default function Tarifs() {
  const mutuelles = ["MGEN", "Harmonie Mutuelle", "Malakoff Humanis", "Allianz", "AXA", "Generali", "SwissLife", "Mutuelle Bleue", "Apicil", "Alan", "AG2R La Mondiale", "Mutuelle Générale", "MAAF Santé", "Groupama", "Crédit Mutuel", "April"];

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-24">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour
        </Link>
      </div>
      <section className="px-6 lg:px-16 py-12 text-center flex flex-col items-center">
        <SectionBadge>Tarifs & Mutuelles</SectionBadge>
        <BlurText text="Des tarifs transparents" delay={50} className="mt-8 justify-center text-5xl sm:text-7xl italic font-heading text-site" />
        <p className="mt-8 text-[var(--site-muted)] font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Pas de mauvaise surprise. Voici tous mes tarifs, les mutuelles qui remboursent, et les moyens de paiement acceptés.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
          {[
            { t: 'Communication Animale', p: '80€', d: 'Par consultation', s: 'Séance à distance', items: ['Connexion télépathique complète', 'Jusqu\'à 5 questions', 'Restitution écrite + échange visio/tel', 'À distance, dans le monde entier'] },
            { t: 'Hypnose Ericksonienne', p: '60€', d: 'Par séance (1h30)', s: 'Cabinet ou visio', items: ['Entretien préalable approfondi', 'Séance complète en hypnose', 'Outils pour continuer chez vous', 'Facture pour mutuelle'], feat: true },
            { t: 'Formation', p: '150€', d: 'Par personne', s: "Journée d'initiation", items: ['8 heures de formation (9h–17h)', 'Déjeuner inclus', 'Livret & supports', 'Petit groupe (4–6 pers.)'] }
          ].map(p => (
            <div key={p.t} className={`p-10 rounded-[2.5rem] border ${p.feat ? 'border-[#8ba394] bg-[#8ba394]/10 relative' : 'border-site bg-[var(--site-surface)]'} flex flex-col text-left group transition-all hover:scale-[1.02]`}>
               {p.feat && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8ba394] text-[#ffffff] text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">Populaire</div>}
               <h3 className="text-site text-xl font-medium mb-1">{p.t}</h3>
               <p className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest mb-8">{p.s}</p>
               <div className="text-5xl font-heading italic text-[#8ba394] mb-2">{p.p}</div>
               <p className="text-[var(--site-muted)] text-[10px] uppercase tracking-widest mb-10 font-bold">{p.d}</p>
               <ul className="space-y-4 mb-10 flex-1">
                 {p.items.map(i => <li key={i} className="flex gap-4 text-[var(--site-muted)] text-xs font-light"><CheckCircle className="h-4 w-4 text-[#8ba394] shrink-0" /> {i}</li>)}
               </ul>
               <PrimaryButton className={cn("w-full justify-center", p.feat ? '' : 'bg-[var(--site-surface)] border border-site')}>Réserver</PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 text-center flex flex-col items-center">
        <div className="mx-auto max-w-7xl">
          <SectionBadge>Remboursements</SectionBadge>
          <h2 className="mt-8 text-4xl text-site font-heading italic mb-6">Mutuelles qui remboursent l'hypnose</h2>
          <p className="text-[var(--site-muted)] font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-16">
            De nombreuses mutuelles prennent en charge tout ou partie des séances d'hypnose. Voici une liste non exhaustive — consultez votre contrat pour les détails.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {mutuelles.map(m => (
              <div key={m} className="p-4 rounded-xl border border-site bg-[var(--site-surface-solid)] text-site opacity-70 text-[10px] sm:text-xs uppercase tracking-widest font-bold transition-all hover:border-[#8ba394]/30">{m}</div>
            ))}
          </div>
          <p className="mt-12 text-[var(--site-muted)] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <Landmark className="h-3 w-3 sm:h-4 sm:w-4" /> Je vous remets une facture à chaque séance pour transmettre à votre mutuelle.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="mb-12">
               <SectionBadge>Paiement</SectionBadge>
               <h2 className="mt-8 text-3xl sm:text-4xl text-site font-heading italic">Moyens de paiement acceptés</h2>
            </div>
            
            <div className="space-y-8">
              {[
                { i: CreditCard, t: 'Carte bancaire', d: 'Paiement sécurisé en cabinet ou par lien Stripe pour les séances à distance.' },
                { i: Landmark, t: 'Virement bancaire', d: 'RIB transmis sur demande, pour les formations ou séances programmées.' },
                { i: Banknote, t: 'Espèces', d: 'Accepté en cabinet, avec remise d\'un reçu sur demande.' },
                { i: Receipt, t: 'Chèque', d: 'À l\'ordre de Katia Burgun, accepté pour toutes les prestations.' }
              ].map(item => (
                <div key={item.t} className="flex gap-6 group">
                  <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-[var(--site-surface)] border border-site flex items-center justify-center group-hover:border-[#8ba394]/50 transition-colors">
                     <item.i className="h-4 w-4 text-[#8ba394]" />
                  </div>
                  <div>
                     <h3 className="text-site font-medium mb-2">{item.t}</h3>
                     <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[var(--site-surface)] p-10 sm:p-12 rounded-[3rem] border border-site h-fit">
            <div className="space-y-10">
              {[
                { t: 'Conditions d\'annulation', d: 'Les séances peuvent être annulées ou reportées gratuitement jusqu\'à 48 heures avant le rendez-vous. Passé ce délai, la séance reste due en totalité, sauf cas de force majeure dûment justifié.' },
                { t: 'Remboursements mutuelle', d: 'Je vous remets systématiquement une facture. Il vous appartient de la transmettre à votre mutuelle. Le montant et les conditions de remboursement dépendent de votre contrat.' },
                { t: 'Acompte formations', d: 'Un acompte de 50€ est demandé à la réservation d\'une formation. Le solde est réglé le jour J. En cas d\'annulation à plus de 15 jours, l\'acompte est remboursé.' }
              ].map((item, index) => (
                <div key={item.t} className={index !== 0 ? "pt-10 border-t border-site" : ""}>
                   <h3 className="text-site font-medium mb-3">{item.t}</h3>
                   <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
