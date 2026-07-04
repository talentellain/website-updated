import './globals.css'
import ClientLayout from './client-layout'

const SITE_URL = 'https://www.talentella.in'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TalentElla | Top Web Development & Digital Marketing Agency in Ranchi',
    template: '%s | TalentElla',
  },
  description: "TalentElla is the best web development and digital marketing agency in Ranchi, Jharkhand. We offer expert SEO services, custom website design, social media marketing, and branding.",
  keywords: 'Web Development Company in Ranchi, Digital Marketing Agency Ranchi, SEO Company Ranchi, Website Design Company Ranchi, Social Media Marketing Ranchi, Branding Agency Jharkhand, Best Website Designer in Ranchi',
  authors: [{ name: 'TalentElla' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  alternates: {
    canonical: SITE_URL + '/',
    languages: {
      'en-IN': SITE_URL + '/',
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL + '/',
    title: 'TalentElla | Top Web Development & Digital Marketing Agency in Ranchi',
    description: "TalentElla is the best web development and digital marketing agency in Ranchi, Jharkhand. We offer expert SEO services, custom website design, social media marketing, and branding.",
    siteName: 'TalentElla',
    images: [
      {
        url: SITE_URL + '/logo.jpg',
        width: 1200,
        height: 1200,
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentElla | Top Web Development & Digital Marketing Agency in Ranchi',
    description: "TalentElla is the best web development and digital marketing agency in Ranchi, Jharkhand. We offer expert SEO services, custom website design, social media marketing, and branding.",
    images: [SITE_URL + '/logo.jpg'],
  },
  other: {
    'geo.region': 'IN-JH',
    'geo.placename': 'Ranchi',
    'msapplication-TileColor': '#0a0a0c',
    'theme-color': '#0a0a0c',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0c',
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'TalentElla',
    'alternateName': 'TalentElla Marketing Agency',
    'url': 'https://www.talentella.in',
    'logo': 'https://www.talentella.in/logo.png',
    'description': "TalentElla is a top web development and digital marketing agency based in Ranchi, Jharkhand.",
    'email': 'talentella.in@gmail.com',
    'foundingDate': '2026',
    'areaServed': {
      '@type': 'State',
      'name': 'Jharkhand',
    },
    'sameAs': [
      'https://www.instagram.com/talentella.in',
      'https://www.linkedin.com/company/talentella',
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': 'talentella.in@gmail.com',
      'contactType': 'customer service',
      'availableLanguage': ['English', 'Hindi'],
    },
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'TalentElla',
    'image': 'https://www.talentella.in/logo.png',
    'url': 'https://www.talentella.in',
    'email': 'talentella.in@gmail.com',
    'description': 'Top web development and digital marketing agency in Ranchi, offering SEO, social media marketing, and website design.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Ranchi',
      'addressRegion': 'Jharkhand',
      'addressCountry': 'IN',
    },
    'priceRange': '₹₹',
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '18:00',
    },
  }

  return (
    <html lang="en-IN" dir="ltr" style={{ position: 'relative' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="preload" as="image" href="/bg5.webp" fetchPriority="high" type="image/webp" />
        <link rel="preload" as="image" href="/fg.webp" fetchPriority="high" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
