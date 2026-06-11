import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';
import aiImg from '../assets/Expert-in/ai-png.png';
import uiImg from '../assets/Expert-in/ui-png.png';
import webdevImg from '../assets/Expert-in/webdev-png.png';
import ecommerceImg from '../assets/Expert-in/ecommerce-png.png';
import animationImg from '../assets/Expert-in/animations-pngg.png';

const ArrowDownRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 7L17 17M17 17V7M17 17H7" stroke="rgba(167,139,250,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StatItem = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
  >
    <div style={{ 
      width: 44, height: 44, borderRadius: 12, 
      background: 'rgba(167,139,250,0.08)', 
      border: '1px solid rgba(167,139,250,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', 
      color: '#a78bfa', flexShrink: 0 
    }}>
      <Icon size={18} />
    </div>
    <div>
      <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'white', lineHeight: 1, letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.15rem' }}>{label}</div>
    </div>
  </motion.div>
);

const ExpertiseCard = ({ imgSrc, title, description }) => (
  <motion.div
    whileHover={{ y: -8, borderColor: 'rgba(167,139,250,0.25)' }}
    style={{
      minWidth: '290px',
      maxWidth: '290px',
      height: '380px',
      flex: '0 0 auto',
      backgroundColor: 'rgba(167,139,250,0.03)',
      borderRadius: '20px',
      padding: '2rem 1.25rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '1px solid rgba(167,139,250,0.08)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      scrollSnapAlign: 'start',
      backdropFilter: 'blur(10px)',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <img 
        src={imgSrc?.src || imgSrc} 
        alt={title} 
        loading="lazy"
        decoding="async"
        style={{ maxWidth: '90%', maxHeight: '170px', objectFit: 'contain', filter: 'brightness(0) invert(1) opacity(0.25)' }} 
      />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1.25rem' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', margin: 0, fontFamily: 'Inter, sans-serif' }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', lineHeight: 1.55, margin: 0, fontFamily: 'Inter, sans-serif' }}>{description}</p>
    </div>
  </motion.div>
);

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const pad = isMobile ? '2rem' : '6%';

  const expertiseData = [
    { imgSrc: aiImg, title: 'AI Dev', description: 'We integrate cutting-edge artificial intelligence into your marketing stack to automate workflows and drive intelligent decision-making.' },
    { imgSrc: uiImg, title: 'UI Design', description: 'We push the boundaries of innovation through creative UI designs, enabling you to distinguish yourself from competitors with stunning visuals.' },
    { imgSrc: webdevImg, title: 'Web Development', description: 'Our proficient team of developers possesses a deep understanding of the latest frontend technologies to build lightning-fast web experiences.' },
    { imgSrc: ecommerceImg, title: 'Ecommerce', description: 'We are deeply passionate about designing custom-tailored solutions for our e-commerce clients to maximize conversions and sales.' },
    { imgSrc: animationImg, title: 'Animation', description: 'We offer top-tier animations in various forms, such as frame-by-frame, stop motion, and fluid motion graphics to captivate your audience.' }
  ];

  return (
    <section style={{ backgroundColor: '#000', overflow: 'hidden', position: 'relative' }}>
      {/* Subtle ambient glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(167,139,250,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

      <div style={{ padding: isMobile ? '4rem 5%' : '7rem 5%', position: 'relative', zIndex: 2 }}>

        {/* ── GREY BOX: About Us + Expert At heading ── */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          backgroundColor: '#0a0a0f',
          border: '1px solid rgba(167,139,250,0.08)',
          borderRadius: '24px',
          overflow: 'visible',
          boxShadow: '0 0 80px rgba(167,139,250,0.03), inset 0 0 120px rgba(167,139,250,0.01)'
        }}>

          {/* ── ABOUT US ── */}
          <div style={{ padding: isMobile ? `3rem ${pad} 4rem` : `6rem ${pad} 5rem` }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '3rem' : '5rem',
              alignItems: 'flex-start'
            }}>
              {/* Left */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <ArrowDownRightIcon />
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: 'clamp(1.6rem, 4vw, 3.5rem)', 
                    fontWeight: 400, 
                    background: 'linear-gradient(to right, #a78bfa, #6d5ba3, #3a3a4a)', 
                    WebkitBackgroundClip: 'text', 
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                    color: 'transparent',
                    display: 'inline-block',
                    letterSpacing: '0.06em', 
                    lineHeight: 1 
                  }}>
                    A LITTLE
                  </span>
                </div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(3rem, 7vw, 6.5rem)', fontWeight: 400, color: 'white', lineHeight: 0.92, margin: 0 }}>
                  ABOUT US
                </h2>

                {/* Stats Row */}
                {!isMobile && (
                  <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <StatItem icon={Users} value="50+" label="Clients" delay={0.1} />
                    <StatItem icon={Award} value="120+" label="Projects" delay={0.2} />
                    <StatItem icon={Briefcase} value="3+" label="Years" delay={0.3} />
                  </div>
                )}
              </motion.div>

              {/* Right */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {!isMobile && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ArrowUpRight size={22} color="#a78bfa" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, margin: 0, fontFamily: 'Inter, sans-serif' }}>
                  Headquartered in India, our team is dedicated to driving conversions and delivering tangible value to our clients. We are fueled by our passion for creating distinctive digital experiences that set you apart from the sea of ordinary brands in today's market.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.85, margin: 0, fontFamily: 'Inter, sans-serif' }}>
                  We take the time to deeply understand your business, allowing us to execute on your mission most effectively and craft strategies that resonate with your audience.
                </p>
                <Link href="/#contact" style={{ textDecoration: 'none' }} scroll={false}>
                  <motion.div whileHover={{ x: 8, gap: '1.2rem' }} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '0.5rem', cursor: 'pointer' }}>
                    <span style={{ color: '#a78bfa', fontSize: '0.9rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em' }}>Read more</span>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(167,139,250,0.3)', background: 'rgba(167,139,250,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                      <ArrowUpRight size={15} color="#a78bfa" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Stats Row */}
            {isMobile && (
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <StatItem icon={Users} value="50+" label="Clients" delay={0.1} />
                <StatItem icon={Award} value="120+" label="Projects" delay={0.2} />
                <StatItem icon={Briefcase} value="3+" label="Years" delay={0.3} />
              </div>
            )}
          </div>

          {/* ── WE ARE EXPERT AT heading ── */}
          <div style={{ padding: isMobile ? `3rem ${pad} 8rem` : `3rem ${pad} 45rem` }}>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: '2rem' }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <ArrowDownRightIcon />
                  <span style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: isMobile ? 'clamp(1.6rem, 5vw, 3.5rem)' : 'clamp(1.2rem, 3.5vw, 2.8rem)', 
                    fontWeight: 400, 
                    background: 'linear-gradient(to right, #a78bfa, #6d5ba3, #3a3a4a)', 
                    WebkitBackgroundClip: 'text', 
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                    color: 'transparent',
                    display: 'inline-block',
                    letterSpacing: '0.06em', 
                    lineHeight: 1 
                  }}>
                    WE ARE
                  </span>
                </div>
                <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: isMobile ? 'clamp(3.5rem, 12vw, 6.5rem)' : 'clamp(2.5rem, 5.5vw, 5rem)', fontWeight: 400, color: 'white', lineHeight: 0.92, margin: 0 }}>
                  EXPERT AT
                </h2>
              </motion.div>

              <Link href="/#contact" style={{ textDecoration: 'none' }} scroll={false}>
                <motion.button whileHover={{ scale: 1.04, backgroundColor: 'rgba(167,139,250,0.1)' }} whileTap={{ scale: 0.96 }} style={{ padding: isMobile ? '1.1rem 3.5rem' : '0.9rem 2.8rem', borderRadius: '100px', backgroundColor: 'transparent', border: '1px solid rgba(167,139,250,0.3)', color: '#a78bfa', fontSize: isMobile ? '1rem' : '0.9rem', cursor: 'pointer', fontWeight: 600, fontFamily: 'Inter, sans-serif', whiteSpace: 'nowrap', letterSpacing: '0.02em', transition: 'all 0.3s ease' }}>
                  Let's work!
                </motion.button>
              </Link>
            </div>
          </div>

        {/* ── Grey box ENDS here ── */}
        </div>

      </div>

      {/* ── CARDS: Infinite looping marquee ── */}
      <div style={{
        overflow: 'hidden',
        paddingBottom: '6rem',
        marginTop: isMobile ? '-2rem' : '-45rem',
        position: 'relative',
        zIndex: 2,
      }}>
        <div className="marquee-track" style={{
          display: 'flex',
          gap: '1.5rem',
          width: 'fit-content',
          animation: 'marqueeScroll 25s linear infinite',
        }}>
          {/* Duplicate cards for seamless loop */}
          {[...expertiseData, ...expertiseData].map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>
      </div>


      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
