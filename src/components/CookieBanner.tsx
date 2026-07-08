"use client";

import Script from 'next/script';

export default function CookieBanner() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css" />
      <Script
        src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.CookieConsent) {
            // @ts-ignore
            window.CookieConsent.run({
              guiOptions: {
                consentModal: {
                  layout: "bar inline",
                  position: "bottom",
                  equalWeightButtons: true,
                  flipButtons: true
                },
                preferencesModal: {
                  layout: "box",
                  position: "right",
                  equalWeightButtons: true,
                  flipButtons: false
                }
              },
              categories: {
                necessary: {
                  readOnly: true
                },
                functionality: {},
                analytics: {},
                marketing: {}
              },
              language: {
                default: "fr",
                autoDetect: "browser",
                translations: {
                  fr: {
                    consentModal: {
                      title: "Bonjour voyageur, c'est l'heure des cookies !",
                      description: "Ce site utilise des cookies pour améliorer votre expérience utilisateur, mesurer l'audience et adapter nos contenus. Vous pouvez choisir de tout accepter, tout refuser ou personnaliser vos choix.",
                      acceptAllBtn: "Tout accepter",
                      acceptNecessaryBtn: "Tout rejeter",
                      showPreferencesBtn: "Gérer les préférences",
                      footer: `<a href="/legal/politique-confidentialite">Politique de confidentialité</a>
<a href="/legal/cgv">Conditions Générales de Vente</a>`
                    },
                    preferencesModal: {
                      title: "Préférences de cookies",
                      acceptAllBtn: "Tout accepter",
                      acceptNecessaryBtn: "Tout rejeter",
                      savePreferencesBtn: "Sauvegarder les préférences",
                      closeIconLabel: "Fermer la modale",
                      serviceCounterLabel: "Services",
                      sections: [
                        {
                          title: "Utilisation des Cookies",
                          description: "Nous utilisons des cookies pour optimiser les fonctionnalités du site et analyser son trafic."
                        },
                        {
                          title: "Cookies Strictement Nécessaires <span class=\"pm__badge\">Toujours Activés</span>",
                          description: "Ces cookies sont indispensables au bon fonctionnement du site et ne peuvent pas être désactivés.",
                          linkedCategory: "necessary"
                        },
                        {
                          title: "Cookies de Fonctionnalités",
                          description: "Ces cookies permettent d'enregistrer vos choix et préférences de navigation.",
                          linkedCategory: "functionality"
                        },
                        {
                          title: "Cookies Analytiques",
                          description: "Ces cookies nous permettent de mesurer le trafic (nombre de visites, pages vues) et d'améliorer les performances du site via Google Analytics.",
                          linkedCategory: "analytics"
                        },
                        {
                          title: "Cookies Publicitaires",
                          description: "Ces cookies sont utilisés pour vous présenter des contenus personnalisés adaptés à vos centres d'intérêt.",
                          linkedCategory: "marketing"
                        },
                        {
                          title: "Plus d'informations",
                          description: "Pour toute question concernant notre politique de confidentialité et de cookies, vous pouvez nous <a class=\"cc__link\" href=\"/contact\">contacter</a>."
                        }
                      ]
                    }
                  }
                }
              }
            });
          }
        }}
      />
    </>
  );
}
