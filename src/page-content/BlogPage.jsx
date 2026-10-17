'use client';

import React, { useState, useEffect } from 'react';
 
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';
import InteractiveHero from '../components/InteractiveHero';
import { blogPosts, blogCategories } from '../data/blogData';

const catColors = {
  'Digital Marketing': '#AC58E9',
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
      backgroundColor: '#f8f9fc',
      borderRadius: '20px',
      border: '1px solid rgba(0,0,0,0.08)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
    }}
  >
    <Link href={`/blog/${post.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{
          aspectRatio: '16/9',
          backgroundColor: '#f1f3f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(135deg, ${catColors[post.category] || 'rgba(172, 88, 233, 0.12)'} 0%, transparent 70%)`,
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', right: '-5%',
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontWeight: 900,
            color: 'rgba(0,0,0,0.04)',
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
            background: '#ffffff',
            border: `1px solid ${catColors[post.category] || '#AC58E9'}40`,
            fontSize: '0.55rem', fontWeight: 700, color: catColors[post.category] || '#AC58E9',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
          }}>
            {post.category}
          </div>
        </div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', fontSize: '0.65rem', color: '#888896' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Calendar size={10} /> {post.date}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Clock size={10} /> {post.readTime}
          </span>
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 0.6rem', lineHeight: 1.3, color: '#0f1015' }}>
          {post.title}
        </h3>
        <p style={{ fontSize: '0.82rem', color: '#555562', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.2rem', color: '#7C3AED', fontSize: '0.75rem', fontWeight: 700 }}>
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
    <div style={{ backgroundColor: '#ffffff', color: '#0f1015', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh' }}>

      <InteractiveHero 
        theme="light"
        bgText="BLOG"
        tagline1="TALENTELLA"
        tagline2="INSIGHTS & GUIDES"
        heading="THE BLOG"
        cursiveOverlay="Read"
        description="EXPERT INSIGHTS, ACTIONABLE GUIDES, AND THE LATEST TRENDS IN DIGITAL MARKETING, WEB DEVELOPMENT, AND BRANDING.\nEXPLORE OUR COMPREHENSIVE BLOG TO STAY AHEAD OF INDUSTRY TRENDS."
      />

      <section style={{ padding: isMobile ? '50px 5% 50px' : '80px 5% 70px', backgroundColor: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
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
                  padding: '0.6rem 1.4rem',
                  borderRadius: '100px',
                  border: `1px solid ${activeCategory === cat ? '#AC58E9' : 'rgba(0,0,0,0.08)'}`,
                  backgroundColor: activeCategory === cat ? '#AC58E9' : '#f8f9fc',
                  color: activeCategory === cat ? '#ffffff' : '#555562',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === cat ? '0 4px 15px rgba(172, 88, 233, 0.3)' : 'none',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '4rem 0', color: '#888896' }}>
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
