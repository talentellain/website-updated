import BlogPostPageContent from '../../../src/page-content/BlogPostPage'
import { blogPosts } from '../../../src/data/blogData'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || '',
    alternates: {
      canonical: `${SITE_URL}/blog/${params.id}`,
    },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}/blog/${params.id}`,
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`${SITE_URL}${post.image}`] : undefined,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [`${SITE_URL}${post.image}`] : undefined,
    },
  }
}

function generateArticleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author || 'TalentElla',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TalentElla',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    datePublished: post.date,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.id}`,
    },
  }
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.id === params.id)
  if (!post) return <BlogPostPageContent />

  const articleSchema = generateArticleSchema(post)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostPageContent />
    </>
  )
}
