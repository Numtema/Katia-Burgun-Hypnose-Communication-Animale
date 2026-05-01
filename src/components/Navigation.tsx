"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, ChevronDown, Menu, X } from 'lucide-react';

import { useTheme } from '../context/ThemeContext';

export default function Navigation() {
  const { isLightMode, toggleTheme } = useTheme();
  const onToggleTheme = toggleTheme;
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Qui suis-je", href: "/qui-suis-je" },
  ];
  
  const rightNavItems = [
    { label: "Tarifs", href: "/tarifs" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "FAQ", href: "/#faq" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 px-6 sm:px-16 transition-all duration-300 ${isScrolled ? 'py-4 bg-[var(--site-surface)]/90 backdrop-blur-md border-b border-site shadow-sm' : 'py-6 pt-8'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl italic text-site leading-none transition-transform group-hover:scale-[1.02]">Katia Burgun</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6d8b7a] dark:text-[#8ba394] mt-0.5">Hypnose - Communication Animale</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <nav className={`hidden xl:flex items-center gap-1 rounded-full px-2 py-1.5 transition-colors ${isScrolled ? 'bg-transparent' : 'liquid-glass border border-site'}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  isActive(item.href) ? 'text-[#8ba394] font-bold' : 'text-[var(--site-muted)] hover:text-site'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-[10px] uppercase tracking-widest text-[var(--site-muted)] hover:text-site flex items-center gap-1 transition-all">
                Services <ChevronDown className="w-3 h-3 opacity-50" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[var(--site-surface-solid)] border border-site rounded-2xl shadow-xl flex flex-col p-2">
                  <Link href="/hypnose" className="px-4 py-3 text-xs text-site hover:bg-[#8ba394]/20 rounded-xl transition-colors font-medium">Hypnose</Link>
                  <Link href="/communication-animale" className="px-4 py-3 text-xs text-site hover:bg-[#8ba394]/20 rounded-xl transition-colors font-medium">Communication animale</Link>
                  <Link href="/formation" className="px-4 py-3 text-xs text-site hover:bg-[#8ba394]/20 rounded-xl transition-colors font-medium">Formation</Link>
                </div>
              </div>
            </div>

            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  isActive(item.href) ? 'text-[#8ba394] font-bold' : 'text-[var(--site-muted)] hover:text-site'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-site opacity-20 mx-2" />
            <a href="#contact" className="bg-[#8ba394] hover:bg-[#7a9283] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ffffff] transition-all">Prendre RDV</a>
          </nav>
          
          <button 
            onClick={onToggleTheme} 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-site bg-[var(--site-surface)] text-site transition-transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          <a href="#contact" className="hidden sm:inline-flex xl:hidden bg-[#8ba394] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ffffff]">Contact</a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full border border-site bg-[var(--site-surface)] text-site transition-transform hover:scale-110"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[var(--site-bg)] transition-transform duration-500 xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-32 pb-12 px-8 overflow-y-auto">
          <nav className="flex flex-col gap-6">
            {[...navItems, ...rightNavItems].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-heading italic transition-colors ${
                  isActive(item.href) ? 'text-[#8ba394]' : 'text-site'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mt-4 pt-6 border-t border-site/10">
              <span className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] mb-4 block">Nos Services</span>
              <div className="flex flex-col gap-4">
                <Link 
                  href="/hypnose" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-heading italic text-site hover:text-[#8ba394] transition-colors"
                >
                  Hypnose Ericksonienne
                </Link>
                <Link 
                  href="/communication-animale" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-heading italic text-site hover:text-[#8ba394] transition-colors"
                >
                  Communication animale
                </Link>
                <Link 
                  href="/formation" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-heading italic text-site hover:text-[#8ba394] transition-colors"
                >
                  Formation
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex w-full items-center justify-center bg-[#8ba394] py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest text-[#ffffff]"
              >
                Prendre rendez-vous
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
