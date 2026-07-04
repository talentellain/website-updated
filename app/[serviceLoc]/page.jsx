import React from 'react';
import { notFound } from 'next/navigation';
import { generateSEOContent, citiesData } from '../../src/data/seoContent';
import ServicePage from '../../src/page-content/ServicePage';

// Force dynamic rendering to ensure parameters are parsed correctly
export const dynamic = 'force-dynamic';

function parseSlug(slug) {
  if (!slug) return null;
  const cities = Object.keys(citiesData);
  const city = cities.find(c => slug.toLowerCase().endsWith(`-${c}`));
  if (!city) return null;
  
  const service = slug.slice(0, -(city.length + 1));
  return { service, city };
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  if (!resolvedParams || !resolvedParams.serviceLoc) {
    return { title: 'Service Not Found | TalentElla' };
  }

  const parsed = parseSlug(resolvedParams.serviceLoc);
  if (!parsed) return { title: 'Service Not Found | TalentElla' };

  const content = generateSEOContent(parsed.service, parsed.city);
  if (!content) return { title: 'Service Not Found | TalentElla' };

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: `${content.serviceTitle}, ${content.cityName}, Jharkhand, TalentElla`,
    alternates: {
      canonical: `https://www.talentella.in/${resolvedParams.serviceLoc}`
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://www.talentella.in/${resolvedParams.serviceLoc}`,
      siteName: 'TalentElla',
      locale: 'en_IN',
      type: 'website',
    }
  };
}

export default async function ServiceLocationPage({ params }) {
  const resolvedParams = await params;
  
  if (!resolvedParams || !resolvedParams.serviceLoc) {
    notFound();
  }

  const parsed = parseSlug(resolvedParams.serviceLoc);
  if (!parsed) {
    notFound();
  }

  const content = generateSEOContent(parsed.service, parsed.city);
  
  if (!content) {
    notFound();
  }

  // Render the exact same premium layout as the main web dev page, 
  // but inject the localized city name and service ID to retain SEO value.
  return (
    <>
      <ServicePage customServiceId={content.serviceId} customCityName={content.cityName} />
      
      {/* Invisible Schema injected for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `TalentElla - ${content.serviceTitle} in ${content.cityName}`,
          "image": "https://www.talentella.in/logo.png",
          "url": `https://www.talentella.in/${resolvedParams.serviceLoc}`,
          "telephone": "+918002014660",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ranchi",
            "addressRegion": "JH",
            "addressCountry": "IN"
          },
          "areaServed": content.cityName
        })}}
      />
    </>
  );
}
