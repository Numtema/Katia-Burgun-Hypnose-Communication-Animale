import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import defaultImage from '../assets/katia-portrait.jpeg';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  canonical?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = defaultImage,
  canonical 
}: SEOProps) {
  const location = useLocation();
  const siteName = "Katia Burgun";
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    // Update OpenGraph Description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);

    // Update OpenGraph Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', image);

    // Update Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    const currentUrl = canonical || `https://votre-site.com${location.pathname}`;
    linkCanonical.setAttribute('href', currentUrl);

  }, [title, description, keywords, image, canonical, fullTitle, location.pathname]);

  return null;
}
