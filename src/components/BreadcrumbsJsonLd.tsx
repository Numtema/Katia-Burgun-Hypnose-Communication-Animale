import React from 'react';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsJsonLdProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbsJsonLd({ items }: BreadcrumbsJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://katia-burgun.fr${item.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
