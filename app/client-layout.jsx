'use client'

import { HelmetProvider } from 'react-helmet-async'
import SmoothScroll from '../src/components/SmoothScroll'
import StaticBackground from '../src/components/StaticBackground'
import Navbar from '../src/components/Navbar'
import ScrollToTop from './scroll-to-top'

export default function ClientLayout({ children }) {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <StaticBackground />
      <SmoothScroll>
        <div className="page-container">
          <Navbar />
          {children}
        </div>
      </SmoothScroll>
    </HelmetProvider>
  )
}
