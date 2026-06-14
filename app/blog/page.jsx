import BlogPageContent from '../../src/page-content/BlogPage'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export const metadata = {
  title: 'Blog | TalentElla — Digital Marketing Insights & Guides',
  description: "Expert insights on digital marketing, web development, SEO, social media, branding, and app development. TalentElla's blog helps Indian businesses grow online with actionable strategies.",
  keywords: 'digital marketing blog India, marketing agency insights, social media marketing tips, web development guide, SEO tips India, branding guide India, app development blog, 360 marketing tips',
  alternates: {
    canonical: SITE_URL + '/blog',
  },
  openGraph: {
    url: SITE_URL + '/blog',
    title: 'Blog | TalentElla — Digital Marketing Insights & Guides',
    description: "Expert digital marketing insights for Indian businesses. SEO, web development, branding, SMM, and app development guides.",
  },
  twitter: {
    title: 'Blog | TalentElla — Digital Marketing Insights & Guides',
    description: "Expert digital marketing insights for Indian businesses. SEO, web development, branding, SMM, and app development guides.",
  },
}

export default function Blog() {
  return <BlogPageContent />
}
