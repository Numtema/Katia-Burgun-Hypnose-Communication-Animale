import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionBadge, BlurText, PrimaryButton } from '../components/UI';

const portraitKatia = "https://katia-hypnotherapeute-normandie.vercel.app/_next/image?url=https%3A%2F%2Fscontent.fcdg3-1.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F280736276_115864707788474_7526965914387568168_n.jpg%3F_nc_cat%3D106%26ccb%3D1-7%26_nc_sid%3D1d70fc%26_nc_ohc%3DjUP3--iFNh4Q7kNvwHpwvJ2%26_nc_oc%3DAdpIWNW1vwMQyhxm3byXUJ_FdegQrIr3jgM5jtGFeANaN5mN0mqxh18LK9gNklOrbnIwC6sX5K6RQNsqqhqdKk1w%26_nc_zt%3D23%26_nc_ht%3Dscontent.fcdg3-1.fna%26_nc_gid%3DgsjpyQADe76772P9QOpNkA%26_nc_ss%3D7a3a8%26oh%3D00_Af0oF_XrNSnxlEw3i4LkXUMGpZ8Zqv92LFO0l91cMzpdLg%26oe%3D69E5A58C&w=1920&q=75";

export default function Bio() {
  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-16">
      <div className="px-6 lg:px-16 mb-8 mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
          <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
        </Link>
      </div>
      <section className="px-6 lg:px-16 py-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-site group">
            <img src={portraitKatia} alt="Portrait Katia Burgun" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col items-start">
            <SectionBadge>Portrait Katia Burgun</SectionBadge>
            <BlurText text="Une passion, deux vocations" delay={50} className="mt-8 text-5xl sm:text-7xl italic font-heading text-site" />
            <div className="mt-10 space-y-6 text-[var(--site-muted)] font-light leading-relaxed text-sm sm:text-base">
              <p>Bonjour, je suis Katia. Hypnothérapeute certifiée et communicante animale intuitive, j'exerce depuis la Normandie avec un cabinet à Fontaine-le-Dun (76).</p>
              <p>Mon parcours est celui d'une évidence tardive : celle de mettre les animaux et leurs humains au cœur de ma pratique, après des années à sentir qu'il me manquait cette vocation-là.</p>
              <p>Je crois profondément que le mieux-être de chacun — animal comme humain — passe par l'écoute, la patience, et l'honnêteté envers soi. C'est ce que j'offre dans chaque séance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <SectionBadge>Mon histoire</SectionBadge>
          <h2 className="mt-8 text-4xl text-site font-heading italic mb-12">Des animaux aux hommes, et retour</h2>
          <div className="space-y-8 text-[var(--site-muted)] font-light leading-relaxed">
            <p>Depuis l'enfance, j'ai un lien particulier avec les animaux. Je les ressens. Je capte leurs émotions avant même de les observer. Longtemps, j'ai pensé que c'était simplement ma sensibilité. Puis j'ai découvert la communication animale intuitive — et tout s'est éclairci.</p>
            <p>En accompagnant mes premiers clients animaux, j'ai compris une chose : un animal stressé, c'est souvent le miroir d'un humain qui l'est. On ne peut pas apaiser l'un sans s'occuper de l'autre.</p>
            <div className="py-12 border-y border-site">
              <p className="text-2xl text-site font-heading italic text-center">« Pour aider pleinement les animaux, il fallait que j'apprenne aussi à aider leurs gardiens. »</p>
            </div>
            <p>C'est ainsi que je me suis formée à l'hypnose Ericksonienne. Une approche douce, respectueuse, profonde. Aujourd'hui, ma pratique se tient sur ces deux pieds : j'apaise les animaux, j'accompagne les humains. Et parfois, je fais les deux dans la même famille. C'est là que la magie opère.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl text-site font-heading italic mb-16 text-center">Parcours & formations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { year: '2018', title: 'Première formation en communication animale', desc: "Initiation auprès d'une communicante reconnue, puis pratique intensive pendant deux ans auprès d'animaux variés." },
              { year: '2020', title: 'Perfectionnement télépathique', desc: "Approfondissement des canaux intuitifs, travail sur la fin de vie, l'animal perdu, et les problématiques complexes." },
              { year: '2022', title: 'Formation Hypnose Ericksonienne', desc: "Cursus complet (800 heures) en hypnose Ericksonienne et thérapie brève, avec supervisions cliniques régulières." },
              { year: '2023', title: 'Ouverture du cabinet', desc: "Installation à Fontaine-le-Dun (76). Séances individuelles en cabinet et à distance." },
              { year: '2024', title: 'Lancement des formations', desc: "Transmission des techniques de communication animale lors de journées d'initiation à mon domicile." },
            ].map((item) => (
              <div key={item.year} className="p-8 rounded-3xl border border-site bg-[var(--site-surface)]">
                <div className="text-[#8ba394] font-heading italic text-3xl mb-4">{item.year}</div>
                <h3 className="text-site font-body font-medium mb-2">{item.title}</h3>
                <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--site-surface)] py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionBadge>Valeurs</SectionBadge>
          <h2 className="mt-8 text-4xl text-site font-heading italic mb-16 px-4 border-l-2 border-[#8ba394]">Ce qui me guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { n: '01', t: 'Écoute inconditionnelle', d: 'Chaque être — humain ou animal — mérite d\'être entendu sans jugement, à son propre rythme.' },
              { n: '02', t: 'Respect du libre arbitre', d: 'Je ne manipule rien ni personne. Vous gardez toujours les commandes de votre processus.' },
              { n: '03', t: 'Honnêteté transparente', d: 'Je vous dirai si je ne peux pas vous aider, si je doute, ou si une orientation vers un autre professionnel est préférable.' }
            ].map(item => (
              <div key={item.n} className="space-y-4">
                 <div className="text-4xl font-heading italic text-[#8ba394]/30">{item.n}</div>
                 <h3 className="text-site text-lg font-medium">{item.t}</h3>
                 <p className="text-[var(--site-muted)] text-sm font-light leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl text-site font-heading italic mb-8">On en parle ?</h2>
          <p className="text-[var(--site-muted)] font-light leading-relaxed mb-10 text-sm sm:text-base">
            Envie d'échanger avant de réserver ? Je vous offre un premier appel gratuit de 15 minutes pour vérifier que nous sommes faits pour travailler ensemble.
          </p>
          <PrimaryButton href="#contact">Prendre contact</PrimaryButton>
        </div>
      </section>
    </div>
  );
}
