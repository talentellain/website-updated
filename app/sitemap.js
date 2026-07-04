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

  const redirectingIds = ['app-development'] // these have dedicated pages
  const servicePages = servicesData
    .filter((s) => !redirectingIds.includes(s.id))
    .map((s) => ({
      url: `${SITE_URL}/services/${s.id}`,
      lastModified: '2026-06-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    }))

  const blogPostPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const allCities = [
    'ranchi', 'jamshedpur', 'dhanbad', 'bokaro', 'hazaribagh', 
    'deoghar', 'ramgarh', 'gumla', 'chaibasa', 'lohardaga', 
    'simdega', 'khunti', 'latehar', 'giridih', 'koderma', 
    'godda', 'dumka', 'pakur', 'sahibganj', 'chatra', 'palamu'
  ]

  const services = [
    'web-development', 'website-development', 'seo-services', 
    'digital-marketing', 'social-media-marketing', 'website-maintenance', 
    'ecommerce-development', 'app-development', 'branding-agency'
  ]

  const locationPages = allCities.map((city) => ({
    url: `${SITE_URL}/location/${city}`,
    lastModified: '2026-07-04',
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const serviceLocPages = []
  for (const city of allCities) {
    for (const service of services) {
      serviceLocPages.push({
        url: `${SITE_URL}/${service}-${city}`,
        lastModified: '2026-07-04',
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    }
  }

  return [...staticPages, ...servicePages, ...blogPostPages, ...locationPages, ...serviceLocPages]
}
