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

const Home = () => {
  const smmPortfolio = servicesData.find(s => s.id === 'social-media-management')?.portfolio || [];

  return (
    <main>
      <Hero />
      <Services />
      
      {/* Features Bento Grid Section */}
      <div id="features" className="sticky-outer" style={{ zIndex: 35 }}>
        <motion.section 
          className="sticky-section"
          style={{
            backgroundColor: '#000', 
            height: '100dvh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Features />
        </motion.section>
      </div>

      {/* Mobile Experience Triple Mockup Section */}
      <div id="mobile-showcase" className="sticky-outer" style={{ zIndex: 40 }}>
        <motion.section 
          className="sticky-section"
          style={{
            backgroundColor: '#000', 
            height: '100dvh',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MobileExperience />
        </motion.section>
      </div>

      {/* About Section - Normal Scroll (No overlapping effect), needs zIndex to render above sticky background */}
      <div id="about" style={{ position: 'relative', zIndex: 41 }}>
        <AboutSection />
      </div>

      {/* Production Portfolio (Video Section) */}
      <div id="production-portfolio" className="sticky-outer" style={{ zIndex: 45 }}>
        <motion.section 
          className="sticky-section"
          style={{
            backgroundColor: '#ffffff', 
            borderTop: '1px solid rgba(0,0,0,0.06)',
            height: '100dvh',
            overflow: 'hidden'
          }}
        >
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2vh 0' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 5%' }}>
              <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, color: '#121212' }}>Production Portfolio</h2>
              <p style={{ color: 'rgba(0,0,0,0.5)', marginTop: '0.5rem', fontSize: '0.9rem', maxWidth: '600px', marginInline: 'auto' }}>A deep dive into our creative storytelling and visual craftsmanship.</p>
            </div>
            <SocialMediaPortfolio portfolio={smmPortfolio} />
          </div>
        </motion.section>
      </div>

      <WhyTalentElla />
      <HomeFAQ faqs={homepageFAQs} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
