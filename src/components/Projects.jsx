import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    client: 'Adidas Animated',
    desc: 'High-performance interactive e-commerce experience with smooth animations and dynamic product reveals.',
    type: 'E-Commerce',
    link: 'https://addidas-animated.vercel.app/',
  },
  {
    id: '02',
    client: 'Ring Portfolio',
    desc: 'Immersive 3D portfolio experience featuring high-end digital craftsmanship and interactive storytelling.',
    type: 'UX/UI Design',
    link: 'https://ring-portfolio.vercel.app/',
  },
  {
    id: '03',
    client: 'Astro Portfolio',
    desc: 'A sleek, modern portfolio built with Astro for maximum performance and SEO optimization — developed by TalentElla.',
    type: 'Web Development',
    link: 'https://astro-portfolio-opal-ten.vercel.app/',
  },
  {
    id: '04',
    client: 'DentWise AI',
    desc: 'Intelligent dental assistant platform with 24/7 AI-patient interaction — built with cutting-edge web technologies by TalentElla.',
    type: 'AI / SaaS',
    link: 'https://smart-dent-ai-app.vercel.app/',
  },
  {
    id: '05',
    client: 'K72 Agency',
    desc: 'Award-winning creative agency portal with cinematic WebGL animations and immersive user experience design.',
    type: 'Creative Dev',
    link: 'https://react-animated-web-l9i8.vercel.app/',
  },
  {
    id: '06',
    client: 'One Piece Legacy',
    desc: 'Immersive storytelling experience with dynamic content and engaging visual narratives for maximum user engagement.',
    type: 'Brand Identity',
    link: 'https://one-piece-eight-henna.vercel.app/',
  },
  {
    id: '07',
    client: 'Brand R.Comm',
    desc: "National agriculture & rural communications summit & awards portal engineered for high-authority presence and delegate conversion.",
    type: 'Brand Identity',
    link: 'https://www.brandrcomm.com/',
  },
  {
    id: '08',
    client: 'Snail Integral',
    desc: 'Strategic corporate & government communications platform delivering measurable impact with interactive storytelling.',
    type: 'Web Development',
    link: 'https://www.snailintegral.com/',
  },
  {
    id: '09',
    client: 'Creative Production',
    desc: 'Cinematic brand storytelling and high-end video production showcasing creative excellence.',
    type: 'Production',
    link: '#',
  }
];

const typeColors = {
  'E-Commerce': '#00d2ff',
  'UX/UI Design': '#AC58E9',
  'Web Development': '#AC58E9',
  'AI / SaaS': '#aa3bff',
  'Creative Dev': '#3bffaa',
  'Brand Identity': '#ff3b3b',
  'Production': '#ff8c3b',
};

const ProjectCard = ({ project, index, scrollProgress, isMobile, totalProjects, activeIndex }) => {

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
            <span style={{ fontSize: '2.5rem', fontWeight: 900, opacity: 0.15, lineHeight: 1, fontFamily: "'Space Grotesk', sans-serif" }}>{project.id}</span>
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


      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : containerRef,
    offset: ['start start', 'end end'],
  });

  const { scrollYProgress: borderScrollProgress } = useScroll({
    target: isMobile ? undefined : containerRef,
    offset: ['start end', 'start start'],
  });

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
