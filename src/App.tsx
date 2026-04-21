/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Bio from "./pages/Bio";
import Hypnose from "./pages/Hypnose";
import CommunicationAnimale from "./pages/CommunicationAnimale";
import Formation from "./pages/Formation";
import Tarifs from "./pages/Tarifs";
import Testimonials from "./pages/Testimonials";
import Legal from "./pages/Legal";

import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  // We use a small timeout to ensure the DOM has updated before scrolling
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [isLightMode, setIsLightMode] = React.useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isLightMode]);

  return (
    <BrowserRouter>
      <div className="bg-site text-site transition-colors duration-500 min-h-screen selection:bg-[#8ba394]/30">
        <ScrollToTop />
        <Navigation isLightMode={isLightMode} onToggleTheme={() => setIsLightMode(!isLightMode)} />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/qui-suis-je" element={<Bio />} />
            <Route path="/hypnose" element={<Hypnose />} />
            <Route path="/hypnose-ericksonienne-houdetot" element={<Hypnose />} />
            <Route path="/communication-animale" element={<CommunicationAnimale />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/formation-initiation-communication-animale" element={<Formation />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/témoignages" element={<Testimonials />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/legal/:type" element={<Legal />} />
          </Routes>
        </main>

        <ContactSection />
        <Footer />

        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
