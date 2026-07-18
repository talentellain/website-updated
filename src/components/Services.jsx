'use client';

import React, { useRef, useMemo } from 'react';
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

const ServiceCard = ({ s, index, scrollYProgress, total }) => {
  const IconComponent = iconMap[s.icon] || Zap;
  const targetPath = s.id === 'app-development' ? '/app-development' : `/services/${s.id}`;
  const tag = serviceTags[s.id] || 'SERVICES';
  const num = serviceNumbers[s.id] || `0${index + 1}`;
  
  const step = 1 / (total - 1);
  
  const { yInput, yOutput, scaleInput, scaleOutput, opacityInput, opacityOutput, rotateInput, rotateOutput } = useMemo(() => {
    const yIn = [], yOut = [], sIn = [], sOut = [], oIn = [], oOut = [], rIn = [], rOut = [];
    for (let i = 0; i < total; i++) {
      yIn.push(i * step);
      sIn.push(i * step);
      oIn.push(i * step);
      rIn.push(i * step);
      
      if (i < index) {
        // Waiting in stack (behind active)
        const depth = index - i;
        yOut.push(`${depth * 4}vh`);
        sOut.push(1 - depth * 0.04);
        oOut.push(1 - depth * 0.15);
        rOut.push("0deg");
      } else if (i === index) {
        // Active card (on top)
        yOut.push("0vh");
        sOut.push(1);
        oOut.push(1);
        rOut.push("0deg");
      } else {
        // Swung away (scrolled past)
        yOut.push("-80vh");
        sOut.push(1);
        oOut.push(0);
        rOut.push("-15deg");
      }
    }
    return {
      yInput: yIn, yOutput: yOut, 
      scaleInput: sIn, scaleOutput: sOut, 
      opacityInput: oIn, opacityOutput: oOut, 
      rotateInput: rIn, rotateOutput: rOut
    };
  }, [index, step, total]);

  const y = useTransform(scrollYProgress, yInput, yOutput);
  const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);
  const rotate = useTransform(scrollYProgress, rotateInput, rotateOutput);
  const opacity = useTransform(scrollYProgress, opacityInput, opacityOutput);

  return (
    <motion.div 
      className="modern-service-card" 
      style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        zIndex: total - index, // First card on top
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto',
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: '28px',
        transformOrigin: 'top left', // The "Nail"
        rotate,
        scale,
        opacity,
        y,
        willChange: 'transform, opacity'
      }}
    >
      <Link href={targetPath} style={{ textDecoration: 'none', display: 'flex', height: '100%', width: '100%', outline: 'none', position: 'relative', zIndex: 1 }} aria-label={`Learn about TalentElla's ${s.title} services`}>
        
        {/* Massive Watermark Number */}
        <div className="card-watermark">{num}</div>

        {/* Left Section: Number, Icon, Title */}
        <div className="card-left-section">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', marginBottom: '2rem', position: 'relative', zIndex: 2 }}>
            <span style={{ fontFamily: 'monospace', fontSize: '1rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em' }}>{num}</span>
            <div className="blob-icon-wrapper-small">
              <IconComponent size={28} color="#AC58E9" strokeWidth={2} />
            </div>
          </div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="card-tag">{tag}</span>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 850, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0, textTransform: 'uppercase' }}>
              {s.title}
            </h3>
          </div>
        </div>

        {/* Right Section: Description, Features & CTA */}
        <div className="card-right-section">
          <p className="card-desc-text">
            {s.description}
          </p>

          {s.subItems && s.subItems.length > 0 && (
            <div className="card-features-list">
              {s.subItems.slice(0, 3).map((item, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-dot" />
                  <span className="feature-text">{item.title}</span>
                </div>
              ))}
            </div>
          )}
          
          <div className="card-bottom-cta-wrap">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className="explore-text" style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'white', textTransform: 'uppercase' }}>Explore Service</span>
            </div>
            <div className="card-arrow-btn">
              <ArrowUpRight size={20} className="cta-arrow-icon" style={{ color: 'rgba(255,255,255,1)', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const outerRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  
  // Track scroll progress of the entire tall container
  const { scrollYProgress } = useScroll({ 
    target: outerRef, 
    offset: ['start start', 'end end'] 
  });

  return (
    <>
      <div id="services" style={{ backgroundColor: '#000000', zIndex: 20, position: 'relative' }}>
        {/* Tall container to allow scrolling. 4 cards = 400vh scroll distance */}
        <div ref={outerRef} style={{ height: isMobile ? 'auto' : '400vh', width: '100%', position: 'relative' }}>
          
          <div 
            className="services-sticky-wrapper"
            style={{ 
              position: isMobile ? 'relative' : 'sticky', 
              top: isMobile ? '0' : '0vh', 
              height: isMobile ? 'auto' : '100vh',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <div className="services-container-inner" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
              <div className="services-header" style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto clamp(2.5rem, 6vh, 4.5rem) auto', padding: '0 5%' }}>
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 'clamp(1.6rem, 6vw, 4rem)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff' }}>
                  OUR SERVICES
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'clamp(0.75rem, 2vw, 1rem)', lineHeight: '1.4', fontWeight: 500, marginTop: '0.5rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
                  Full-service 360° marketing solutions — brand development, social media marketing, and integrated digital strategies.
                </motion.p>
              </div>
              
              {/* The Pinned Container */}
              <div className="services-pinned-container" style={{ width: '100%', padding: '0 5%', position: 'relative', height: '400px', maxWidth: '1200px', margin: '0 auto' }}>
                {servicesData.map((s, index) => (
                  <ServiceCard 
                    key={s.id} 
                    s={s} 
                    index={index} 
                    scrollYProgress={isMobile ? null : scrollYProgress} 
                    total={servicesData.length} 
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        :root { --mobile-rad: 0px; }
        
        .services-container-inner { padding: 12vh 0 0 0; }
        @media (max-width: 768px) { .services-container-inner { padding: 3vh 0 1vh !important; } }

        /* The Card Design */
        .modern-service-card { 
          background: linear-gradient(145deg, #111116 0%, #0a0a0d 100%);
          min-height: 400px; 
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.6); 
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); 
          position: relative;
        }
        
        .modern-service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: inherit;
          background: radial-gradient(600px circle at 0% 0%, rgba(172, 88, 233, 0.08), transparent 40%);
          z-index: 0;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modern-service-card:hover { 
          border-color: rgba(172, 88, 233, 0.3);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 40px rgba(172, 88, 233, 0.1);
        }

        .modern-service-card:hover::before {
          background: radial-gradient(800px circle at 100% 100%, rgba(172, 88, 233, 0.12), transparent 40%);
        }
        
        .modern-service-card > a {
          display: flex !important;
          flex-direction: row !important;
        }

        .card-watermark {
          position: absolute;
          bottom: -4rem;
          right: -2rem;
          font-size: 16rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.015);
          line-height: 1;
          z-index: 0;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: -0.05em;
        }

        .modern-service-card:hover .card-watermark {
          color: rgba(172, 88, 233, 0.04);
          transform: scale(1.02) translate(-10px, -10px);
        }

        .card-left-section {
          flex: 1;
          padding: 3rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(255,255,255,0.03);
          position: relative;
          z-index: 2;
        }

        .card-right-section {
          flex: 1;
          padding: 3rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(255,255,255,0.005);
          position: relative;
          z-index: 2;
        }

        .card-tag {
          display: inline-block;
          padding: 0.4rem 1.2rem;
          background: rgba(172, 88, 233, 0.08);
          border: 1px solid rgba(172, 88, 233, 0.15);
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 800;
          color: #AC58E9;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .blob-icon-wrapper-small { 
          width: 50px; 
          height: 50px; 
          background: linear-gradient(135deg, rgba(172,88,233,0.15) 0%, rgba(172,88,233,0.02) 100%);
          border: 1px solid rgba(172, 88, 233, 0.25);
          box-shadow: inset 0 0 20px rgba(172,88,233,0.05), 0 0 15px rgba(172,88,233,0.1);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          animation: morph-blob 8s ease-in-out infinite alternate; 
          backdrop-filter: blur(5px);
        }

        .card-desc-text {
          color: rgba(255,255,255,0.65);
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.7;
          font-weight: 400;
          margin: 0;
          max-width: 90%;
        }

        .card-features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin: 1.5rem 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }
        
        .modern-service-card:hover .feature-item {
          opacity: 1;
        }

        .feature-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(172, 88, 233, 0.3);
          border: 1px solid #AC58E9;
          box-shadow: 0 0 10px rgba(172, 88, 233, 0.4);
        }

        .feature-text {
          color: rgba(255,255,255,0.9);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.03em;
        }

        .card-bottom-cta-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .explore-text {
          transition: all 0.4s ease;
        }

        .modern-service-card:hover .explore-text {
          color: #AC58E9 !important;
          letter-spacing: 0.15em !important;
        }

        .card-arrow-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modern-service-card:hover .card-arrow-btn {
          transform: scale(1.1);
          background: #AC58E9;
          border-color: #AC58E9;
          box-shadow: 0 0 20px rgba(172, 88, 233, 0.3);
        }

        .modern-service-card:hover .cta-arrow-icon {
          color: #ffffff !important;
          transform: translate(2px, -2px) rotate(45deg);
        }

        @keyframes morph-blob { 
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 
          33% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 
          66% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; } 
          100% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } 
        }

        /* --- MOBILE OVERRIDES --- */
        @media (max-width: 900px) {
          .modern-service-card > a {
            flex-direction: column !important;
          }
          .card-left-section {
            padding: 2rem;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .card-right-section {
            padding: 2rem;
            gap: 2rem;
          }
          .modern-service-card {
            min-height: auto;
          }
        }
        
        @media (max-width: 768px) {
          .services-stacked-container {
            padding-bottom: 5vh !important;
          }
          .modern-service-card {
            margin-bottom: 20px !important;
          }
        }


      `}</style>
    </>
  );
};

export default Services;
