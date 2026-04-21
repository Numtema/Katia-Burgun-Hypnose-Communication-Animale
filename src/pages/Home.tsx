import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Calendar, Heart, ChevronRight, Sparkles, MessageCircle, GraduationCap, Plus, Star } from 'lucide-react';
import { HlsBackgroundVideo, SectionBadge, BlurText, PrimaryButton, cn } from '../components/UI';

const HERO_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";
const STATS_VIDEO = "https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8";

const portraitKatia2 = "https://katia-hypnotherapeute-normandie.vercel.app/_next/image?url=https%3A%2F%2Fscontent.fcdg3-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F280736276_115864707788474_7526965914387568168_n.jpg%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3D1d70fc%26_nc_ohc%3DjUP3--iFNh4Q7kNvwHpwvJ2%26_nc_oc%3DAdpIWNW1vwMQyhxm3byXUJ_FdegQrIr3jgM5jtGFeANaN5mN0mqxh18LK9gNklOrbnIwC6sX5K6RQNsqqhqdKk1w%26_nc_zt%3D23%26_nc_ht%3Dscontent.fcdg3-1.fna%26_nc_gid%3DgsjpyQADe76772P9QOpNkA%26_nc_ss%3D7a3a8%26oh%3D00_Af0oF_XrNSnxlEw3i4LkXUMGpZ8Zqv92LFO0l91cMzpdLg%26oe%3D69E5A58C&w=1920&q=75";
const hypnoseImg = "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=1200";
const communicationImg = "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&q=80&w=1200";
const formationImg = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200";

const faqs = [
  { q: "Comment se déroule une séance d'hypnose ?", a: "La séance débute par un échange pour définir votre objectif. Ensuite, je vous guide vers un état de relaxation profonde (transe légère) où nous travaillons avec votre inconscient via des métaphores et des suggestions bienveillantes. Vous restez maître de vous-même à chaque instant." },
  { q: "La communication animale, ça marche vraiment ?", a: "Oui, c'est une connexion de cœur à cœur (télépathique) qui permet de recevoir des informations sensorielles, émotionnelles et mentales de l'animal. Cela permet de comprendre ses besoins profonds et d'apaiser des troubles du comportement souvent liés au vécu ou à l'environnement." },
  { q: "Les séances sont-elles remboursées ?", a: "L'hypnose n'est pas remboursée par la Sécurité Sociale, mais de nombreuses mutuelles prennent en charge une partie ou la totalité des séances (MGEN, Allianz, AXA, etc.). Vérifiez auprès de votre contrat. Je vous remets une facture systématiquement." },
  { q: "Puis-je faire une séance à distance ?", a: "Tout à fait. La communication animale se fait exclusivement à distance. Pour l'hypnose, les séances en visio sont tout aussi efficaces qu'en cabinet, du moment que vous êtes dans un endroit calme où vous ne serez pas dérangé." },
  { q: "Combien de séances sont nécessaires ?", a: "C'est variable selon chaque personne et chaque objectif. Parfois une seule séance suffit pour un déclic majeur (notamment en communication animale ou arrêt du tabac), mais un accompagnement de 3 à 5 séances est souvent idéal pour ancrer un changement profond et durable." },
  { q: "Comment annuler un rendez-vous ?", a: "Par respect pour mon temps de travail et pour les personnes en attente, merci de me prévenir au moins 48h à l'avance. Tout rendez-vous annulé moins de 48h avant la séance est dû." }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-site transition-colors duration-500">
      {/* Hero */}
      <section id="home" className="relative h-screen bg-site flex items-center overflow-hidden transition-colors duration-500">
        <HlsBackgroundVideo src={HERO_VIDEO} className="opacity-40 grayscale mix-blend-[var(--glass-blend)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--site-bg)]/80 via-[var(--site-bg)]/20 to-[var(--site-bg)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <SectionBadge>Séances en ligne & Cabinet</SectionBadge>
          <BlurText text="Retrouvez l'harmonie avec" delay={40} className="justify-center mt-8 text-4xl sm:text-7xl italic font-heading text-site" />
          <BlurText text="vous-même et votre animal" delay={60} className="justify-center mt-2 text-4xl sm:text-7xl italic font-heading text-[#6d8b7a] dark:text-[#8ba394]" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="mt-8 max-w-3xl mx-auto text-sm sm:text-base font-light text-[var(--site-fg)] opacity-70 leading-relaxed font-body">
            Hypnose Ericksonienne & Communication Intuitive : libérez vos blocages et créez un lien profond avec vos compagnons. Un accompagnement bienveillant en Normandie et à distance.
          </motion.p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <PrimaryButton href="/#services">Découvrir les services</PrimaryButton>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[var(--site-border)] px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold text-site transition-all hover:bg-[var(--site-surface)]">Prendre rendez-vous</a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-[var(--site-muted)]">Découvrir</span>
            <div className="w-px h-8 bg-site opacity-20 relative overflow-hidden">
              <motion.div 
                animate={{ y: [0, 32] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-full h-1/2 bg-[#8ba394] absolute top-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-site py-24 px-6 border-b border-site transition-colors duration-500">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-3xl sm:text-5xl italic text-site leading-tight mb-8">
            « L'harmonie naît de l'écoute : celle de notre inconscient et celle du cœur de nos animaux. »
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-[#8ba394]" />
            <span className="text-[#8ba394] font-heading italic text-xl">— Katia Burgun</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-site py-24 sm:py-32 px-6 lg:px-16 overflow-hidden transition-colors duration-500">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-site group">
              <img src={portraitKatia2} alt="Portrait Katia Burgun" className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-bg)] to-transparent opacity-60" />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col items-start">
            <SectionBadge>À propos</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic leading-tight">Une passionnée du vivant, dédiée à <span className="text-[#8ba394]">l'harmonie</span></h2>
            <div className="mt-8 space-y-6 text-[var(--site-muted)] font-light text-sm sm:text-base max-w-xl leading-relaxed">
              <p>Depuis toujours, j'ai ressenti un lien profond et inexplicable avec les animaux. Je sentais qu'ils avaient des choses à nous dire, bien au-delà de leurs simples comportements.</p>
              <p>Très vite, je me suis rendu compte que le bien-être de l'animal est intimement lié à celui de son gardien. Un animal stressé est souvent l'éponge des émotions de son humain. C'est pour cette raison que j'ai ajouté une corde à mon arc en me formant à l'Hypnose Ericksonienne.</p>
              <p>Aujourd'hui, ma double compétence me permet d'offrir un accompagnement global : j'apaise l'animal par la communication intuitive, et j'accompagne l'humain vers la sérénité grâce à l'hypnose.</p>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 w-full border-t border-site pt-10">
              {[['800h', 'De pratique'], ['+250', 'Accompagnés'], ['2', 'Spécialités']].map(([v, l]) => (<div key={l}><div className="text-3xl font-heading italic text-[#6d8b7a] dark:text-[#8ba394]">{v}</div><div className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-medium">{l}</div></div>))}
            </div>
            <div className="mt-12"><PrimaryButton href="/qui-suis-je" className="bg-[var(--site-surface)] border border-site px-10">En savoir plus sur moi</PrimaryButton></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-site py-24 sm:py-32 px-6 lg:px-16 border-t border-site transition-colors duration-500">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-24">
            <SectionBadge>Expertise</SectionBadge>
            <h2 className="mt-8 text-5xl sm:text-7xl text-site font-heading italic">Services <span className="text-[#8ba394]">& Tarifs</span></h2>
            <p className="mt-6 text-[var(--site-muted)] max-w-lg font-light">Des accompagnements sur-mesure pour vous et vos animaux, en cabinet ou à distance.</p>
          </div>
          
          <div className="space-y-32">
            <ServiceRow 
              icon={MessageCircle} 
              title="Communication Animale" 
              price="80€ / Consultation" 
              desc="Écoutez ce que votre animal a à vous dire. Une connexion intuitive pour comprendre ses émotions et ses besoins profonds." 
              image={communicationImg}
              href="/communication-animale"
            />
            <ServiceRow 
              reverse 
              icon={Sparkles} 
              title="Hypnose Ericksonienne" 
              price="60€ / Séance (1h30)" 
              desc="Libérez votre potentiel inconscient. Un voyage intérieur pour apaiser le stress, retrouver le sommeil et dépasser vos blocages." 
              image={hypnoseImg} 
              href="/hypnose"
            />
            <ServiceRow 
              icon={GraduationCap} 
              title="Formation" 
              price="150€ / Personne" 
              desc="Réveillez vos capacités intuitives. Apprenez à communiquer avec le vivant lors d'une journée d'initiation à mon domicile." 
              image={formationImg} 
              href="/formation-initiation-communication-animale"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--site-surface-solid)] py-24 sm:py-32 px-6 lg:px-16 border-y border-site transition-colors duration-500">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <SectionBadge>Comment ça se passe ?</SectionBadge>
              <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic leading-tight">Un processus simple et <span className="text-[#8ba394]">bienveillant</span></h2>
              <p className="mt-6 text-[var(--site-muted)] font-light leading-relaxed">Chaque séance est unique. Je m'adapte à votre rythme et à celui de votre compagnon.</p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { n: '01', t: 'Prise de contact', d: 'Vous me contactez pour définir votre objectif (pour vous ou votre animal).' },
                { n: '02', t: 'Préparation', d: 'Pour votre animal : vous m\'envoyez sa photo et vos questions. Pour vous : vous vous installez au calme.' },
                { n: '03', t: 'La Séance', d: 'Je réalise la séance d\'hypnose avec vous, ou je me connecte intuitivement à votre animal.' },
                { n: '04', t: 'Restitution', d: 'Nous échangeons sur les informations reçues. Vous repartez avec des réponses et un profond apaisement.' }
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
          <div className="flex flex-col items-start mb-20 text-left">
            <SectionBadge>Vos histoires, notre chemin</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic max-w-2xl">Reconnexion & <span className="text-[#8ba394]">apaisement</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: "L'approche de Katia a complètement transformé ma façon de gérer le stress. Ses séances d'hypnose sont une véritable bulle d'oxygène dans ma semaine.", n: "Sophie L.", r: "Patiente en hypnose" },
              { t: "Une expérience incroyable avec mon chien qui avait des problèmes de comportement. Katia a su mettre des mots sur ses maux. Je recommande les yeux fermés.", n: "Marc D.", r: "Communication animale" },
              { t: "La formation en communication animale est fascinante. Katia transmet son savoir avec tellement de bienveillance et de clarté. Une belle découverte.", n: "Élise M.", r: "Élève en formation" }
            ].map((it, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-10 rounded-[2.5rem] bg-[var(--site-surface)] border border-site backdrop-blur-sm relative">
                <div className="flex gap-0.5 mb-6">{[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 text-[#8ba394] fill-[#8ba394]" />)}</div>
                <p className="text-base text-site opacity-90 font-heading italic leading-relaxed mb-10">“{it.t}”</p>
                <div className="mt-8 border-t border-site pt-6">
                  <div className="text-site font-medium text-xs font-body">{it.n}</div>
                  <div className="mt-1 text-[9px] text-[#8ba394] uppercase tracking-widest font-bold font-body">{it.r}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center"><PrimaryButton href="/temoignages" className="bg-[var(--site-surface)] border border-site px-10">Voir tous les témoignages</PrimaryButton></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-site py-24 sm:py-32 px-6 lg:px-16 border-t border-site transition-colors duration-500">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <SectionBadge>Questions fréquentes</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Ce qu'on me <span className="text-[#8ba394]">demande</span> souvent</h2>
            <p className="mt-6 text-[var(--site-muted)] font-light text-sm">Une question spécifique ? N'hésitez pas à me contacter directement.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-site bg-[var(--site-surface)] rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--site-bg)] transition-colors"
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
                      <div className="px-8 pb-8 text-[var(--site-muted)] text-sm font-light leading-relaxed border-t border-site pt-6 mx-8">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center group">
            <PrimaryButton href="#contact" className="px-10">Me contacter</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceRow({ title, price, desc, image, reverse, icon: Icon, href }: any) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", reverse ? "lg:flex-row-reverse" : "")}>
      <div className={cn("relative aspect-video rounded-[2.5rem] overflow-hidden border border-site group", reverse ? "lg:order-2" : "")}>
        <img src={image} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
        <div className="absolute top-8 left-8 h-12 w-12 rounded-xl bg-[var(--site-surface)] backdrop-blur-xl border border-site flex items-center justify-center"><Icon className="h-5 w-5 text-[#6d8b7a] dark:text-[#8ba394]" /></div>
      </div>
      <div className={cn("flex flex-col items-start px-2", reverse ? "lg:order-1" : "")}>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[#6d8b7a] dark:text-[#8ba394] font-heading italic text-3xl">{price}</span>
        </div>
        <h3 className="text-3xl sm:text-4xl text-site font-heading italic mb-6 leading-tight max-w-md">{title}</h3>
        <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-10 max-w-lg">{desc}</p>
        <div className="flex gap-4">
           <PrimaryButton href={href} className="bg-[var(--site-surface)] border border-site px-6 py-3">En savoir plus</PrimaryButton>
           <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/40 px-6 py-3 text-[10px] uppercase tracking-widest font-bold text-[#6d8b7a] dark:text-[#8ba394] hover:bg-[#8ba394]/10 transition-all">Réserver</a>
        </div>
      </div>
    </div>
  );
}
