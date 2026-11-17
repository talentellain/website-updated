import BlogPageContent from '../../src/page-content/BlogPage'
import { blogPosts } from '../../src/data/blogData'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export const metadata = {
  title: 'Blog & Case Studies | TalentElla — Growth, SEO & Engineering Insights',
  description:
    'Deep-dive organic guides, technical SEO breakdowns, viral marketing blueprints, and digital engineering case studies for ambitious Indian brands and startups.',
  keywords:
    'digital marketing blog India, organic SEO guide, technical SEO Next.js, Instagram growth India, branding case studies, mobile app MVP cost, website development pricing India, TalentElla insights',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    url: `${SITE_URL}/blog`,
    title: 'Blog & Case Studies | TalentElla Insights',
    description:
      'Actionable growth blueprints on Technical SEO, Next.js engineering, high-ROAS performance marketing, and organic brand building.',
    images: [
      {
        url: `${SITE_URL}/logo.jpg`,
        width: 1200,
        height: 630,
        alt: 'TalentElla Digital Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Case Studies | TalentElla Insights',
    description:
      'Actionable growth blueprints on Technical SEO, Next.js engineering, high-ROAS performance marketing, and organic brand building.',
    images: [`${SITE_URL}/logo.jpg`],
  },
}

function generateBlogIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'TalentElla Digital Insights & Growth Engineering Blog',
    description:
      'Expert insights on organic SEO, high-performance web engineering, social media marketing, and brand identity.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'TalentElla',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    blogPost: blogPosts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.id}`,
      datePublished: post.dateISO || '2026-01-01',
      author: {
        '@type': 'Organization',
        name: post.author || 'TalentElla',
      },
    })),
  }
}

export default function Blog() {
  const schema = generateBlogIndexSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogPageContent />
    </>
  )
}
