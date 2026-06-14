'use client';

/**
 * SEO utility — schema generators for Next.js Metadata API.
 * Page-level SEO is handled via Next.js `metadata` / `generateMetadata` exports.
 * This component renders nothing.
 */

/**
 * Generates FAQPage schema markup
 * @param {Array<{question: string, answer: string}>} faqs
 * @returns {Object} FAQPage JSON-LD
 */
export const generateFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({
    '@type': 'Question',
    'name': faq.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': faq.answer,
    },
  })),
});

/**
 * Generates Service schema markup
 * @param {Object} service
 * @returns {Object} Service JSON-LD
 */
export const generateServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': service.name,
  'description': service.description,
  'provider': {
    '@type': 'Organization',
    'name': 'TalentElla',
    'url': 'https://www.talentella.in',
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'India',
  },
  'offers': service.offers ? {
    '@type': 'AggregateOffer',
    'priceCurrency': 'INR',
    'lowPrice': service.offers.lowPrice,
    'highPrice': service.offers.highPrice,
    'offerCount': service.offers.count,
  } : undefined,
});

const SEO = () => null;

export default SEO;
