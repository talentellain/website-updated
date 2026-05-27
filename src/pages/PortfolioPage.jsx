import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import SEO from '../components/SEO';

import { servicesData } from '../data/servicesData';
import onepieceImg from '../assets/onepiece.png';
import k72Img from '../assets/K72.png';
import dentwiseImg from '../assets/dentwise.png';

const allFeatured = [
  { id: 1, title: 'Symetra Main', category: 'ENTERPRISE', image: '/projects/image copy.png', link: 'https://www.simetratech.com' },
  { id: 2, title: 'Zobiit', category: 'WEB DEVELOPMENT', image: '/projects/zobiit.png', link: 'https://zobiit.com' },
  { id: 3, title: 'Digniteq', category: 'BRAND IDENTITY', image: '/projects/digniteq.png', link: 'https://www.digniteq.in' },
  { id: 4, title: 'Thrifty Clothing', category: 'WEB DEVELOPMENT', image: '/projects/image.png', link: 'https://thrifty-clothing-frontend.vercel.app/home' },
  { id: 5, title: 'K27 Animation', category: 'BRAND IDENTITY', image: k72Img, link: 'https://react-animated-web-l9i8.vercel.app/' },
  { id: 6, title: 'Adidas Concept', category: 'MOTION DESIGN', image: '/projects/addidas.png', link: 'https://addidas-animated.vercel.app/' },
  { id: 7, title: 'One Piece', category: 'E-COMMERCE', image: onepieceImg, link: 'https://one-piece-eight-henna.vercel.app/' },
  { id: 8, title: 'Astro Portfolio', category: 'CREATIVE DEV', image: '/projects/astro-portfolio.png', link: 'https://astro-portfolio-opal-ten.vercel.app/' },
  { id: 9, title: 'Ring Portfolio', category: 'UX/UI DESIGN', image: '/projects/rig.png', link: 'https://ring-portfolio.vercel.app/' },
];

const categoryColors = {
  'E-COMMERCE': '#aa3bff',
  'BRAND IDENTITY': '#00d2ff',
  'WEB DEVELOPMENT': '#ffcc00',
  'ENTERPRISE': '#ff3b3b',
  'CREATIVE DEV': '#3bffaa',
  'MOTION DESIGN': '#ff8c3b',
  'UX/UI DESIGN': '#a78bfa',
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 6 + 4,
    delay: Math.random() * 4,
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: 'rgba(170, 59, 255, 0.3)',
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

const HorizontalWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-85%']);
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const idx = Math.round(v * (allFeatured.length - 1));
      setActiveIndex(Math.min(idx, allFeatured.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={targetRef} style={{ height: '600vh', position: 'relative', backgroundColor: '#050505' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div style={{ x, display: 'flex', gap: '4vw', padding: '0 5%' }}>
          {allFeatured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              style={{ width: '70vw', flexShrink: 0, position: 'relative' }}
            >
              <div style={{
                position: 'relative',
                height: '75vh',
                width: '100%',
                overflow: 'hidden',
                borderRadius: '20px',
                border: activeIndex === i ? `1px solid ${categoryColors[project.category]}44` : '1px solid rgba(255,255,255,0.06)',
                boxShadow: activeIndex === i ? `0 20px 60px ${categoryColors[project.category]}22` : 'none',
                transition: 'all 0.5s ease',
              }}>
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem',
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div style={{
                      display: 'inline-block',
                      padding: '0.3rem 1rem',
                      borderRadius: '100px',
                      backgroundColor: `${categoryColors[project.category]}22`,
                      border: `1px solid ${categoryColors[project.category]}44`,
                      marginBottom: '0.8rem',
                    }}>
                      <span style={{ fontSize: '0.65rem', color: categoryColors[project.category], fontWeight: 800, letterSpacing: '0.15em' }}>
                        {project.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', fontWeight: 900, margin: '0.3rem 0', letterSpacing: '-0.02em' }}>
                      {project.title}
                    </h3>
                  </motion.div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                      color: categoryColors[project.category], fontSize: '0.8rem', fontWeight: 600,
                      textDecoration: 'none', marginTop: '1rem', cursor: 'pointer',
                      width: 'fit-content',
                    }}
                  >
                    View Project <ArrowUpRight size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div style={{
        position: 'fixed', bottom: '3rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 10,
      }}>
        {allFeatured.map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: activeIndex === i ? 1.4 : 1, backgroundColor: activeIndex === i ? '#aa3bff' : 'rgba(255,255,255,0.2)' }}
            style={{ width: 8, height: 8, borderRadius: '50%', cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  );
};

const categories = ['ALL', 'WEB DEVELOPMENT', 'BRAND IDENTITY', 'E-COMMERCE', 'ENTERPRISE', 'MOTION DESIGN', 'UX/UI DESIGN', 'CREATIVE DEV'];

const PortfolioPage = () => {
  const smmPortfolio = servicesData.find(s => s.id === 'social-media-management')?.portfolio || [];
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeFilter === 'ALL'
    ? smmPortfolio
    : smmPortfolio.filter(p => (p.category || 'Production').toUpperCase() === activeFilter);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'Outfit, sans-serif' }}>
      <SEO
        pageTitle="Immersive Portfolio | TalentElla Agency"
        description="Experience the future of digital marketing. Explore our award-winning work in branding, development, and social media."
      />

      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FloatingParticles />
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'radial-gradient(circle at 30% 50%, rgba(170, 59, 255, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(0, 210, 255, 0.06) 0%, transparent 50%)',
          zIndex: 1,
        }} />

        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 5%' }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ fontSize: '0.75rem', color: '#aa3bff', fontWeight: 800, letterSpacing: '0.4em', textTransform: 'uppercase', display: 'block', marginBottom: '1.5rem' }}
            >
              [ curated showcase ]
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.9, margin: 0, textTransform: 'uppercase' }}
            >
              Impactful<br />Works.
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '3rem', maxWidth: '1200px', marginInline: 'auto' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', maxWidth: '300px', textAlign: 'left', lineHeight: 1.6 }}>
              We don't just create assets; we build legacies. Every pixel is a promise of performance.
            </p>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '3.5rem', fontWeight: 900, color: 'rgba(170,59,255,0.08)', display: 'block', lineHeight: 1, letterSpacing: '-0.03em' }}>2026</span>
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.15em' }}>REDEFINING EXCELLENCE</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.4, zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #aa3bff, transparent)' }} />
        </motion.div>
      </section>

      <HorizontalWork />

      <section style={{ padding: '15vh 5% 20vh', backgroundColor: '#000', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}
          >
            <div>
              <span style={{ fontSize: '0.65rem', color: '#aa3bff', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>The Archive</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em' }}>All Projects</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Filter size={12} color="rgba(255,255,255,0.3)" />
              <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>{filtered.length} PROJECTS</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '4rem' }}
          >
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '100px',
                  border: `1px solid ${activeFilter === cat ? '#aa3bff' : 'rgba(255,255,255,0.1)'}`,
                  backgroundColor: activeFilter === cat ? 'rgba(170,59,255,0.15)' : 'transparent',
                  color: activeFilter === cat ? '#aa3bff' : 'rgba(255,255,255,0.5)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat === 'ALL' ? 'All' : cat.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '6rem 0', color: 'rgba(255,255,255,0.3)' }}
              >
                No projects match this category yet.
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}
              >
                {filtered.map((p, i) => {
                  const catColor = categoryColors[p.category] || '#aa3bff';
                  const isHovered = hoveredId === i;
                  const projectLink = p.link || p.url || '#';
                  const projectTitle = p.title || 'Project';
                  const imgSrc = p.image || p.thumbnail;
                  return (
                  <motion.a
                    key={i}
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    onMouseEnter={() => setHoveredId(i)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{ y: -8 }}
                    style={{
                      aspectRatio: '4/3',
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      borderRadius: '16px',
                      border: isHovered ? `1px solid ${catColor}66` : '1px solid rgba(255,255,255,0.05)',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      transition: 'border-color 0.4s ease',
                      boxShadow: isHovered ? `0 0 30px ${catColor}22` : 'none',
                    }}
                  >
                    {p.type === 'video' ? (
                      <video src={p.content} autoPlay muted loop playsInline preload="metadata"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                      />
                    ) : (
                      <img src={imgSrc} alt={projectTitle} loading="lazy" decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                      />
                    )}

                    <div style={{
                      position: 'absolute', inset: 0,
                      background: isHovered
                        ? `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)`
                        : 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)',
                      transition: 'background 0.4s ease',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem',
                    }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.7rem',
                        borderRadius: '100px',
                        backgroundColor: `${catColor}1a`,
                        border: `1px solid ${catColor}33`,
                        fontSize: '0.55rem', color: catColor, fontWeight: 800,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                        width: 'fit-content',
                      }}>
                        {p.category || 'Production'}
                      </span>

                      <motion.h4
                        animate={{ y: isHovered ? 0 : 4 }}
                        transition={{ duration: 0.3 }}
                        style={{ margin: '0.2rem 0 0', fontWeight: 800, fontSize: '1.15rem', lineHeight: 1.2 }}
                      >
                        {projectTitle}
                      </motion.h4>

                      <motion.div
                        initial={false}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.6rem' }}
                      >
                        <span style={{ fontSize: '0.7rem', color: catColor, fontWeight: 600 }}>View project</span>
                        <ArrowUpRight size={12} color={catColor} />
                      </motion.div>
                    </div>

                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          position: 'absolute', top: '1rem', right: '1rem',
                          width: 36, height: 36, borderRadius: '50%',
                          backgroundColor: `${catColor}22`,
                          backdropFilter: 'blur(4px)',
                          border: `1px solid ${catColor}44`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <ArrowUpRight size={14} color={catColor} />
                      </motion.div>
                    )}
                  </motion.a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      
    </div>
  );
};

export default PortfolioPage;
