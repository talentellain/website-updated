import './globals.css'
import ClientLayout from './client-layout'

export const metadata = {
  title: 'TalentElla | 360° Marketing Agency India — The Future of Marketing',
  description: "TalentElla is India's leading 360° marketing agency offering brand development, social media marketing, influencer marketing, lead generation & integrated marketing solutions. Get a free strategy call today.",
  keywords: '360 degree marketing agency, full service digital marketing agency, brand development agency, social media marketing agency India, influencer marketing agency, lead generation agency, integrated marketing solutions, content marketing agency, talent management marketing agency, online offline marketing agency',
  authors: [{ name: 'TalentElla' }],
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    type: 'website',
    url: 'https://talentella.in/',
    title: 'TalentElla | 360° Marketing Agency India — The Future of Marketing',
    description: "TalentElla is India's leading 360° marketing agency. Brand development, social media marketing, influencer marketing, lead generation & integrated marketing solutions — all under one roof.",
    siteName: 'TalentElla',
    images: [
      {
        url: 'https://talentella.in/logo.jpg',
        width: 1200,
        height: 1200,
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TalentElla | 360° Marketing Agency India — The Future of Marketing',
    description: "India's full-service 360° marketing agency — brand development, social media, influencer marketing, lead gen & integrated solutions. Book a free consultation.",
    images: ['https://talentella.in/logo.jpg'],
  },
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'msapplication-TileColor': '#0a0a0c',
    'theme-color': '#0a0a0c',
  },
}

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'TalentElla',
    'alternateName': 'TalentElla Marketing Agency',
    'url': 'https://talentella.in',
    'logo': 'https://talentella.in/logo.png',
    'description': "TalentElla is India's leading 360° marketing agency providing full-service digital marketing, brand development, social media management, influencer marketing, lead generation, and integrated marketing solutions.",
    'email': 'talentella.in@gmail.com',
    'foundingDate': '2026',
    'areaServed': {
      '@type': 'Country',
      'name': 'India',
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
    'image': 'https://talentella.in/logo.png',
    'url': 'https://talentella.in',
    'email': 'talentella.in@gmail.com',
    'description': 'Full-service 360° marketing agency in India offering brand development, social media marketing, influencer marketing, lead generation, and integrated marketing solutions.',
    'address': {
      '@type': 'PostalAddress',
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
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="preload" as="image" href="/bg5.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/fg.png" fetchPriority="high" />
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
