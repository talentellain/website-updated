import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X } from 'lucide-react';
import SEO from '../components/SEO';
import InteractiveHero from '../components/InteractiveHero';

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
  'INSTAGRAM REELS': '#ff3b8a',
  'VIDEO SHOOTING': '#00d2ff',
  'VIDEO EDITING': '#aa3bff',
  'SMM CAMPAIGN': '#ffcc00',
};

const top3Featured = allFeatured.slice(0, 3);
const remainingFeatured = allFeatured.slice(3);

/* ─── Horizontal Scroll Section ───────────────────────────────────── */
const HorizontalWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
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
                  src={project.image}
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
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
                    <div style={{
                      display: 'inline-flex', alignItems: 'center',
                      padding: '0.4rem 1.2rem', borderRadius: '100px',
                      backgroundColor: `${categoryColors[project.category]}15`,
                      backdropFilter: 'blur(12px)', border: `1px solid ${categoryColors[project.category]}55`,
                      marginBottom: '1rem',
                    }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: categoryColors[project.category], marginRight: '8px', boxShadow: `0 0 10px ${categoryColors[project.category]}` }} />
                      <span style={{ fontSize: '0.65rem', color: categoryColors[project.category], fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        {project.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 4vw, 4.5rem)', color: 'white', fontWeight: 800, margin: '0', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                      {project.title}
                    </h3>
                  </motion.div>
                  <motion.a
                    href={project.link} target="_blank" rel="noopener noreferrer"
                    whileHover={{ x: 5, backgroundColor: 'rgba(255,255,255,0.15)' }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
                      color: '#fff', fontSize: '0.85rem', fontWeight: 600,
                      textDecoration: 'none', marginTop: '2rem', cursor: 'pointer',
                      width: 'fit-content', padding: '0.8rem 1.5rem', borderRadius: '100px',
                      backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)', transition: 'all 0.3s ease'
                    }}
                  >
                    View Project
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: categoryColors[project.category], color: '#000' }}>
                      <ArrowUpRight size={14} strokeWidth={3} />
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div style={{ position: 'absolute', bottom: isMobile ? '1.5rem' : '3rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '0.6rem', zIndex: 10 }}>
          {top3Featured.map((_, i) => (
            <motion.div key={i} animate={{ scale: activeIndex === i ? 1.4 : 1, backgroundColor: activeIndex === i ? '#aa3bff' : 'rgba(255,255,255,0.2)' }} style={{ width: 8, height: 8, borderRadius: '50%', cursor: 'pointer' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Rest of Websites ─────────────────────────────────────────────── */
const RemainingWork = () => (
  <section style={{ padding: '10vh 5%', backgroundColor: '#000' }}>
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: '4rem' }}>
        <span style={{ fontSize: '0.65rem', color: '#aa3bff', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>More Featured</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', color: 'white' }}>Rest of Websites</h2>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))', gap: '2rem' }}>
        {remainingFeatured.map((p, i) => {
          const catColor = categoryColors[p.category] || '#aa3bff';
          return (
            <motion.a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -8 }}
              style={{ aspectRatio: '4/3', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative', display: 'block', textDecoration: 'none' }}
            >
              <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem' }}>
                <span style={{ display: 'inline-block', padding: '0.25rem 0.7rem', borderRadius: '100px', backgroundColor: `${catColor}1a`, border: `1px solid ${catColor}33`, fontSize: '0.55rem', color: catColor, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', width: 'fit-content' }}>
                  {p.category}
                </span>
                <h4 style={{ margin: '0.2rem 0 0', fontWeight: 800, fontSize: '1.15rem', color: 'white' }}>{p.title}</h4>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  </section>
);

/* ─── Hover Video (plays on hover, shows frame as thumbnail) ──────── */
const HoverVideo = ({ src, isHovered, onDimensionsLoaded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0.5;
      }
    }
  }, [isHovered]);

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      if (!isHovered) videoRef.current.currentTime = 0.5;
      if (onDimensionsLoaded) onDimensionsLoaded(videoRef.current.videoWidth, videoRef.current.videoHeight);
    }
  };

  return (
    <video
      ref={videoRef} src={src} muted loop playsInline preload="metadata"
      onLoadedMetadata={handleLoadedMetadata}
      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
    />
  );
};

/* ─── Single Portfolio Card ─────────────────────────────────────────── */
const PortfolioCard = ({ p, index, setSelectedVideo, isMobile }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('4/5');   // default portrait
  const [orientationKnown, setOrientationKnown] = useState(false);

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
      onClick={(e) => { if (isVideo) { e.preventDefault(); setSelectedVideo({ ...p, aspectRatio }); } }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.5 }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        aspectRatio: aspectRatio,
        backgroundColor: '#0a0a0a',
        borderRadius: isMobile ? '16px' : '12px',
        border: isHovered ? `1px solid ${catColor}88` : '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        position: 'relative',
        cursor: isVideo ? 'pointer' : 'default',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
        boxShadow: isHovered ? `0 20px 50px ${catColor}22` : 'none',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {isVideo && isMobile ? (
        <div style={{
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, #080611 0%, ${catColor}18 100%)`,
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
      ) : isVideo ? (
        <HoverVideo src={p.content} isHovered={isHovered} onDimensionsLoaded={handleDimensions} />
      ) : (
        <img src={imgSrc} alt={projectTitle} loading="lazy" decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', transform: isHovered ? 'scale(1.06)' : 'scale(1)' }}
        />
      )}

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: isHovered
          ? 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 80%)'
          : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)',
        transition: 'background 0.5s ease',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: isMobile ? '1.2rem' : '1.5rem',
      }}>
        <span style={{
          display: 'inline-block', padding: '0.25rem 0.65rem', borderRadius: '4px',
          border: `1px solid ${catColor}99`, fontSize: '0.55rem', color: catColor,
          fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
          marginBottom: '0.5rem', width: 'fit-content',
        }}>
          {p.category || 'Production'}
        </span>
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

      {/* Play icon top-right on hover */}
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

/* ─── Categories for filter ─────────────────────────────────────────── */
const VIDEO_CATEGORIES = ['ALL', 'INSTAGRAM REELS', 'VIDEO SHOOTING', 'VIDEO EDITING', 'SMM CAMPAIGN'];

/* ─── Main Page ─────────────────────────────────────────────────────── */
const PortfolioPage = () => {
  const smmPortfolio = servicesData.find(s => s.id === 'social-media-management')?.portfolio || [];
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedVideo(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const filtered = activeFilter === 'ALL'
    ? smmPortfolio
    : smmPortfolio.filter(p => (p.category || '').toUpperCase() === activeFilter);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'Outfit, sans-serif' }}>
      <SEO
        pageTitle="Immersive Portfolio | TalentElla Agency"
        description="Experience the future of digital marketing. Explore our award-winning work in branding, development, and social media."
      />

      <InteractiveHero
        bgText="PORTFOLIO"
        tagline1="TALENTELLA"
        tagline2="PORTFOLIO PAGE"
        heading="IMPACTFUL"
        cursiveOverlay="Works"
        description={"CURRENTLY SHOWCASE OUR MOST IMPACTFUL PROJECTS.\nFOR MORE INFORMATION AND ADDITIONAL DETAILS, PLEASE CONTACT US."}
      />

      <HorizontalWork />
      <RemainingWork />

      {/* ── SMM / Video Creatives Section ─────────────────────────── */}
      <section style={{ padding: isMobile ? '10vh 4% 16vh' : '15vh 5% 20vh', backgroundColor: '#000', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginBottom: isMobile ? '2.5rem' : '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}
          >
            <div>
              <span style={{ fontSize: '0.65rem', color: '#aa3bff', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
                SMM · Reels · Videos
              </span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.85)' }}>
                All Creatives
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', fontWeight: 600 }}>{filtered.length} CREATIVES</span>
            </div>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: isMobile ? '2.5rem' : '4rem' }}
          >
            {VIDEO_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                style={{
                  padding: isMobile ? '0.5rem 1rem' : '0.6rem 1.4rem',
                  borderRadius: '4px',
                  border: `1px solid ${activeFilter === cat ? '#aa3bff' : 'rgba(255,255,255,0.1)'}`,
                  backgroundColor: activeFilter === cat ? 'rgba(170,59,255,0.12)' : 'transparent',
                  color: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.4)',
                  fontSize: isMobile ? '0.7rem' : '0.75rem',
                  fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  cursor: 'pointer', transition: 'all 0.3s ease',
                  boxShadow: activeFilter === cat ? '0 0 20px rgba(170,59,255,0.2)' : 'none',
                }}
              >
                {cat === 'ALL' ? 'All' : cat.split(' ').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ')}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid — masonry-like: portrait cards are narrower, landscape are wider */}
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ textAlign: 'center', padding: '6rem 0', color: 'rgba(255,255,255,0.3)' }}>
                No projects match this category yet.
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                  gap: isMobile ? '0.75rem' : '1.25rem',
                  alignItems: 'start',
                }}
              >
                {filtered.map((p, i) => (
                  <PortfolioCard
                    key={p.id || i}
                    p={p}
                    index={i}
                    setSelectedVideo={setSelectedVideo}
                    isMobile={isMobile}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── Video Modal ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)',
              backdropFilter: 'blur(16px)', zIndex: 9999,
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: isMobile ? '1rem' : '2rem',
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                // Landscape → wide, portrait → tall
                ...(selectedVideo.aspectRatio === '16/9'
                  ? { width: isMobile ? '95vw' : 'min(90vw, 1000px)', aspectRatio: '16/9' }
                  : { width: isMobile ? 'min(90vw, 450px)' : '450px', aspectRatio: selectedVideo.aspectRatio || '4/5', maxHeight: '85vh' }),
                maxWidth: '100%',
                backgroundColor: '#0a0a0c', borderRadius: '20px',
                overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.9)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo.content}
                autoPlay controls preload="auto"
                style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000' }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  position: 'absolute', top: '0.85rem', right: '0.85rem',
                  backgroundColor: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white', width: '40px', height: '40px', borderRadius: '50%',
                  cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center',
                  zIndex: 10, transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(170,59,255,0.8)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.65)'}
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
