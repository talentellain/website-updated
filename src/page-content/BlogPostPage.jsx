'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  Clock,
  UserCheck,
  Share2,
  Check,
  ArrowRight,
  BookmarkCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { blogPosts } from '../data/blogData';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Extract H2 headings for Table of Contents
    if (typeof window !== 'undefined') {
      const articleEl = document.getElementById('blog-article-content');
      if (articleEl) {
        const h2Elements = articleEl.querySelectorAll('h2');
        const extracted = Array.from(h2Elements).map((h2, idx) => {
          if (!h2.id) {
            h2.id = `section-${idx + 1}`;
          }
          return { id: h2.id, text: h2.innerText };
        });
        setHeadings(extracted);
      }
    }
  }, [id, post]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  if (!post) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          color: '#0f1015',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.8rem', color: '#0f1015' }}>404</h1>
        <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '1.1rem' }}>The article you are looking for does not exist.</p>
        <Link
          href="/blog"
          style={{
            padding: '10px 24px',
            borderRadius: '9999px',
            backgroundColor: '#7c3aed',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: 700,
          }}
        >
          ← Return to Blog
        </Link>
      </div>
    );
  }

  // Related posts (excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags?.some((t) => post.tags?.includes(t))))
    .slice(0, 2);

  const fallbackRelated = relatedPosts.length > 0 ? relatedPosts : blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        color: '#0f1015',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        minHeight: '100vh',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .te-blog-container {
          max-width: 860px;
          margin: 0 auto;
          padding: clamp(96px, 12vw, 130px) clamp(18px, 4vw, 32px) 80px;
        }

        /* ── Breadcrumb ── */
        .te-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          color: #94a3b8;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .te-breadcrumb a {
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .te-breadcrumb a:hover {
          color: #7c3aed;
        }

        .te-breadcrumb .active-crumb {
          color: #0f1015;
          font-weight: 600;
          max-width: 280px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* ── Article Content Typography ── */
        #blog-article-content {
          font-size: clamp(15.5px, 1.15vw, 17px);
          line-height: 1.82;
          color: #27272a;
        }

        #blog-article-content p {
          margin: 0 0 1.5rem 0;
        }

        #blog-article-content h2 {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(1.45rem, 3vw, 1.85rem);
          font-weight: 800;
          color: #0f1015;
          line-height: 1.25;
          margin: 2.8rem 0 1rem 0;
          letter-spacing: -0.015em;
          scroll-margin-top: 100px;
        }

        #blog-article-content h3 {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-size: clamp(1.2rem, 2.2vw, 1.4rem);
          font-weight: 700;
          color: #18181b;
          line-height: 1.3;
          margin: 2.2rem 0 0.8rem 0;
          scroll-margin-top: 100px;
        }

        #blog-article-content ul,
        #blog-article-content ol {
          margin: 0 0 1.6rem 0;
          padding-left: 1.4rem;
        }

        #blog-article-content li {
          margin-bottom: 0.6rem;
        }

        #blog-article-content strong {
          color: #0f1015;
          font-weight: 700;
        }

        #blog-article-content blockquote {
          border-left: 3px solid #7c3aed;
          background: #faf5ff;
          padding: 1.2rem 1.6rem;
          border-radius: 0 16px 16px 0;
          margin: 2rem 0;
          font-style: italic;
          color: #4c1d95;
        }

        #blog-article-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 14.5px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }

        #blog-article-content th {
          background-color: #f8fafc;
          padding: 12px 16px;
          text-align: left;
          font-weight: 700;
          color: #0f1015;
          border-bottom: 1px solid #e2e8f0;
        }

        #blog-article-content td {
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        #blog-article-content a {
          color: #7c3aed;
          text-decoration: underline;
          text-underline-offset: 3px;
          font-weight: 600;
        }

        #blog-article-content a:hover {
          color: #5b21b6;
        }

        /* ── Callout Box ── */
        .te-takeaway-box {
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.05) 0%, rgba(172, 88, 233, 0.08) 100%);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 18px;
          padding: 22px 26px;
          margin: 2rem 0 2.5rem 0;
        }

        /* ── Table of Contents ── */
        .te-toc-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 24px;
          margin: 2rem 0 2.5rem 0;
        }

        .te-toc-list {
          list-style: none;
          padding: 0;
          margin: 12px 0 0 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .te-toc-list li a {
          color: #475569;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }

        .te-toc-list li a:hover {
          color: #7c3aed;
          text-decoration: underline;
        }

        /* ── Share Bar ── */
        .te-share-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 600;
          color: #475569;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .te-share-pill:hover {
          background: #e2e8f0;
          color: #0f1015;
        }
      `,
        }}
      />

      <div className="te-blog-container">
        {/* ── Breadcrumb Navigation ── */}
        <nav className="te-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={13} />
          <Link href="/blog">Blog</Link>
          <ChevronRight size={13} />
          <span style={{ color: '#7c3aed', fontWeight: 600 }}>{post.category}</span>
          <ChevronRight size={13} />
          <span className="active-crumb">{post.title}</span>
        </nav>

        {/* ── Back to Blog Button ── */}
        <Link
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#7c3aed',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '13.5px',
            marginBottom: '20px',
          }}
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>

        {/* ── Header Area ── */}
        <header>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '9999px',
              background: 'rgba(124, 58, 237, 0.08)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              fontSize: '11px',
              fontWeight: 800,
              color: '#7c3aed',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            ✦ {post.category} ✦
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.14,
              letterSpacing: '-0.025em',
              color: '#0f1015',
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              margin: '0 0 18px 0',
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 17.5px)',
              lineHeight: 1.6,
              color: '#64748b',
              margin: '0 0 24px 0',
            }}
          >
            {post.excerpt}
          </p>

          {/* Author, Date & Read Time Info */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              paddingBottom: '24px',
              borderBottom: '1px solid #e2e8f0',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '13px', color: '#64748b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <UserCheck size={16} style={{ color: '#7c3aed' }} />
                <span style={{ fontWeight: 600, color: '#0f1015' }}>{post.author || 'TalentElla Growth Lab'}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={15} />
                <span>{post.date}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Share Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button onClick={handleCopyLink} className="te-share-pill" title="Copy article link">
                {copied ? <Check size={13} style={{ color: '#16a34a' }} /> : <Share2 size={13} />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </header>

        {/* ── Key Takeaways Box (Featured Snippet Magnet) ── */}
        <div className="te-takeaway-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <BookmarkCheck size={18} style={{ color: '#7c3aed' }} />
            <span style={{ fontSize: '14px', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#6d28d9' }}>
              Executive Takeaway & Core Insights
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: '#475569' }}>
            {post.excerpt} For ambitious brands, organic scaling in 2026 demands technically resilient web architectures, genuine E-E-A-T trust signals, and customer-first speed.
          </p>
        </div>

        {/* ── Table of Contents (if H2 headings exist) ── */}
        {headings.length > 2 && (
          <div className="te-toc-box">
            <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f1015' }}>
              Table of Contents
            </span>
            <ul className="te-toc-list">
              {headings.map((h, i) => (
                <li key={i}>
                  <a href={`#${h.id}`}>
                    <span style={{ color: '#7c3aed', fontWeight: 700 }}>0{i + 1}.</span> {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Main Article HTML Body ── */}
        <main>
          <div id="blog-article-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </main>

        {/* ── In-Article High-Converting CTA Box ── */}
        <div
          style={{
            margin: '48px 0',
            background: 'linear-gradient(145deg, #0f1015 0%, #1e1b2e 100%)',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 38px)',
            color: '#ffffff',
            boxShadow: '0 16px 40px -8px rgba(0,0,0,0.25)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 800,
                color: '#c4b5fd',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              ✦ GROW YOUR BRAND WITH TALENTELLA ✦
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                fontWeight: 800,
                lineHeight: 1.2,
                margin: '0 0 12px 0',
                color: '#ffffff',
              }}
            >
              Ready to execute these organic strategies for your business?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#94a3b8', margin: '0 0 24px 0' }}>
              Speak directly with our founder-led engineering and growth team. We craft high-speed Next.js platforms, viral organic marketing pipelines, and high-converting visual identity systems.
            </p>
            <Link
              href="/#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                backgroundColor: '#7c3aed',
                color: '#ffffff',
                padding: '12px 26px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Book a Strategy Call</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* ── Tags List ── */}
        {post.tags && post.tags.length > 0 && (
          <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b' }}>
              Related Topics & Tags
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#475569',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Author Bio (E-E-A-T Credibility) ── */}
        <div
          style={{
            marginTop: '36px',
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#7c3aed',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            TE
          </div>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontWeight: 800, fontSize: '15px', color: '#0f1015' }}>{post.author || 'TalentElla Growth Lab'}</span>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 800,
                  background: '#dcfce7',
                  color: '#15803d',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                }}
              >
                ✓ Verified Agency Expert
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, color: '#64748b' }}>
              TalentElla is a 360° digital marketing and creative engineering agency. We have scaled 80+ brands with 75% client retention through founder-led technical excellence, organic SEO dominance, and high-performance engineering.
            </p>
          </div>
        </div>

        {/* ── Related Articles Grid ── */}
        {fallbackRelated.length > 0 && (
          <div style={{ marginTop: '56px', paddingTop: '36px', borderTop: '1px solid #e2e8f0' }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                fontSize: '1.4rem',
                fontWeight: 800,
                color: '#0f1015',
                marginBottom: '20px',
              }}
            >
              Related Insights & Deep Dives
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
              {fallbackRelated.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.id}`}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '20px',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#7c3aed';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(124, 58, 237, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        color: '#7c3aed',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '8px',
                      }}
                    >
                      {rel.category}
                    </span>
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', system-ui, sans-serif",
                        fontSize: '15px',
                        fontWeight: 700,
                        color: '#0f1015',
                        lineHeight: 1.35,
                        margin: '0 0 8px 0',
                      }}
                    >
                      {rel.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '12.5px',
                        lineHeight: 1.5,
                        color: '#64748b',
                        margin: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {rel.excerpt}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: '#7c3aed',
                      fontSize: '12px',
                      fontWeight: 700,
                      marginTop: '16px',
                    }}
                  >
                    <span>Read Article</span>
                    <ExternalLink size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
