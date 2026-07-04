'use client';

import React from 'react';
 
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyTalentElla from '../components/WhyTalentElla';
import HomeFAQ from '../components/HomeFAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SocialMediaPortfolio from '../components/SocialMediaPortfolio';
import Features from '../components/Features';
import MobileExperience from '../components/MobileExperience';
import AboutSection from '../components/AboutSection';
import { servicesData, homepageFAQs } from '../data/servicesData';

import Image from 'next/image';

const Home = ({ tagline = "The Future of Marketing" }) => {
  const smmPortfolio = (servicesData.find(s => s.id === 'social-media-management')?.portfolio || []).slice(0, 6);

  return (
    <main>
      <Hero tagline={tagline} />
      <Services />
      
      {/* Features Bento Grid Section */}
      <div id="features" style={{ backgroundColor: '#000', position: 'relative', zIndex: 35 }}>
        <Features />
      </div>

      {/* Strip Design Banner */}
      <div id="mobile-showcase" style={{ backgroundColor: '#000', position: 'relative', zIndex: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 5%' }}>
        <Image 
          src="/talentella strip design.png" 
          alt="TalentElla Services - 360° Marketing, Web Development, Mobile Apps, SEO, Content Creation" 
          width={1000}
          height={800}
          style={{ width: '100%', maxWidth: '1000px', height: 'auto', objectFit: 'contain' }}
          sizes="(max-width: 1000px) 100vw, 1000px"
        />
      </div>

      {/* About Section */}
      <div id="about" style={{ position: 'relative', zIndex: 41 }}>
        <AboutSection />
      </div>

      {/* Our Winning Formula / 2026 */}
      <WhyTalentElla />

      {/* Production Portfolio (Video Section) */}
      <div id="production-portfolio" style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 45, padding: '100px 0' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 5%' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, color: '#ffffff' }}>Production Portfolio</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', fontSize: '0.9rem', maxWidth: '600px', marginInline: 'auto' }}>A deep dive into our creative storytelling and visual craftsmanship.</p>
          </div>
          <SocialMediaPortfolio portfolio={smmPortfolio} />
        </div>
      </div>

      <HomeFAQ faqs={homepageFAQs} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
