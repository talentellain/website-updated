import AppPageContent from '../../src/page-content/AppPage'

export const dynamic = 'force-dynamic'

const SITE_URL = 'https://talentella.in'

export const metadata = {
  title: 'App Development Services | TalentElla — React Native & Flutter',
  description: "Custom mobile app development from India's 360° marketing agency. React Native, Flutter, and native iOS/Android apps. MVP starting ₹15,000. Cross-platform apps built for scale.",
  keywords: 'mobile app development agency India, custom app development services, React Native apps India, Flutter mobile applications India, Android iOS developer India, cross platform app development, MVP app development, mobile app cost India',
  alternates: {
    canonical: SITE_URL + '/app-development',
  },
  openGraph: {
    url: SITE_URL + '/app-development',
    title: 'App Development Services | TalentElla — React Native & Flutter',
    description: "Custom mobile app development from India's 360° marketing agency. React Native, Flutter, and native apps. MVP starting ₹15,000.",
  },
  twitter: {
    title: 'App Development Services | TalentElla — React Native & Flutter',
    description: "Custom mobile app development from India's 360° marketing agency. MVP starting ₹15,000.",
  },
}

export default function AppDevelopment() {
  return <AppPageContent />
}
