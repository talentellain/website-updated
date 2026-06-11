import ServicePageContent from '../../../src/page-content/ServicePage'
import { servicesData } from '../../../src/data/servicesData'

export const dynamic = 'force-dynamic'

export function generateMetadata({ params }) {
  const service = servicesData.find((s) => s.id === params.id)
  if (!service) return {}

  return {
    title: `TalentElla | ${service.seo?.pageTitle || service.title} — 360° Marketing Agency`,
    description: service.seo?.metaDescription || service.description,
  }
}

export default function ServicePage() {
  return <ServicePageContent />
}
