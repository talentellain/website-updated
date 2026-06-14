import { servicesData } from '../src/data/servicesData'
import { blogPosts } from '../src/data/blogData'

const SITE_URL = 'https://www.talentella.in'

export default async function sitemap() {
  const staticPages = [
    {
      url: SITE_URL + '/',
      lastModified: '2026-06-01',
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: SITE_URL + '/about',
      lastModified: '2026-06-01',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: SITE_URL + '/portfolio',
      lastModified: '2026-06-01',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: SITE_URL + '/blog',
      lastModified: '2026-06-01',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: SITE_URL + '/app-development',
      lastModified: '2026-06-01',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const servicePages = servicesData.map((s) => ({
    url: `${SITE_URL}/services/${s.id}`,
    lastModified: '2026-06-01',
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogPostPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: post.date || '2026-06-01',
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...blogPostPages]
}
