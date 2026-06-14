import HomePage from '../src/page-content/Home'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://talentella.in'

export const metadata = {
  title: 'TalentElla | 360° Marketing Agency India — The Future of Marketing',
  description: "TalentElla is India's leading 360° marketing agency. Full-service brand development, social media marketing, influencer marketing, lead generation & integrated solutions. Get a free strategy call.",
  keywords: '360 degree marketing agency, full service digital marketing agency, brand development agency, social media marketing agency India, influencer marketing agency, lead generation agency, integrated marketing solutions, content marketing agency, talent management marketing agency, online offline marketing agency',
  alternates: {
    canonical: SITE_URL + '/',
  },
  openGraph: {
    url: SITE_URL + '/',
    title: 'TalentElla | 360° Marketing Agency India — The Future of Marketing',
    description: "India's leading 360° marketing agency. Brand development, social media marketing, influencer marketing, lead generation & integrated solutions — all under one roof.",
  },
  twitter: {
    title: 'TalentElla | 360° Marketing Agency India — The Future of Marketing',
    description: "India's full-service 360° marketing agency — brand development, social media, influencer marketing, lead gen & integrated solutions. Book a free consultation.",
  },
}

export default function Home() {
  return <HomePage />
}
