import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Award, Briefcase } from 'lucide-react';
import Link from 'next/link';


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


const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const pad = isMobile ? '2rem' : '6%';



  return (
    <section style={{ backgroundColor: '#000', overflow: 'hidden', position: 'relative' }}>
      {/* Subtle ambient glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(167,139,250,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>

      <div style={{ padding: isMobile ? '4rem 5%' : '7rem 5%', position: 'relative', zIndex: 2 }}>

        {/* ── ABOUT US SECTION (FROM USER REFERENCE) ── */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          paddingBottom: '4rem'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? '4rem' : '8rem', alignItems: 'flex-start' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
                <ArrowDownRightIcon />
                <span style={{ color: '#a78bfa', fontSize: '1.5rem', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>A LITTLE</span>
              </div>
              <h2 style={{ fontSize: isMobile ? '4rem' : 'clamp(5rem, 7vw, 7rem)', color: 'white', lineHeight: 1, fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400, margin: 0, marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
                ABOUT US
              </h2>
              
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.05)', marginBottom: '3rem' }}></div>

              {/* Stats Row */}
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <StatItem icon={Users} value="50+" label="CLIENTS" delay={0} />
                <StatItem icon={Award} value="120+" label="PROJECTS" delay={0.2} />
                <StatItem icon={Briefcase} value="3+" label="YEARS" delay={0.4} />
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingTop: isMobile ? '0' : '1rem' }}>
              {!isMobile && (
                <div style={{ position: 'absolute', top: '-1rem', right: '0', width: '44px', height: '44px', borderRadius: '12px', backgroundColor: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa' }}>
                  <ArrowUpRight size={20} />
                </div>
              )}
              
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem', fontFamily: 'Inter, sans-serif' }}>
                Headquartered in India, our team is dedicated to driving conversions and delivering tangible value to our clients. We are fueled by our passion for creating distinctive digital experiences that set you apart from the sea of ordinary brands in today's market.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '3rem', fontFamily: 'Inter, sans-serif' }}>
                We take the time to deeply understand your business, allowing us to execute on your mission most effectively and craft strategies that resonate with your audience.
              </p>

              <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', alignSelf: 'flex-start' }}>
                <span style={{ color: '#a78bfa', fontSize: '0.95rem', fontWeight: 600 }}>Read more</span>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(167,139,250,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', transition: 'all 0.3s ease' }}>
                  <ArrowUpRight size={14} />
                </div>
              </Link>
            </div>
          </div>
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
