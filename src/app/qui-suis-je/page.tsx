"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Heart, MessageSquare, Phone, MapPin, Calendar, Star, ShieldCheck, Zap, Users } from 'lucide-react';
import Image from 'next/image';
import { SectionBadge, BlurText, PrimaryButton } from '../../components/UI';

const portraitKatia = "/assets/katia-burgun-hypnotherapeute-normandie.jpeg";
const diplomeKatia = "/assets/Formation katia burgun formation.png";

export default function Bio() {
  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-16 py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          <div className="relative rounded-[3rem] overflow-hidden border border-site group shadow-2xl h-full min-h-[500px]">
            <Image 
              src={portraitKatia} 
              alt="Portrait Katia Burgun" 
              fill
              className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </div>
          <div className="flex flex-col items-start">
            <SectionBadge>Qui suis-je ?</SectionBadge>
            <BlurText text="Une approche sensible," delay={50} className="mt-8 text-4xl sm:text-6xl italic font-heading text-site" />
            <BlurText text="humaine et intuitive" delay={150} className="mt-2 text-4xl sm:text-6xl italic font-heading text-[#8ba394]" />
            
            <div className="mt-10 space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
              <p className="text-xl font-heading italic text-site leading-relaxed">
                Je suis Katia Burgun, praticienne en hypnose ericksonienne et en communication intuitive avec les animaux.
              </p>
              <p>
                J’accompagne les humains ainsi que les animaux avec écoute, respect et délicatesse. Mon approche repose sur une attention particulière à ce qui ne se dit pas toujours avec les mots : les ressentis, les émotions, les silences, les tensions, les besoins profonds.
              </p>
              <p>
                Je crois profondément que le mieux-être de chacun, humain comme animal, passe par l’écoute, la patience et l’honnêteté envers soi.
              </p>
              <p className="italic border-l-2 border-[#8ba394] pl-6 py-2 bg-[#8ba394]/5 rounded-r-2xl">
                C’est ce à quoi j’aspire dans chaque séance : offrir un espace sécurisant, respectueux et sincère, où ce qui cherche à être entendu peut enfin trouver sa place.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-6">
              <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-4xl">
          <SectionBadge>Mon parcours</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-12">Deux approches, une même <span className="text-[#8ba394]">attention au vivant</span></h2>
          <div className="space-y-8 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-balance">
               <div className="space-y-6">
                  <p>Par ailleurs, mon désir d’aider l’humain m’a conduite à me former à l’hypnose ericksonienne.</p>
                  <p>Au départ, j’étais attirée par l’hypnose régressive, avec cette envie d’explorer des dimensions plus profondes de l’histoire personnelle. Une amie hypnothérapeute m’a alors conseillé de commencer par l’hypnose ericksonienne, une approche déjà très complète, capable d’accompagner de nombreuses problématiques avec douceur et profondeur.</p>
                  <p>Cette formation m’a permis d’ouvrir un autre espace d’accompagnement, cette fois directement tourné vers l’humain : ses émotions, ses blocages, ses ressources, son besoin d’apaisement ou de changement.</p>
               </div>
               <div className="space-y-6">
                  <p>Depuis l’enfance, j’ai un lien particulier avec les animaux. Je les ressens, je capte leurs émotions, parfois avant même de les observer longuement. Pendant longtemps, j’ai pensé qu’il s’agissait simplement de ma sensibilité.</p>
                  <p>Puis j’ai découvert la communication intuitive animale, et beaucoup de choses se sont éclairées.</p>
                  <p>En accompagnant mes premiers “clients” animaux, j’ai compris qu’un animal stressé peut souvent être en miroir avec son humain. En transmettant ce que je perçois, les messages reçus peuvent entrer en résonance avec leurs gardiens et ouvrir une compréhension plus fine du lien qui les unit.</p>
               </div>
            </div>
            
            <div className="p-8 sm:p-12 rounded-[2.5rem] border border-[#8ba394]/20 bg-[var(--site-bg)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#8ba394]/5 rounded-full blur-2xl transition-all group-hover:scale-150" />
               <p className="relative z-10 text-lg sm:text-xl text-site font-heading italic text-center max-w-2xl mx-auto leading-relaxed">
                Aujourd’hui, ces deux pratiques cohabitent dans mon parcours : l’une tournée vers l’accompagnement de l’humain dans ses propres mouvements intérieurs, l’autre vers l’écoute de l’animal et du lien avec son gardien.
               </p>
               <p className="relative z-10 text-center mt-6 text-[#8ba394] font-medium uppercase tracking-[0.2em] text-[10px]">Dans les deux cas, mon intention reste la même : accueillir avec sérieux, respect et délicatesse ce qui cherche à être entendu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <SectionBadge>Mon approche</SectionBadge>
                <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Écouter <span className="text-[#8ba394]">sans forcer</span></h2>
                <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
                  <p>Je ne crois pas aux accompagnements figés ni aux réponses toutes faites.</p>
                  <p>Chaque personne, chaque animal, chaque histoire est unique. C’est pourquoi j’accorde une grande importance à l’écoute, au rythme de chacun et à ce qui se présente dans l’instant.</p>
                  <p>En hypnose comme en communication animale, je cherche à accompagner sans imposer. Je propose un cadre, une présence, une écoute, puis nous avançons avec ce qui émerge.</p>
                  <p className="font-medium text-site italic">L’objectif n’est pas de forcer un changement, mais de permettre à quelque chose de se remettre en mouvement.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { t: 'Respect', d: 'Respecter votre rythme, votre histoire, votre sensibilité, mais aussi celle de l’animal.', icon: ShieldCheck },
                   { t: 'Écoute', d: 'Prendre le temps d’entendre ce qui se dit, mais aussi ce qui se ressent, ce qui se répète ou ce qui reste silencieux.', icon: MessageSquare },
                   { t: 'Délicatesse', d: 'Avancer avec prudence, sans jugement, sans brusquer ce qui demande à être accueilli.', icon: Heart },
                   { t: 'Clarté', d: 'Mettre des mots simples sur ce qui émerge, afin que chacun puisse mieux comprendre ce qu’il vit.', icon: Zap },
                   { t: 'Humilité', d: 'Je ne prétends pas tout savoir ni tout résoudre. J’accompagne avec sincérité, dans le respect de mes compétences et de mes limites.', icon: Star }
                 ].map((item, idx) => (
                   <div key={item.t} className={idx === 4 ? "sm:col-span-2 p-8 rounded-3xl border border-site bg-[var(--site-surface)] flex gap-6 items-center" : "p-8 rounded-3xl border border-site bg-[var(--site-surface)] space-y-4"}>
                      <div className="h-10 w-10 shrink-0 rounded-2xl bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center"><item.icon className="h-5 w-5 text-[#8ba394]" /></div>
                      <div>
                        <h3 className="text-site font-medium mb-1">{item.t}</h3>
                        <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-[var(--site-surface-solid)] py-24 px-6 lg:px-16 border-y border-site overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ba394]/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl relative z-10">
           <div className="text-center mb-20">
              <SectionBadge>Mon parcours</SectionBadge>
              <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Dates <span className="text-[#8ba394]">clés</span></h2>
           </div>

           <div className="relative space-y-16">
              {/* Vertical Line */}
              <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-site opacity-20 -translate-x-1/2" />
              
              {[
                { 
                  year: '2018', 
                  title: 'Première formation en communication animale',
                  desc: "Initiation auprès d'une communicante reconnue, suivie d'une pratique intensive de deux ans auprès d'animaux variés pour affiner mes perceptions." 
                },
                { 
                  year: '2020', 
                  title: 'Perfectionnement télépathique',
                  desc: "Approfondissement des canaux intuitifs : travail sur la fin de vie, l'accompagnement d'animaux perdus et les problématiques comportementales complexes." 
                },
                { 
                  year: '2022', 
                  title: 'Hypnose Ericksonienne & Communication Intuitive',
                  desc: "Cursus complet de 800 heures en hypnose et thérapie brève, sanctionné par un brevet délivré par la Fédération française d'hypnose et de thérapie brève (FFHTB). En parallèle, consolidation de ma pratique en communication animale avec supervision clinique." 
                },
                { 
                  year: '2023', 
                  title: 'Ouverture du cabinet à Houdetot',
                  desc: "Installation officielle en Normandie. Début des séances individuelles en cabinet et à distance, alliant l'accompagnement de l'humain et du vivant." 
                },
                { 
                  year: '2024', 
                  title: 'Lancement des formations',
                  desc: "Transmission de mes techniques lors de journées d'initiation à la communication animale intuitive, pour partager ce lien universel." 
                }
              ].map((item, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                   {/* Dot */}
                   <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 rounded-full bg-[#8ba394] border-2 border-[var(--site-bg)] z-10 -translate-x-1/2" />
                   
                   <div className="w-full md:w-1/2 pl-12 md:pl-0">
                      <div className={`p-8 rounded-[2.5rem] border border-site bg-[var(--site-bg)] transition-all duration-500 hover:shadow-xl hover:border-[#8ba394]/30 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="text-[#8ba394] font-heading italic text-3xl mb-2">{item.year}</div>
                        <h3 className="text-site font-bold text-xs uppercase tracking-widest mb-4">{item.title}</h3>
                        <p className="text-[var(--site-muted)] text-xs sm:text-sm font-light leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                   <div className="hidden md:block w-1/2" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-32">
           {/* Hypnose */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                 <SectionBadge>Hypnose</SectionBadge>
                 <h2 className="mt-8 text-3xl sm:text-4xl text-site font-heading italic mb-8">Accompagner l’humain vers plus <span className="text-[#8ba394]">d’apaisement</span></h2>
                 <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
                   <p>L’hypnose ericksonienne est venue répondre à mon désir d’aider l’humain.</p>
                   <p>Elle permet d’accompagner des périodes de changement, des blocages émotionnels, du stress, des difficultés de confiance, des peurs, des habitudes pesantes ou encore des moments de vie plus délicats.</p>
                   <p>J’aime cette approche parce qu’elle respecte profondément la personne. Elle ne force pas. Elle s’appuie sur les ressources déjà présentes en chacun, même lorsqu’elles semblent difficiles à retrouver.</p>
                   <p className="font-medium text-site italic">Mon rôle est d’accompagner ce mouvement intérieur, avec douceur, présence et respect.</p>
                   <div className="pt-4">
                      <Link href="/hypnose" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
                        En savoir plus sur l'hypnose <ArrowLeft className="h-3 w-3 rotate-180" />
                      </Link>
                   </div>
                 </div>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-xl group">
                 <Image 
                   src={diplomeKatia} 
                   alt="Formation Hypnose" 
                   fill
                   className="object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                   sizes="(max-width: 1024px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 bg-[#8ba394]/5 pointer-events-none" />
              </div>
           </div>

           {/* Communication Animale */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-xl group">
                 <Image 
                   src="/assets/chat-katia-burgun.jpeg" 
                   alt="Communication Animale" 
                   fill
                   className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                   sizes="(max-width: 1024px) 100vw, 50vw"
                 />
                 <div className="absolute inset-0 bg-[#8ba394]/5 pointer-events-none" />
              </div>
              <div>
                 <SectionBadge>Communication Animale</SectionBadge>
                 <h2 className="mt-8 text-3xl sm:text-4xl text-site font-heading italic mb-8">Écouter ce que l’animal <span className="text-[#8ba394]">exprime autrement</span></h2>
                 <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
                   <p>La communication animale intuitive est une écoute subtile du vivant.</p>
                   <p>Elle permet de se relier aux ressentis, aux émotions, aux besoins ou aux messages que l’animal semble vouloir transmettre.</p>
                   <p>L’animal est un véritable miroir de son humain. Ses comportements, ses réactions ou ses fragilités peuvent entrer en résonance avec ce que vit son gardien.</p>
                   <p className="font-medium text-site italic">Il ne s’agit pas de poser un diagnostic, ni de remplacer un suivi vétérinaire. Il s’agit d’ouvrir un espace de compréhension, pour mieux entendre ce que l’animal exprime et éclairer le lien qui l’unit à son humain.</p>
                   <div className="pt-4">
                      <Link href="/communication-animale" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
                        Découvrir la communication animale <ArrowLeft className="h-3 w-3 rotate-180" />
                      </Link>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
         <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
               <SectionBadge>Précision éthique</SectionBadge>
               <h2 className="mt-8 text-3xl sm:text-4xl text-site font-heading italic mb-10 text-balance">Une pratique <span className="text-[#8ba394]">complémentaire</span></h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full">
                  <div className="p-8 rounded-3xl border border-site bg-[var(--site-bg)]">
                     <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
                        L’hypnose ericksonienne ne remplace jamais un avis médical, un diagnostic ou un traitement.
                     </p>
                  </div>
                  <div className="p-8 rounded-3xl border border-site bg-[var(--site-bg)]">
                     <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">
                        La communication animale ne remplace jamais un avis vétérinaire, un diagnostic ou un suivi comportemental lorsque celui-ci est nécessaire.
                     </p>
                  </div>
               </div>
               <p className="mt-12 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base max-w-2xl italic">
                  Ces approches viennent en complément, pour apporter de l’écoute, du sens, de l’apaisement et une meilleure compréhension de ce qui se vit.
               </p>
            </div>
         </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 lg:px-16 text-center bg-site">
        <div className="mx-auto max-w-3xl">
           <SectionBadge>Intention</SectionBadge>
           <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-10 leading-tight text-balance">Ce que je souhaite <span className="text-[#8ba394]">transmettre</span></h2>
           <p className="text-[var(--site-muted)] font-light leading-relaxed mb-12 text-lg italic">
            "Je souhaite créer un espace où l’on peut déposer ce qui pèse, écouter ce que cherche à se dire, et avancer avec plus de clarté."
           </p>
           <p className="text-site font-medium uppercase tracking-[0.3em] text-[11px] mb-16">
            Que l’accompagnement concerne l’humain, l’animal, ou le lien entre les deux, mon intention reste la même : accueillir avec respect, transmettre avec sincérité, et accompagner avec délicatesse.
           </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center border-t border-site">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Échange</SectionBadge>
          <h2 className="mt-8 text-4xl text-site font-heading italic mb-8">Envie <span className="text-[#8ba394]">d'échanger ?</span></h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-12 text-sm sm:text-base">
            Si vous ressentez le besoin d’être accompagné, pour vous-même ou pour votre animal, je vous accueille avec écoute et bienveillance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
             <PrimaryButton href="#contact">Prendre rendez-vous</PrimaryButton>
             <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#8ba394]/10 border border-[#8ba394]/20 flex items-center justify-center"><Phone className="h-4 w-4 text-[#8ba394]" /></div>
                <div className="text-left">
                   <div className="text-[8px] uppercase tracking-widest text-[var(--site-muted)] font-bold">Téléphone</div>
                   <div className="text-site font-heading italic">06 77 49 52 88</div>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}

