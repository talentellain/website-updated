import PortfolioPageContent from '../../src/page-content/PortfolioPage'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export const metadata = {
  title: 'Immersive Portfolio | TalentElla Agency',
  description: "Experience the future of digital marketing. Explore our award-winning work in branding, development, and social media. View our portfolio of websites, apps, reels, and brand identity projects.",
  keywords: 'digital marketing portfolio India, brand development portfolio, web design portfolio, social media marketing case studies, influencer marketing examples, creative agency portfolio India, TalentElla projects',
  alternates: {
    canonical: SITE_URL + '/portfolio',
  },
  openGraph: {
    url: SITE_URL + '/portfolio',
    title: 'Immersive Portfolio | TalentElla Agency',
    description: "Explore TalentElla's award-winning portfolio — websites, apps, brand identity, reels, and social media campaigns.",
  },
  twitter: {
    title: 'Immersive Portfolio | TalentElla Agency',
    description: "Explore TalentElla's award-winning portfolio — websites, apps, brand identity, reels, and social media campaigns.",
  },
}

export default function Portfolio() {
  return <PortfolioPageContent />
}
