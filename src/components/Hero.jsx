import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

// Critical hero assets are served from /public for stable preloading paths
const fgImage = '/fg.png';

/* ─── Animated counter hook ──────────────────────────────────────────── */
function useCounter(target, duration = 2000, startDelay = 800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(delayTimer);
  }, [startDelay]);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return count;
}

/* ─── Floating Particle ──────────────────────────────────────────────── */
const Particle = ({ style }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: style.size,
      height: style.size,
      borderRadius: '50%',
      background: style.color,
      top: style.top,
      left: style.left,
      pointerEvents: 'none',
      filter: 'blur(1px)',
    }}
    animate={{
      y: [0, style.floatY, 0],
      x: [0, style.floatX, 0],
      opacity: [0.2, style.opacity, 0.2],
      scale: [1, style.scale, 1],
    }}
    transition={{
      duration: style.duration,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: style.delay,
    }}
  />
);


/* ─── Stat Pill ──────────────────────────────────────────────────────── */
const StatPill = ({ value, suffix, label, delay }) => {
  const count = useCounter(value, 1800, 1200 + delay);
  return (
    <div
      className="hero-stat-pill"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.15rem',
        padding: '0.6rem 1.2rem',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
        minWidth: '90px',
      }}
    >
      <span
        style={{
          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #aa3bff, #00d2ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        {count}{suffix}
      </span>
      <span
        style={{
          fontSize: '0.6rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.45)',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    </div>
  );
};

/* ─── PARTICLES CONFIG ───────────────────────────────────────────────── */
const PARTICLES = [
  { size: '4px', color: 'rgba(170,59,255,0.8)', top: '15%', left: '10%', floatY: -30, floatX: 15, opacity: 0.9, scale: 1.4, duration: 7, delay: 0 },
  { size: '3px', color: 'rgba(0,210,255,0.7)', top: '25%', left: '85%', floatY: 20, floatX: -20, opacity: 0.8, scale: 1.3, duration: 9, delay: 1.5 },
  { size: '5px', color: 'rgba(170,59,255,0.6)', top: '70%', left: '8%', floatY: -20, floatX: 25, opacity: 0.7, scale: 1.5, duration: 11, delay: 0.8 },
  { size: '3px', color: 'rgba(255,255,255,0.5)', top: '60%', left: '90%', floatY: 15, floatX: -10, opacity: 0.6, scale: 1.2, duration: 8, delay: 2 },
  { size: '4px', color: 'rgba(0,210,255,0.5)', top: '40%', left: '5%', floatY: 25, floatX: 10, opacity: 0.7, scale: 1.3, duration: 10, delay: 3 },
  { size: '2px', color: 'rgba(170,59,255,0.9)', top: '80%', left: '75%', floatY: -15, floatX: 15, opacity: 0.8, scale: 1.4, duration: 6, delay: 1 },
  { size: '3px', color: 'rgba(255,255,255,0.3)', top: '10%', left: '60%', floatY: 20, floatX: -15, opacity: 0.5, scale: 1.2, duration: 12, delay: 4 },
  { size: '4px', color: 'rgba(170,59,255,0.5)', top: '50%', left: '95%', floatY: -25, floatX: -10, opacity: 0.6, scale: 1.3, duration: 9, delay: 2.5 },
];

/* ─── HERO ───────────────────────────────────────────────────────────── */
const Hero = () => {
  const heroWrapperRef = useRef(null);
  const titleWrapRef = useRef(null);
  const mountainRef = useRef(null);
  const contentRefs = useRef([]);
  const [ctaHovered, setCtaHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Reset array on render to avoid stale refs
  contentRefs.current = [];
  const addToContentRefs = (el) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Dynamically import GSAP to reduce initial bundle and improve LCP
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline();

      // Initial setups for GSAP
      gsap.set(titleWrapRef.current, { opacity: 0, y: 60, scale: 1.1 });
      gsap.set(heroWrapperRef.current, { scale: 1.05 });
      gsap.set(mountainRef.current, { y: '25%' });
      gsap.set(contentRefs.current, { opacity: 0, y: 40 });

      tl.to(titleWrapRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.6,
        ease: 'expo.out',
      })
      .to(heroWrapperRef.current, {
        scale: 0.95,
        duration: 2.2,
        ease: 'power2.inOut',
      }, '-=0.4')
      .to(mountainRef.current, {
        y: '0%',
        duration: 2.2,
        ease: 'power2.inOut',
      }, '<')
      .to(contentRefs.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'expo.out',
      }, '-=0.2');

      return () => tl.kill();
    });
  }, []);

  return (
    <div id="hero" className="sticky-outer" style={{ zIndex: 10 }}>
      <section
        className="sticky-section black-purple-gradient"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          overflow: 'hidden',
          justifyContent: 'center',
        }}
      >
        {/* Floating ambient particles */}
        {!isMobile && PARTICLES.map((p, i) => <Particle key={i} style={p} />)}

        {/* Radial glow accent behind title */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(170,59,255,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 5,
            filter: 'blur(40px)',
          }}
        />

        {/* Main scaled container */}
        <div
          ref={heroWrapperRef}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, transformOrigin: 'center center' }}
        >
          {/* LAYER 10: Behind Mountain (Title + Subtitle) */}
          <div style={{ position: 'absolute', zIndex: 10, top: 0, left: 0, width: '100%', height: '100%' }}>
            <div style={{ position: 'relative', maxWidth: '1600px', width: '100%', margin: '0 auto', height: '100%', transformStyle: 'preserve-3d' }}>
              <div
                className="hero-title-block"
                style={{
                  position: 'absolute',
                  top: '36%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '0 5%',
                }}
              >
                {/* Eyebrow badge */}
                <div
                  ref={addToContentRefs}
                  className="hero-eyebrow"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.9rem',
                    background: 'rgba(170,59,255,0.15)',
                    border: '1px solid rgba(170,59,255,0.35)',
                    borderRadius: '100px',
                    marginBottom: '1.1rem',
                  }}
                >
                  <Sparkles size={11} color="#aa3bff" />
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      background: 'linear-gradient(90deg, #aa3bff, #00d2ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    The Future of Marketing
                  </span>
                </div>

                {/* Main brand title */}
                <div
                  ref={titleWrapRef}
                  className="hero-title-3d"
                  style={{
                    fontSize: 'clamp(2rem, 8vw, 12rem)',
                    marginBottom: '0',
                    lineHeight: 0.85,
                    fontWeight: 900,
                    letterSpacing: '0.01em',
                    paddingBottom: '0.1em',
                    fontFamily: 'Syne, sans-serif',
                    whiteSpace: 'nowrap',
                  }}
                >
                  TALENTELLA
                </div>
              </div>
            </div>
          </div>

          {/* LAYER 20: Foreground Mountains Overlay */}
          <div
            ref={mountainRef}
            className="hero-mountain"
            style={{
              position: 'absolute',
              bottom: '-27%',
              left: '-20%',
              width: '140%',
              height: '115%',
              pointerEvents: 'none',
              zIndex: 20,
              backgroundImage: `url(${fgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
              mixBlendMode: 'normal',
            }}
            role="img"
            aria-label="TalentElla hero background — India's leading 360 degree marketing agency creative landscape"
          />

          {/* LAYER 30: Intro and Content Over Mountain */}
          <div style={{ position: 'absolute', zIndex: 30, top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {/* Priority Hit: Ensures the browser prioritized these large assets immediately */}
            <img src="/bg5.png" style={{ display: 'none' }} fetchpriority="high" decoding="async" loading="eager" alt="" />
            <img src="/fg.png" style={{ display: 'none' }} fetchpriority="high" decoding="async" loading="eager" alt="" />

            <div style={{ position: 'relative', maxWidth: '1600px', width: '100%', margin: '0 auto', height: '100%' }}>

              {/* Bottom Left Content */}
              <div
                ref={addToContentRefs}
                className="hero-description-mobile"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  left: '5%',
                  textAlign: 'left',
                  maxWidth: '400px',
                  pointerEvents: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div>
                  <h1
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
                      fontWeight: 800,
                      margin: '0 0 0.5rem 0',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#fff',
                    }}
                  >
                    India's 360° Marketing Agency
                  </h1>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                      margin: 0,
                      lineHeight: '1.6',
                      fontWeight: 400,
                      color: 'rgba(255, 255, 255, 0.6)',
                    }}
                  >
                    Full-service digital marketing — branding, social media, web development, SEO, and influencer marketing for startups and businesses across India.
                  </p>
                </div>

                {/* CTA Buttons row */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Primary CTA */}
                  <motion.button
                    onHoverStart={() => setCtaHovered(true)}
                    onHoverEnd={() => setCtaHovered(false)}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Get a free strategy call from TalentElla — India's 360 degree marketing agency"
                    style={{
                      position: 'relative',
                      fontSize: '0.82rem',
                      padding: '12px 24px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#fff',
                      color: '#000',
                      borderRadius: '50px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      boxShadow: ctaHovered
                        ? '0 0 30px rgba(170,59,255,0.4), 0 8px 20px rgba(0,0,0,0.3)'
                        : '0 4px 15px rgba(0,0,0,0.2)',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    {/* shimmer overlay */}
                    <motion.span
                      animate={{ x: ['-200%', '300%'] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1.5 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(105deg, transparent 40%, rgba(170,59,255,0.25) 50%, transparent 60%)',
                        pointerEvents: 'none',
                      }}
                    />
                    Get a Free Strategy Call
                    <motion.span animate={{ x: ctaHovered ? 3 : 0 }} transition={{ duration: 0.2 }}>
                      <ArrowRight size={15} />
                    </motion.span>
                  </motion.button>

                  {/* Secondary ghost CTA */}
                  <motion.button
                    className="hero-ghost-cta"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      fontSize: '0.82rem',
                      padding: '11px 22px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: 'rgba(255,255,255,0.08)',
                      color: '#fff',
                      borderRadius: '50px',
                      fontWeight: 600,
                      border: '1px solid rgba(255,255,255,0.2)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)',
                      transition: 'border-color 0.3s ease, background 0.3s ease',
                    }}
                  >
                    Explore Services
                  </motion.button>
                </div>


              </div>

              {/* Bottom Right Content */}
              <div
                ref={addToContentRefs}
                className="hidden-mobile"
                style={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '5%',
                  textAlign: 'right',
                  maxWidth: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '1.5rem',
                  pointerEvents: 'auto',
                }}
              >
                <div style={{ textAlign: 'right' }}>
                  <h2
                    style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      margin: '0 0 0.5rem 0',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      color: '#fff',
                    }}
                  >
                    Integrated Marketing Solutions
                  </h2>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    Est. 2026. Elevating brands through omnichannel marketing — blending online and offline strategies for maximum impact across India.
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.15em',
                      color: 'rgba(255,255,255,0.8)',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Scroll to explore
                  </span>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Scroll down to explore TalentElla's marketing services"
                    style={{
                      cursor: 'pointer',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                    }}
                  >
                    <ChevronDown size={18} color="white" />
                  </motion.div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* Responsive overrides for hero title position and mountain zoom */}
      <style>{`
        /* Tablet: push title down a bit, zoom mountain */
        @media (max-width: 1024px) {
          .hero-title-block {
            top: 25% !important;
          }
          .hero-mountain {
            height: 140% !important;
            bottom: -25% !important;
            width: 160% !important;
            left: -30% !important;
          }
          .hero-description-mobile {
             bottom: 8% !important;
             left: 50% !important;
             transform: translateX(-50%) !important;
             text-align: center !important;
             width: 90% !important;
             max-width: 520px !important;
             align-items: center !important;
          }
        }
        /* Mobile: push title further down, mountain covers more */
        @media (max-width: 768px) {
          .hero-title-block {
            top: 22% !important;
          }
          .hero-mountain {
            height: 160% !important;
            bottom: -30% !important;
            width: 200% !important;
            left: -50% !important;
          }
          .hero-description-mobile {
             bottom: auto !important;
             top: 30% !important;
             left: 50% !important;
             transform: translateX(-50%) !important;
             text-align: center !important;
             width: 92% !important;
             max-width: 400px !important;
             display: flex !important;
             flex-direction: column !important;
             align-items: center !important;
          }
          .hero-description-mobile h1 {
             font-size: 0.8rem !important;
          }
          .hero-description-mobile p {
             font-size: 0.8rem !important;
             line-height: 1.5 !important;
             margin-bottom: 0 !important;
          }
        }

        /* Shimmer keyframe for CTA */
        @keyframes hero-cta-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
