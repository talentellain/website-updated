import ServicePageContent from '../../../src/page-content/ServicePage'
import { servicesData } from '../../../src/data/servicesData'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.id === params.id)
  if (!service) return {}

  const pageTitle = service.seo?.pageTitle || service.title
  const metaDesc = service.seo?.metaDescription || service.description
  const pageKeywords = service.seo?.keywords || ''

  return {
    title: pageTitle,
    description: metaDesc,
    keywords: pageKeywords,
    alternates: {
      canonical: `${SITE_URL}/services/${params.id}`,
    },
    openGraph: {
      url: `${SITE_URL}/services/${params.id}`,
      title: pageTitle,
      description: metaDesc,
    },
    twitter: {
      title: pageTitle,
      description: metaDesc,
    },
  }
}

function generateServiceSchema(service, id) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'TalentElla',
      url: SITE_URL,
    },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/services/${id}`,
  }
}

function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export default function ServicePage({ params }) {
  const service = servicesData.find((s) => s.id === params.id)
  if (!service) return <ServicePageContent />

  const schemas = [generateServiceSchema(service, params.id)]
  const faqSchema = generateFAQSchema(service.faqs)
  if (faqSchema) schemas.push(faqSchema)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas),
        }}
      />
      <ServicePageContent />
    </>
  )
}
