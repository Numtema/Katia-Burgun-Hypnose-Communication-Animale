import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, ChevronDown } from 'lucide-react';

interface NavigationProps {
  isLightMode: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({ isLightMode, onToggleTheme }: NavigationProps) {
  const location = useLocation();
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Qui suis-je", href: "/qui-suis-je" },
  ];
  
  const rightNavItems = [
    { label: "Tarifs", href: "/tarifs" },
    { label: "Témoignages", href: "/temoignages" },
    { label: "FAQ", href: "/#faq" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-6 sm:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl italic text-site leading-none">Katia Burgun</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6d8b7a] dark:text-[#8ba394]">Hypnose - Communication Animale</span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden xl:flex items-center gap-1 rounded-full px-2 py-1.5 liquid-glass border border-site">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-[var(--site-surface)] backdrop-blur-md border border-site rounded-2xl shadow-xl flex flex-col p-2">
                  <Link to="/hypnose-ericksonienne-houdetot" className="px-4 py-3 text-xs text-site hover:bg-[#8ba394]/10 rounded-xl transition-colors font-medium">Hypnose</Link>
                  <Link to="/communication-animale" className="px-4 py-3 text-xs text-site hover:bg-[#8ba394]/10 rounded-xl transition-colors font-medium">Communication animale</Link>
                  <Link to="/formation-initiation-communication-animale" className="px-4 py-3 text-xs text-site hover:bg-[#8ba394]/10 rounded-xl transition-colors font-medium">Formation</Link>
                </div>
              </div>
            </div>

            {rightNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 text-[10px] uppercase tracking-widest transition-all ${
                  isActive(item.href) ? 'text-[#8ba394] font-bold' : 'text-[var(--site-muted)] hover:text-site'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="w-px h-4 bg-site opacity-20 mx-2" />
            <Link to="#contact" className="bg-[#8ba394] hover:bg-[#7a9283] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ffffff] transition-all">Prendre RDV</Link>
          </nav>
          
          <button 
            onClick={onToggleTheme} 
            className="flex items-center justify-center w-10 h-10 rounded-full border border-site bg-[var(--site-surface)] text-site transition-transform hover:scale-110"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          <Link to="/#contact" className="xl:hidden bg-[#8ba394] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#ffffff]">Contact</Link>
        </div>
      </div>
    </header>
  );
}
