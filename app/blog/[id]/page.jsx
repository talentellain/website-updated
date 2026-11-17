import BlogPostPageContent from '../../../src/page-content/BlogPostPage'
import { blogPosts } from '../../../src/data/blogData'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://www.talentella.in'

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id)
  if (!post) {
    return {
      title: 'Article Not Found | TalentElla Blog',
      description: 'The requested blog post could not be found.',
    }
  }

  const postUrl = `${SITE_URL}/blog/${resolvedParams.id}`
  const postImage = post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : `${SITE_URL}/logo.jpg`

  return {
    title: `${post.title} | TalentElla Insights`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || '',
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: postImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.dateISO || post.date,
      modifiedTime: post.updatedISO || post.dateISO || post.date,
      authors: [post.author || 'TalentElla Team'],
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [postImage],
      creator: '@talentella_in',
    },
  }
}

function generateArticleSchema(post, id) {
  const postUrl = `${SITE_URL}/blog/${id}`
  const postImage = post.image ? (post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`) : `${SITE_URL}/logo.jpg`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${postUrl}#article`,
        isPartOf: {
          '@type': 'WebPage',
          '@id': postUrl,
          url: postUrl,
          name: post.title,
        },
        headline: post.title,
        description: post.excerpt,
        inLanguage: 'en-IN',
        mainEntityOfPage: postUrl,
        datePublished: post.dateISO || '2026-01-01',
        dateModified: post.updatedISO || post.dateISO || '2026-06-01',
        author: {
          '@type': 'Organization',
          name: post.author || 'TalentElla Editorial Team',
          url: SITE_URL,
          logo: `${SITE_URL}/logo.jpg`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'TalentElla',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.jpg`,
          },
        },
        image: {
          '@type': 'ImageObject',
          url: postImage,
        },
        articleSection: post.category,
        keywords: post.tags?.join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${postUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      },
    ],
  }
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id)
  if (!post) return <BlogPostPageContent />

  const articleSchema = generateArticleSchema(post, resolvedParams.id)

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
