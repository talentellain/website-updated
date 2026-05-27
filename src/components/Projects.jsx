import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import dentwise from '../assets/dentwise.png';
import k72 from '../assets/K72.png';
import onepiece from '../assets/onepiece.png';
import whatsappVideo from '../assets/video/WhatsApp Video 2026-05-07 at 6.59.49 PM.mp4';

const projects = [
  {
    id: '01',
    client: 'Adidas Animated',
    desc: 'High-performance interactive e-commerce experience with smooth animations and dynamic product reveals.',
    type: 'E-Commerce',
    image: '/projects/addidas.png',
    link: 'https://addidas-animated.vercel.app/',
    alt: 'Adidas Animated — immersive e-commerce experience by TalentElla',
  },
  {
    id: '02',
    client: 'Ring Portfolio',
    desc: 'Immersive 3D portfolio experience featuring high-end digital craftsmanship and interactive storytelling.',
    type: 'UX/UI Design',
    image: '/projects/rig.png',
    link: 'https://ring-portfolio.vercel.app/',
    alt: 'Ring Portfolio — 3D interactive web design by TalentElla',
  },
  {
    id: '03',
    client: 'Astro Portfolio',
    desc: 'A sleek, modern portfolio built with Astro for maximum performance and SEO optimization — developed by TalentElla.',
    type: 'Web Development',
    image: '/projects/astro-portfolio.png',
    link: 'https://astro-portfolio-opal-ten.vercel.app/',
    alt: 'Astro Portfolio — high-performance web solution by TalentElla digital agency',
  },
  {
    id: '04',
    client: 'DentWise AI',
    desc: 'Intelligent dental assistant platform with 24/7 AI-patient interaction — built with cutting-edge web technologies by TalentElla.',
    type: 'AI / SaaS',
    image: dentwise,
    link: 'https://smart-dent-ai-app.vercel.app/',
    alt: 'DentWise AI dental assistant web application — healthcare SaaS platform developed by TalentElla, full-service digital marketing agency India',
  },
  {
    id: '05',
    client: 'K72 Agency',
    desc: 'Award-winning creative agency portal with cinematic WebGL animations and immersive user experience design.',
    type: 'Creative Dev',
    image: k72,
    link: 'https://react-animated-web-l9i8.vercel.app/',
    alt: 'K72 creative agency website — award-winning animated web portal by TalentElla brand development agency',
  },
  {
    id: '06',
    client: 'One Piece Legacy',
    desc: 'Immersive storytelling experience with dynamic content and engaging visual narratives for maximum user engagement.',
    type: 'Brand Identity',
    image: onepiece,
    link: 'https://one-piece-eight-henna.vercel.app/',
    alt: 'One Piece Legacy immersive storytelling website — narrative web experience by TalentElla content marketing agency India',
  },
  {
    id: '07',
    client: 'Creative Production',
    desc: 'Cinematic brand storytelling and high-end video production showcasing creative excellence.',
    type: 'Production',
    video: whatsappVideo,
    link: '#',
    alt: 'Creative Production showcase — premium video by TalentElla',
  }
];

const typeColors = {
  'E-Commerce': '#00d2ff',
  'UX/UI Design': '#a78bfa',
  'Web Development': '#ffcc00',
  'AI / SaaS': '#aa3bff',
  'Creative Dev': '#3bffaa',
  'Brand Identity': '#ff3b3b',
  'Production': '#ff8c3b',
};

const ProjectCard = ({ project, index, scrollProgress, isMobile, totalProjects, activeIndex }) => {
  const videoRef = useRef(null);
  const [imgHovered, setImgHovered] = useState(false);

  const revealStart = 0.1;
  const revealEnd = 0.85;
  const step = (revealEnd - revealStart) / (totalProjects - 1);

  const start = index === 0 ? 0 : revealStart + (index - 1) * step;
  const end = index === 0 ? 0 : revealStart + index * step;

  const y = useTransform(scrollProgress, [start, end], [index === 0 ? 0 : 700, 0]);
  const scale = useTransform(scrollProgress, [start, end], [index === 0 ? 1 : 0.94, 1]);

  const nextStart = index === 0 ? revealStart : revealStart + index * step;
  const stackScale = useTransform(scrollProgress, [nextStart, nextStart + 0.1], [1, 0.96]);
  const stackY = useTransform(scrollProgress, [nextStart, nextStart + 0.1], [0, -20]);
  const combinedScale = useTransform(() => stackScale.get() * scale.get());

  const handleExplore = () => {
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  const isActive = activeIndex === index;
  const typeColor = typeColors[project.type] || '#aa3bff';

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: `calc(2vh + ${index * 2.5}rem)`,
        left: '50%',
        x: '-50%',
        width: '90%',
        maxWidth: '1100px',
        zIndex: 10 + index,
        y,
        scale: combinedScale,
        translateY: stackY,
        willChange: 'transform',
      }}
    >
      <div
        className="mobile-padding-sm"
        style={{
          backgroundColor: '#050508',
          borderRadius: '32px',
          border: isActive ? '1px solid rgba(170,59,255,0.25)' : '1px solid rgba(255, 255, 255, 0.18)',
          padding: 'clamp(1.25rem, 4vw, 3rem)',
          boxShadow: isActive ? '0 0 60px rgba(170,59,255,0.08), 0 60px 120px rgba(0,0,0,1)' : '0 60px 120px rgba(0,0,0,1)',
          overflow: 'hidden',
          position: 'relative',
          transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
        }}
      >
        <div className="flex-col-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2.5rem)', alignItems: 'center' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 900, opacity: 0.15, lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>{project.id}</span>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#aa3bff', opacity: 0.7 }}>Project</span>
                <span style={{
                  fontSize: '0.55rem', fontWeight: 700, padding: '0.2rem 0.7rem',
                  borderRadius: '100px', backgroundColor: `${typeColor}22`,
                  border: `1px solid ${typeColor}44`, color: typeColor, letterSpacing: '0.08em',
                }}>
                  {project.type}
                </span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>{project.client}</h3>
            </div>
          </div>

          <motion.button
            onClick={handleExplore}
            whileHover={{ scale: 1.05, backgroundColor: '#aa3bff', color: 'white', borderColor: '#aa3bff' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(0.6rem, 2vw, 1rem) clamp(1rem, 3vw, 2.2rem)',
              borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'transparent',
              color: 'white',
              fontWeight: 700,
              fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              zIndex: 20,
              transition: 'all 0.3s ease',
            }}
          >
            EXPLORE <ArrowUpRight size={20} />
          </motion.button>
        </div>

        <p style={{
          color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.6,
          margin: '0 0 1.5rem', maxWidth: '600px',
        }}>
          {project.desc}
        </p>

        <div
          onClick={handleExplore}
          onMouseEnter={() => { setImgHovered(true); if (videoRef.current) videoRef.current.play(); }}
          onMouseLeave={() => { setImgHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }}
          style={{
            width: '100%',
            aspectRatio: isMobile ? '16/11' : '2/1.1',
            borderRadius: '20px',
            overflow: 'hidden',
            backgroundColor: '#111',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          {project.video ? (
            <motion.video
              ref={videoRef}
              src={project.video}
              muted
              loop
              playsInline
              preload="metadata"
              animate={{ scale: imgHovered ? 1.06 : 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <motion.img
              src={project.image}
              animate={{ scale: imgHovered ? 1.06 : 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt={project.alt || `${project.client} — project by TalentElla, India's 360° marketing agency`}
              loading="lazy"
              decoding="async"
            />
          )}

          <motion.div
            animate={{ opacity: imgHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
              display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
              padding: '2rem', pointerEvents: 'none',
            }}
          >
            <motion.div
              animate={{ y: imgHovered ? 0 : 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                padding: '0.6rem 1.2rem', borderRadius: '100px',
                backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>View Live</span>
              <ArrowUpRight size={14} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress: borderScrollProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const borderProgress = useTransform(borderScrollProgress, [0, 1], ['60px', '0px']);

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      const step = 0.85 / (projects.length - 1);
      const idx = v < 0.1 ? 0 : Math.min(Math.floor((v - 0.1) / step) + 1, projects.length - 1);
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div id="projects" ref={containerRef} style={{
      position: 'relative',
      minHeight: '1000vh',
      marginBottom: '-100vh',
      zIndex: 40,
    }}>
      <motion.section
        className="sticky-section black-purple-gradient"
        style={{
          overflow: 'hidden',
          borderTopLeftRadius: isMobile ? '0px' : borderProgress,
          borderTopRightRadius: isMobile ? '0px' : borderProgress,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          height: '100dvh',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            height: '30vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingBottom: '0',
            alignItems: 'center',
          }}
        >
          <h2
            className="hero-title-shimmer"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            {'PROJECTS'.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.85rem',
            marginTop: '0.75rem',
            maxWidth: '500px',
            textAlign: 'center',
            marginInline: 'auto',
          }}>
            Real results from India's leading integrated marketing solutions agency
          </p>

          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1.5rem' }}>
            {projects.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: activeIndex === i ? 24 : 6,
                  backgroundColor: activeIndex === i ? '#aa3bff' : 'rgba(255,255,255,0.15)',
                }}
                transition={{ duration: 0.4 }}
                style={{ height: 4, borderRadius: '4px' }}
              />
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} scrollProgress={scrollYProgress} isMobile={isMobile} totalProjects={projects.length} activeIndex={activeIndex} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
