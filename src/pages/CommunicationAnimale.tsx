import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Heart, 
  CheckCircle, 
  PawPrint, 
  Sparkles, 
  ArrowLeft, 
  ShieldCheck, 
  Camera, 
  Zap, 
  Phone, 
  Search, 
  Clock, 
  Users,
  Plus,
  Activity,
  GraduationCap
} from 'lucide-react';
import { SectionBadge, BlurText, PrimaryButton, cn } from '../components/UI';

const commImg = "/chat-katia.jpeg";

const animalSpecies = [
  { name: 'Chiens', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600' },
  { name: 'Chats', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600' },
  { name: 'Chevaux', image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=600' },
  { name: 'Lapins', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=600' },
  { name: 'Oiseaux', image: 'https://images.unsplash.com/photo-1522926193917-458b40d16be9?auto=format&fit=crop&q=80&w=600' },
  { name: 'Reptiles', image: 'https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?auto=format&fit=crop&q=80&w=600' },
  { name: 'NAC', image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=600' }
];

const faqs = [
  { 
    q: "La communication animale peut-elle remplacer un vétérinaire ?", 
    a: "Non. La communication animale est une approche complémentaire. Elle ne remplace jamais un avis, un diagnostic ou un traitement vétérinaire." 
  },
  { 
    q: "Peut-on faire une communication animale à distance ?", 
    a: "Oui. La consultation se fait à distance à partir d’une photo et des informations que vous me transmettez." 
  },
  { 
    q: "Avec quels animaux peut-on faire une communication animale ?", 
    a: "Je peux communiquer avec tous les animaux : chiens, chats, chevaux, NAC, oiseaux, lapins, reptiles et autres compagnons." 
  },
  { 
    q: "Que puis-je demander pendant une séance ?", 
    a: "Vous pouvez poser des questions sur son comportement, son bien-être, ses émotions, son adaptation, ses réactions, votre lien avec lui ou une situation précise que vous traversez ensemble." 
  },
  { 
    q: "La communication animale peut-elle aider pour un animal perdu ?", 
    a: "Elle peut être tentée dans ce contexte pour recueillir des perceptions ou indices, sans garantie de résultat." 
  },
  { 
    q: "Combien de temps dure une consultation ?", 
    a: "La consultation comprend un temps de connexion, une restitution et un échange. Le format exact peut varier selon la situation et les besoins." 
  },
  { 
    q: "Est-ce possible pour un animal en fin de vie ?", 
    a: "Oui. C’est même une demande fréquente, lorsque la relation a besoin d’être accompagnée avec douceur dans un moment délicat." 
  }
];

export default function CommunicationAnimale() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Communication animale intuitive à distance | Katia Burgun";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Communication animale intuitive avec Katia Burgun. Comprenez mieux les émotions, besoins et comportements de votre animal grâce à une consultation à distance, en complément d’un suivi vétérinaire.");
    }
  }, []);

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-6 lg:px-16 py-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionBadge>Consultation à distance</SectionBadge>
            <BlurText text="Communication animale intuitive :" delay={50} className="mt-8 text-4xl sm:text-6xl italic font-heading text-site" />
            <BlurText text="écouter ce que votre animal a à vous dire" delay={100} className="mt-2 text-4xl sm:text-6xl italic font-heading text-[#8ba394]" />
            
            <div className="mt-8 space-y-4 text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed max-w-lg">
              <p>Votre animal ressent, perçoit et exprime bien plus qu’il n’y paraît. Grâce à la communication animale intuitive, je me relie à son ressenti pour mieux comprendre ce qu’il vit, ce qu’il cherche à étre, et ce qui peut aujourd’hui perturber votre relation ou son équilibre.</p>
              <p>Que votre compagnon soit un chien, un chat, un cheval, un lapin, un oiseau, un reptile ou un autre animal, cette approche permet d’ouvrir un espace d’écoute subtil, sensible et profondément respectueux.</p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 text-site opacity-90 font-medium text-[10px] uppercase tracking-widest">
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">80 €</div> Consultation</div>
               <div><div className="text-xl font-heading italic text-[#8ba394] mb-1">Échange complet</div> Restitution incluse</div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
               <PrimaryButton href="#contact">Réserver une consultation</PrimaryButton>
               <Link to="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-[#7a9283] transition-colors border-b border-transparent hover:border-[#8ba394]">Voir les tarifs</Link>
            </div>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-site shadow-2xl">
            <img src={commImg} alt="Communication intuitive avec les animaux" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Qu'est-ce que c'est */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-4xl">
          <SectionBadge>Définition</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Qu’est-ce que la <span className="text-[#8ba394]">communication animale ?</span></h2>
          <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
            <p>La communication animale intuitive est une approche fondée sur l’écoute subtile du vivant. Elle consiste, pour moi, à entrer en connexion avec votre animal afin de capter ses ressentis, ses émotions, ses perceptions, ses images ou les messages qu’il souhaite transmettre.</p>
            <p>Cette communication ne passe pas par les mots au sens habituel. Elle se fait par une forme de perception intérieure, d’intuition et de dialogue sensible avec l’animal.</p>
            <p>Mon rôle est ensuite de vous transmettre avec clarté ce que je reçois, afin de vous aider à mieux comprendre son état émotionnel, ses besoins profonds, ses comportements ou la nature du lien qu’il entretient avec vous.</p>
          </div>
        </div>
      </section>

      {/* Pourquoi ? */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge>Bénéfices</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Pourquoi faire une <span className="text-[#8ba394]">communication animale ?</span></h2>
            <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto">La communication animale peut vous aider à mieux comprendre votre compagnon lorsque quelque chose semble flou, bloqué ou difficile à expliquer.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-12">
            {[
              { image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800', icon: Heart, t: 'Comprendre ses émotions', d: 'Votre animal peut exprimer du stress, de l’inconfort, de la peur ou une joie que l’observation seule ne permet pas toujours d’identifier.' },
              { image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800', icon: Activity, t: 'Éclairer les comportements', d: 'Agressivité, anxiété, malpropreté, agitation... Comprendre ce que l’animal cherche à exprimer à travers ses agissements.' },
              { image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800', icon: PawPrint, t: 'Renforcer le lien', d: 'Mieux comprendre son animal, c’est souvent apaiser la relation, rétablir la confiance et retrouver une communication plus juste.' },
              { image: 'https://images.unsplash.com/photo-1506456637651-4098cbacddaa?auto=format&fit=crop&q=80&w=800', icon: Clock, t: 'Accompagner les étapes', d: 'Adoption, déménagement, séparation, vieillissement ou fin de vie : des moments qui demandent une écoute particulière.' },
              { image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?auto=format&fit=crop&q=80&w=800', icon: MessageCircle, t: 'Recevoir un message', d: 'L’animal peut venir montrer quelque chose du lien qu’il partage avec son humain, mettant en lumière des dynamiques émotionnelles.' },
              { image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', icon: ShieldCheck, t: 'Résonance & Éthique', d: 'Une approche respectueuse de l’animal, de son rythme et de son intégrité, toujours en complément d’un suivi classique.' }
            ].map((item, idx) => (
              <div key={idx} className="relative pt-12 group">
                {/* Offset Card Background */}
                <div className="absolute inset-x-0 bottom-0 top-12 border border-[#8ba394]/30 rounded-[2.5rem] bg-[var(--site-bg)] translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#8ba394]/50" />
                
                {/* Main Card */}
                <div className="bg-[var(--site-surface-solid)] rounded-[2.5rem] border border-site p-8 sm:p-10 relative z-10 flex flex-col h-full shadow-xl">
                  
                  {/* Overlapping Top-Left Element */}
                  <div className="absolute -top-10 left-8">
                    <div className="relative">
                      <img src={item.image} alt={item.t} className="w-20 h-20 rounded-[1.5rem] object-cover border-4 border-[var(--site-surface-solid)] shadow-md grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" referrerPolicy="no-referrer" />
                      <div className="absolute -bottom-3 -left-3 bg-[#8ba394] text-[var(--site-bg)] p-2 rounded-xl border-[4px] border-[var(--site-surface-solid)]">
                        <item.icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Top-Right Badge */}
                  <div className="absolute top-8 right-8">
                     <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-site text-[9px] uppercase tracking-widest text-[var(--site-muted)] font-medium">
                       <CheckCircle className="w-3 h-3 text-[#8ba394]" /> Bénéfice
                     </div>
                  </div>

                  {/* Main Quote Content */}
                  <div className="mt-12 flex-1">
                    <p className="text-xl sm:text-2xl text-site font-heading italic leading-relaxed">
                      "{item.d}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-site opacity-10 my-8" />

                  {/* Footer Info */}
                  <div>
                     <h3 className="text-[11px] text-site uppercase tracking-widest font-bold mb-1.5">{item.t}</h3>
                     <p className="text-[9px] uppercase tracking-widest text-[#8ba394]/80">Communication • Lien</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miroir */}
      <section className="bg-[var(--site-surface-solid)] py-24 px-6 lg:px-16 border-y border-site overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8ba394]/5 rounded-full blur-3xl" />
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <SectionBadge>Relationnel</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic mb-8">L’animal <span className="text-[#8ba394]">comme miroir</span></h2>
            <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
              <p>Dans certaines communications, l’animal apparaît comme un véritable miroir de son humain. Ses comportements, ses réactions, ses peurs ou ses modes d’expression peuvent parfois faire écho à ce que vit la personne qui partage sa vie.</p>
              <p>Il ne s’agit pas de jugement, mais d’une lecture plus profonde du lien. Un animal qui semble “exprimer fort” quelque chose peut aussi révéler un déséquilibre, une tension ou une posture que son humain n’ose pas toujours regarder.</p>
              <p>Cette lecture permet souvent de donner du sens à ce qui semblait n’être qu’un problème de comportement, ouvrant un chemin d’apaisement pour l’un comme pour l’autre.</p>
            </div>
          </div>
          <div className="relative aspect-square sm:aspect-video lg:aspect-square">
            <div className="absolute inset-0 border border-site rounded-[3rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=1200" alt="Lien profond chien humain" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-16">
            <SectionBadge>Cas d'application</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic">Dans quelles situations <span className="text-[#8ba394]">me consulter ?</span></h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: 'Comportements inexpliqués', i: Zap, d: 'Agressivité, stress, agitation, destruction, malpropreté, peur ou tristesse.' },
              { t: 'Difficultés physiques', i: Activity, d: 'En complément vétérinaire, pour comprendre le ressenti physique de l’animal.' },
              { t: 'Animal perdu ou en fugue', i: Search, d: 'Tenter de capter des indices sur son état ou son environnement (sans garantie).' },
              { t: 'Adoption & transition', i: Users, d: 'Arrivée dans un nouveau foyer, séparation, voyage ou déménagement.' },
              { t: 'Fin de vie', i: Heart, d: 'Entendre son ressenti et accompagner ce moment délicat avec douceur et paix.' },
              { t: 'Mieux le connaître', i: Sparkles, d: 'Connaître ses goûts, ce qu’il cherche à vous faire comprendre et ses souhaits.' }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] flex gap-6 group hover:border-[#8ba394]/30 transition-all">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-[#8ba394]/10 flex items-center justify-center text-[#8ba394] group-hover:scale-110 transition-transform">
                  <item.i className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-site font-medium text-sm mb-2">{item.t}</h3>
                  <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Espèces */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionBadge>Tous les animaux</SectionBadge>
            <h2 className="mt-8 text-4xl text-site font-heading italic">Avec quels animaux <span className="text-[#8ba394]">je communique ?</span></h2>
            <p className="mt-6 text-[var(--site-muted)] font-light max-w-2xl mx-auto">La connexion ne dépend pas du langage humain, mais du ressenti et du lien universel.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 mt-12">
            {animalSpecies.map(animal => (
              <motion.div 
                key={animal.name} 
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-site bg-[var(--site-surface)] transition-all hover:border-[#8ba394]/50 shadow-sm hover:shadow-xl"
              >
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--site-bg)] to-transparent">
                  <span className="text-site font-heading italic text-lg sm:text-xl block text-center">{animal.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-16 text-center text-[var(--site-muted)] italic font-light text-base">Et bien d'autres animaux encore...</p>
        </div>
      </section>

      {/* Déroulé */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionBadge>Processus</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Comment se déroule <span className="text-[#8ba394]">une consultation ?</span></h2>
            <p className="text-[var(--site-muted)] font-light text-sm sm:text-base leading-relaxed mb-12">Je pratique exclusivement à distance, ce qui permet à l'animal de rester dans son cadre habituel sans le stress d'une présence étrangère.</p>
            <div className="space-y-12">
               {[
                 { i: Camera, t: '1. Prise de contact', d: 'Vous m’envoyez une photo récente, son nom, son âge et vos questions.' },
                 { i: Sparkles, t: '2. Connexion à distance', d: 'Je me relie à votre animal dans un temps de connexion intérieure et d’écoute.' },
                 { i: MessageCircle, t: '3. Restitution', d: 'Je vous transmets ressentis, émotions, messages et pistes d’apaisement.' },
                 { i: Phone, t: '4. Échange', d: 'Nous reprenons ensemble les points importants pour répondre à vos questions.' }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6">
                    <div className="h-12 w-12 shrink-0 rounded-full border border-site flex items-center justify-center text-[#8ba394]">
                      <step.i className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-site font-medium mb-1">{step.t}</h3>
                      <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{step.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="bg-[var(--site-surface-solid)] p-8 sm:p-12 rounded-[3.5rem] border border-site sticky top-32">
             <SectionBadge>Contenu de la consultation</SectionBadge>
             <h2 className="mt-8 text-3xl font-heading italic text-site mb-6">Communication animale intuitive</h2>
             <div className="text-5xl font-heading italic text-[#8ba394] mb-8">80 €</div>
             <ul className="space-y-4 mb-12 border-t border-site/50 pt-8">
               {[
                 'Une connexion approfondie avec votre animal',
                 'Jusqu’à 5 questions possibles',
                 'Une restitution détaillée',
                 'Un échange complémentaire',
                 'Consultation à distance',
                 'Accessible partout dans le monde'
               ].map(benefit => (
                 <li key={benefit} className="flex gap-4 text-site text-sm font-light">
                   <CheckCircle className="h-5 w-5 text-[#8ba394] shrink-0" />
                   {benefit}
                 </li>
               ))}
             </ul>
             <PrimaryButton href="#contact" className="w-full justify-center">Réserver une consultation</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Ma manière de bosser */}
      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16 border-y border-site">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <SectionBadge>Philosophie</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic">Ma manière <span className="text-[#8ba394]">de travailler</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
              <p>J’aborde chaque communication avec sérieux, respect et délicatesse. Je ne cherche pas à plaquer une interprétation toute faite sur votre animal. Chaque consultation est unique.</p>
              <p>J’écoute ce qui se présente, je transmets ce que je perçois avec honnêteté, et nous mettons ensemble du sens sur ce qui émerge pour favoriser un mieux-être relationnel.</p>
            </div>
            <div className="p-8 bg-[var(--site-surface-solid)] rounded-3xl border border-site">
              <h3 className="text-site font-medium mb-6 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#8ba394]" /> Mes engagements :</h3>
              <ul className="space-y-4 text-sm text-[var(--site-muted)] font-light">
                 <li>• Mieux comprendre l’animal</li>
                 <li>• Mieux comprendre votre lien</li>
                 <li>• Ouvrir des pistes concrètes</li>
                 <li>• Remettre de l’écoute et du sens</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-24 p-8 rounded-[2rem] border border-[#8ba394]/20 bg-[#8ba394]/5 flex flex-col sm:flex-row items-center gap-8">
            <GraduationCap className="h-10 w-10 text-[#8ba394] shrink-0" />
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-site font-medium mb-2">Envie d'apprendre ?</h3>
              <p className="text-[var(--site-muted)] text-sm font-light mb-4 text-balance">Je propose également des formations pour découvrir ou approfondir la communication intuitive.</p>
              <Link to="/formation-initiation-communication-animale" className="text-xs uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">Découvrir la formation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-site py-24 sm:py-32 px-6 lg:px-16 border-b border-site">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-20">
            <SectionBadge>FAQ</SectionBadge>
            <h2 className="mt-8 text-4xl sm:text-6xl text-site font-heading italic">Communication <span className="text-[#8ba394]">Animale</span></h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-site bg-[var(--site-surface)] rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[var(--site-surface-solid)] transition-colors"
                >
                  <span className="text-site font-body font-medium text-sm">{faq.q}</span>
                  <div className={cn("p-1.5 rounded-full border border-site transition-transform duration-300", openFaq === idx ? "rotate-45" : "")}>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <SectionBadge>Rendez-vous</SectionBadge>
          <h2 className="mt-8 text-4xl sm:text-5xl text-site font-heading italic mb-8">Offrez à votre animal un espace pour <span className="text-[#8ba394]">être entendu</span></h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Si vous ressentez le besoin de mieux comprendre votre animal, je vous accompagne dans cette rencontre sensible, profonde et respectueuse.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <PrimaryButton href="#contact">Réserver une consultation</PrimaryButton>
             <Link to="/tarifs" className="text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">Voir les tarifs</Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="px-6 lg:px-16 pb-16 mx-auto max-w-4xl text-center">
         <div className="p-8 rounded-[2rem] border border-site bg-[var(--site-surface)] flex flex-col sm:flex-row items-center gap-6 text-left opacity-80">
            <ShieldCheck className="h-8 w-8 text-[#8ba394] shrink-0" />
            <p className="text-[var(--site-muted)] text-xs font-light leading-relaxed">
              <strong>Disclaimer :</strong> La communication animale est une approche complémentaire de mieux-être. Elle ne se substitue en aucun cas à un avis, un diagnostic ou un traitement vétérinaire professionnel.
            </p>
         </div>
      </div>
    </div>
  );
}

