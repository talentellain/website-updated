import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Code, Share2, Palette, Settings, Zap, Smartphone, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const iconMap = { Code, Share2, Palette, Settings, Zap, Smartphone };

const serviceTags = {
  'app-development': 'MOBILE APPS',
  'website-development': 'WEB PLATFORMS',
  'social-media-management': 'DIGITAL MARKETING',
  'visual-identity-design': 'BRAND IDENTITY'
};

const serviceNumbers = {
  'app-development': '01',
  'website-development': '02',
  'social-media-management': '03',
  'visual-identity-design': '04'
};

const ServiceCard = ({ s, index }) => {
  const IconComponent = iconMap[s.icon] || Zap;
  const displayTitle = s.title.toUpperCase().split(' ').map((word, idx) => (
    <React.Fragment key={idx}>{word}<br /></React.Fragment>
  ));
  const targetPath = s.id === 'app-development' ? '/app-development' : `/services/${s.id}`;
  const tag = serviceTags[s.id] || 'SERVICES';
  const num = serviceNumbers[s.id] || `0${index + 1}`;

  return (
    <Link href={targetPath} style={{ textDecoration: 'none', display: 'block', height: '100%', outline: 'none' }} aria-label={`Learn about TalentElla's ${s.title} services`}>
      <div className="modern-service-card" style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderRadius: '28px' }}>
        {/* Top Header inside Card */}
        <div className="card-top-header" style={{ position: 'absolute', top: '2rem', left: '2rem', right: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3, transition: 'opacity 0.4s ease' }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', fontWeight: 700, color: 'rgba(0,0,0,0.3)', letterSpacing: '0.15em' }}>{num}</span>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.2em' }}>{tag}</span>
        </div>

        {/* Center Title */}
        <div className="card-giant-text">{displayTitle}</div>

        {/* Bottom CTA Arrow Button */}
        <div className="card-bottom-cta" style={{ position: 'absolute', bottom: '2rem', right: '2rem', zIndex: 3, width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)', backgroundColor: 'transparent' }}>
          <ArrowUpRight size={18} className="cta-arrow-icon" style={{ color: 'rgba(0,0,0,0.5)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
        </div>

        {/* Hover Content */}
        <div className="card-hover-content">
          <div className="blob-icon-wrapper"><IconComponent size={44} color="#000000" strokeWidth={2.5} /></div>
          <p className="card-hover-desc">{s.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '1.2rem' }} className="explore-btn-wrap">
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'white' }}>EXPLORE SERVICE</span>
            <ArrowUpRight size={14} color="white" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  const outerRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const { scrollYProgress } = useScroll({ target: isMobile ? undefined : outerRef, offset: ['start end', 'start start'] });
  
  const borderRad = useTransform(scrollYProgress, [0, 1], ['60px', '0px']);

  return (
    <>
      <div id="services" ref={outerRef} className={`sticky-outer ${isMobile ? 'mobile-unstick' : ''}`} style={{ zIndex: 20 }}>
        <motion.section
          className={`sticky-section ${isMobile ? 'services-section-mobile-unwrap' : ''}`}
          style={{ 
            backgroundColor: '#f5f5f0', 
            borderTopLeftRadius: isMobile ? '0px' : borderRad, 
            borderTopRightRadius: isMobile ? '0px' : borderRad, 
            borderTop: '1px solid rgba(0,0,0,0.06)', 
            height: isMobile ? 'auto' : '100dvh',
            minHeight: isMobile ? '100dvh' : 'auto',
            display: isMobile ? 'flex' : 'block',
            flexDirection: isMobile ? 'column' : 'initial',
            justifyContent: isMobile ? 'center' : 'initial'
          }}
        >
          <div className="services-container-inner" style={{ width: '100%', height: isMobile ? 'auto' : '100%', overflowY: isMobile ? 'visible' : 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="services-header" style={{ maxWidth: '800px', textAlign: 'center', padding: '0 5%', marginBottom: 'clamp(2.5rem, 6vh, 4.5rem)' }}>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 'clamp(1.6rem, 6vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#121212' }}>
                OUR SERVICES
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ color: '#4a4a4a', fontSize: 'clamp(0.75rem, 2vw, 1rem)', lineHeight: '1.4', fontWeight: 500, marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                Full-service 360° marketing solutions — brand development, social media marketing, and integrated digital strategies.
              </motion.p>
            </div>
            <div className="services-grid-new">
              {servicesData.map((s, index) => <ServiceCard key={s.id} s={s} index={index} />)}
            </div>
          </div>
        </motion.section>
      </div>

      <style>{`
        :root { --mobile-rad: 0px; }
        @media (min-width: 769px) { :root { --mobile-rad: borderRad; } }

        .services-container-inner { padding: 12vh 2% 8vh; }
        @media (max-width: 768px) { .services-container-inner { padding: 8vh 2.5% 6vh !important; } }

        .services-grid-new { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5vh; width: 100%; }
        @media (max-width: 1200px) { .services-grid-new { grid-template-columns: repeat(2, 1fr); gap: 2vh; } }
        
        /* Mobile Horizontal Scroll */
        @media (max-width: 768px) { 
          .services-grid-new { 
            display: flex !important;
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            gap: 1.2rem !important;
            width: 100vw !important;
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            padding: 0 1.5rem 2rem 1.5rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .services-grid-new::-webkit-scrollbar {
            display: none;
          }
        }

        .modern-service-card { 
          background-color: #ebeae4; 
          min-height: 380px; 
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
          border: 1px solid rgba(0, 0, 0, 0.04);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.015);
        }
        
        .modern-service-card:hover { 
          background: linear-gradient(135deg, #7c3aed, #a78bfa); 
          border-color: rgba(167, 139, 250, 0.3);
          box-shadow: 0 30px 60px rgba(124, 58, 237, 0.25);
          transform: translateY(-8px);
        }

        .card-giant-text { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%,-50%); 
          font-size: clamp(1.2rem, 1.8vw, 1.9rem); 
          font-weight: 850; 
          color: #121212; 
          line-height: 1.1; 
          letter-spacing: -0.03em; 
          pointer-events: none; 
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); 
          z-index: 2; 
          width: 100%; 
          text-align: center; 
        }
        
        .modern-service-card:hover .card-giant-text { 
          left: 100%; 
          transform: translate(0%,-50%); 
          opacity: 0; 
        }
        
        .modern-service-card:hover .card-top-header {
          opacity: 0;
        }

        .modern-service-card:hover .card-bottom-cta {
          background-color: white !important;
          border-color: white !important;
          transform: scale(1.1);
        }
        .modern-service-card:hover .cta-arrow-icon {
          color: #7c3aed !important;
          transform: rotate(45deg);
        }

        .card-hover-content { 
          opacity: 0; 
          transform: translateY(30px) scale(0.95); 
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 0.8rem; 
          z-index: 5; 
          padding: 0 10%; 
          text-align: center; 
        }
        .modern-service-card:hover .card-hover-content { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s; 
        }

        .blob-icon-wrapper { 
          width: 80px; 
          height: 80px; 
          background-color: #ffcc00; 
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          animation: morph-blob 8s ease-in-out infinite alternate; 
          box-shadow: 0 8px 25px rgba(0,0,0,0.15); 
          margin-bottom: 0.5rem;
        }
        @keyframes morph-blob { 
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 
          33% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 
          66% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; } 
          100% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } 
        }
        .card-hover-desc { 
          color: #ffffff; 
          font-size: clamp(0.75rem, 1.2vw, 0.88rem); 
          font-weight: 500; 
          line-height: 1.5; 
          margin: 0; 
          opacity: 0.9;
        }

        /* --- MOBILE OVERRIDES --- */
        @media (max-width: 768px) {
          /* Target the Link wrapper (direct flex child) for sizing */
          .services-grid-new > a {
            flex: 0 0 80% !important;
            scroll-snap-align: center !important;
            max-width: 80vw !important;
            height: 200px !important;
            display: block !important;
          }
          .modern-service-card {
            min-height: 200px !important;
            height: 100% !important;
            border-radius: 16px !important;
            background: #ebeae4 !important;
            border: 1px solid rgba(0, 0, 0, 0.04) !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.03) !important;
          }
          .modern-service-card:hover {
            transform: none !important;
            background: #ebeae4 !important;
            box-shadow: 0 4px 16px rgba(0,0,0,0.03) !important;
          }
          .card-top-header {
            top: 1.2rem !important;
            left: 1.5rem !important;
            right: 1.5rem !important;
          }
          .modern-service-card:hover .card-top-header {
            opacity: 1 !important;
          }
          .card-giant-text {
            font-size: 1.3rem !important;
            text-align: left !important;
            left: 1.5rem !important;
            transform: translate(0, -50%) !important;
            width: auto !important;
          }
          .modern-service-card:hover .card-giant-text {
            left: 1.5rem !important;
            transform: translate(0, -50%) !important;
            opacity: 1 !important;
          }
          .card-bottom-cta {
            bottom: 1.2rem !important;
            right: 1.5rem !important;
            width: 34px !important;
            height: 34px !important;
          }
          .card-bottom-cta svg {
            width: 14px !important;
            height: 14px !important;
          }
          .modern-service-card:hover .card-bottom-cta {
            background-color: transparent !important;
            border-color: rgba(0,0,0,0.08) !important;
            transform: none !important;
          }
          .modern-service-card:hover .cta-arrow-icon {
            color: rgba(0,0,0,0.5) !important;
            transform: none !important;
          }
          .card-hover-content {
            display: none !important;
          }
        }

      `}</style>
    </>
  );
};

export default Services;
