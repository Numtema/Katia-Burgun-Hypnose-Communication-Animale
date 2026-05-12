"use client";

import React from 'react';
import { motion } from 'motion/react';
import { HlsBackgroundVideo, cn } from '../UI';

const HERO_VIDEO = "/assets/katia-hypnotherapeute-normandie.mp4";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-site transition-colors duration-500">
      <HlsBackgroundVideo src={HERO_VIDEO} className="opacity-80 md:opacity-100 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--site-bg)]/40 via-transparent to-[var(--site-bg)]/80 z-[1]" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-24 flex flex-col items-center">
        {/* Floating Titles */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mb-16"
        >
          <span className="hero-main-text italic text-site text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Hypnose</span>
          
          <div className="my-4">
            <span className="px-5 py-1.5 rounded-full bg-white/5 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg text-[9px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#5a6e62] dark:text-[#8ba394]">
              pour vous
            </span>
          </div>

          <span className="text-2xl sm:text-4xl text-[#8ba394] font-heading my-2">&</span>

          <span className="hero-main-text italic text-site text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Communication animale</span>

          <div className="mt-4">
            <span className="px-5 py-1.5 rounded-full bg-white/5 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg text-[9px] sm:text-[11px] uppercase tracking-[0.3em] font-bold text-[#5a6e62] dark:text-[#8ba394]">
              pour votre compagnon
            </span>
          </div>
        </motion.h1>

        {/* Glass Card for Description only */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="p-6 sm:p-10 rounded-[2.5rem] text-center bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl w-[min(90%,800px)]"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="h-px w-12 bg-[#8ba394]/30" />
            <div className="space-y-4 text-center">
              <p className="text-xs sm:text-base font-light text-site leading-relaxed opacity-90">
                À Houdetot, en Normandie et à distance, Katia Burgun vous accompagne en hypnose ericksonienne pour apaiser le stress, les blocages et la surcharge émotionnelle, et propose des séances de communication animale pour mieux comprendre les émotions, les besoins et les comportements de votre animal.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#5a6e62] dark:text-[#8ba394] italic leading-relaxed opacity-80">
                Deux accompagnements distincts, une même intention : remettre de l’écoute, du sens et de l’apaisement dans votre vie et dans votre lien avec votre animal.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          <a href="#contact" className="liquid-glass-strong inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[11px] uppercase tracking-widest font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#8ba394]/20" style={{ backgroundColor: "#8ba394" }}>
            Prendre rendez-vous
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-[#8ba394]/20 px-8 py-3 text-[10px] uppercase tracking-widest font-bold text-site hover:bg-[var(--site-surface)] transition-all">
            Découvrir les services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
