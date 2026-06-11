'use client';

import React, { useState, useEffect } from 'react';
 
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [id]);

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050505', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>404</h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>Post not found.</p>
        <Link href="/blog" style={{ color: '#aa3bff', textDecoration: 'none', fontWeight: 700 }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#050505', color: 'white', fontFamily: 'Outfit, sans-serif', minHeight: '100vh' }}>

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '100px 5% 60px' : '120px 5% 80px' }}>
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#aa3bff', textDecoration: 'none', fontWeight: 600, fontSize: '0.85rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
            <span style={{
              padding: '0.3rem 0.8rem', borderRadius: '100px',
              background: 'rgba(170,59,255,0.15)', border: '1px solid rgba(170,59,255,0.25)',
              fontSize: '0.6rem', fontWeight: 700, color: '#aa3bff', letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {post.category}
            </span>
          </div>

          <h1 style={{ fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, margin: '0 0 1rem', letterSpacing: '-0.02em' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {post.readTime}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Tag size={14} /> {post.author}</span>
          </div>

          <div style={{
            aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden',
            backgroundColor: '#0a0a0a', marginBottom: '3rem',
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, rgba(170,59,255,0.15), rgba(0,210,255,0.08))`,
          }}>
            <div style={{
              position: 'absolute', bottom: '-8%', right: '-3%',
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 900, color: 'rgba(255,255,255,0.03)',
              textTransform: 'uppercase', userSelect: 'none', pointerEvents: 'none',
              lineHeight: 1,
            }}>
              {post.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
            </div>
          </div>

          <div style={{
            fontSize: '1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)',
          }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tags</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {post.tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '0.3rem 0.8rem', borderRadius: '100px',
                  backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                  fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
            <Link href="/blog" style={{
              padding: '0.9rem 2rem', borderRadius: '100px',
              border: '1px solid rgba(255,255,255,0.15)', color: 'white',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: '0.3s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#aa3bff'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
            >
              <ArrowLeft size={16} /> All Articles
            </Link>
          </div>
        </motion.div>
      </article>

      
    </div>
  );
};

export default BlogPostPage;
