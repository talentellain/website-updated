'use client';

import React, { useState, useEffect } from 'react';
 
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Smartphone, Monitor, Infinity as InfinityIcon, ShieldCheck, Zap, Users, Code, Share2, Palette, Settings } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import SEO from '../components/SEO';
import InteractiveHero from '../components/InteractiveHero';
import { servicesData } from '../data/servicesData';


const plans = [
  {
    name: 'Starter App',
    subtitle: 'Perfect for startups and small businesses.',
    price: '₹29,999',
    period: 'One-Time',
    delivery: 'Perfect for startups',
    tag: null,
    features: [
      'Android App',
      'Modern UI Design',
      'User Registration & Login',
      'Up to 8 Core Screens',
      'Database integration',
      'Basic Admin Panel',
      'Push Notifications',
      'Play Store Ready Build',
      'Basic Analytics',
      '1 Month Support',
    ],
  },
  {
    name: 'Growth App',
    subtitle: 'Perfect for growing businesses.',
    price: '₹39,999',
    period: 'One-Time',
    delivery: 'Perfect for growing businesses',
    tag: 'Most Popular',
    features: [
      'Everything in Starter',
      'Android + iOS App',
      'Custom UI/UX Design',
      'Up to 15 Core Screens',
      'User Profiles',
      'Advanced Admin Dashboard',
      'Payment Gateway Integration',
      'API Integrations',
      'Push Notifications',
      'Analytics Dashboard',
      'Play Store & App Store Deployment',
      '3 Months Support',
    ],
  },
  {
    name: 'Premium App',
    subtitle: 'Complete business app solution.',
    price: '₹49,999',
    period: 'One-Time',
    delivery: 'Complete business app solution',
    tag: null,
    features: [
      'Everything in Growth',
      'Premium UI/UX Design',
      'Unlimited Screens',
      'Advanced Admin Dashboard',
      'Multiple API Integrations',
      'Advanced Analytics',
      'Role-Based Access System',
      'Third-Party Integrations',
      'Performance Optimization',
      'Enhanced Security',
      'Source Code Ownership',
      'Priority Support',
      '6 Months Support',
    ],
  },
];

const perks = [
  { icon: Smartphone, label: 'Cross-Platform', desc: 'Reach users on both Android & iOS effortlessly.' },
  { icon: Zap, label: 'Lightning Fast', desc: 'Optimized performance and smooth animations.' },
  { icon: ShieldCheck, label: 'Secure by Design', desc: 'Enterprise-grade security and data protection.' },
  { icon: Monitor, label: 'Modern Tech Stack', desc: 'Built with React Native, Flutter, and Node.js.' },
  { icon: Users, label: 'User-Centric UI/UX', desc: 'Intuitive interfaces that your users will love.' },
  { icon: InfinityIcon, label: 'Ongoing Support', desc: 'Continuous bug fixes & reliable maintenance.' },
];

const faqs = [
  { q: 'Which platform will my app be built on?', a: 'We use React Native and Flutter for cross-platform apps to maximise reach while minimising cost. Native Android/iOS is available for Premium plans.' },
  { q: 'What if I need more screens or features?', a: 'The MVP plan covers up to 5 screens. Additional screens can be added at ₹3,000/screen. For custom features, we recommend the Business or Premium plan.' },
  { q: 'How does the bug-fix support work?', a: 'MVP includes 1 month, Business 3 months, and Premium 6 months of post-launch support. We fix any bugs reported during that period at no extra cost.' },
  { q: 'Can I upgrade my plan later?', a: 'Yes, you can upgrade anytime. We will adjust the scope and timeline accordingly, and you only pay the difference.' },
  { q: 'Do you provide the source code?', a: 'Yes, upon project completion and final payment, we hand over the complete source code, assets, and documentation. You own 100% of the intellectual property.' },
  { q: 'How do you handle app store submissions?', a: 'We handle the entire submission process for both Google Play Store and Apple App Store, including screenshots, descriptions, and compliance requirements.' },
  { q: 'What technologies do you use for the backend?', a: 'We primarily use Firebase and Node.js for backend services. For enterprise-grade apps, we offer custom backend solutions with AWS or Google Cloud infrastructure.' },
];

const TechMarquee = () => {
  const techStack = ['REACT NATIVE', 'FLUTTER', 'SWIFT', 'KOTLIN', 'FIREBASE', 'NODE.JS', 'AWS', 'GRAPHQL', 'MONGODB'];
  return (
    <div style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', backgroundColor: '#020202', overflow: 'hidden', display: 'flex', position: 'relative' }}>
      <style>
        {`
          @keyframes scrollMarquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            white-space: nowrap;
            align-items: center;
            width: max-content;
            animation: scrollMarquee 30s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            {techStack.map((tech, j) => (
              <div key={j} style={{ display: 'flex', alignItems: 'center', cursor: 'default' }}>
                <span 
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em', transition: 'all 0.3s ease' }}
                  onMouseOver={(e) => { e.target.style.color = '#fff'; e.target.style.WebkitTextStroke = '0px'; e.target.style.textShadow = '0 0 20px rgba(172, 88, 233, 0.5)'; }} 
                  onMouseOut={(e) => { e.target.style.color = 'transparent'; e.target.style.WebkitTextStroke = '1.5px rgba(255,255,255,0.3)'; e.target.style.textShadow = 'none'; }}
                >
                  {tech}
                </span>
                <span style={{ color: '#AC58E9', margin: '0 3vw', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900 }}>*</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ExpertInsightSection = ({ isMobile }) => {
  return (
    <section style={{ padding: isMobile ? '60px 5%' : '100px 8%', backgroundColor: '#050508', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(172, 88, 233,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#AC58E9', boxShadow: '0 0 15px #AC58E9' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#AC58E9', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Expert Perspective</span>
          </div>
          <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
            <h2 itemProp="text" style={{ color: 'white', fontSize: 'clamp(1.3rem, 3.5vw, 2.2rem)', lineHeight: 1.5, fontWeight: 500, margin: 0, fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>"Building an app isn't just about writing code; it's about crafting an intuitive experience that solves real problems and scales seamlessly with your business. We prioritize human-centric design, robust architecture, and continuous innovation to ensure your product thrives in a highly competitive digital landscape."</h2>
          </div>
          <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>TalentElla Core Insight</span>
            <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const iconMap = {
  Code,
  Share2,
  Palette,
  Settings,
  Zap,
  Smartphone
};

const ServiceCard = ({ s }) => {
  const IconComponent = iconMap[s.icon] || Zap;
  const displayTitle = s.title.toUpperCase().split(' ').map((word, idx) => (
    <React.Fragment key={idx}>{word}<br /></React.Fragment>
  ));
  const targetPath = s.id === 'app-development' ? '/app-development' : `/services/${s.id}`;
  return (
    <Link href={targetPath} style={{ textDecoration: 'none', display: 'block', height: '100%', outline: 'none' }}>
      <div className="modern-service-card" style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', borderRadius: '24px' }}>
        <div className="card-giant-text">{displayTitle}</div>
        <div className="card-hover-content">
          <div className="blob-icon-wrapper"><IconComponent size={56} color="#000000" strokeWidth={2.5} /></div>
          <p className="card-hover-desc">{s.description}</p>
        </div>
      </div>
    </Link>
  );
};

const RelatedServices = ({ currentId, isMobile }) => {
  const related = servicesData.filter(s => s.id !== currentId);
  return (
    <section style={{ padding: isMobile ? '80px 5% 20px' : '140px 5% 20px', backgroundColor: '#000000', color: '#ffffff', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', marginBottom: '1rem' }}>EXPLORE MORE SERVICES</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginBottom: '4rem', fontWeight: 500 }}>Discover more ways we can help you grow your brand.</p>
        <div className="services-grid-new" style={{ width: '100%' }}>
          {related.map(s => <ServiceCard key={s.id} s={s} />)}
        </div>
      </div>
    </section>
  );
};

const AppPage = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'Outfit, sans-serif', minHeight: '100vh' }}>
      <SEO pageTitle="App Development | TalentElla" description="Custom mobile app development from India's 360° marketing agency. MVP to enterprise apps." />

      <InteractiveHero 
        bgText="APPS"
        tagline1="TALENTELLA"
        tagline2="APP DEVELOPMENT"
        heading="BUILD APP"
        cursiveOverlay="Ideas"
        description="FROM STARTUP MVP TO FULL-FEATURED PRODUCT — WE DESIGN AND BUILD APPS THAT USERS LOVE.\nWE SPECIALIZE IN NATIVE AND CROSS-PLATFORM APPLICATIONS."
      />

      <TechMarquee />
      <ExpertInsightSection isMobile={isMobile} />

      <section style={{ padding: isMobile ? '80px 5%' : '120px 5%', backgroundColor: '#020202', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ 
            display: isMobile ? 'flex' : 'grid', 
            gridTemplateColumns: isMobile ? 'none' : 'repeat(3, 1fr)', 
            gap: isMobile ? '1rem' : '1.5rem',
            overflowX: isMobile ? 'auto' : 'visible',
            scrollSnapType: isMobile ? 'x mandatory' : 'none',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: isMobile ? '10px' : '0'
          }} className="no-scrollbar">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={isMobile ? {} : { y: -5, backgroundColor: 'rgba(172, 88, 233, 0.08)', borderColor: 'rgba(172, 88, 233, 0.3)' }}
                style={{
                  gridColumn: isMobile ? 'none' : (i === 0 || i === 3 || i === 4) ? 'span 2' : 'span 1',
                  minWidth: isMobile ? '85%' : 'auto',
                  scrollSnapAlign: 'center',
                  padding: isMobile ? '1.6rem 1.4rem' : '1.2rem 1.4rem', 
                  backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  borderRadius: '20px', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  backdropFilter: 'blur(10px)', 
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem'
                }}
              >
                <div style={{ position: 'absolute', top: '1rem', right: '1.2rem', fontSize: '1.5rem', fontWeight: 900, color: 'rgba(255, 255, 255, 0.08)', lineHeight: 1 }}>0{i + 1}</div>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(172, 88, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#AC58E9' }}>
                  <p.icon size={14} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'white', marginBottom: '0.2rem', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>{p.label}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0, maxWidth: (i === 0 || i === 3 || i === 4) && !isMobile ? '70%' : '100%' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
          {isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
              {perks.map((_, i) => (
                <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(172, 88, 233,0.3)' }}></div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section style={{ padding: isMobile ? '0 5% 60px' : '0 5% 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.2rem', maxWidth: '1000px', margin: '0 auto', alignItems: 'stretch' }}>
          {plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={isMobile ? {} : { y: -8 }}
                onClick={() => isMobile && setExpandedIndex(expandedIndex === i ? null : i)}
                style={{
                  backgroundColor: isPopular ? '#080312' : '#050505',
                  borderRadius: '16px',
                  border: isPopular ? '2px solid #AC58E9' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isPopular ? '0 0 40px rgba(172, 88, 233, 0.15)' : 'none',
                  padding: isMobile ? '1.2rem 1rem' : '1.5rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: isMobile ? 'pointer' : 'default',
                  transition: 'all 0.3s ease',
                  zIndex: isPopular ? 2 : 1,
                }}
              >
                {plan.tag && (
                  <div style={{
                    position: 'absolute', top: '-0.8rem', left: '50%', transform: 'translateX(-50%)',
                    padding: '0.3rem 1.2rem', borderRadius: '100px',
                    background: '#AC58E9',
                    color: '#fff', fontSize: '0.65rem', fontWeight: 900, letterSpacing: '0.15em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                    boxShadow: '0 0 20px rgba(172, 88, 233, 0.4)'
                  }}>
                    {plan.tag}
                  </div>
                )}

                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{plan.name}</h3>
                  <p style={{ color: '#AC58E9', fontSize: '0.65rem', fontWeight: 600, margin: '0.2rem 0 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{plan.subtitle}</p>
                </div>

                <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'baseline' }}>
                  <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, marginLeft: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>/ {plan.period}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: '#AC58E9', boxShadow: '0 0 8px #AC58E9' }} />
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{plan.delivery}</span>
                </div>

                {(!isMobile || expandedIndex === i) && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : {}}
                    animate={isMobile ? { height: 'auto', opacity: 1 } : {}}
                    style={{ overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                      {plan.features.map((f, j) => (
                        <li key={j} style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                          <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: 'rgba(172, 88, 233,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Check size={10} color={isPopular ? "#AC58E9" : "#fff"} strokeWidth={3} />
                          </div>
                          <span style={{ fontWeight: 500 }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div style={{ marginTop: 'auto' }}>
                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: isPopular ? '#AC58E9' : '#ffffff', color: isPopular ? '#000' : '#000' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push('/');
                          setTimeout(() => {
                            const el = document.getElementById('footer');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }, 600);
                        }}
                        style={{
                          width: '100%',
                          padding: '0.6rem 1rem',
                          borderRadius: '8px',
                          border: isPopular ? 'none' : '1px solid rgba(255,255,255,0.1)',
                          backgroundColor: isPopular ? '#AC58E9' : 'transparent',
                          color: isPopular ? '#000' : '#fff',
                          fontWeight: 900,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        Start Project <ArrowUpRight size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {isMobile && expandedIndex !== i && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(255,255,255,0.08)', textAlign: 'center', fontSize: '0.75rem', color: '#AC58E9', fontWeight: 600 }}>
                    Tap to view details
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section style={{ padding: isMobile ? '80px 5%' : '120px 5%', backgroundColor: '#020202', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '3rem' : '8rem', alignItems: 'flex-start' }}>
          {/* Left Column: Title & CTA */}
          <div style={{ flex: isMobile ? 'none' : '1.5', width: '100%', position: isMobile ? 'static' : 'sticky', top: '120px', textAlign: isMobile ? 'center' : 'left' }}>
            <h2 style={{ fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.4rem)' : 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 0.9, color: 'white', margin: '0 0 1.2rem 0', textTransform: 'uppercase', letterSpacing: '-0.04em', wordBreak: isMobile ? 'break-word' : 'normal', overflowWrap: isMobile ? 'break-word' : 'normal', whiteSpace: isMobile ? 'normal' : 'nowrap' }}>
              QUESTIONS<br /><span style={{ color: '#AC58E9' }}>ANSWERED</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '2rem', maxWidth: isMobile ? '100%' : '300px', margin: isMobile ? '0 auto 2rem auto' : '0 0 2rem 0' }}>
              Have a specific query? Our experts are here to provide the clarity you need.
            </p>
            <Link href="/#contact" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05, backgroundColor: '#AC58E9' }} style={{ padding: isMobile ? '1rem 2.2rem' : '1rem 2rem', borderRadius: '100px', background: '#AC58E9', color: '#000', border: 'none', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '0.05em', transition: '0.3s ease', margin: isMobile ? '0 auto' : '0' }}>
                Ask a Question
              </motion.button>
            </Link>
          </div>

          {/* Right Column: Accordion */}
          <div style={{ flex: isMobile ? 'none' : '2.5', width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: isMobile ? '2.2rem 0' : '2rem 0', background: 'none', border: 'none', cursor: 'pointer', color: 'white', textAlign: 'left' }}>
                  <h3 style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', fontWeight: 800, margin: 0, color: expandedIndex === idx ? '#AC58E9' : 'white', textTransform: 'uppercase', maxWidth: '85%', transition: '0.3s ease', lineHeight: 1.4 }}>
                    {faq.q}
                  </h3>
                  <span style={{ fontSize: '1.2rem', color: expandedIndex === idx ? '#AC58E9' : 'rgba(255,255,255,0.2)', fontWeight: 300, transition: '0.3s ease' }}>
                    {expandedIndex === idx ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {expandedIndex === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, paddingBottom: isMobile ? '2.2rem' : '2rem', margin: 0, maxWidth: '100%' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentId="app-development" isMobile={isMobile} />
      
      <style>{`
        .services-grid-new { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        @media (max-width: 1024px) { .services-grid-new { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) { .services-grid-new { grid-template-columns: 1fr; } }
        .modern-service-card { background-color: #1a1a1a; min-height: 400px; transition: background-color 0.4s ease; }
        @media (max-width: 768px) { .modern-service-card { min-height: 250px !important; } }
        .modern-service-card:hover { background-color: #AC58E9; }
        .card-giant-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); font-size: clamp(1.2rem,3.5vw,2.8rem); font-weight: 900; color: #ffffff; line-height: 1; letter-spacing: -0.02em; pointer-events: none; transition: left 0.7s cubic-bezier(0.8,0,0.2,1), transform 0.7s cubic-bezier(0.8,0,0.2,1), opacity 0.5s ease; z-index: 1; width: 100%; text-align: center; }
        .modern-service-card:hover .card-giant-text { left: 100%; transform: translate(0%,-50%); opacity: 0.05; }
        .card-hover-content { opacity: 0; transform: translateY(20px) scale(0.95); transition: opacity 0.4s ease, transform 0.4s ease; display: flex; flex-direction: column; align-items: center; gap: 1rem; z-index: 5; padding: 0 8%; text-align: center; }
        .modern-service-card:hover .card-hover-content { opacity: 1; transform: translateY(0) scale(1); transition: opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s; }
        .blob-icon-wrapper { width: 90px; height: 90px; background-color: #AC58E9; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; display: flex; justify-content: center; align-items: center; animation: morph-blob 8s ease-in-out infinite alternate; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        @keyframes morph-blob { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 33% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; } 66% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; } 100% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; } }
        .card-hover-desc { color: #ffffff; font-size: 0.9rem; font-weight: 600; line-height: 1.5; margin: 0; }
      `}</style>
    </div>
  );
};

export default AppPage;
