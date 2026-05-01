"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { BlurText, SectionBadge } from '../../../components/UI';
import { ArrowLeft } from 'lucide-react';

export default function LegalPage() {
  const params = useParams();
  const type = params?.type as string;

  const getContent = () => {
    switch (type) {
      case 'mentions-legales':
        return {
          title: 'Mentions Légales',
          description: 'Informations légales concernant l\'entreprise Katia Burgun.',
          content: (
            <div className="space-y-12">
              <section>
                <h3 className="text-site font-body font-medium mb-4">1. Éditeur du site</h3>
                <p>Le présent site est édité par :</p>
                <p className="mt-2"><strong>Katia Burgun</strong></p>
                <p>Adresse : 5 route de Bourville, 76740 Fontaine-le-Dun, France</p>
                <p>Téléphone : 06 77 49 52 88</p>
              </section>
              <section>
                <h3 className="text-site font-body font-medium mb-4">2. Création et développement</h3>
                <p>Le site a été conçu et réalisé par :</p>
                <p className="mt-2 font-medium">Nümtema AGENCY</p>
                <p>Site web : <a href="https://numtemaagency.com" target="_blank" rel="noopener noreferrer" className="text-[#8ba394] hover:underline">numtemaagency.com</a></p>
              </section>
              <section>
                <h3 className="text-site font-body font-medium mb-4">3. Hébergement</h3>
                <p>Ce site est hébergé par :</p>
                <p className="mt-2 font-medium">Vercel Inc.</p>
                <p>340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
                <p>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#8ba394] hover:underline">vercel.com</a></p>
              </section>
              <section>
                <h3 className="text-site font-body font-medium mb-4">4. Propriété intellectuelle</h3>
                <p className="mb-4">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                <p>La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de l'éditeur.</p>
              </section>
              <section>
                <h3 className="text-site font-body font-medium mb-4">5. Avertissement</h3>
                <p className="italic">L'hypnose Ericksonienne et la communication animale sont des pratiques d'accompagnement au mieux-être. Elles ne se substituent en aucun cas à un avis, un diagnostic ou un traitement médical ou vétérinaire professionnel.</p>
              </section>
            </div>
          )
        };
      case 'confidentialite':
        return {
          title: 'Politique de confidentialité',
          description: 'Comment Katia Burgun protège vos données personnelles et respecte le RGPD.',
          content: (
            <div className="space-y-12">
               <p className="text-lg italic text-[#8ba394]">Vos données personnelles, comment nous les traitons, et vos droits.</p>
               
               <section>
                 <h3 className="text-site font-body font-medium mb-4">1. Qui est responsable du traitement ?</h3>
                 <p>Katia Burgun, entreprise individuelle, domiciliée 5 route de Bourville, 76740 Fontaine-le-Dun, est responsable du traitement de vos données personnelles collectées sur ce site.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">2. Quelles données collectons-nous ?</h3>
                 <p className="mb-4">Nous collectons uniquement les données que vous nous fournissez volontairement :</p>
                 <ul className="list-disc pl-5 space-y-2 opacity-80">
                   <li><strong>Identité :</strong> nom, prénom</li>
                   <li><strong>Coordonnées :</strong> email, téléphone</li>
                   <li><strong>Contenu :</strong> messages envoyés via le formulaire de contact</li>
                   <li><strong>Animaux :</strong> nom, âge, photo lors de consultations en communication animale</li>
                   <li><strong>Navigation :</strong> données techniques (voir politique cookies)</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">3. Pourquoi collectons-nous ces données ?</h3>
                 <ul className="list-disc pl-5 space-y-2 opacity-80">
                   <li>Répondre à vos demandes de contact</li>
                   <li>Planifier, organiser et réaliser les séances et formations</li>
                   <li>Émettre des factures et respecter nos obligations légales comptables</li>
                   <li>Améliorer l'expérience de navigation sur le site</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">4. Base légale</h3>
                 <p>Les traitements sont fondés sur votre consentement explicite (formulaires) et sur l'exécution du contrat de prestation (prise de rendez-vous, facturation).</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">5. Combien de temps sont-elles conservées ?</h3>
                 <ul className="list-disc pl-5 space-y-2 opacity-80">
                   <li><strong>Données de contact :</strong> 3 ans après le dernier échange (si demande sans suite)</li>
                   <li><strong>Dossiers clients :</strong> 10 ans à compter de la fin de la relation (obligations fiscales)</li>
                   <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">6. Qui accède à vos données ?</h3>
                 <p>Vos données sont strictement confidentielles. Seule Katia Burgun y accède. Elles peuvent être transmises à des sous-traitants techniques (hébergeur, outil d'emailing, logiciel de facturation) uniquement dans la mesure nécessaire, et sous contrat de confidentialité.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">7. Vos droits</h3>
                 <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants : accès, rectification, suppression, limitation, portabilité et opposition.</p>
                 <p>Pour exercer ces droits, contactez-moi à : <a href="mailto:contact@katiaburgun.fr" className="text-[#8ba394] hover:underline">contact@katiaburgun.fr</a>. Une réponse vous sera apportée dans un délai maximum d'un mois.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">8. Réclamation</h3>
                 <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#8ba394] hover:underline">www.cnil.fr</a></p>
               </section>

               <section className="p-8 bg-[#8ba394]/5 rounded-2xl border border-[#8ba394]/20">
                 <h3 className="text-site font-body font-medium mb-4">9. Secret professionnel</h3>
                 <p className="italic">Tout ce qui est partagé pendant une séance reste strictement confidentiel. Je suis tenue au secret professionnel. Aucune information ne sera transmise à des tiers sans votre accord explicite.</p>
               </section>
            </div>
          )
        };
      case 'cookies':
        return {
          title: 'Politique cookies',
          description: 'Informations sur l\'utilisation des cookies sur le site katiaburgun.fr.',
          content: (
            <div className="space-y-12">
               <p className="text-lg italic">Ce que sont les cookies, comment nous les utilisons, et comment les gérer.</p>
               
               <section>
                 <h3 className="text-site font-body font-medium mb-4">Qu'est-ce qu'un cookie ?</h3>
                 <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur un site web. Il permet au site de mémoriser des informations sur votre visite (langue préférée, identifiant, etc.).</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Quels cookies utilisons-nous ?</h3>
                 <p className="mb-6">Le site katiaburgun.fr utilise un nombre très limité de cookies, regroupés en catégories :</p>
                 
                 <div className="space-y-6 pl-4 border-l border-[#8ba394]/20">
                    <div>
                      <h4 className="text-site font-medium mb-2">1. Cookies strictement nécessaires</h4>
                      <p className="text-sm opacity-80 mb-2">Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés. Ils ne stockent aucune information personnelle identifiable.</p>
                      <ul className="list-disc pl-5 text-sm opacity-70">
                        <li>Session : permet de maintenir votre navigation active</li>
                        <li>Consentement cookies : mémorise vos préférences de cookies</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-site font-medium mb-2">2. Cookies de mesure d'audience</h4>
                      <p className="text-sm opacity-80 mb-2">Utilisés pour comprendre comment le site est utilisé (pages les plus visitées, durée de visite, etc.), de manière anonymisée.</p>
                      <ul className="list-disc pl-5 text-sm opacity-70">
                        <li>Matomo / Plausible (si installé) : statistiques anonymisées, sans transfert de données à des tiers</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-site font-medium mb-2">3. Cookies tiers</h4>
                      <p className="text-sm opacity-80">Le site peut intégrer des contenus tiers (Google Maps, YouTube, etc.) qui déposent leurs propres cookies. Nous n'avons pas de contrôle sur ces cookies — consultez les politiques des éditeurs concernés.</p>
                    </div>
                 </div>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Durée de conservation</h3>
                 <p>La durée maximale de conservation des cookies est de 13 mois. Au-delà, votre consentement vous sera à nouveau demandé.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Comment gérer vos cookies ?</h3>
                 <p className="mb-4">Vous pouvez à tout moment :</p>
                 <ul className="list-disc pl-5 space-y-2">
                   <li>Accepter ou refuser les cookies via le bandeau de consentement affiché lors de votre première visite</li>
                   <li>Paramétrer votre navigateur pour bloquer tout ou partie des cookies (consultez l'aide de votre navigateur)</li>
                   <li>Supprimer les cookies déjà installés (historique de navigation)</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Liens utiles pour paramétrer votre navigateur</h3>
                 <div className="flex flex-wrap gap-4">
                   {['Google Chrome', 'Mozilla Firefox', 'Safari', 'Microsoft Edge'].map(browser => (
                     <span key={browser} className="px-4 py-2 rounded-full border border-site text-[10px] uppercase tracking-widest">{browser}</span>
                   ))}
                 </div>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Plus d'informations</h3>
                 <p>Pour en savoir plus sur les cookies et votre vie privée, consultez le site de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#8ba394] hover:underline">www.cnil.fr</a></p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Contact</h3>
                 <p>Pour toute question sur la politique cookies : <a href="mailto:contact@katiaburgun.fr" className="text-[#8ba394] hover:underline">contact@katiaburgun.fr</a></p>
               </section>
            </div>
          )
        };
      case 'cgv':
        return {
          title: 'Conditions générales',
          description: 'Conditions générales de vente et de prestation de services de Katia Burgun.',
          content: (
            <div className="space-y-12">
               <p className="text-lg italic text-[#8ba394]">Les règles qui régissent nos prestations et votre réservation.</p>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 1 — Objet</h3>
                 <p>Les présentes Conditions Générales de Vente (CGV) régissent les prestations fournies par Katia Burgun, entreprise individuelle, dans le cadre de son activité d'hypnothérapeute, communicante animale et formatrice.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 2 — Prestations</h3>
                 <p className="mb-4">Les prestations proposées sont :</p>
                 <ul className="list-disc pl-5 space-y-2 opacity-80">
                   <li><strong>Séances d'hypnose Ericksonienne :</strong> 60€ la séance (1h à 1h30), en cabinet ou en visio</li>
                   <li><strong>Consultations en communication animale :</strong> 80€ la consultation, exclusivement à distance</li>
                   <li><strong>Formations d'initiation :</strong> 150€ par personne, journée complète à Fontaine-le-Dun</li>
                 </ul>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 3 — Réservation</h3>
                 <p className="mb-4">La réservation s'effectue par téléphone, email, WhatsApp ou formulaire de contact. Elle est confirmée par un échange écrit (SMS, email) précisant la date, l'heure et les modalités.</p>
                 <p>Pour les formations, un acompte de 50€ est demandé à la réservation pour valider l'inscription. Le solde est réglé le jour de la formation.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 4 — Tarifs et paiement</h3>
                 <p className="mb-4">Les tarifs sont affichés TTC (TVA non applicable — article 293 B du CGI). Les moyens de paiement acceptés sont : carte bancaire, virement, espèces, chèque à l'ordre de Katia Burgun.</p>
                 <p>Le paiement s'effectue à l'issue de la séance, sauf pour les formations (acompte + solde).</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 5 — Annulation et report</h3>
                 <div className="space-y-4">
                   <p><strong>Par le client :</strong> Toute séance peut être annulée ou reportée gratuitement jusqu'à 48h avant le rendez-vous. Passé ce délai, la séance reste due en totalité, sauf cas de force majeure justifié.</p>
                   <p><strong>Pour les formations :</strong> Annulation à plus de 15 jours → remboursement de l'acompte. Annulation entre 15 et 7 jours → acompte conservé. Moins de 7 jours → totalité due.</p>
                   <p><strong>Par la praticienne :</strong> En cas d'empêchement, une nouvelle date sera proposée dans les meilleurs délais ou la somme versée intégralement remboursée.</p>
                 </div>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 6 — Obligations respectives</h3>
                 <p className="mb-4">La praticienne s'engage à exercer son activité avec professionnalisme, bienveillance et dans le respect de la déontologie. Elle est tenue au secret professionnel absolu.</p>
                 <p>Le client s'engage à fournir des informations sincères, à arriver à l'heure, et à régler le montant convenu.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 7 — Absence de garantie de résultat</h3>
                 <p>Les prestations sont des obligations de moyens, non de résultat. L'hypnose et la communication animale sont des approches complémentaires : elles ne remplacent ni un avis médical, ni un avis vétérinaire, ni aucun traitement prescrit par un professionnel de santé.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 8 — Facture et remboursement mutuelle</h3>
                 <p>Une facture est remise à l'issue de chaque prestation. Le client est seul responsable de la transmettre à sa mutuelle. Les modalités de remboursement dépendent du contrat de chaque mutuelle.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 9 — Litige et droit applicable</h3>
                 <p>Les présentes CGV sont soumises au droit français. Tout litige relèvera de la compétence des tribunaux de Rouen, après tentative de résolution amiable.</p>
               </section>

               <section>
                 <h3 className="text-site font-body font-medium mb-4">Article 10 — Médiation de la consommation</h3>
                 <p>Conformément à l'article L.612-1 du Code de la consommation, en cas de litige, le client peut recourir gratuitement à un médiateur de la consommation dont les coordonnées seront communiquées sur demande.</p>
               </section>
            </div>
          )
        };
      default:
        return {
          title: 'Page Juridique',
          description: 'Pages juridiques et légales.',
          content: <p>Sélectionnez une page légale dans le pied de page.</p>
        };
    }
  };

  const { title, content } = getContent();

  return (
    <div className="pt-32 min-h-screen bg-site transition-colors duration-500 pb-24 px-6 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#8ba394] hover:text-site transition-colors">
            <ArrowLeft className="h-3 w-3" /> Retour à l'accueil
          </Link>
        </div>
        <BlurText text={title} delay={50} className="text-4xl sm:text-6xl italic font-heading text-site mb-20" />
        <div className="text-[var(--site-muted)] font-light leading-relaxed text-sm prose prose-invert max-w-none">
          {content}
        </div>
      </div>
    </div>
  );
}
