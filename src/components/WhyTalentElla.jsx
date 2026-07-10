'use client';

import React from 'react';
import { ArrowUpRight, Users, Award, Briefcase, Target, Zap, Shield, BarChart, ArrowRight } from 'lucide-react';
 
import { motion } from 'framer-motion';

const formulas = [
  { label: 'CREATIVITY', color: '#AC58E9' },
  { label: 'PRECISION', color: '#fff' },
  { label: 'RESULTS', color: '#AC58E9' }
];

const weBring = [
  { 
    title: 'TAILORED STRATEGIES', 
    icon: Target,
    why: 'We craft marketing solutions that fit your business, not the other way around.',
    experience: '7+ years',
    approach: 'We dive deep into your market to understand your audience.'
  },
  { 
    title: 'CREATIVE BRILLIANCE', 
    icon: Zap,
    why: 'We push boundaries and challenge the norm to keep your brand fresh and exciting.',
    experience: 'Over 150 projects',
    approach: 'We blend data, trends, and a touch of magic to develop ideas that work.'
  },
  { 
    title: 'END-TO-END SERVICE', 
    icon: Shield,
    why: 'From concept to execution, we\'re with you every step of the way, ensuring every detail shines.',
    experience: 'Over 5,500 hours',
    approach: 'We are making sure all parts of your strategy align for maximum impact.'
  },
  { 
    title: 'RESULTS YOU CAN SEE', 
    icon: BarChart,
    why: 'We deliver results you can measure. Transparency and ROI are at the core of what we do.',
    experience: 'More than 250 workers',
    approach: 'Continuous improvement through data analysis and optimization.'
  }
];

const engagementLevels = [
  { pct: '10%', label: 'IDEATION' },
  { pct: '25%', label: 'DEVELOPMENT' },
  { pct: '50%', label: 'TESTING' },
  { pct: '75%', label: 'LAUNCH' },
  { pct: '100%', label: 'RESULTS' }
];

const WhyTalentElla = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1024;

  return (
    <div id="why-talentella" style={{ backgroundColor: '#000', position: 'relative', zIndex: 50 }}>
      <section
        style={{ 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          padding: isMobile ? '80px 0' : '120px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ width: '100%', height: '100%', overflowY: isMobile ? 'visible' : 'auto', padding: isMobile ? '0 5%' : '10vh 5%' }}>
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
            
            {/* Top Section: Our Winning Formula */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr', gap: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '4rem' : '6rem', alignItems: 'center', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>[our winning formula]</span>
                <h2 style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', fontWeight: 900, lineHeight: 0.8, color: 'white', letterSpacing: '-0.05em', margin: 0, fontFamily: 'Outfit, sans-serif' }}>360°</h2>
                <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.6)', maxWidth: '400px', fontSize: '1.1rem', lineHeight: 1.6 }}>A comprehensive, full-circle approach that transforms every aspect of your brand into a measurable success.</p>
              </div>
              <div style={{ display: 'grid', gap: '0.8rem', position: 'relative', maxWidth: isMobile ? '100%' : '350px' }}>
                {formulas.map((f, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(172, 88, 233, 0.5)', boxShadow: '0 0 20px rgba(172,88,233,0.15)', backgroundColor: 'rgba(172, 88, 233, 0.1)' }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    style={{ 
                      padding: '1.2rem 2rem', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      fontWeight: 800,
                      letterSpacing: '0.3em',
                      fontSize: '0.8rem',
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      cursor: 'pointer'
                    }}
                  >
                    {f.label}
                  </motion.div>
                ))}

                {/* The L-Shaped Arrow (Desktop only) */}
                {!isMobile && (
                  <svg 
                    style={{ position: 'absolute', top: '40%', left: '100%', width: '250px', height: '200px', overflow: 'visible', pointerEvents: 'none', marginLeft: '1rem' }}
                    viewBox="0 0 250 200"
                  >
                    <motion.path 
                      d="M 0 50 L 180 50 L 180 220" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.2)" 
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    <motion.path 
                      d="M 175 215 L 180 225 L 185 215" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.2)" 
                      strokeWidth="2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Middle Section: Editorial Table */}
            <div style={{ marginBottom: isMobile ? '4rem' : '8rem', overflowX: isMobile ? 'auto' : 'visible' }}>
              <div style={{ minWidth: isMobile ? '100%' : 'auto' }}>
                {!isMobile && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 2fr', gap: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>/WE BRING</span>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>/WHY</span>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>/EXPERIENCE</span>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>/APPROACH</span>
                  </div>
                )}
                {weBring.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                    className="group"
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: isMobile ? '1fr' : '1.5fr 2fr 1fr 2fr', 
                      gap: isMobile ? '1rem' : '2rem', 
                      padding: isMobile ? '2rem 1rem' : '2rem 1.5rem', 
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      position: 'relative',
                      cursor: 'pointer',
                      margin: isMobile ? '0' : '0 -1.5rem',
                      borderRadius: '12px'
                    }}
                  >
                    {/* Hover Background */}
                    <motion.div 
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                      style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(172,88,233,0.05) 0%, transparent 100%)', borderRadius: '12px', pointerEvents: 'none', zIndex: 0 }}
                    />

                    <motion.div variants={{ hover: { x: 10 } }} transition={{ duration: 0.3 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', zIndex: 1 }}>
                      {isMobile && <span style={{ fontSize: '0.5rem', color: 'rgba(172, 88, 233,0.6)', letterSpacing: '0.1em' }}>/WE BRING</span>}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <div style={{ color: '#AC58E9', display: 'flex', alignItems: 'center' }}><item.icon size={20} /></div>
                        <span style={{ fontWeight: 800, color: 'white', fontSize: isMobile ? '0.9rem' : '0.8rem' }}>{item.title}</span>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={{ hover: { x: 10 } }} transition={{ duration: 0.3 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 1 }}>
                      {isMobile && <span style={{ fontSize: '0.5rem', color: 'rgba(172, 88, 233,0.6)', letterSpacing: '0.1em' }}>/WHY</span>}
                      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '0.85rem' : '0.8rem', lineHeight: 1.5 }}>{item.why}</span>
                    </motion.div>

                    <motion.div variants={{ hover: { x: 10 } }} transition={{ duration: 0.3 }} style={{ display: isMobile ? 'grid' : 'flex', gridTemplateColumns: '1fr 1fr', gap: '1rem', zIndex: 1 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {isMobile && <span style={{ fontSize: '0.5rem', color: 'rgba(172, 88, 233,0.6)', letterSpacing: '0.1em' }}>/EXPERIENCE</span>}
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: isMobile ? '0.85rem' : '0.8rem' }}>{item.experience}</span>
                      </div>
                      {isMobile && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          <span style={{ fontSize: '0.5rem', color: 'rgba(172, 88, 233,0.6)', letterSpacing: '0.1em' }}>/APPROACH</span>
                          <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>{item.approach}</span>
                        </div>
                      )}
                    </motion.div>

                    {!isMobile && (
                      <motion.span variants={{ hover: { x: 10 } }} transition={{ duration: 0.3 }} style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', lineHeight: 1.5, zIndex: 1 }}>{item.approach}</motion.span>
                    )}
                    
                    {/* Hover Arrow Reveal (Desktop only) */}
                    {!isMobile && (
                      <motion.div 
                        variants={{ hover: { opacity: 1, x: 0 } }}
                        initial={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{ 
                          position: 'absolute', 
                          right: '2rem', 
                          top: '50%', 
                          transform: 'translateY(-50%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#AC58E9',
                          zIndex: 10
                        }}
                      >
                        <ArrowRight size={24} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section: Engagement Levels */}
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '4rem', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem', display: 'block' }}>[engagement levels]</span>
                <div style={{ position: 'relative', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 10px' }}>
                  {/* Timeline track */}
                  <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '12px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', transform: 'translateY(-50%)' }} />
                  {engagementLevels.map((level, i) => (
                    <motion.div 
                      key={i} 
                      whileHover="hover"
                      style={{ position: 'relative', zIndex: 2, textAlign: 'center', cursor: 'pointer' }}
                    >
                      <motion.div variants={{ hover: { scale: 1.1, color: '#AC58E9' } }} transition={{ duration: 0.2 }} style={{ fontWeight: 900, color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem' }}>{level.pct}</motion.div>
                      
                      {/* Node with Pulse on Hover */}
                      <div style={{ position: 'relative', width: '16px', height: '16px', margin: '0 auto' }}>
                        <motion.div variants={{ hover: { scale: 1.5, opacity: 0 } }} transition={{ duration: 0.6, repeat: Infinity }} style={{ position: 'absolute', inset: 0, borderRadius: '50%', backgroundColor: level.pct === '100%' ? '#fff' : '#AC58E9' }} />
                        <motion.div variants={{ hover: { scale: 1.2, backgroundColor: '#AC58E9', borderColor: '#AC58E9' } }} transition={{ duration: 0.2 }} style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', backgroundColor: level.pct === '100%' ? '#fff' : '#333', border: level.pct === '100%' ? 'none' : '4px solid #1a1a1a', zIndex: 2 }} />
                      </div>

                      <motion.div variants={{ hover: { color: 'rgba(255,255,255,1)' } }} transition={{ duration: 0.2 }} style={{ fontSize: '0.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', marginTop: '1rem' }}>{level.label}</motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: isMobile ? 'left' : 'right', alignSelf: 'flex-end' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'white', fontWeight: 700, lineHeight: 1.2, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  WE DON'T JUST MEET <br /> MILESTONES; WE ELEVATE THEM <br /> INTO LASTING ACHIEVEMENTS.
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, maxWidth: isMobile ? '100%' : '500px', marginLeft: 'auto' }}>
                  Our team thrives on collaboration, creativity, and precision. At every stage—whether ideation, development, or launch—we align expertise with client goals to ensure measurable success. By combining innovative thinking with meticulous execution, we transform concepts into impactful results that exceed expectations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyTalentElla;
