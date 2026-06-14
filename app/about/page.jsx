import AboutPageContent from '../../src/page-content/AboutPage'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export const metadata = {
  title: 'About Us | TalentElla — 360° Marketing Agency India',
  description: "Learn about TalentElla — India's trusted 360° marketing agency. 50+ brands served, 200+ projects delivered, 95% client retention in brand development, web dev, SMM & visual identity design.",
  keywords: 'about TalentElla, 360 marketing agency India, digital marketing team India, brand development agency India, full service marketing agency, Indian marketing agency team, top marketing agency India',
  alternates: {
    canonical: SITE_URL + '/about',
  },
  openGraph: {
    url: SITE_URL + '/about',
    title: 'About Us | TalentElla — 360° Marketing Agency India',
    description: "India's trusted 360° marketing agency — 50+ brands, 200+ projects, 95% retention. Meet the team behind TalentElla.",
  },
  twitter: {
    title: 'About Us | TalentElla — 360° Marketing Agency India',
    description: "India's trusted 360° marketing agency — 50+ brands, 200+ projects, 95% retention. Meet the team behind TalentElla.",
  },
}

export default function About() {
  return <AboutPageContent />
}
