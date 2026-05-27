import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts, blogCategories } from '../data/blogData';

const catColors = {
  'Digital Marketing': '#a78bfa',
  'Web Development': '#60a5fa',
  'Social Media': '#f472b6',
  'Branding': '#34d399',
  'SEO': '#fbbf24',
  'App Development': '#818cf8',
  'Influencer Marketing': '#fb923c',
  'Lead Generation': '#2dd4bf',
};

const BlogCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    whileHover={{ y: -6 }}
    style={{
      backgroundColor: 'rgba(255,255,255,0.02)',
      borderRadius: '20px',
      border: '1px solid rgba(255,255,255,0.06)',
      overflow: 'hidden',
      transition: 'border-color 0.3s ease',
    }}
  >
    <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{
          aspectRatio: '16/9',
          backgroundColor: '#0a0a0a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${catColors[post.category] || 'rgba(167,139,250,0.2)'} 0%, transparent 70%)`,
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', right: '-5%',
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.03)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            lineHeight: 1,
            userSelect: 'none',
            pointerEvents: 'none',
          }}>
            {post.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
          </div>
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
            padding: '0.3rem 0.8rem', borderRadius: '100px',
            background: `${catColors[post.category] || 'rgba(167,139,250,0.15)'}20`,
            border: `1px solid ${catColors[post.category] || 'rgba(167,139,250,0.25)'}40`,
            fontSize: '0.55rem', fontWeight: 700, color: catColors[post.category] || '#a78bfa',
            letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            {post.category}
          </div>
        </div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Calendar size={10} /> {post.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={10} /> {post.readTime}
          </span>
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.6rem', lineHeight: 1.3, color: 'white' }}>
          {post.title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.2rem', color: '#a78bfa', fontSize: '0.75rem', fontWeight: 600 }}>
          Read More <ArrowUpRight size={12} />
        </div>
      </div>
    </Link>
  </motion.div>
);

const BlogPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'Outfit, sans-serif', minHeight: '100vh' }}>
      <SEO
        pageTitle="Blog — Digital Marketing Insights & Guides"
        description="Expert insights on digital marketing, web development, SEO, social media, branding, and app development. TalentElla's blog helps Indian businesses grow online."
        keywords="digital marketing blog India, marketing tips, SEO guide, social media strategy, web development guide, branding tips India"
      />

      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: isMobile ? '80px 5% 30px' : '100px 5% 50px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 40%, rgba(167,139,250,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(196,181,253,0.05) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}></div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1.2rem', borderRadius: '100px', backgroundColor: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#a78bfa', boxShadow: '0 0 10px #a78bfa' }}></div>
            <span style={{ fontSize: '0.65rem', color: '#a78bfa', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Insights & Guides</span>
          </div>

          <h1 style={{ fontSize: isMobile ? 'clamp(2.5rem, 10vw, 3.5rem)' : 'clamp(3.5rem, 7vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, margin: 0, textTransform: 'uppercase' }}>
            THE TALENTELLA <br />
            <span style={{ background: 'linear-gradient(to right, #a78bfa, #c4b5fd)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '1.2em' }}>BLOG</span>
          </h1>
          
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0', lineHeight: 1.6, fontWeight: 300 }}>
            Expert insights, actionable guides, and the latest trends in digital marketing, web development, branding, and beyond.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '700px', margin: '1rem auto 0' }}>
            Explore our comprehensive digital marketing blog featuring deep dives into SEO strategies, social media marketing, content creation, and modern web design. Our expert articles are crafted to help businesses and startups stay ahead of industry trends, optimize their online presence, and achieve measurable growth.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })} 
              style={{ width: isMobile ? '100%' : 'auto', padding: '0.8rem 2.2rem', borderRadius: '100px', background: 'linear-gradient(135deg, #a78bfa, #c4b5fd)', color: '#000', border: 'none', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
            >
              Start Reading <ArrowUpRight size={16} />
            </motion.button>
            <Link to="/#contact" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                style={{ width: isMobile ? '100%' : 'auto', padding: '0.8rem 2.2rem', borderRadius: '100px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Subscribe
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: isMobile ? '0 5% 50px' : '0 5% 70px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem', justifyContent: 'center' }}
          >
            {blogCategories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '100px',
                  border: `1px solid ${activeCategory === cat ? '#a78bfa' : 'rgba(255,255,255,0.1)'}`,
                  backgroundColor: activeCategory === cat ? 'rgba(167,139,250,0.15)' : 'transparent',
                  color: activeCategory === cat ? '#a78bfa' : 'rgba(255,255,255,0.5)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '4rem 0', color: 'rgba(255,255,255,0.3)' }}>
                No posts in this category yet.
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}
              >
                {filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      
    </div>
  );
};

export default BlogPage;
