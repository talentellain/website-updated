'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Share2,
  Target,
  Camera,
  Palette,
  ArrowUpRight,
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'website-development',
    icon: Code2,
    num: '01',
    title: 'Website Development',
    description: 'Next.js, React & headless platforms engineered for 99/100 speed, SEO dominance, and maximum conversion.',
    href: '/services/website-development',
  },
  {
    id: 'app-development',
    icon: Smartphone,
    num: '02',
    title: 'App Development',
    description: 'Human-centric, native & cross-platform React Native and Flutter mobile applications for iOS & Android.',
    href: '/app-development',
  },
  {
    id: 'social-media-management',
    icon: Share2,
    num: '03',
    title: 'Social Media Marketing',
    description: 'Scroll-stopping viral short-form pipelines, community scaling, and creator management systems.',
    href: '/services/social-media-management',
  },
  {
    id: 'performance-marketing',
    icon: Target,
    num: '04',
    title: 'Performance & Meta Ads',
    description: 'High-ROAS Meta (Instagram & Facebook) and Google PPC campaigns built to scale acquisition with pure data.',
    href: '/services/social-media-management',
    isLavender: true,
  },
  {
    id: 'product-shoot-production',
    icon: Camera,
    num: '05',
    title: 'Product Shoot & Commercials',
    description: 'High-end studio product stills, commercial films, 4K video reels, and luxury aesthetic direction.',
    href: '/portfolio',
  },
  {
    id: 'visual-identity-design',
    icon: Palette,
    num: '06',
    title: 'Visual Identity & Branding',
    description: 'Iconic logo design systems, comprehensive brand guidelines, packaging, and kinetic 3D typography.',
    href: '/services/visual-identity-design',
  },
];

const SERVICES_BENTO_STYLES = `
  .services-bento-section {
    background-color: #ffffff;
    padding: clamp(60px, 7vw, 100px) clamp(16px, 4vw, 48px);
    position: relative;
    z-index: 20;
    width: 100%;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  .services-bento-container {
    max-width: 1400px;
    margin: 0 auto;
  }

  .services-bento-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(260px, auto);
    gap: 1px;
    background-color: rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    overflow: hidden;
  }

  /* ── Title Cell (Spans 2 columns) ── */
  .services-bento-title-cell {
    grid-column: span 2;
    background-color: #ffffff;
    padding: clamp(28px, 3.5vw, 44px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .services-bento-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.08);
    border: 1px solid rgba(124, 58, 237, 0.22);
    color: #7c3aed;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    width: fit-content;
    margin-bottom: 18px;
  }

  .services-bento-title {
    font-size: clamp(2rem, 4.5vw, 3.4rem);
    font-weight: 800;
    color: #0f1015;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    line-height: 1.05;
    font-family: 'Space Grotesk', system-ui, sans-serif;
  }

  .services-bento-title .te-serif-italic {
    font-family: 'Bespoke Serif', Georgia, serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.01em;
    padding-right: 0.08em;
  }

  .services-bento-sub {
    color: #555562;
    font-size: clamp(0.92rem, 1.3vw, 1.08rem);
    font-weight: 400;
    line-height: 1.55;
    margin: 14px 0 0 0;
    max-width: 440px;
  }

  .services-bento-title-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 24px;
  }

  /* ── Service Card Cell ── */
  .service-bento-card {
    background-color: #ffffff;
    padding: clamp(24px, 2.5vw, 36px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none !important;
    color: #0f1015 !important;
    transition: background-color 0.25s ease, border-color 0.25s ease;
    cursor: pointer;
    min-height: 240px;
    gap: 1rem;
    position: relative;
  }

  .service-bento-card:hover {
    background-color: #faf5ff !important;
  }

  .service-bento-card.lavender-cell {
    background-color: #fbf8ff;
  }

  .service-bento-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .service-bento-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background-color: rgba(172, 88, 233, 0.1);
    border: 1px solid rgba(172, 88, 233, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #AC58E9;
    transition: all 0.25s ease;
  }

  .service-bento-card:hover .service-bento-icon {
    background-color: #7c3aed;
    border-color: #7c3aed;
    color: #ffffff;
    transform: scale(1.06);
  }

  .service-bento-arrow-mini {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    transition: all 0.25s ease;
  }

  .service-bento-card:hover .service-bento-arrow-mini {
    color: #7c3aed;
    transform: translate(2px, -2px);
  }

  .service-bento-card-title {
    font-size: clamp(1.15rem, 1.4vw, 1.4rem);
    font-weight: 700;
    color: #0f1015;
    margin: 0 0 0.5rem 0;
    line-height: 1.2;
    letter-spacing: -0.015em;
    font-family: 'Bespoke Serif', Georgia, serif;
    transition: color 0.25s ease;
  }

  .service-bento-card:hover .service-bento-card-title {
    color: #7c3aed;
  }

  .service-bento-card-desc {
    color: #555562;
    font-size: 0.88rem;
    line-height: 1.55;
    margin: 0;
    font-weight: 400;
  }

  /* ── Responsive Queries ── */
  @media (max-width: 1024px) {
    .services-bento-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .services-bento-grid {
      grid-template-columns: 1fr;
    }
    .services-bento-title-cell {
      grid-column: span 1;
      padding: 24px 20px;
    }
    .service-bento-card {
      padding: 24px 20px;
      min-height: 200px;
    }
  }
`;

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className="services-bento-section">
      <style dangerouslySetInnerHTML={{ __html: SERVICES_BENTO_STYLES }} />

      <div className="services-bento-container">
        {/* Bento Grid Layout (Exact matching feature design) */}
        <div className="services-bento-grid">
          {/* Main Title Box (Spans 2 columns) */}
          <div className="services-bento-title-cell">
            <div>
              <div className="services-bento-badge">
                <span>✦</span>
                <span>CORE CAPABILITIES</span>
                <span>✦</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="services-bento-title"
              >
                FULL-STACK <em className="te-serif-italic">SERVICES</em>
              </motion.h2>

              <p className="services-bento-sub">
                High-performance engineering, scroll-stopping creative, and 360° growth architecture
                crafted to dominate your category.
              </p>
            </div>

            <div className="services-bento-title-bottom">
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#94a3b8',
                }}
              >
                End-To-End Delivery
              </span>
              <ArrowUpRight size={44} color="#AC58E9" strokeWidth={2} />
            </div>
          </div>

          {/* All 6 Services rendered cleanly as Bento Cells */}
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={isMobile ? {} : { opacity: 0, y: 20 }}
                whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'contents' }}
              >
                <Link
                  href={service.href}
                  className={`service-bento-card ${service.isLavender ? 'lavender-cell' : ''}`}
                >
                  <div className="service-bento-card-top">
                    <div className="service-bento-icon">
                      <Icon size={18} />
                    </div>
                    <div className="service-bento-arrow-mini">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="service-bento-card-title">{service.title}</h3>
                    <p className="service-bento-card-desc">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
