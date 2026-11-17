'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const SERVICES_CONFIG = {
  header: {
    badge: 'CORE CAPABILITIES',
    titleMain: 'FULL-STACK',
    titleAccent: 'SERVICES',
    subtitle:
      'High-performance engineering, scroll-stopping creative direction, and 360° growth architecture crafted to dominate your category.',
    ctaText: 'Start a project',
    ctaHref: '#contact',
  },
  card01: {
    num: '01',
    title: 'WEBSITE DEVELOPMENT',
    desc: 'Next.js, React & headless platforms engineered for 99/100 speed, SEO dominance, and maximum conversion rates.',
    href: '/services/website-development',
  },
  card02: {
    num: '02',
    title: 'SOCIAL MEDIA MARKETING',
    desc: 'Scroll-stopping viral short-form pipelines, algorithmic reach, community scaling, and creator management systems.',
    href: '/services/social-media-management',
  },
  card03: {
    num: '03',
    title: 'VISUAL IDENTITY & BRANDING',
    desc: 'Iconic logo design systems, comprehensive brand guidelines, packaging, and kinetic 3D typography for visionary brands.',
    href: '/services/visual-identity',
  },
  card04: {
    num: '04',
    title: 'APP DEVELOPMENT',
    desc: 'Human-centric, native & cross-platform React Native and Flutter mobile applications for iOS & Android.',
    href: '/app-development',
  },
  card05: {
    num: '05',
    title: 'PRODUCT SHOOT & COMMERCIALS',
    desc: 'High-end studio product stills, commercial brand films, 4K video reels, and luxury aesthetic direction.',
    href: '/portfolio',
  },
  card06: {
    num: '06',
    title: 'PERFORMANCE & META ADS',
    desc: 'High-ROAS Meta (Instagram & Facebook) and Google PPC campaigns built to scale acquisition with pure data-driven architecture.',
    href: '/services/social-media-management',
  },
};

const SERVICES_THEME_STYLES = `
  .te-services-section {
    background-color: #ffffff;
    color: #0f1015;
    padding: clamp(70px, 8vw, 108px) 0 clamp(60px, 7vw, 96px) 0;
    position: relative;
    overflow: hidden;
  }

  .te-services-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 36px);
  }

  /* ── Header ── */
  .te-services-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: clamp(36px, 5vw, 52px);
    gap: 24px;
    flex-wrap: wrap;
  }

  .te-services-header-left {
    max-width: 600px;
  }

  .te-services-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7c3aed;
    background: rgba(124, 58, 237, 0.06);
    border: 1px solid rgba(124, 58, 237, 0.16);
    padding: 5px 13px;
    border-radius: 9999px;
    margin-bottom: 12px;
    width: fit-content;
  }

  .te-services-title {
    font-size: clamp(2rem, 4.2vw, 3.15rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #0f1015;
    line-height: 1.12;
    margin: 0 0 12px 0;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  .te-services-title .te-serif-italic {
    font-family: 'Bespoke Serif', Georgia, serif !important;
    font-style: italic !important;
    font-weight: 400;
    color: #0f1015;
    padding-left: 0.05em;
    letter-spacing: -0.01em;
  }

  .te-services-sub {
    font-size: clamp(14px, 1.05vw, 15.5px);
    line-height: 1.65;
    color: #475569;
    margin: 0;
    max-width: 530px;
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .te-services-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background-color: #0f1015;
    color: #ffffff;
    padding: 7px 8px 7px 22px;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 4px 18px rgba(15, 16, 21, 0.12);
  }

  .te-services-btn:hover {
    background-color: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 8px 26px rgba(124, 58, 237, 0.25);
  }

  .te-services-btn-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #0f1015;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .te-services-btn:hover .te-services-btn-icon {
    color: #7c3aed;
    transform: translateX(2px);
  }

  /* ── Desktop Bento Grid (> 768px) ── */
  .te-services-grid {
    display: grid;
    grid-template-columns: 1fr 1.62fr;
    gap: 18px;
    align-items: stretch;
  }

  /* Left Column (Card 01 & Card 03) */
  .te-services-col-left {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  /* Right Column (Card 02, Row with 04+05, Card 06) */
  .te-services-col-right {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .te-services-right-middle {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }

  /* ── Light Card (01, 02, 04, 05, 06) ── */
  .te-card-light {
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 22px;
    padding: clamp(22px, 2.3vw, 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 12px -2px rgba(0, 0, 0, 0.03);
  }

  .te-card-light:hover {
    border-color: #7c3aed;
    transform: translateY(-2px);
    box-shadow: 0 14px 34px -4px rgba(124, 58, 237, 0.12);
  }

  /* Height balances */
  .te-card-01 {
    min-height: 250px;
    flex: 1;
  }

  .te-card-02 {
    min-height: 195px;
  }

  .te-card-03 {
    min-height: 250px;
    flex: 1;
  }

  .te-card-04 {
    min-height: 210px;
  }

  .te-card-05 {
    min-height: 210px;
  }

  .te-card-06 {
    min-height: 195px;
    background: linear-gradient(180deg, #ffffff 0%, #faf8ff 100%);
  }

  .te-card-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .te-badge-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(124, 58, 237, 0.08);
    color: #7c3aed;
    border: 1px solid rgba(124, 58, 237, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    letter-spacing: -0.01em;
  }

  .te-arrow-hint {
    color: #cbd5e1;
    transition: transform 0.25s ease, color 0.25s ease;
  }

  .te-card-light:hover .te-arrow-hint {
    color: #7c3aed;
    transform: translate(2px, -2px);
  }

  .te-card-title-light {
    font-size: clamp(14px, 1.2vw, 15.5px);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #0f1015;
    margin: 0 0 8px 0;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  .te-card-desc-light {
    font-size: clamp(12.5px, 1vw, 13px);
    line-height: 1.55;
    color: #64748b;
    margin: 0;
    font-weight: 400;
  }

  /* ── Signature Purple Highlight Card (03) ── */
  .te-card-highlight {
    background: linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%);
    border: 1px solid #7c3aed;
    border-radius: 22px;
    padding: clamp(24px, 2.5vw, 32px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px -4px rgba(124, 58, 237, 0.35);
  }

  .te-card-highlight:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 42px -4px rgba(124, 58, 237, 0.45);
  }

  .te-badge-circle-inverted {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffffff;
    color: #7c3aed;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 800;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    letter-spacing: -0.01em;
  }

  .te-card-title-inverted {
    font-size: clamp(14px, 1.2vw, 15.5px);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #ffffff;
    margin: 0 0 8px 0;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }

  .te-card-desc-inverted {
    font-size: clamp(12.5px, 1vw, 13px);
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    font-weight: 400;
  }

  /* ── Mobile Layout (< 768px) ── */
  .te-services-mobile-container {
    display: none;
  }

  @media (max-width: 1024px) {
    .te-services-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .te-services-section {
      padding: clamp(56px, 9vw, 76px) 0;
    }

    .te-services-grid {
      display: none;
    }

    .te-services-mobile-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .te-services-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 24px;
    }

    .te-services-badge {
      margin: 0 auto 12px auto;
      align-self: center;
    }

    .te-services-title {
      font-size: clamp(1.85rem, 6.8vw, 2.35rem);
      text-align: center;
      line-height: 1.12;
      letter-spacing: -0.025em;
    }

    .te-services-sub {
      text-align: center;
      font-size: 13.5px;
      line-height: 1.6;
      color: #475569;
      max-width: 90%;
      margin: 0 auto;
    }

    .te-services-btn {
      align-self: center;
      margin-top: 10px;
    }

    .te-swipe-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #7c3aed;
      background: rgba(124, 58, 237, 0.08);
      border: 1px solid rgba(124, 58, 237, 0.16);
      padding: 5px 14px;
      border-radius: 9999px;
      margin: 16px auto 0 auto;
      width: fit-content;
      align-self: center;
    }

    /* Horizontal swipe carousel for mobile */
    .te-services-mobile-track {
      display: flex;
      gap: 14px;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding: 10px clamp(18px, 4vw, 24px) 24px clamp(18px, 4vw, 24px);
      margin: 0 -20px;
    }

    .te-services-mobile-track::-webkit-scrollbar {
      display: none;
    }

    .te-mobile-card-wrapper {
      min-width: clamp(260px, 78vw, 300px);
      scroll-snap-align: start;
      display: flex;
    }

    .te-mobile-card-wrapper .te-card-light,
    .te-mobile-card-wrapper .te-card-highlight {
      width: 100%;
      height: 250px;
    }
  }
`;

export default function Services() {
  const { header, card01, card02, card03, card04, card05, card06 } = SERVICES_CONFIG;

  return (
    <section id="services" className="te-services-section">
      <style dangerouslySetInnerHTML={{ __html: SERVICES_THEME_STYLES }} />

      <div className="te-services-container">
        {/* ── Section Header ── */}
        <div className="te-services-header">
          <div className="te-services-header-left">
            <div className="te-services-badge">
              <span>✦</span>
              <span>{header.badge}</span>
              <span>✦</span>
            </div>

            <h2 className="te-services-title">
              {header.titleMain}{' '}
              <em className="te-serif-italic" style={{ fontStyle: 'italic', fontWeight: 400 }}>
                {header.titleAccent}
              </em>
            </h2>

            <p className="te-services-sub">{header.subtitle}</p>
          </div>

          <Link href={header.ctaHref} className="te-services-btn">
            <span>{header.ctaText}</span>
            <div className="te-services-btn-icon">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* ── DESKTOP BENTO GRID (> 768px) ── */}
        <div className="te-services-grid">
          {/* Left Column: Card 01 (Top) + Card 03 Purple Highlight (Bottom) */}
          <div className="te-services-col-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flex: 1 }}
            >
              <Link href={card01.href} className="te-card-light te-card-01">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card01.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card01.title}</h3>
                  <p className="te-card-desc-light">{card01.desc}</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flex: 1 }}
            >
              <Link href={card03.href} className="te-card-highlight te-card-03">
                <div className="te-card-top-row">
                  <div className="te-badge-circle-inverted">{card03.num}</div>
                  <ArrowUpRight size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
                </div>
                <div>
                  <h3 className="te-card-title-inverted">{card03.title}</h3>
                  <p className="te-card-desc-inverted">{card03.desc}</p>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Card 02 (Top Wide) + Middle Row (Card 04 & Card 05 Product Shoot) + Card 06 (Bottom Wide Performance Marketing) */}
          <div className="te-services-col-right">
            {/* Card 02: Digital / Social Media Marketing (Wide) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card02.href} className="te-card-light te-card-02">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card02.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card02.title}</h3>
                  <p className="te-card-desc-light">{card02.desc}</p>
                </div>
              </Link>
            </motion.div>

            {/* Middle Row: Card 04 (App Development) & Card 05 (Product Shoot & Commercials) */}
            <div className="te-services-right-middle">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex' }}
              >
                <Link href={card04.href} className="te-card-light te-card-04" style={{ flex: 1 }}>
                  <div className="te-card-top-row">
                    <div className="te-badge-circle">{card04.num}</div>
                    <ArrowUpRight size={18} className="te-arrow-hint" />
                  </div>
                  <div>
                    <h3 className="te-card-title-light">{card04.title}</h3>
                    <p className="te-card-desc-light">{card04.desc}</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex' }}
              >
                <Link href={card05.href} className="te-card-light te-card-05" style={{ flex: 1 }}>
                  <div className="te-card-top-row">
                    <div className="te-badge-circle">{card05.num}</div>
                    <ArrowUpRight size={18} className="te-arrow-hint" />
                  </div>
                  <div>
                    <h3 className="te-card-title-light">{card05.title}</h3>
                    <p className="te-card-desc-light">{card05.desc}</p>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Card 06: Performance & Meta Ads (Bigger Wide Card just like Card 02) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card06.href} className="te-card-light te-card-06">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card06.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card06.title}</h3>
                  <p className="te-card-desc-light">{card06.desc}</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── MOBILE VIEW (<= 768px): Horizontal Swipeable Cards ── */}
        <div className="te-services-mobile-container">
          <div className="te-swipe-pill">
            <span>Swipe to explore</span>
            <ArrowRight size={13} />
          </div>

          <div className="te-services-mobile-track">
            {/* Card 01 */}
            <div className="te-mobile-card-wrapper">
              <Link href={card01.href} className="te-card-light">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card01.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card01.title}</h3>
                  <p className="te-card-desc-light">{card01.desc}</p>
                </div>
              </Link>
            </div>

            {/* Card 02 */}
            <div className="te-mobile-card-wrapper">
              <Link href={card02.href} className="te-card-light">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card02.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card02.title}</h3>
                  <p className="te-card-desc-light">{card02.desc}</p>
                </div>
              </Link>
            </div>

            {/* Card 03 (Highlight) */}
            <div className="te-mobile-card-wrapper">
              <Link href={card03.href} className="te-card-highlight">
                <div className="te-card-top-row">
                  <div className="te-badge-circle-inverted">{card03.num}</div>
                  <ArrowUpRight size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
                </div>
                <div>
                  <h3 className="te-card-title-inverted">{card03.title}</h3>
                  <p className="te-card-desc-inverted">{card03.desc}</p>
                </div>
              </Link>
            </div>

            {/* Card 04 */}
            <div className="te-mobile-card-wrapper">
              <Link href={card04.href} className="te-card-light">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card04.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card04.title}</h3>
                  <p className="te-card-desc-light">{card04.desc}</p>
                </div>
              </Link>
            </div>

            {/* Card 05 */}
            <div className="te-mobile-card-wrapper">
              <Link href={card05.href} className="te-card-light">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card05.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card05.title}</h3>
                  <p className="te-card-desc-light">{card05.desc}</p>
                </div>
              </Link>
            </div>

            {/* Card 06 */}
            <div className="te-mobile-card-wrapper">
              <Link href={card06.href} className="te-card-light">
                <div className="te-card-top-row">
                  <div className="te-badge-circle">{card06.num}</div>
                  <ArrowUpRight size={18} className="te-arrow-hint" />
                </div>
                <div>
                  <h3 className="te-card-title-light">{card06.title}</h3>
                  <p className="te-card-desc-light">{card06.desc}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
