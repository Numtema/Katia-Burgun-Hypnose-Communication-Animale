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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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

        {/* Floating WhatsApp Bubble */}
        <a 
          href="https://wa.me/33677495288" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-10 right-10 z-[100] h-14 w-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          <MessageCircle className="h-7 w-7 text-white relative z-10" />
        </a>
      </div>
    </BrowserRouter>
  );
}
