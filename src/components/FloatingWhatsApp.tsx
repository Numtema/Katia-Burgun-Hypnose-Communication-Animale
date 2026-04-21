import React, { useState } from 'react';
import { MessageCircle, X, MessageSquare, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './UI';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Renseignement',
    message: ''
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Bonjour Katia, je vous contacte via votre site web.\n\n*Nom :* ${formData.name}\n*Email :* ${formData.email}\n*Téléphone :* ${formData.phone}\n*Service :* ${formData.service}\n*Message :* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/33677495288?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  // SVG for WhatsApp logo
  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="0" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 sm:bottom-10 right-6 sm:right-10 z-[100] flex items-center gap-3">
        
        {/* Floating Contact Pill */}
        <a 
          href="#contact"
          className="relative bg-[#8ba394] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] sm:text-[11px] shadow-lg shadow-[#8ba394]/30 hover:scale-105 hover:bg-[#7a9283] transition-all flex items-center"
        >
          Contact
          {/* Decorative purple dot from user request */}
          <span className="absolute -bottom-1 -right-1 block h-3.5 w-3.5 rounded-full bg-[#9b72b8] border-2 border-[var(--site-surface-solid)]" />
        </a>

        {/* Existing Floating WhatsApp Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 sm:h-16 sm:w-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95 group focus:outline-none relative"
          aria-label="Contact WhatsApp"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div 
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 sm:h-7 sm:w-7 text-white relative z-10" />
              </motion.div>
            ) : (
              <motion.div 
                key="whatsapp"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                 <WhatsAppIcon className="h-7 w-7 sm:h-9 sm:w-9 text-white relative z-10 fill-white stroke-transparent" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Floating Panel (Existing modal) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
            className="fixed bottom-24 sm:bottom-32 right-4 sm:right-10 z-[99] w-[calc(100vw-2rem)] sm:w-[400px] max-h-[80vh] overflow-y-auto bg-[var(--site-surface-solid)] rounded-[2rem] border border-site shadow-2xl origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-6 text-white text-center relative overflow-hidden rounded-t-[2rem]">
               <div className="absolute inset-0 bg-white/10" />
               <div className="relative z-10">
                 <h3 className="font-heading italic text-2xl mb-1">Discutons sur WhatsApp</h3>
                 <p className="text-sm font-light opacity-90">Remplissez ce formulaire court pour préparer notre échange, je vous répondrai rapidement.</p>
               </div>
            </div>

            {/* Form */}
            <form className="p-6 space-y-5" onSubmit={handleWhatsAppSubmit}>
               <div className="space-y-1">
                 <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Nom complet</label>
                 <input 
                   required
                   placeholder="Votre nom" 
                   value={formData.name}
                   onChange={e => setFormData({...formData, name: e.target.value})}
                   className="w-full bg-[var(--site-bg)] border border-site rounded-xl px-4 py-3 text-site text-sm focus:border-[#25D366] outline-none transition-colors" 
                 />
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[var(--site-bg)] border border-site rounded-xl px-4 py-3 text-site text-sm focus:border-[#25D366] outline-none transition-colors" 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Téléphone</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Téléphone" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[var(--site-bg)] border border-site rounded-xl px-4 py-3 text-site text-sm focus:border-[#25D366] outline-none transition-colors" 
                    />
                  </div>
               </div>

               <div className="space-y-1">
                 <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Service</label>
                 <select 
                   value={formData.service}
                   onChange={e => setFormData({...formData, service: e.target.value})}
                   className="w-full bg-[var(--site-bg)] border border-site rounded-xl px-4 py-3 text-site text-sm focus:border-[#25D366] outline-none transition-colors appearance-none"
                 >
                    <option className="bg-[var(--site-bg)] text-site">Renseignement</option>
                    <option className="bg-[var(--site-bg)] text-site">Hypnose Ericksonienne</option>
                    <option className="bg-[var(--site-bg)] text-site">Communication Animale</option>
                    <option className="bg-[var(--site-bg)] text-site">Formation Initiation</option>
                 </select>
               </div>

               <div className="space-y-1">
                 <label className="text-[10px] uppercase tracking-widest text-[var(--site-muted)] font-bold ml-1">Votre message</label>
                 <textarea 
                   required
                   rows={3} 
                   placeholder="Comment puis-je vous aider ?" 
                   value={formData.message}
                   onChange={e => setFormData({...formData, message: e.target.value})}
                   className="w-full bg-[var(--site-bg)] border border-site rounded-xl px-4 py-3 text-site text-sm focus:border-[#25D366] outline-none transition-colors resize-none"
                 ></textarea>
               </div>

               <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1fb355] py-4 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-[white] flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-lg shadow-[#25D366]/20">
                 Continuer sur WhatsApp <Send className="h-3 w-3" />
               </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
