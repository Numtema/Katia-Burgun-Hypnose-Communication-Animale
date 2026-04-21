import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, MessageCircle, GraduationCap, Plus, Star } from 'lucide-react';
import { HlsBackgroundVideo, SectionBadge, BlurText, PrimaryButton, cn } from '../components/UI';

const HERO_VIDEO = "/hero-video.mp4";
const STATS_VIDEO = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

const portraitKatia2 = "https://katia-hypnotherapeute-normandie.vercel.app/_next/image?url=https%3A%2F%2Fscontent.fcdg3-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F280736276_115864707788474_7526965914387568168_n.jpg%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3D1d70fc%26_nc_ohc%3DjUP3--iFNh4Q7kNvwHpwvJ2%26_nc_oc%3DAdpIWNW1vwMQyhxm3byXUJ_FdegQrIr3jgM5jtGFeANaN5mN0mqxh18LK9gNklOrbnIwC6sX5K6RQNsqqhqdKk1w%26_nc_zt%3D23%26_nc_ht%3Dscontent.fcdg3-1.fna%26_nc_gid%3DgsjpyQADe76772P9QOpNkA%26_nc_ss%3D7a3a8%26oh%3D00_Af0oF_XrNSnxlEw3i4LkXUMGpZ8Zqv92LFO0l91cMzpdLg%26oe%3D69E5A58C&w=1920&q=75";
const hypnoseImg = "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200";
const communicationImg = "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=1200";
const formationImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200";

const faqs = [
  { q: "Quelle est la différence entre l'hypnose Ericksonienne et la communication animale ?", a: "L'hypnose Ericksonienne s'adresse à l'humain. Elle vise à mobiliser vos ressources intérieures pour retrouver un mieux-être, dépasser certains blocages ou apaiser le stress.\nLa communication animale s'adresse à la compréhension de l'animal, de ses émotions, de ses besoins et de la relation que vous vivez avec lui." },
  { q: "Comment savoir quel accompagnement choisir ?", a: "Si votre besoin concerne votre état émotionnel, votre stress, votre sommeil ou un blocage personnel, l'hypnose est la voie la plus adaptée.\nSi vous cherchez à mieux comprendre votre animal, un comportement ou une situation que vous vivez avec lui, la communication animale est la bonne porte d'entrée." },
  { q: "Les séances peuvent-elles se faire à distance ?", a: "Oui. Les séances d'hypnose comme les consultations en communication animale peuvent être proposées à distance selon votre situation." },
  { q: "La communication animale remplace-t-elle un vétérinaire ?", a: "Non. La communication animale ne remplace jamais un avis, un diagnostic ou un suivi vétérinaire. Elle vient en complément d'une démarche de soin et de compréhension." },
  { q: "Combien de séances d'hypnose faut-il prévoir ?", a: "Cela dépend de votre objectif et de votre rythme. Certaines personnes ressentent un apaisement dès les premières séances, d'autres ont besoin d'un accompagnement sur plusieurs rendez-vous." },
  { q: "Comment se passe une consultation en communication animale ?", a: "Vous m'envoyez une photo récente de votre animal ainsi que vos questions. Après la séance, je vous fais une restitution des informations perçues et nous échangeons ensemble." }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-site transition-colors duration-500">
      {/* Hero */}
      <section id="home" className="relative h-screen bg-site flex items-center overflow-hidden transition-colors duration-500">
        <HlsBackgroundVideo src={HERO_VIDEO} className="opacity-70 md:opacity-80 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--site-bg)]/80 via-[var(--site-bg)]/30 to-[var(--site-bg)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center mt-12">
          <SectionBadge>Hypnose Ericksonienne & Communication animale</SectionBadge>
          <BlurText text="Hypnose pour vous," delay={40} className="justify-center mt-8 text-4xl sm:text-6xl md:text-7xl italic font-heading text-site" />
          <BlurText text="communication animale pour votre compagnon" delay={60} className="justify-center mt-2 text-3xl sm:text-5xl md:text-6xl italic font-heading text-[#6d8b7a] dark:text-[#8ba394]" />
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-8 max-w-4xl mx-auto text-sm sm:text-base font-light text-[var(--site-fg)] opacity-80 leading-relaxed font-body">
            À Fontaine-le-Dun, en Normandie et à distance, Katia Burgun vous accompagne en hypnose Ericksonienne pour apaiser le stress, les blocages et la surcharge émotionnelle, et propose des séances de communication animale pour mieux comprendre les émotions, les besoins et les comportements de votre animal.
          </motion.p>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }} className="mt-4 max-w-2xl mx-auto text-sm sm:text-base font-medium text-site italic">
            Deux accompagnements distincts, une même intention : remettre de l’écoute, du sens et de l’apaisement dans votre vie et dans votre lien avec votre animal.
          </motion.p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold text-site transition-all hover:bg-[var(--site-surface)]">Découvrir les accompagnements</a>
          </div>
        </div>
      </section>

      {/* Orientation immédiate */}
      <section className="bg-[var(--site-surface-solid)] py-16 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
             <h2 className="text-2xl sm:text-3xl text-site font-heading italic">Vous êtes au bon endroit si...</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/hypnose-ericksonienne-houdetot" className="rounded-[2.5rem] bg-[var(--site-bg)] border border-site flex flex-col h-full hover:border-[#8ba394]/50 transition-all duration-500 overflow-hidden group shadow-lg hover:shadow-xl">
               <div className="h-56 relative overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2620&auto=format&fit=crop" 
                   alt="Apaisement et relaxation" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-90" />
               </div>
               <div className="p-8 sm:p-10 pt-4 flex-1 flex flex-col relative z-10">
                 <SectionBadge className="self-start mb-6 !bg-[#8ba394]/10 !text-[#8ba394] !border-[#8ba394]/20">Pour vous</SectionBadge>
                 <p className="text-[var(--site-muted)] text-sm sm:text-base font-light leading-relaxed mb-10 flex-1">
                   Vous ressentez du stress, des blocages, une fatigue émotionnelle, des difficultés de sommeil ou le besoin de retrouver un apaisement intérieur.
                 </p>
                 <span className="text-xs uppercase tracking-widest font-bold text-[#8ba394] transition-colors self-start border-b border-[#8ba394]/30 group-hover:border-[#8ba394]">
                   Découvrir l'hypnose →
                 </span>
               </div>
            </Link>

            <Link to="/communication-animale" className="rounded-[2.5rem] bg-[var(--site-bg)] border border-site flex flex-col h-full hover:border-[#8ba394]/50 transition-all duration-500 overflow-hidden group shadow-lg hover:shadow-xl">
               <div className="h-56 relative overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2574&auto=format&fit=crop" 
                   alt="Chien et humain" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] via-transparent to-transparent opacity-90" />
               </div>
               <div className="p-8 sm:p-10 pt-4 flex-1 flex flex-col relative z-10">
                 <SectionBadge className="self-start mb-6">Pour votre animal</SectionBadge>
                 <p className="text-[var(--site-muted)] text-sm sm:text-base font-light leading-relaxed mb-10 flex-1">
                   Vous souhaitez mieux comprendre un comportement, une émotion, un changement, une inquiétude, ou renforcer votre lien avec votre compagnon.
                 </p>
                 <span className="text-xs uppercase tracking-widest font-bold text-[#8ba394] transition-colors self-start border-b border-[#8ba394]/30 group-hover:border-[#8ba394]">
                   Découvrir la communication animale →
                 </span>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-site py-24 px-6 border-b border-site transition-colors duration-500">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-3xl sm:text-5xl italic text-site leading-tight mb-8">
            « L'harmonie naît de l'écoute : celle de soi, et celle du vivant. »
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#8ba394]" />
            <span className="text-[#8ba394] font-heading italic text-xl">— Katia Burgun</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-site py-24 sm:py-32 px-6 lg:px-16 overflow-hidden transition-colors duration-500 border-b border-site">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-site group">
              <img src={portraitKatia2} alt="Portrait Katia Burgun" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] to-transparent opacity-60" />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="text-4xl sm:text-5xl text-site font-heading italic leading-tight">Une approche sensible du vivant, au service de <span className="text-[#8ba394]">l'humain et de l'animal</span></h2>
            <div className="mt-8 space-y-6 text-[var(--site-muted)] font-light text-sm sm:text-base max-w-xl leading-relaxed">
              <p>Depuis toujours, je ressens un lien profond avec les animaux et une attention particulière à ce qui ne se dit pas toujours avec des mots. Avec le temps, une évidence s'est imposée : le bien-être de l'animal et celui de son humain sont souvent intimement liés.</p>
              <p>C'est cette compréhension qui m'a conduite à développer une double approche. D'un côté, la communication animale me permet d'explorer les ressentis, les besoins et les messages de l'animal. De l'autre, l'hypnose Ericksonienne m'offre un cadre d'accompagnement pour aider l'humain à retrouver de l'apaisement, du recul et un nouvel équilibre intérieur.</p>
              <p>Aujourd'hui, j'accompagne chacun avec bienveillance, en cabinet à Fontaine-le-Dun et à distance, dans le respect de son rythme, de sa sensibilité et de son histoire.</p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 w-full border-t border-site pt-10">
              {[['800h', 'De pratique'], ['+250', 'Accompagnés'], ['2', 'Spécialités complémentaires']].map(([v, l]) => (<div key={l}><div className="text-3xl font-heading italic text-[#6d8b7a] dark:text-[#8ba394]">{v}</div><div className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-medium leading-tight mt-1">{l}</div></div>))}
            </div>
            <div className="mt-12"><PrimaryButton href="/qui-suis-je" className="bg-[var(--site-surface)] border border-site px-10">En savoir plus sur mon parcours</PrimaryButton></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-site py-24 sm:py-32 px-6 lg:px-16 transition-colors duration-500">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl sm:text-6xl text-site font-heading italic">Des accompagnements adaptés à <span className="text-[#8ba394]">votre besoin</span></h2>
            <p className="mt-6 text-[var(--site-muted)] max-w-2xl mx-auto font-light leading-relaxed">Vous pouvez consulter pour vous-même, pour votre animal, ou pour avancer plus sereinement dans la relation que vous partagez.</p>
          </div>
          
          <div className="space-y-32">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-site group">
                <img src={communicationImg} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" alt="Communication animale" />
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
                <img src={hypnoseImg} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" alt="Hypnose Ericksonienne" />
                <div className="absolute top-8 left-8 h-12 w-12 rounded-xl bg-[var(--site-surface)] backdrop-blur-xl border border-site flex items-center justify-center"><Sparkles className="h-5 w-5 text-[#6d8b7a] dark:text-[#8ba394]" /></div>
              </div>
              <div className="flex flex-col items-start px-2 lg:order-1">
                <SectionBadge className="mb-6">Hypnose Ericksonienne</SectionBadge>
                <h3 className="text-3xl sm:text-4xl text-site font-heading italic mb-6 leading-tight max-w-md">Retrouver un mieux-être intérieur durable</h3>
                <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-8 max-w-lg">L'hypnose Ericksonienne est un accompagnement centré sur vos ressources intérieures. Elle peut vous aider à apaiser le stress, retrouver un sommeil plus serein, traverser une période difficile, dépasser certains blocages et avancer avec plus de clarté.</p>
                <div className="mb-10 text-sm">
                   <strong className="text-site font-medium block mb-2">Cas fréquents :</strong>
                   <span className="text-[var(--site-muted)] font-light leading-relaxed">Stress, anxiété, sommeil, surcharge émotionnelle, manque de confiance, schémas répétitifs, besoin de recentrage.</span>
                </div>
                <div className="flex items-center gap-3 mb-8 bg-[var(--site-surface)] px-6 py-3 rounded-full border border-site">
                  <span className="text-[#6d8b7a] dark:text-[#8ba394] font-heading italic text-xl">60 €</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--site-muted)]">La séance d'1h30</span>
                </div>
                <div className="flex flex-wrap gap-4">
                   <PrimaryButton href="/hypnose-ericksonienne-houdetot" className="bg-[var(--site-surface)] border border-site px-6 py-3 text-xs sm:text-sm">Découvrir l'hypnose</PrimaryButton>
                   <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/40 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#6d8b7a] dark:text-[#8ba394] hover:bg-[#8ba394]/10 transition-all">Réserver</a>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-site group">
                <img src={formationImg} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" alt="Formation Initiation" />
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
                   <PrimaryButton href="/formation-initiation-communication-animale" className="bg-[var(--site-surface)] border border-site px-6 py-3 text-xs sm:text-sm">Découvrir la formation</PrimaryButton>
                   <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/40 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#6d8b7a] dark:text-[#8ba394] hover:bg-[#8ba394]/10 transition-all">Réserver</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--site-surface-solid)] py-24 sm:py-32 px-6 lg:px-16 border-y border-site transition-colors duration-500">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="text-4xl sm:text-5xl text-site font-heading italic leading-tight">Comment se déroule <span className="text-[#8ba394]">l'accompagnement ?</span></h2>
              <p className="mt-8 text-[var(--site-muted)] font-light leading-relaxed">Chaque séance est personnalisée. Le déroulement varie selon qu'il s'agit d'une séance d'hypnose ou d'une communication animale, mais l'intention reste la même : vous accueillir avec clarté, douceur et sérieux.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { n: '01', t: 'Premier échange', d: 'Nous faisons le point sur votre besoin, pour vous ou pour votre animal, afin de choisir l\'accompagnement le plus juste.' },
                { n: '02', t: 'Préparation', d: 'Pour une communication animale, vous m\'envoyez une photo de votre animal ainsi que vos questions. Pour une séance d\'hypnose, nous clarifions votre objectif ensemble.' },
                { n: '03', t: 'La séance', d: 'Je vous accompagne en hypnose Ericksonienne, ou je réalise la communication animale dans un cadre calme et concentré.' },
                { n: '04', t: 'Restitution et intégration', d: 'Nous échangeons sur ce qui a émergé pendant la séance, les ressentis, les prises de conscience et les pistes d\'apaisement.' }
              ].map(step => (
                <div key={step.n} className="p-8 rounded-3xl border border-site bg-[var(--site-surface)] hover:border-[#8ba394]/50 transition-all group">
                   <div className="text-5xl font-heading italic text-[#8ba394]/10 group-hover:text-[#8ba394]/30 transition-colors mb-6">{step.n}</div>
                   <h3 className="text-site font-body font-medium text-lg mb-3">{step.t}</h3>
                   <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-site py-24 sm:py-32 px-6 lg:px-16 transition-colors duration-500">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-4xl sm:text-5xl text-site font-heading italic max-w-2xl">Des accompagnements vécus avec <span className="text-[#8ba394]">confiance</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "L'approche de Katia a transformé ma façon de gérer le stress. Ses séances d'hypnose m'apportent un vrai espace d'apaisement.", r: "Hypnose Ericksonienne" },
              { t: "Grâce à Katia, j'ai mieux compris ce que vivait mon chien. Cela a changé ma manière de l'accompagner au quotidien.", r: "Communication animale" },
              { t: "Une journée riche, claire et profondément humaine. Katia transmet avec beaucoup de générosité.", r: "Formation en communication animale" }
            ].map((it, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-10 rounded-[2.5rem] bg-[var(--site-surface)] border border-site backdrop-blur-sm relative flex flex-col h-full">
                <div className="flex gap-0.5 mb-6">{[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 text-[#8ba394] fill-[#8ba394]" />)}</div>
                <p className="text-base text-site opacity-90 font-heading italic leading-relaxed mb-10 flex-1">“{it.t}”</p>
                <div className="mt-auto border-t border-site pt-6">
                  <div className="mt-1 text-[10px] text-[#8ba394] uppercase tracking-widest font-bold font-body">{it.r}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center"><PrimaryButton href="/temoignages" className="bg-[var(--site-surface)] border border-site px-10">Voir tous les témoignages</PrimaryButton></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--site-surface)] py-24 sm:py-32 px-6 lg:px-16 border-t border-site transition-colors duration-500">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
             <h2 className="text-4xl sm:text-5xl text-site font-heading italic">Questions <span className="text-[#8ba394]">fréquentes</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-site bg-[var(--site-bg)] rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--site-surface-solid)] transition-colors"
                >
                  <span className="text-site font-body text-sm font-medium">{faq.q}</span>
                  <div className={cn("p-2 rounded-full border border-site transition-transform duration-300", openFaq === idx ? "rotate-45" : "")}>
                    <Plus className="h-4 w-4 text-[#8ba394]" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-[var(--site-muted)] text-sm font-light leading-relaxed border-t border-site pt-6 mx-8 whitespace-pre-line">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
