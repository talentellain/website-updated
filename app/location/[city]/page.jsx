import React from 'react';
import HomePage from '../../../src/page-content/Home';
import { homepageFAQs } from '../../../src/data/servicesData';

export const dynamicParams = true; // allow other cities to be rendered dynamically

// Prioritize these cities for static generation to ensure they load instantly
const priorityCities = [
  'ranchi', 'jamshedpur', 'dhanbad', 'bokaro', 'hazaribagh', 
  'deoghar', 'ramgarh', 'gumla', 'chaibasa'
];

export async function generateStaticParams() {
  return priorityCities.map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || 'ranchi';
  const cityName = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).toLowerCase();

  return {
    title: `Web Development & Digital Marketing Company in ${cityName} | TalentElla`,
    description: `Looking for the best web development and digital marketing agency in ${cityName}? TalentElla offers expert SEO services, social media marketing, and custom website design in ${cityName}, Jharkhand.`,
    openGraph: {
      title: `Top Web Development & Digital Marketing Agency in ${cityName} | TalentElla`,
      description: `TalentElla is the best web development and digital marketing agency in ${cityName}, Jharkhand. We offer expert SEO services, custom website design, social media marketing, and branding.`,
    },
    alternates: {
      canonical: `https://www.talentella.in/location/${cityStr}`,
    },
  };
}

function generateLocalFAQSchema(faqs, cityName) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      // Optionally inject city into question if applicable, for now keep original
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default async function LocationPage({ params }) {
  const resolvedParams = await params;
  const cityStr = resolvedParams?.city || 'ranchi';
  const cityName = cityStr.charAt(0).toUpperCase() + cityStr.slice(1).toLowerCase();
  
  const schemas = [
    generateLocalFAQSchema(homepageFAQs, cityName),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HomePage tagline={`Top Web Development & Marketing Agency in ${cityName}`} />
    </>
  );
}
