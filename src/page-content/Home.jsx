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
import ClientsSection from '../components/ClientsSection';
import MobileExperience from '../components/MobileExperience';
import AboutSection from '../components/AboutSection';
import { servicesData, homepageFAQs } from '../data/servicesData';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const Home = ({ tagline = "The Future of Marketing" }) => {
  const rawPortfolio = servicesData.find(s => s.id === 'social-media-management')?.portfolio || [];
  const smmPortfolio = [
    ...rawPortfolio.filter(item => item.orientation !== 'landscape').slice(0, 1),
    ...rawPortfolio.filter(item => item.orientation === 'landscape').slice(0, 2)
  ];

  return (
    <main>
      <Hero tagline={tagline} />
      <Services />
      
      {/* Features Bento Grid Section */}
      <div id="features" style={{ backgroundColor: '#000', position: 'relative', zIndex: 35 }}>
        <Features />
      </div>

      {/* Who We Work With / Clients Wireframe Section */}
      <ClientsSection />



      {/* About Section */}
      <div id="about" style={{ position: 'relative', zIndex: 41 }}>
        <AboutSection />
      </div>

      {/* Our Winning Formula / 2026 */}
      <WhyTalentElla />

      {/* Production Portfolio (Video Section) */}
      <div id="production-portfolio" style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 45, padding: '40px 0 60px 0' }}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', padding: '0 5%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '20px',
              background: 'rgba(172, 88, 233, 0.1)',
              border: '1px solid rgba(172, 88, 233, 0.25)',
              color: '#AC58E9',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase'
            }}>
              <span>✦</span>
              <span>SELECTED PRODUCTION WORK</span>
              <span>✦</span>
            </div>

            <h2 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: 900, 
              textTransform: 'uppercase', 
              lineHeight: 1.1, 
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Featured Production Reels
            </h2>

            <p style={{ 
              color: 'rgba(255,255,255,0.6)', 
              fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', 
              maxWidth: '620px', 
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 400
            }}>
              High-impact visual storytelling, dynamic brand films, and aesthetic campaign reels crafted to elevate client identity.
            </p>
          </div>
          <SocialMediaPortfolio portfolio={smmPortfolio} />
          
          <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
            <Link href="/portfolio" style={{ textDecoration: 'none' }}>
              <button 
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.15)',
                  padding: '12px 32px',
                  borderRadius: '30px',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(172, 88, 233, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(172, 88, 233, 0.35)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(172, 88, 233, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'inset 0 1px 1px rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>View Full Portfolio</span>
                <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <HomeFAQ faqs={homepageFAQs} />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
