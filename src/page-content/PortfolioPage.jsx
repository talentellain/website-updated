'use client';

import React, { useRef, useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter } from 'lucide-react';
import InteractiveHero from '../components/InteractiveHero';

import { servicesData } from '../data/servicesData';
import onepieceImg from '../assets/onepiece.png';
import k72Img from '../assets/K72.png';

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
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 4,
    })));
  }, []);

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

const top3Featured = allFeatured.slice(0, 3);
const remainingFeatured = allFeatured.slice(3);

const HorizontalWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const scrollDistance = isMobile ? '-190vw' : '-148vw';
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', scrollDistance]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const idx = Math.round(v * (top3Featured.length - 1));
      setActiveIndex(Math.min(idx, top3Featured.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={targetRef} style={{ height: '300vh', position: 'relative', backgroundColor: '#000' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <motion.div style={{ x, display: 'flex', gap: isMobile ? '4vw' : '4vw', padding: '0 5%' }}>
          {top3Featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              style={{ width: isMobile ? '85vw' : '70vw', flexShrink: 0, position: 'relative' }}
            >
              <div style={{
                position: 'relative',
                height: isMobile ? '60vw' : '75vh',
                width: '100%',
                overflow: 'hidden',
                borderRadius: isMobile ? '16px' : '20px',
                border: activeIndex === i ? `1px solid ${categoryColors[project.category]}44` : '1px solid rgba(255,255,255,0.06)',
                boxShadow: activeIndex === i ? `0 20px 60px ${categoryColors[project.category]}22` : 'none',
                transition: 'all 0.5s ease',
              }}>
                <motion.img
                  whileHover={isMobile ? {} : { scale: 1.08 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  src={project.image?.src || project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: isMobile ? '2rem 1.5rem' : '4rem',
                }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '0.4rem 1.2rem',
                      borderRadius: '100px',
                      backgroundColor: `${categoryColors[project.category]}15`,
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: `1px solid ${categoryColors[project.category]}55`,
                      marginBottom: '1rem',
                      boxShadow: `0 8px 32px 0 rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.05)`
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: categoryColors[project.category], marginRight: '8px', boxShadow: `0 0 10px ${categoryColors[project.category]}` }} />
                      <span style={{ fontSize: '0.65rem', color: categoryColors[project.category], fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        {project.category}
                      </span>
                    </div>
                    <h3 style={{ 
                      fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 4vw, 4.5rem)', 
                      color: 'white', 
                      fontWeight: 800, 
                      margin: '0', 
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                      textShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}>
                      {project.title}
                    </h3>
                  </motion.div>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                      color: '#fff', fontSize: '0.85rem', fontWeight: 600,
                      textDecoration: 'none', marginTop: '2rem', cursor: 'pointer',
                      width: 'fit-content',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '100px',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Project 
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      width: '24px', height: '24px', borderRadius: '50%',
                      backgroundColor: categoryColors[project.category],
                      color: '#000'
                    }}>
                      <ArrowUpRight size={14} strokeWidth={3} />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div style={{
          position: 'absolute', bottom: isMobile ? '1.5rem' : '3rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 10,
        }}>
          {top3Featured.map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: activeIndex === i ? 1.4 : 1, backgroundColor: activeIndex === i ? '#aa3bff' : 'rgba(255,255,255,0.2)' }}
              style={{ width: 8, height: 8, borderRadius: '50%', cursor: 'pointer' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const RemainingWork = () => {
  return (
    <section style={{ padding: '10vh 5%', backgroundColor: '#000' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{ fontSize: '0.65rem', color: '#aa3bff', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>More Featured</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', color: 'white' }}>Rest of Websites</h2>
        </motion.div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', gap: '2rem' }}>
          {remainingFeatured.map((p, i) => {
            const catColor = categoryColors[p.category] || '#aa3bff';
            return (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                style={{
                  aspectRatio: '4/3',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                <img src={p.image?.src || p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)',
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
                    {p.category}
                  </span>
                  <h4 style={{ margin: '0.2rem 0 0', fontWeight: 800, fontSize: '1.15rem', color: 'white' }}>
                    {p.title}
                  </h4>
                </div>
              </motion.a>
            );
          })}
        </div>
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

      <InteractiveHero 
        bgText="PORTFOLIO"
        tagline1="TALENTELLA"
        tagline2="PORTFOLIO PAGE"
        heading="IMPACTFUL"
        cursiveOverlay="Works"
        description={"CURRENTLY SHOWCASING OUR MOST IMPACTFUL PROJECTS.\nFOR MORE INFORMATION AND ADDITIONAL DETAILS, PLEASE CONTACT US."}
      />

      <HorizontalWork />
      <RemainingWork />

      <section style={{ padding: '15vh 5% 20vh', backgroundColor: '#000', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}
          >
            <div>
             
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>
                All Projects
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
              <Filter size={14} color="rgba(255,255,255,0.5)" />
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', fontWeight: 600 }}>{filtered.length} PROJECTS</span>
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
                  padding: '0.6rem 1.4rem',
                  borderRadius: '4px',
                  border: `1px solid ${activeFilter === cat ? '#aa3bff' : 'rgba(255,255,255,0.1)'}`,
                  backgroundColor: activeFilter === cat ? 'rgba(170,59,255,0.1)' : 'transparent',
                  color: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeFilter === cat ? '0 0 20px rgba(170,59,255,0.2)' : 'none',
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
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))', gap: '1.5rem' }}
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
                      aspectRatio: '16/9',
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      borderRadius: '8px',
                      border: isHovered ? `1px solid ${catColor}88` : '1px solid rgba(255,255,255,0.08)',
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isHovered ? `0 15px 40px ${catColor}33` : 'none',
                      transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    }}
                  >
                    {p.type === 'video' ? (
                      <video src={p.content} autoPlay muted loop playsInline preload="metadata"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                      />
                    ) : (
                      <img src={imgSrc?.src || imgSrc} alt={projectTitle} loading="lazy" decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
                      />
                    )}

                    <div style={{
                      position: 'absolute', inset: 0,
                      background: isHovered
                        ? `linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent 80%)`
                        : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                      transition: 'background 0.5s ease',
                      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem',
                    }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '4px',
                        backgroundColor: 'transparent',
                        border: `1px solid ${catColor}`,
                        fontSize: '0.6rem', color: catColor, fontWeight: 700,
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        marginBottom: '1rem',
                        width: 'fit-content',
                      }}>
                        {p.category || 'Production'}
                      </span>

                      <motion.h4
                        animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ margin: '0', fontWeight: 900, fontSize: '1.4rem', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'white' }}
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
