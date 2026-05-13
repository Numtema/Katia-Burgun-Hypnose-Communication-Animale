import React from 'react';
import Script from 'next/script';
import Hero from '../components/home/Hero';
import ServicesOrientation from '../components/home/ServicesOrientation';
import Quote from '../components/home/Quote';
import About from '../components/home/About';
import ServicesDetails from '../components/home/ServicesDetails';
import Process from '../components/home/Process';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';

const portraitKatia2 = "/assets/katia-burgun-hypnotherapeute-normandie.jpeg";

const faqs = [
  { q: "Quelle est la différence entre l'hypnose Ericksonienne et la communication animale ?", a: "L'hypnose Ericksonienne s'adresse à l'humain. Elle vise à mobiliser vos ressources intérieures pour retrouver un mieux-être, dépasser certains blocages ou apaiser le stress.\nLa communication animale s'adresse à la compréhension de l'animal, de ses émotions, de ses besoins et de la relation que vous vivez avec lui." },
  { q: "Comment savoir quel accompagnement choisir ?", a: "Si votre besoin concerne votre état émotionnel, votre stress, votre sommeil ou un blocage personnel, l'hypnose est la voie la plus adaptée.\nSi vous cherchez à mieux comprendre votre animal, un comportement ou une situation que vous vivez avec lui, la communication animale est la bonne porte d'entrée." },
  { q: "Les séances peuvent-elles se faire à distance ?", a: "Oui. Les séances d'hypnose comme les consultations en communication animale peuvent être proposées à distance partout dans le monde selon votre situation." },
  { q: "La communication animale remplace-t-elle un vétérinaire ?", a: "Non. La communication animale ne remplace jamais un avis, un diagnostic ou un suivi vétérinaire. Elle vient en complément d'une démarche de soin et de compréhension." },
  { q: "Combien de séances d'hypnose faut-il prévoir ?", a: "Cela dépend de votre objectif et de votre rythme. Certaines personnes ressentent un apaisement dès les premières séances, d'autres ont besoin d'un accompagnement sur plusieurs rendez-vous." },
  { q: "Comment se passe une consultation en communication animale ?", a: "Vous m'envoyez une photo récente de votre animal ainsi que vos questions. Après la séance, je vous fais une restitution des informations perçues et nous échangeons ensemble." }
];

export default function Home() {
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Katia Burgun | Hypnose & Communication Animale",
    "image": `https://www.katiaburgun.com${portraitKatia2}`,
    "@id": "https://www.katiaburgun.com",
    "url": "https://www.katiaburgun.com",
    "telephone": "0677495288",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5 route de Bourville",
      "addressLocality": "Houdetot",
      "postalCode": "76740",
      "addressRegion": "Normandie",
      "addressCountry": "FR"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-site">
      <Script
        id="business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <Hero />
      <ServicesOrientation />
      <Quote />
      <About />
      <ServicesDetails />
      <Process />
      <Testimonials />
      <FAQ />
    </div>
  );
}
