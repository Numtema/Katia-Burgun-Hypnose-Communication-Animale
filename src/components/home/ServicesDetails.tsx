import React from 'react';
import { MessageCircle, Sparkles, GraduationCap } from 'lucide-react';
import { SectionBadge, PrimaryButton } from '../UI';

const hypnoseImg = "/assets/hypnose-katia-burgun-houdetot-normandie.png";
const communicationImg = "/assets/chat-katia-burgun.jpeg";
const formationImg = "/assets/formation-groupe-katia.png";

export default function ServicesDetails() {
  return (
    <section id="services" className="bg-site py-24 sm:py-32 px-6 lg:px-16 transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-3xl sm:text-4xl text-site font-heading italic leading-tight">Des accompagnements adaptés à <span className="text-[#8ba394]">votre besoin</span></h2>
          <p className="mt-6 text-[var(--site-muted)] max-w-2xl mx-auto font-light leading-relaxed">Vous pouvez consulter pour vous-même, pour votre animal, ou pour avancer plus sereinement dans la relation que vous partagez.</p>
        </div>
        
        <div className="space-y-32">
          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-site group">
              <img src={communicationImg} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Communication animale" />
              <div className="absolute top-8 left-8 h-12 w-12 rounded-xl bg-[var(--site-surface)] backdrop-blur-xl border border-site flex items-center justify-center"><MessageCircle className="h-5 w-5 text-[#6d8b7a] dark:text-[#8ba394]" /></div>
            </div>
            <div className="flex flex-col items-start px-2">
              <SectionBadge className="mb-6">Communication animale</SectionBadge>
              <h3 className="text-3xl sm:text-4xl text-site font-heading italic mb-6 leading-tight max-w-md">Mieux comprendre ce que votre animal exprime</h3>
              <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-8 max-w-lg">La communication animale permet d'explorer les ressentis, les émotions et les besoins de votre compagnon. Elle peut vous aider à mettre du sens sur certains comportements, à mieux vivre une période de changement, ou à renforcer votre lien avec lui.</p>
              <div className="mb-10 text-sm">
                 <strong className="text-site font-medium block mb-2">Cas fréquents :</strong>
                 <span className="text-[var(--site-muted)] font-light leading-relaxed">Changement de comportement, stress, incompréhension, séparation, arrivée d'un nouvel animal, déménagement, fin de vie, besoin de mieux comprendre ce que vit votre compagnon.</span>
              </div>
              <div className="flex items-center gap-3 mb-8 bg-[var(--site-surface)] px-6 py-3 rounded-full border border-site">
                <span className="text-[#6d8b7a] dark:text-[#8ba394] font-heading italic text-xl">80 €</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--site-muted)]">La consultation</span>
              </div>
              <div className="flex flex-wrap gap-4">
                 <PrimaryButton href="/communication-animale" className="bg-[var(--site-surface)] border border-site px-6 py-3 text-xs sm:text-sm">Découvrir la communication animale</PrimaryButton>
                 <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/40 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#6d8b7a] dark:text-[#8ba394] hover:bg-[#8ba394]/10 transition-all">Réserver</a>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-site group lg:order-2">
              <img src={hypnoseImg} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Hypnose Ericksonienne" />
              <div className="absolute top-8 left-8 h-12 w-12 rounded-xl bg-[var(--site-surface)] backdrop-blur-xl border border-site flex items-center justify-center"><Sparkles className="h-5 w-5 text-[#6d8b7a] dark:text-[#8ba394]" /></div>
            </div>
            <div className="flex flex-col items-start px-2 lg:order-1">
              <SectionBadge className="mb-6">Hypnose ericksonienne</SectionBadge>
              <h3 className="text-3xl sm:text-4xl text-site font-heading italic mb-6 leading-tight max-w-md">Retrouver un mieux-être intérieur durable</h3>
              <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-8 max-w-lg">L'hypnose ericksonienne est un accompagnement centré sur vos ressources intérieures. Elle peut vous aider à apaiser le stress, retrouver un sommeil plus serein, traverser une période difficile, dépasser certains blocages et avancer avec plus de clarté.</p>
              <div className="mb-10 text-sm">
                 <strong className="text-site font-medium block mb-2">Cas fréquents :</strong>
                 <span className="text-[var(--site-muted)] font-light leading-relaxed">Stress, anxiété, sommeil, surcharge émotionnelle, manque de confiance, schémas répétitifs, besoin de recentrage.</span>
              </div>
              <div className="flex items-center gap-3 mb-8 bg-[var(--site-surface)] px-6 py-3 rounded-full border border-site">
                <span className="text-[#6d8b7a] dark:text-[#8ba394] font-heading italic text-xl">60 €</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--site-muted)]">La séance d'1h30</span>
              </div>
              <div className="flex flex-wrap gap-4">
                 <PrimaryButton href="/hypnose" className="bg-[var(--site-surface)] border border-site px-6 py-3 text-xs sm:text-sm">Découvrir l'hypnose</PrimaryButton>
                 <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/40 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#6d8b7a] dark:text-[#8ba394] hover:bg-[#8ba394]/10 transition-all">Réserver</a>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-site group">
              <img src={formationImg} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="Formation Initiation" />
              <div className="absolute top-8 left-8 h-12 w-12 rounded-xl bg-[var(--site-surface)] backdrop-blur-xl border border-site flex items-center justify-center"><GraduationCap className="h-5 w-5 text-[#6d8b7a] dark:text-[#8ba394]" /></div>
            </div>
            <div className="flex flex-col items-start px-2">
              <SectionBadge className="mb-6">Formation en communication animale</SectionBadge>
              <h3 className="text-3xl sm:text-4xl text-site font-heading italic mb-6 leading-tight max-w-md">Développer votre sensibilité et votre écoute intuitive</h3>
              <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-8 max-w-lg">Lors de cette journée d'initiation, je vous transmets les bases de la communication animale dans un cadre simple, accessible et bienveillant. Une formation pensée pour les personnes qui souhaitent découvrir ou approfondir leur lien avec le vivant.</p>
              <div className="flex items-center gap-3 mb-8 bg-[var(--site-surface)] px-6 py-3 rounded-full border border-site">
                <span className="text-[#6d8b7a] dark:text-[#8ba394] font-heading italic text-xl">150 €</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--site-muted)]">Par personne</span>
              </div>
              <div className="flex flex-wrap gap-4">
                 <PrimaryButton href="/formation" className="bg-[var(--site-surface)] border border-site px-6 py-3 text-xs sm:text-sm">Découvrir la formation</PrimaryButton>
                 <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/40 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#6d8b7a] dark:text-[#8ba394] hover:bg-[#8ba394]/10 transition-all">Réserver</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
