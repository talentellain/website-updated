import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Smartphone, Monitor, Infinity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const plans = [
  {
    name: 'MVP App',
    subtitle: 'For startups testing ideas',
    price: '₹25,000',
    period: 'one-time',
    delivery: '3–4 weeks delivery',
    tag: null,
    features: [
      'Android app (Play Store ready)',
      'Up to 5 screens',
      'Basic user login/signup',
      'Simple database (Firebase)',
      '1 month bug-fix support',
    ],
  },
  {
    name: 'Business App',
    subtitle: 'For established businesses',
    price: '₹40,000',
    period: 'one-time',
    delivery: '6–8 weeks delivery',
    tag: 'Most popular',
    features: [
      'Android + iOS (cross-platform)',
      'Up to 12 screens',
      'User profiles + admin panel',
      'Payment gateway integration',
      'Push notifications',
      '3 months support',
    ],
  },
  {
    name: 'Premium App',
    subtitle: 'Full-featured product',
    price: '₹50,000',
    period: 'one-time',
    delivery: '10–14 weeks delivery',
    tag: null,
    features: [
      'Android + iOS native',
      'Unlimited screens',
      'Custom UI/UX design',
      'API integrations',
      'Analytics dashboard',
      '6 months support',
    ],
  },
];

const perks = [
  { icon: Smartphone, label: 'Cross-Platform', desc: 'Reach users on both Android & iOS' },
  { icon: Monitor, label: 'Modern Tech Stack', desc: 'React Native, Flutter, Firebase' },
  { icon: Infinity, label: 'Ongoing Support', desc: 'Bug fixes & maintenance included' },
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

const ExpertInsightSection = ({ isMobile }) => {
  return (
    <section style={{ padding: isMobile ? '60px 5%' : '100px 8%', backgroundColor: '#050508', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(167,139,250,0.03) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#a78bfa', boxShadow: '0 0 15px #a78bfa' }}></div>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#a78bfa', letterSpacing: '0.4em', textTransform: 'uppercase' }}>Expert Perspective</span>
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

const AppPage = () => {
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

      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '80px 5% 40px' : '100px 5% 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, rgba(167,139,250,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(196,181,253,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          <span style={{ fontSize: '0.7rem', color: '#a78bfa', fontWeight: 800, letterSpacing: '0.4em', textTransform: 'uppercase', display: 'block', marginBottom: '1.2rem' }}>App Development</span>
          <h1 style={{ fontSize: isMobile ? 'clamp(2.2rem, 9vw, 3.5rem)' : 'clamp(3.2rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.9, margin: 0, textTransform: 'uppercase' }}>
            Build Your <br /><span style={{ background: 'linear-gradient(to right, #a78bfa, #c4b5fd)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Idea</span> Into an App
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '500px', margin: '1.5rem auto 0' }}>
            From startup MVP to full-featured product — we design and build apps that users love.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '700px', margin: '1rem auto 0' }}>
            As a leading mobile app development agency, we specialize in building native and cross-platform applications using React Native, Flutter, iOS, and Android. Our custom app development services focus on scalable architectures, intuitive UI/UX design, and robust integrations to ensure your digital product stands out.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '2.5rem', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <Link to="/#contact" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} style={{ width: '100%', padding: '0.8rem 2.2rem', borderRadius: '100px', background: 'linear-gradient(135deg, #a78bfa, #c4b5fd)', color: '#000', border: 'none', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>Start Your Project <ArrowUpRight size={16} /></motion.button>
            </Link>
            <Link to="/#contact" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} style={{ width: '100%', padding: '0.8rem 2.2rem', borderRadius: '100px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Talk to an Expert</motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <ExpertInsightSection isMobile={isMobile} />

      <section style={{ padding: isMobile ? '0 5% 60px' : '0 5% 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1.5rem' : '1.5rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'stretch' }}>
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
                  backgroundColor: isPopular ? 'rgba(167,139,250,0.06)' : 'rgba(255,255,255,0.02)',
                  borderRadius: '28px',
                  border: isPopular ? '1px solid rgba(167,139,250,0.35)' : '1px solid rgba(255,255,255,0.06)',
                  padding: isMobile ? '1.8rem 1.5rem' : '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: isMobile ? 'pointer' : 'default',
                  transition: 'background-color 0.3s ease',
                }}
              >
                {plan.tag && (
                  <div style={{
                    position: 'absolute', top: '-0.8rem', left: '50%', transform: 'translateX(-50%)',
                    padding: '0.35rem 1.2rem', borderRadius: '100px',
                    background: 'linear-gradient(135deg, #a78bfa, #c4b5fd)',
                    color: '#000', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.1em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>
                    {plan.tag}
                  </div>
                )}

                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>{plan.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: '0.2rem 0 0' }}>{plan.subtitle}</p>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.4rem', fontWeight: 900 }}>{plan.price}</span>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500, marginLeft: '0.3rem' }}>{plan.period}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#a78bfa' }} />
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{plan.delivery}</span>
                </div>

                {(!isMobile || expandedIndex === i) && (
                  <motion.div
                    initial={isMobile ? { height: 0, opacity: 0 } : {}}
                    animate={isMobile ? { height: 'auto', opacity: 1 } : {}}
                    style={{ overflow: 'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                      {plan.features.map((f, j) => (
                        <li key={j} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                          <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: 'rgba(167,139,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <Check size={10} color="#a78bfa" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link to="/#contact" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          width: '100%',
                          padding: '0.9rem',
                          borderRadius: '14px',
                          border: 'none',
                          background: isPopular ? 'linear-gradient(135deg, #a78bfa, #c4b5fd)' : 'rgba(255,255,255,0.08)',
                          color: isPopular ? '#000' : 'white',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          transition: '0.3s ease',
                        }}
                      >
                        Get started <ArrowUpRight size={16} />
                      </motion.button>
                    </Link>
                  </motion.div>
                )}

                {isMobile && expandedIndex !== i && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(255,255,255,0.08)', textAlign: 'center', fontSize: '0.75rem', color: '#a78bfa', fontWeight: 600 }}>
                    Tap to view details
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      <section style={{ padding: isMobile ? '50px 5%' : '70px 5%', backgroundColor: '#000' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ fontSize: '0.65rem', color: '#a78bfa', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Why Choose Us</span>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 900, margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Built for Growth</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '2rem' }}>
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={isMobile ? {} : { y: -5, borderColor: 'rgba(167,139,250,0.3)' }}
                style={{
                  padding: '2rem', borderRadius: '20px', backgroundColor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', transition: '0.3s ease',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: 'rgba(167,139,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', color: '#a78bfa' }}>
                  <p.icon size={20} />
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, margin: '0 0 0.3rem' }}>{p.label}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '50px 5% 60px' : '70px 5% 80px', backgroundColor: '#050505', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.2rem', borderRadius: '100px', backgroundColor: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.65rem', color: '#a78bfa', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', fontWeight: 900, margin: '0.5rem 0 0', letterSpacing: '-0.02em' }}>Questions? Answered.</h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', maxWidth: '500px', margin: '0.8rem auto 0', lineHeight: 1.6 }}>Everything you need to know about our app development services</p>
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {faqs.map((faq, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                style={{ 
                  borderRadius: '16px', 
                  border: `1px solid ${expandedIndex === (i + 100) ? 'rgba(167,139,250,0.3)' : 'rgba(255,255,255,0.06)'}`,
                  backgroundColor: expandedIndex === (i + 100) ? 'rgba(167,139,250,0.05)' : 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === (i + 100) ? null : (i + 100))}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: isMobile ? '1.2rem 1.2rem' : '1.4rem 1.5rem', background: 'none', border: 'none',
                    cursor: 'pointer', color: 'white', textAlign: 'left',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#a78bfa', opacity: 0.5, fontFamily: 'monospace', flexShrink: 0 }}>0{i + 1}</span>
                    <span style={{ fontSize: isMobile ? '0.88rem' : '0.95rem', fontWeight: 700, color: expandedIndex === (i + 100) ? '#a78bfa' : 'white', transition: '0.3s ease' }}>
                      {faq.q}
                    </span>
                  </div>
                  <div style={{ 
                    width: 28, height: 28, borderRadius: '50%', 
                    backgroundColor: expandedIndex === (i + 100) ? 'rgba(167,139,250,0.2)' : 'rgba(255,255,255,0.05)', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: '0.3s ease'
                  }}>
                    <span style={{ fontSize: '1rem', color: expandedIndex === (i + 100) ? '#a78bfa' : 'rgba(255,255,255,0.3)', fontWeight: 300, transition: '0.3s ease', lineHeight: 1 }}>
                      {expandedIndex === (i + 100) ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {expandedIndex === (i + 100) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.7, padding: isMobile ? '0 1.2rem 1.2rem 3.2rem' : '0 1.5rem 1.4rem 3.5rem', margin: 0 }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', margin: '0 0 1rem' }}>Still have questions?</p>
            <Link to="/#contact" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ scale: 1.05 }} style={{ padding: '0.7rem 2rem', borderRadius: '100px', background: 'transparent', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)', fontWeight: 700, cursor: 'pointer', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Talk to Our Team</motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppPage;
