import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.katiaburgun.com';
  const lastModified = new Date();

  // Define your routes and their priorities
  const routes = [
    { url: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { url: '/qui-suis-je', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/hypnose', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/communication-animale', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/mieux-etre-liberation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ecoute-intuitive', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/formation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/tarifs', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/temoignages', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/prendre-rendez-vous', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/legal/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/legal/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
