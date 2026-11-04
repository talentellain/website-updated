'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Play, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import InteractiveHero from '../components/InteractiveHero';
import { servicesData } from '../data/servicesData';
import onepieceImg from '../assets/onepiece.png';
import k72Img from '../assets/K72.png';

const allFeatured = [
  { id: 1, title: 'Symetra Main', category: 'ENTERPRISE', image: '/projects/image copy.png', link: 'https://www.simetratech.com', metrics: '🚀 +40% Conversion', challenge: 'Symetra needed a scalable enterprise platform to handle a massive influx of user data securely without compromising speed.', solution: 'We built a high-performance Next.js architecture with server-side rendering and a robust headless CMS backend.', techStack: ['Next.js', 'React', 'Node.js', 'AWS'] },
  { id: 2, title: 'Zobiit', category: 'WEB DEVELOPMENT', image: '/projects/zobiit.png', link: 'https://zobiit.com', metrics: '📈 2M+ Pageviews/mo', challenge: 'Zobiit required a blazingly fast content delivery site with highly complex filtering and dynamic routing.', solution: 'Implemented a statically generated site with edge caching and a highly optimized image delivery pipeline.', techStack: ['Next.js', 'Tailwind', 'Vercel'] },
  { id: 3, title: 'Brand R.Comm', category: 'BRAND IDENTITY', image: '/projects/brandrcomm.jpg', link: 'https://www.brandrcomm.com/', orientation: 'landscape', metrics: '🏆 Agri Summit 2026', challenge: "Brand R.Comm needed a high-impact digital platform for India's 4th Edition Agriculture & Rural Communication Summit & Awards to command authority and scale delegate registrations.", solution: 'Architected a high-converting summit portal with event countdowns, delegate onboarding flows, and speaker & sponsor showcase modules.', techStack: ['Next.js', 'React', 'Tailwind', 'Node.js'] },
  { id: 4, title: 'EcoServeDev', category: 'WEB DEVELOPMENT', image: '/thubnail-website/image copy 2.png', link: 'https://ecoservedev.org/homepage', orientation: 'landscape', metrics: '🌱 +200% Donations', challenge: 'An environmental NGO needed a modern platform to drive donations and volunteer sign-ups.', solution: 'Built an inspiring, accessible website with clear calls-to-action and a seamless donation integration.', techStack: ['Next.js', 'React', 'Node.js'] },
  { id: 5, title: 'Trenvity', category: 'CREATIVE DEV', image: '/thubnail-website/image copy.png', link: 'https://trenvity.vercel.app/', metrics: '✨ Awwwards Nominee', challenge: 'Trenvity wanted a boundary-pushing creative portfolio that felt like an interactive art exhibit rather than a standard website.', solution: 'Developed a custom WebGL experience using Three.js and GSAP for buttery smooth scroll animations and 3D interactions.', techStack: ['Three.js', 'GSAP', 'React'] },
  { id: 6, title: 'One Piece OG', category: 'E-COMMERCE', image: '/thubnail-website/image.png', link: 'https://one-piece-og.vercel.app/', metrics: '💰 3x Sales Growth', challenge: 'The client needed an immersive, anime-themed e-commerce experience that captured the essence of the brand while maintaining high conversion rates.', solution: 'Created a visually striking, animation-heavy storefront using Framer Motion and an optimized Shopify backend.', techStack: ['React', 'Framer Motion', 'Shopify'] },
  { id: 7, title: 'Snail Integral', category: 'WEB DEVELOPMENT', image: '/projects/snailintegral.jpg', link: 'https://www.snailintegral.com/', orientation: 'landscape', metrics: '📣 60+ Brand Clients', challenge: 'Snail Integral required an authoritative, high-trust digital presence representing their communications leadership across agriculture, corporate, and government sectors.', solution: 'Designed and engineered an immersive modern web platform featuring dynamic storytelling, case study spotlights, and clear client conversion pathways.', techStack: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { id: 8, title: 'Thrifty Clothing', category: 'WEB DEVELOPMENT', image: '/projects/image.png', link: 'https://thrifty-clothing-frontend.vercel.app/home', metrics: '🛍️ +55% Cart Value', challenge: 'A vintage clothing brand needed a fast, trendy e-commerce platform that appealed to Gen-Z shoppers.', solution: 'Built a mobile-first, highly responsive storefront with instant search, dynamic filtering, and a seamless checkout flow.', techStack: ['Next.js', 'Tailwind', 'Stripe'] },
  { id: 9, title: 'K27 Animation', category: 'BRAND IDENTITY', image: k72Img, link: 'https://react-animated-web-l9i8.vercel.app/', metrics: '🎨 100% Rebrand', challenge: 'K27 needed a complete visual overhaul and a new digital identity that communicated their cutting-edge technology.', solution: 'Designed a comprehensive brand system and applied it to a highly animated, engaging landing page.', techStack: ['Figma', 'React', 'GSAP'] },
  { id: 10, title: 'Adidas Concept', category: 'MOTION DESIGN', image: '/projects/addidas.png', link: 'https://addidas-animated.vercel.app/', metrics: '🔥 Viral Concept', challenge: 'Create an unofficial, highly kinetic conceptual landing page for Adidas to showcase our motion design capabilities.', solution: 'Leveraged advanced scroll-jacking and complex CSS animations to create a highly dynamic product showcase.', techStack: ['HTML/CSS', 'GSAP', 'JavaScript'] },
  { id: 11, title: 'One Piece', category: 'E-COMMERCE', image: onepieceImg, link: 'https://one-piece-eight-henna.vercel.app/', metrics: '⚡ 99/100 Lighthouse', challenge: 'Build a high-performance e-commerce prototype that loads instantly even with heavy image assets.', solution: 'Utilized Next.js image optimization and lazy loading to achieve near-perfect performance scores.', techStack: ['Next.js', 'React'] },
  { id: 12, title: 'Astro Portfolio', category: 'CREATIVE DEV', image: '/projects/astro-portfolio.png', link: 'https://astro-portfolio-opal-ten.vercel.app/', metrics: '🌌 10k+ Visitors', challenge: 'Develop a space-themed creative portfolio that feels expansive and immersive.', solution: 'Implemented custom particle systems and parallax scrolling to simulate deep space navigation.', techStack: ['React', 'Three.js'] },
  { id: 13, title: 'Ring Portfolio', category: 'UX/UI DESIGN', image: '/projects/rig.png', link: 'https://ring-portfolio.vercel.app/', metrics: '💎 Premium UI', challenge: 'Design a sleek, minimalist portfolio for a high-end jewelry brand.', solution: 'Focused on micro-interactions, elegant typography, and high-resolution imagery to convey luxury.', techStack: ['Figma', 'Next.js'] },
  { id: 14, title: 'Digniteq', category: 'BRAND IDENTITY', image: '/projects/digniteq.png', link: 'https://www.digniteq.in', metrics: '🚀 B2B Growth', challenge: 'Digniteq needed a professional corporate identity and website to attract enterprise clients.', solution: 'Delivered a clean, authoritative brand guidelines package and a fast, accessible corporate website.', techStack: ['React', 'Tailwind'] },
];

const categoryColors = {
  'E-COMMERCE': '#AC58E9',
  'BRAND IDENTITY': '#AC58E9',
  'WEB DEVELOPMENT': '#AC58E9',
  'ENTERPRISE': '#AC58E9',
  'CREATIVE DEV': '#AC58E9',
  'MOTION DESIGN': '#AC58E9',
  'UX/UI DESIGN': '#AC58E9',
  'INSTAGRAM REELS': '#AC58E9',
  'VIDEO SHOOTING': '#AC58E9',
  'VIDEO EDITING': '#AC58E9',
  'SMM CAMPAIGN': '#AC58E9',
};

const topFeatured = allFeatured.slice(0, 5);
const remainingFeatured = allFeatured.slice(5);

const HorizontalWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [metrics, setMetrics] = useState({ cardWidth: 1100, gap: 40, distance: 4560, padding: 410 });

  useEffect(() => {
    const updateMetrics = () => {
      const mob = window.innerWidth < 768;
      setIsMobile(mob);
      if (mob) {
        const cardW = window.innerWidth * 0.86;
        const gap = window.innerWidth * 0.04;
        const padding = (window.innerWidth - cardW) / 2;
        const distance = 4 * (cardW + gap);
        setMetrics({ cardWidth: cardW, gap, distance, padding });
      } else {
        const rawW = window.innerWidth * 0.72;
        const cardW = Math.max(750, Math.min(1120, rawW));
        const gap = 40;
        const padding = (window.innerWidth - cardW) / 2;
        const distance = 4 * (cardW + gap);
        setMetrics({ cardWidth: cardW, gap, distance, padding });
      }
    };

    updateMetrics();
    window.addEventListener('resize', updateMetrics);
    return () => window.removeEventListener('resize', updateMetrics);
  }, []);

  // Clamped spring transform: reaches Trenvity at 0.82, stays centered until 1.0, then immediately scrolls down
  const springProgress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const x = useTransform(springProgress, [0, 0.82], [0, -metrics.distance], { clamp: true });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const normalized = Math.min(1, v / 0.82);
      const idx = Math.min(topFeatured.length - 1, Math.round(normalized * (topFeatured.length - 1)));
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeProject = topFeatured[activeIndex] || topFeatured[0];
  const activeColor = categoryColors[activeProject.category] || '#aa3bff';

  return (
    <section 
      ref={targetRef} 
      style={{ 
        height: isMobile ? '180vh' : '200vh', 
        position: 'relative', 
        background: '#ffffff', 
        borderTop: '1px solid rgba(0,0,0,0.08)' 
      }}
    >
      {/* Dynamic Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${isMobile ? '50% 30%' : '50% 45%'}, ${activeColor}15 0%, transparent 65%), radial-gradient(circle at ${isMobile ? '50% 70%' : '75% 60%'}, ${activeColor}0a 0%, transparent 50%)`,
          transition: 'background 1s cubic-bezier(0.2, 0.8, 0.2, 1)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: isMobile ? '70px' : '90px',
        paddingBottom: '24px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        zIndex: 1
      }}>
        <motion.div 
          style={{ 
            x, 
            display: 'flex', 
            gap: `${metrics.gap}px`, 
            padding: `0 ${metrics.padding}px`, 
            width: 'max-content',
            position: 'relative'
          }}
        >
          {topFeatured.map((project, i) => {
            const isCurrent = activeIndex === i;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                style={{
                  width: `${metrics.cardWidth}px`,
                  flexShrink: 0,
                  position: 'relative'
                }}
              >
                <div style={{
                  position: 'relative',
                  height: isMobile ? '56vh' : 'min(64vh, 600px)',
                  width: '100%',
                  borderRadius: isMobile ? '18px' : '24px',
                  backgroundColor: '#0c0c11',
                  border: isCurrent ? `1.5px solid ${categoryColors[project.category] || '#AC58E9'}` : '1px solid rgba(0,0,0,0.1)',
                  boxShadow: isCurrent 
                    ? '0 25px 70px rgba(172, 88, 233, 0.2), 0 10px 30px rgba(0,0,0,0.1)' 
                    : '0 10px 30px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  transition: 'border 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}>
                  {/* Clean Edge-to-Edge Screenshot */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#0a0a0f',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={project.image?.src || project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 86vw, 1100px"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      priority={i === 0}
                    />

                    {/* Clean Gradient Overlay & Humanized Agency Info Panel */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10,10,14,0.92) 0%, rgba(10,10,14,0.45) 45%, transparent 80%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: isMobile ? '1.5rem' : '2.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: isMobile ? 'flex-start' : 'flex-end',
                        justifyContent: 'space-between',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '1.2rem'
                      }}>
                        <div>
                          {project.metrics && (
                            <div style={{ marginBottom: '0.6rem' }}>
                              <span style={{
                                display: 'inline-block',
                                padding: '0.35rem 0.85rem',
                                borderRadius: '100px',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.25)',
                                fontSize: isMobile ? '0.7rem' : '0.78rem',
                                color: '#ffffff',
                                fontWeight: 700,
                                letterSpacing: '0.04em'
                              }}>
                                {project.metrics}
                              </span>
                            </div>
                          )}
                          <h3 style={{
                            fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 3.2vw, 3rem)',
                            color: '#ffffff',
                            fontWeight: 900,
                            margin: 0,
                            letterSpacing: '-0.02em',
                            lineHeight: 1.15,
                            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                          }}>
                            {project.title}
                          </h3>
                        </div>

                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04, backgroundColor: '#ffffff', color: '#0f1015' }}
                          whileTap={{ scale: 0.96 }}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: isMobile ? '0.65rem 1.2rem' : '0.8rem 1.6rem',
                            borderRadius: '100px',
                            backgroundColor: categoryColors[project.category] || '#AC58E9',
                            color: '#ffffff',
                            fontSize: isMobile ? '0.8rem' : '0.9rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            flexShrink: 0,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                            cursor: 'pointer',
                            transition: 'all 0.25s ease'
                          }}
                        >
                          <span>Visit Website</span>
                          <ArrowUpRight size={isMobile ? 15 : 18} strokeWidth={2.6} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Carousel Indicators */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          marginTop: isMobile ? '1rem' : '1.5rem',
          zIndex: 10
        }}>
          {topFeatured.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: activeIndex === i ? 1.4 : 1,
                backgroundColor: activeIndex === i ? activeColor : 'rgba(0,0,0,0.18)',
                width: activeIndex === i ? 24 : 8
              }}
              style={{
                height: 8,
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const RemainingWork = ({ isMobile = false }) => {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isDragging = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    isDragging.current = false;
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    isDragging.current = true;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleLinkClick = (e) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  const handleArrowClick = (direction) => {
    setIsHovered(true);
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    if (containerRef.current) {
      const scrollStep = isMobile ? 320 : 420;
      const offset = direction === 'left' ? -scrollStep : scrollStep;
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + offset,
        behavior: 'smooth'
      });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 4000);
  };

  useEffect(() => {
    let animationFrameId;
    const speed = 0.8;

    const tick = () => {
      const container = containerRef.current;
      if (container && !isMouseDown && !isHovered && isInView) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isMouseDown, isHovered, isInView]);

  return (
    <section style={{ position: 'relative', zIndex: 20, padding: isMobile ? '8vh 4%' : '10vh 5%', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>More Featured</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', color: '#0f1015', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>Rest of Websites</h2>
          </motion.div>
          <div style={{ display: 'flex', gap: '0.8rem', flexShrink: 0 }}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#7C3AED', color: '#fff', borderColor: '#7C3AED' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleArrowClick('left')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#f8f9fc',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                color: '#0f1015',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#7C3AED', color: '#fff', borderColor: '#7C3AED' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleArrowClick('right')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#f8f9fc',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                color: '#0f1015',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Centered Scrollable Carousel */}
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          style={{ 
            overflowX: 'auto', 
            width: '100%', 
            paddingBottom: '1.5rem', 
            cursor: isMouseDown ? 'grabbing' : 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div style={{ display: 'flex', gap: '1.75rem', width: 'max-content', padding: '0.5rem 4px 1rem' }}>
            {remainingFeatured.map((p, i) => {
              return (
                <motion.a 
                  key={`${p.id || i}-${i}`}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    width: isMobile ? '82vw' : '390px', 
                    flexShrink: 0, 
                    backgroundColor: '#ffffff', 
                    borderRadius: '20px', 
                    border: '1px solid rgba(0, 0, 0, 0.08)', 
                    boxShadow: '0 6px 25px rgba(0,0,0,0.04)',
                    overflow: 'hidden', 
                    display: 'flex',
                    flexDirection: 'column',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  {/* Clean Website Screenshot: Modern, humanized, full-bleed, no black letterboxing */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '16/10',
                      backgroundColor: '#f5f5f7',
                      overflow: 'hidden',
                      display: 'block'
                    }}
                  >
                    <Image
                      src={p.image?.src || p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 82vw, 390px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'top',
                        pointerEvents: 'none',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    />
                  </div>

                  {/* Clean Modern Agency Card Footer */}
                  <div style={{
                    padding: '1.4rem 1.5rem',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.8rem'
                  }}>
                    <div style={{ minWidth: 0 }}>
                      {p.metrics && (
                        <span style={{
                          display: 'inline-block',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#7C3AED',
                          backgroundColor: 'rgba(124, 58, 237, 0.08)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          marginBottom: '0.4rem'
                        }}>
                          {p.metrics}
                        </span>
                      )}
                      <h4 style={{
                        margin: 0,
                        fontWeight: 800,
                        fontSize: '1.25rem',
                        color: '#0f1015',
                        letterSpacing: '-0.02em',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {p.title}
                      </h4>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#f5f6fa',
                        border: '1px solid rgba(0,0,0,0.06)',
                        color: '#0f1015',
                        flexShrink: 0,
                        transition: 'all 0.25s ease'
                      }}
                    >
                      <ArrowUpRight size={17} strokeWidth={2.4} />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const getPosterUrl = (videoUrl) => {
  if (!videoUrl) return '';
  if (videoUrl.includes('cloudinary.com')) {
    let posterUrl = videoUrl.replace(/\.mp4$/, '.jpg');
    if (posterUrl.includes('/video/upload/')) {
      posterUrl = posterUrl.replace('/video/upload/', '/video/upload/so_1.0/');
    }
    return posterUrl;
  }
  if (videoUrl.startsWith('/video/')) {
    return videoUrl.replace(/\.mp4$/, '.jpg');
  }
  return '';
};

const HoverVideo = ({ src, isHovered, onDimensionsLoaded }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });

  useEffect(() => {
    if (videoRef.current && isInView) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        if (videoRef.current.readyState >= 1) {
          try {
            videoRef.current.currentTime = 0.5;
          } catch(e) {}
        }
      }
    }
  }, [isHovered, isInView]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      if (!isHovered) {
        try {
          videoRef.current.currentTime = 0.5;
        } catch(e) {}
      }
      if (onDimensionsLoaded) onDimensionsLoaded(videoRef.current.videoWidth, videoRef.current.videoHeight);
    }
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', backgroundColor: '#050505' }}>
      {isInView && (
        <video
          ref={videoRef} src={src} poster={getPosterUrl(src)} muted loop playsInline preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
        />
      )}
    </div>
  );
};

const PortfolioCard = ({ p, index, setSelectedProject, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const initialAspectRatio = p.orientation === 'landscape' ? '16/9' : '4/5';
  const [aspectRatio, setAspectRatio] = useState(initialAspectRatio);
  const [orientationKnown, setOrientationKnown] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  const catColor = categoryColors[p.category] || '#aa3bff';
  const isVideo = p.type === 'video';
  const projectLink = p.link || p.url || '#';
  const projectTitle = p.title || 'Project';
  const imgSrc = p.image || p.thumbnail;

  const handleDimensions = (w, h) => {
    if (!orientationKnown) {
      setAspectRatio(w > h ? '16/9' : '4/5');
      setOrientationKnown(true);
    }
  };

  return (
    <motion.div
      onClick={(e) => { e.preventDefault(); setSelectedProject({ ...p, aspectRatio }); }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.5 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      ref={containerRef}
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: '#f8f9fc',
        borderRadius: isMobile ? '16px' : '12px',
        border: isHovered ? `1px solid ${catColor}` : '1px solid rgba(0,0,0,0.08)',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: isHovered ? `0 20px 45px rgba(172, 88, 233, 0.18)` : '0 2px 10px rgba(0,0,0,0.03)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {isVideo && isMobile ? (
        <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#050505' }}>
          {isInView && (
            <video
              src={p.content}
              poster={getPosterUrl(p.content)}
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => handleDimensions(e.target.videoWidth, e.target.videoHeight)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              backgroundColor: `${catColor}20`, backdropFilter: 'blur(8px)',
              border: `1px solid ${catColor}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Play size={18} color={catColor} fill={catColor} style={{ marginLeft: 2 }} />
            </div>
          </div>
        </div>
      ) : isVideo ? (
        <HoverVideo src={p.content} isHovered={isHovered} onDimensionsLoaded={handleDimensions} />
      ) : (
        <Image
          src={imgSrc?.src || imgSrc}
          alt={projectTitle}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
        />
      )}

      <div style={{
        position: 'absolute', inset: 0,
        background: isHovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
        transition: 'background 0.5s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: isMobile ? '1.2rem' : '1.5rem',
      }}>
        {p.metrics && (
          <span style={{
            display: 'inline-block', padding: '0.25rem 0.65rem', borderRadius: '4px',
            border: `1px solid rgba(255,255,255,0.2)`, fontSize: '0.65rem', color: '#fff',
            fontWeight: 600, letterSpacing: '0.05em', backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(4px)', marginBottom: '0.5rem', width: 'fit-content',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            {p.metrics}
          </span>
        )}
        <h4 style={{ margin: 0, fontWeight: 900, fontSize: isMobile ? '1rem' : '1.15rem', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '-0.01em', color: 'white' }}>
          {projectTitle}
        </h4>
        {isVideo && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem', opacity: isMobile ? 0.7 : (isHovered ? 1 : 0), transition: 'opacity 0.3s ease' }}>
            <Play size={11} color={catColor} fill={catColor} />
            <span style={{ fontSize: '0.65rem', color: catColor, fontWeight: 600 }}>Play video</span>
          </div>
        )}
      </div>

      {isVideo && (
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute', top: '0.85rem', right: '0.85rem',
            width: 36, height: 36, borderRadius: '50%',
            backgroundColor: `${catColor}25`, backdropFilter: 'blur(6px)',
            border: `1px solid ${catColor}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <Play size={14} color={catColor} fill={catColor} />
        </motion.div>
      )}
    </motion.div>
  );
};

const LandscapeMarquee = ({ videos, setSelectedProject, isMobile }) => {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isDragging = useRef(false);
  const isInView = useInView(containerRef, { margin: "200px" });

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    isDragging.current = false;
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    isDragging.current = true;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const halfWidth = container.scrollWidth / 2;
    if (container.scrollLeft >= halfWidth) {
      container.scrollLeft -= halfWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    }
  };

  useEffect(() => {
    let animationFrameId;
    const speed = 0.8;

    const tick = () => {
      const container = containerRef.current;
      if (container && !isMouseDown && !isHovered && isInView) {
        container.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isMouseDown, isHovered]);

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onScroll={handleScroll}
      style={{ 
        overflowX: 'auto', 
        width: '100%', 
        paddingBottom: '1rem', 
        marginLeft: 'calc(-50vw + 50%)', 
        marginRight: 'calc(-50vw + 50%)', 
        paddingLeft: 'max(5%, calc(50vw - 700px))', 
        paddingRight: 'max(5%, calc(50vw - 700px))',
        cursor: isMouseDown ? 'grabbing' : 'grab',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      <div style={{ display: 'flex', gap: isMobile ? '1rem' : '1.5rem', width: 'max-content' }}>
        {[...videos, ...videos].map((p, i) => (
          <div 
            key={`${p.id || i}-${i}`} 
            style={{ width: isMobile ? '85vw' : '400px', flexShrink: 0 }}
            onClickCapture={(e) => {
              if (isDragging.current) {
                e.stopPropagation();
                e.preventDefault();
              }
            }}
          >
            <PortfolioCard p={p} index={i} setSelectedProject={setSelectedProject} isMobile={isMobile} />
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioTestimonial = ({ isMobile }) => {
  return (
    <section style={{ position: 'relative', zIndex: 20, height: isMobile ? '70vh' : '80vh', padding: isMobile ? '8vh 5%' : '12vh 5%', backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(172, 88, 233, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        style={{ maxWidth: '1000px', textAlign: 'center', position: 'relative', zIndex: 2 }}
      >
        <div style={{ marginBottom: '2rem' }}>
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: '#AC58E9', fontSize: '1.5rem', margin: '0 4px' }}>★</span>
          ))}
        </div>
        <h2 style={{ fontSize: isMobile ? '1.8rem' : '3.2rem', fontWeight: 800, color: '#0f1015', lineHeight: 1.25, margin: '0 0 2rem 0', letterSpacing: '-0.02em', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
          "TalentElla didn't just build us a website; they engineered a digital experience that completely transformed how our clients perceive us. The ROI has been absolutely astronomical."
        </h2>
      </motion.div>
    </section>
  );
};

const VIDEO_CATEGORIES = ['ALL', 'INSTAGRAM REELS', 'VIDEO SHOOTING', 'VIDEO EDITING', 'SMM CAMPAIGN'];

const PortfolioPage = () => {
  const smmPortfolio = servicesData.find(s => s.id === 'social-media-management')?.portfolio || [];
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedProject(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const allProjects = useMemo(() => [...smmPortfolio], [smmPortfolio]);
  
  const filtered = useMemo(() => 
    activeFilter === 'ALL'
      ? allProjects
      : allProjects.filter(p => (p.category || '').toUpperCase() === activeFilter),
    [activeFilter, allProjects]
  );

  const landscapeVideos = useMemo(() => filtered.filter(p => p.orientation === 'landscape'), [filtered]);
  const portraitVideos = useMemo(() => filtered.filter(p => p.orientation !== 'landscape'), [filtered]);

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f1015', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <SEO
        pageTitle="Immersive Portfolio | TalentElla Agency"
        description="Experience the future of digital marketing. Explore our award-winning work in branding, development, and social media."
      />

      <InteractiveHero
        theme="light"
        bgText="PORTFOLIO"
        tagline1="TALENTELLA"
        tagline2="PORTFOLIO PAGE"
        heading="IMPACTFUL"
        cursiveOverlay="Works"
        description={"CURRENTLY SHOWCASE OUR MOST IMPACTFUL PROJECTS.\nFOR MORE INFORMATION AND ADDITIONAL DETAILS, PLEASE CONTACT US."}
      />

      <HorizontalWork />
      
      <PortfolioTestimonial isMobile={isMobile} />

      <RemainingWork isMobile={isMobile} />

      <section style={{ padding: isMobile ? '8vh 4% 14vh' : '12vh 5% 16vh', backgroundColor: '#ffffff', position: 'relative', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: isMobile ? '2.5rem' : '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}
          >
            <div>
              <span style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
                Explore By Category
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#0f1015', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                All Creatives
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1rem', background: '#f8f9fc', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '100px' }}>
              <span style={{ fontSize: '0.7rem', color: '#555562', letterSpacing: '0.15em', fontWeight: 700 }}>{filtered.length} PROJECTS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ 
              display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: isMobile ? '2.5rem' : '4rem',
              position: 'sticky', top: '20px', zIndex: 100, padding: '1rem 0', backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}
          >
            {VIDEO_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                style={{
                  padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.4rem',
                  borderRadius: '100px',
                  border: `1px solid ${activeFilter === cat ? '#AC58E9' : 'rgba(0,0,0,0.08)'}`,
                  backgroundColor: activeFilter === cat ? '#AC58E9' : '#f8f9fc',
                  color: activeFilter === cat ? '#ffffff' : '#555562',
                  fontSize: isMobile ? '0.7rem' : '0.75rem',
                  fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: activeFilter === cat ? '0 4px 15px rgba(172,88,233,0.3)' : 'none',
                }}
              >
                {cat === 'ALL' ? 'All' : cat.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '6rem 0', color: '#888896' }}>
                No projects match this category yet.
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {landscapeVideos.length > 0 && (
                  <div style={{ marginBottom: isMobile ? '3rem' : '4rem' }}>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0f1015', letterSpacing: '0.02em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>Cinematic & Landscape</h3>
                    <LandscapeMarquee videos={landscapeVideos} setSelectedProject={setSelectedProject} isMobile={isMobile} />
                  </div>
                )}

                {portraitVideos.length > 0 && (
                  <div>
                    <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.4rem', fontWeight: 800, marginBottom: '1.5rem', color: '#0f1015', letterSpacing: '0.02em', textTransform: 'uppercase', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>Reels & Portrait</h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                      gap: isMobile ? '0.75rem' : '1.25rem',
                      alignItems: 'start',
                    }}>
                      {portraitVideos.map((p, i) => (
                        <PortfolioCard key={p.id || i} p={p} index={landscapeVideos.length + i} setSelectedProject={setSelectedProject} isMobile={isMobile} />
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 16, 21, 0.75)',
              backdropFilter: 'blur(16px)', zIndex: 9999,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: isMobile ? '1rem' : '3rem',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '1200px', maxHeight: '90vh',
                backgroundColor: '#ffffff', borderRadius: '24px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                overflow: 'auto', boxShadow: '0 40px 100px rgba(0,0,0,0.2), 0 0 60px rgba(172, 88, 233, 0.15)',
                position: 'relative', display: 'flex', flexDirection: isMobile ? 'column' : 'row',
              }}
            >
              {/* Media Section */}
              <div style={{ flex: isMobile ? 'none' : '1.2', position: 'relative', backgroundColor: '#0a0a0c', minHeight: isMobile ? '40vh' : 'auto', borderRight: isMobile ? 'none' : '1px solid rgba(0,0,0,0.08)' }}>
                {selectedProject.type === 'video' ? (
                  <video
                    src={selectedProject.content}
                    autoPlay controls preload="auto"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', maxHeight: isMobile ? '50vh' : '90vh' }}
                  />
                ) : (
                  <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: isMobile ? '300px' : '500px' }}>
                    <Image
                      src={selectedProject.image?.src || selectedProject.image}
                      alt={selectedProject.title || 'Project'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                )}
              </div>

              {/* Info Section */}
              <div style={{ flex: '1', padding: isMobile ? '2rem 1.5rem' : '3.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{
                      padding: '0.3rem 0.8rem', borderRadius: '4px',
                      backgroundColor: 'rgba(172, 88, 233, 0.12)',
                      border: '1px solid rgba(172, 88, 233, 0.3)',
                      color: '#7C3AED',
                      fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase'
                    }}>
                      {selectedProject.category || 'Portfolio Project'}
                    </span>
                    {selectedProject.metrics && (
                      <span style={{
                        padding: '0.3rem 0.8rem', borderRadius: '4px',
                        backgroundColor: '#f8f9fc',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        color: '#0f1015', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em'
                      }}>
                        {selectedProject.metrics}
                      </span>
                    )}
                  </div>
                  
                  <h3 style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 900, color: '#0f1015', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                    {selectedProject.title}
                  </h3>
                </div>

                <div style={{ flex: 1 }}>
                  {selectedProject.challenge && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.85rem', color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>The Challenge</h4>
                      <p style={{ color: '#444452', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{selectedProject.challenge}</p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.85rem', color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>The Solution</h4>
                      <p style={{ color: '#444452', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{selectedProject.solution}</p>
                    </div>
                  )}

                  {(!selectedProject.challenge && !selectedProject.solution && selectedProject.description) && (
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ fontSize: '0.85rem', color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 700 }}>Overview</h4>
                      <p style={{ color: '#444452', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>{selectedProject.description}</p>
                    </div>
                  )}

                  {selectedProject.techStack && (
                    <div>
                      <h4 style={{ fontSize: '0.85rem', color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem', fontWeight: 700 }}>Technologies Used</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f8f9fc', border: '1px solid rgba(0, 0, 0, 0.08)', borderRadius: '100px', fontSize: '0.75rem', color: '#555562', fontWeight: 600 }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {selectedProject.link && (
                  <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <a
                      href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                        width: '100%', padding: '1rem', borderRadius: '12px',
                        backgroundColor: '#AC58E9',
                        color: '#ffffff', fontSize: '1rem', fontWeight: 700, textDecoration: 'none',
                        transition: 'opacity 0.2s', cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(172, 88, 233, 0.3)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      Visit Live Website <ArrowUpRight size={18} strokeWidth={3} />
                    </a>
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  backgroundColor: '#f8f9fc', border: '1px solid rgba(0,0,0,0.1)',
                  color: '#0f1015', width: '40px', height: '40px', borderRadius: '50%',
                  cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
                  zIndex: 10, backdropFilter: 'blur(8px)', transition: 'all 0.2s',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#AC58E9'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f8f9fc'; e.currentTarget.style.color = '#0f1015'; }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
};

export default PortfolioPage;
