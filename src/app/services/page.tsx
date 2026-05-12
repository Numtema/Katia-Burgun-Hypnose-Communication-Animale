import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { ArrowRight, Sparkles, Heart, Brain, GraduationCap } from 'lucide-react';

export const metadata = {
  title: "Nos Services | Katia Burgun",
  description: "Découvrez les services d'accompagnement de Katia Burgun : hypnose ericksonienne, communication animale, mieux-être et formations d'initiation.",
};

const SERVICES_DATA = [
  {
    title: "Hypnose Ericksonienne",
    slug: "hypnose",
    desc: "Un accompagnement vers le mieux-être et la libération des blocages conscients et inconscients.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80"
  },
  {
    title: "Communication Animale",
    slug: "communication-animale",
    desc: "Une écoute intuitive pour comprendre les besoins et les émotions de vos compagnons à quatre pattes.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80"
  },
  {
    title: "Mieux-être et Libération",
    slug: "mieux-etre-liberation",
    desc: "Des séances personnalisées pour retrouver votre équilibre intérieur et votre sérénité.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1499209974431-9dac3adaf477?auto=format&fit=crop&q=80"
  },
  {
    title: "Formation Initiation",
    slug: "formation",
    desc: "Apprenez les bases de la communication animale et développez votre ressenti intuitif.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80"
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--site-bg)] transition-colors duration-500">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#8ba394] font-bold mb-6 block">Accompagnement & Bien-être</span>
          <h1 className="text-4xl md:text-6xl font-heading italic text-site mb-8 leading-tight">
            Nos <span className="text-[#8ba394]">Services</span>
          </h1>
          <p className="text-[var(--site-muted)] text-lg font-light max-w-2xl leading-relaxed">
            Un ensemble d'approches complémentaires pour vous accompagner, vous et vos animaux, vers un équilibre harmonieux.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => (
              <Link 
                key={service.slug}
                href={`/${service.slug}`}
                className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-site shadow-2xl transition-all hover:scale-[1.02]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-surface)] via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-heading italic text-white mb-3">{service.title}</h2>
                  <p className="text-white/70 text-sm font-light leading-relaxed mb-6 max-w-md">
                    {service.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white text-[10px] uppercase tracking-widest font-bold group-hover:gap-4 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
