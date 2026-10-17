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
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', color: '#0f1015', padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem', color: '#0f1015' }}>404</h1>
        <p style={{ color: '#555562', marginBottom: '2rem' }}>Post not found.</p>
        <Link href="/blog" style={{ color: '#7C3AED', textDecoration: 'none', fontWeight: 700 }}>← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f1015', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", minHeight: '100vh' }}>

      <article style={{ maxWidth: '800px', margin: '0 auto', padding: isMobile ? '100px 5% 60px' : '120px 5% 80px' }}>
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#7C3AED', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
            <span style={{
              padding: '0.35rem 0.9rem', borderRadius: '100px',
              background: 'rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.25)',
              fontSize: '0.65rem', fontWeight: 700, color: '#7C3AED', letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {post.category}
            </span>
          </div>

          <h1 style={{ fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 1rem', letterSpacing: '-0.02em', color: '#0f1015', fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem', fontSize: '0.8rem', color: '#888896' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={14} /> {post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={14} /> {post.readTime}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Tag size={14} /> {post.author}</span>
          </div>

          <div style={{
            aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden',
            backgroundColor: '#f1f3f9', marginBottom: '3rem',
            border: '1px solid rgba(0,0,0,0.08)',
            position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `linear-gradient(135deg, rgba(172,88,233,0.12), rgba(124,58,237,0.05))`,
          }}>
            <div style={{
              position: 'absolute', bottom: '-8%', right: '-3%',
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 900, color: 'rgba(0,0,0,0.04)',
              textTransform: 'uppercase', userSelect: 'none', pointerEvents: 'none',
              lineHeight: 1,
            }}>
              {post.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
            </div>
          </div>

          <div style={{
            fontSize: '1.05rem', lineHeight: 1.85, color: '#333340',
          }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontSize: '0.75rem', color: '#888896', marginBottom: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tags</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {post.tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '0.35rem 0.85rem', borderRadius: '100px',
                  backgroundColor: '#f8f9fc', border: '1px solid rgba(0,0,0,0.08)',
                  fontSize: '0.75rem', color: '#555562', fontWeight: 600
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}>
            <Link href="/blog" style={{
              padding: '0.9rem 2.2rem', borderRadius: '100px',
              border: '1px solid #0f1015', backgroundColor: '#0f1015', color: '#ffffff',
              textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#7C3AED';
                e.currentTarget.style.borderColor = '#7C3AED';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(124, 58, 237, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#0f1015';
                e.currentTarget.style.borderColor = '#0f1015';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
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
