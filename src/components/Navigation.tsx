"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, ChevronDown, Menu, X, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from './UI';

export default function Navigation() {
  const { isLightMode, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on pathname change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Robust scroll lock for mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { label: "Accueil", href: "/" },
    { label: "Qui suis-je", href: "/qui-suis-je" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Hypnose ericksonienne", href: "/hypnose", desc: "Mieux-être et libération" },
    { label: "Communication animale", href: "/communication-animale", desc: "Écoute intuitive" },
    { label: "Mieux-être & Libération", href: "/mieux-etre-liberation", desc: "Équilibre intérieur" },
    { label: "Écoute Intuitive", href: "/ecoute-intuitive", desc: "Connexion profonde" },
    { label: "Formation initiation", href: "/formation", desc: "Apprendre et ressentir" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header 
        className={cn(
          "fixed left-0 right-0 top-0 z-[60] px-6 sm:px-16 transition-all duration-500",
          isScrolled 
            ? 'py-4 bg-[var(--site-surface)]/80 backdrop-blur-xl border-b border-site shadow-sm' 
            : 'py-6 pt-8 bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-[70]">
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl italic text-site leading-none transition-all group-hover:tracking-wider">Katia Burgun</span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-[var(--text-sage)] mt-1 font-medium">Hypnose • Communication Animale</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-4">
            <nav className={cn(
              "hidden xl:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500",
              isScrolled ? 'bg-transparent' : 'bg-[var(--site-surface)]/30 backdrop-blur-md border border-site shadow-sm'
            )}>
              {mainLinks.slice(0, 2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-[10px] uppercase tracking-widest transition-all relative group overflow-hidden",
                    isActive(item.href) ? 'text-[#8ba394] font-bold' : 'text-[var(--site-muted)] hover:text-site'
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--text-sage)] transition-transform duration-300",
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  )} />
                </Link>
              ))}

              {/* Desktop Dropdown */}
              <div className="relative group/dropdown">
                <Link 
                  href="/services"
                  className="px-4 py-2 text-[10px] uppercase tracking-widest text-[var(--site-muted)] hover:text-site flex items-center gap-1.5 transition-all"
                >
                  Services <ChevronDown className="w-3 h-3 opacity-50 group-hover/dropdown:rotate-180 transition-transform duration-500" />
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-500 scale-95 group-hover/dropdown:scale-100 origin-top">
                  <div className="bg-[var(--site-surface-solid)] border border-site rounded-[2rem] shadow-2xl p-3 flex flex-col gap-1 overflow-hidden">
                    {services.map((service) => (
                      <Link 
                        key={service.href}
                        href={service.href} 
                        className="group/item flex flex-col px-5 py-4 hover:bg-[#8ba394]/10 rounded-2xl transition-all"
                      >
                        <span className="text-[11px] uppercase tracking-widest text-site font-bold group-hover/item:text-[var(--text-sage)] transition-colors">{service.label}</span>
                        <span className="text-[9px] uppercase tracking-wider text-[var(--site-muted)] mt-1">{service.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {mainLinks.slice(2).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-[10px] uppercase tracking-widest transition-all relative group overflow-hidden",
                    isActive(item.href) ? 'text-[#8ba394] font-bold' : 'text-[var(--site-muted)] hover:text-site'
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--text-sage)] transition-transform duration-300",
                    isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  )} />
                </Link>
              ))}
              <div className="w-px h-4 bg-site opacity-10 mx-2" />
              <Link href="#contact" className="bg-[var(--primary-btn-bg)] hover:bg-site px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] text-[#ffffff] transition-all hover:scale-105 active:scale-95 shadow-md">
                Rendez-vous
              </Link>
            </nav>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={toggleTheme} 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-site bg-[var(--site-surface)] text-site transition-all hover:bg-[#8ba394] hover:text-white hover:border-[#8ba394] shadow-sm active:scale-90"
                aria-label="Toggle theme"
              >
                {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              
              <Link href="#contact" className="hidden sm:inline-flex xl:hidden bg-[var(--primary-btn-bg)] px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ffffff] shadow-md hover:scale-105 active:scale-95 transition-all">
                Contact
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-site bg-[var(--site-surface)] text-site relative z-[70] transition-all hover:border-[#8ba394] active:scale-90 shadow-sm"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-[#8ba394]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[50] bg-black/40 backdrop-blur-md xl:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.6 }}
              className="fixed right-0 top-0 bottom-0 z-[55] w-full max-w-[320px] bg-[var(--site-bg)] border-l border-site shadow-2xl xl:hidden flex flex-col"
            >
              <div className="flex flex-col h-full overflow-y-auto pt-24 px-8 pb-12">
                {/* Navigation Links */}
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--site-muted)] mb-4 font-bold opacity-50">Navigation</span>
                  {mainLinks.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-3 text-xl font-heading italic transition-all group",
                          isActive(item.href) ? 'text-[var(--text-sage)]' : 'text-site hover:text-[var(--text-sage)]'
                        )}
                      >
                        {item.label}
                        <ArrowRight className={cn("w-4 h-4 opacity-0 transition-all -translate-x-4 group-hover:opacity-50 group-hover:translate-x-0", isActive(item.href) && "opacity-100 translate-x-0")} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="h-px bg-site/10 my-8" />

                {/* Services Section */}
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--site-muted)] mb-4 font-bold opacity-50">Nos Services</span>
                  {services.map((service, idx) => (
                    <motion.div
                      key={service.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                    >
                      <Link
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex flex-col py-3 group"
                      >
                        <span className="text-lg font-heading italic text-site group-hover:text-[#8ba394] transition-colors">{service.label}</span>
                        <span className="text-[9px] uppercase tracking-wider text-[var(--site-muted)] mt-0.5">{service.desc}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Socials & Contact */}
                <div className="mt-auto pt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col gap-6"
                  >
                    <Link 
                      href="#contact" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="bg-[var(--primary-btn-bg)] hover:bg-site text-white py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] text-center shadow-lg transition-all active:scale-95"
                    >
                      Prendre rendez-vous
                    </Link>

                    <div className="flex items-center justify-center gap-6 pb-4">
                      <a href="#" className="p-3 rounded-full border border-site text-[var(--site-muted)] hover:text-[#8ba394] hover:border-[#8ba394] transition-all">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-3 rounded-full border border-site text-[var(--site-muted)] hover:text-[#8ba394] hover:border-[#8ba394] transition-all">
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

