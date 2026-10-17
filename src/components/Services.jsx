'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const serviceDisplayTitles = {
  'app-development': 'APP DEVELOPMENT',
  'website-development': 'WEBSITE DEVELOPMENT',
  'social-media-management': 'SOCIAL MEDIA MARKETING',
  'visual-identity-design': 'VISUAL IDENTITY DESIGN'
};

const serviceNumbers = {
  'app-development': '01',
  'website-development': '02',
  'social-media-management': '03',
  'visual-identity-design': '04'
};

const serviceHoverImages = {
  'app-development': '/projects/zobiit.png',
  'website-development': '/thubnail-website/image copy 2.png',
  'social-media-management': '/projects/addidas.png',
  'visual-identity-design': '/talentella strip design.png'
};

const serviceTags = {
  'app-development': ['iOS & Android', 'React Native & Flutter', 'UI/UX Design', 'Cloud APIs'],
  'website-development': ['Next.js & React', 'High-Speed Architecture', 'SEO-First Engineering', 'E-Commerce'],
  'social-media-management': ['Viral Short-Form', 'Paid Meta Ads', 'Influencer Management', 'Performance Analytics'],
  'visual-identity-design': ['Brand Guidelines', 'Logo Systems', '3D Motion & Packaging', 'Design Systems']
};

const MotionLink = motion(Link);

const SERVICES_STYLES = `
  .services-section-v3 {
    background-color: #ffffff;
    color: #09090b;
    padding: clamp(80px, 8vw, 130px) clamp(20px, 4vw, 48px);
    position: relative;
    z-index: 35;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    border-top: none;
    overflow: visible;
    border-radius: 32px 32px 0 0;
    box-shadow: 0 -16px 60px rgba(0, 0, 0, 0.08), 0 -2px 6px rgba(0, 0, 0, 0.04);
  }

  /* ── Header ── */
  .services-header-v3 {
    max-width: 900px;
    margin: 0 auto clamp(48px, 6vw, 76px) auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .services-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.08);
    border: 1px solid rgba(124, 58, 237, 0.22);
    color: #7c3aed;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .services-header-v3 h2 {
    font-size: clamp(2.4rem, 5.5vw, 4.4rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -0.03em;
    color: #09090b;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    line-height: 1;
    margin: 0;
  }

  .services-header-v3 p {
    color: #64748b;
    font-size: clamp(0.92rem, 1.8vw, 1.08rem);
    line-height: 1.6;
    max-width: 640px;
    margin: 0;
    font-weight: 400;
  }

  /* ── Services Rows Container ── */
  .services-list-v3 {
    max-width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  /* ── Individual Service Row ── */
  .service-row-v3 {
    display: grid;
    grid-template-columns: 80px 1fr 220px 52px;
    align-items: center;
    gap: clamp(20px, 3vw, 44px);
    padding: clamp(32px, 4vw, 44px) clamp(16px, 2.5vw, 28px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    text-decoration: none !important;
    color: #09090b !important;
    position: relative;
    cursor: pointer;
    background-color: transparent;
    border-radius: 16px;
    margin: 4px 0;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-row-v3:hover {
    background: linear-gradient(90deg, rgba(124, 58, 237, 0.035) 0%, rgba(124, 58, 237, 0.01) 100%);
    border-bottom-color: rgba(124, 58, 237, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
    transform: translateY(-2px);
  }

  /* Left accent border on hover */
  .service-row-v3::before {
    content: "";
    position: absolute;
    left: 0;
    top: 20%;
    bottom: 20%;
    width: 3px;
    background: #7c3aed;
    border-radius: 0 4px 4px 0;
    opacity: 0;
    transform: scaleY(0.4);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-row-v3:hover::before {
    opacity: 1;
    transform: scaleY(1);
    top: 15%;
    bottom: 15%;
  }

  /* ── Number ── */
  .service-num-v3 {
    font-size: clamp(2rem, 3.2vw, 3rem);
    font-weight: 800;
    color: rgba(0, 0, 0, 0.16);
    font-family: 'Space Grotesk', system-ui, sans-serif;
    line-height: 1;
    transition: all 0.35s ease;
  }

  .service-row-v3:hover .service-num-v3 {
    color: #7c3aed;
    transform: translateX(4px);
  }

  /* ── Center Content (Title, Description, Tags) ── */
  .service-center-v3 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .service-title-v3 {
    font-size: clamp(1.35rem, 2.4vw, 1.95rem);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    color: #09090b;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    margin: 0;
    line-height: 1.1;
    transition: color 0.3s ease;
  }

  .service-row-v3:hover .service-title-v3 {
    color: #7c3aed;
  }

  .service-desc-v3 {
    font-size: clamp(0.88rem, 1.5vw, 0.98rem);
    line-height: 1.55;
    color: #64748b;
    font-weight: 400;
    margin: 0;
    max-width: 620px;
  }

  .service-tags-v3 {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .service-tag-pill {
    font-size: 11px;
    font-weight: 600;
    color: #475569;
    background: #f1f5f9;
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 3px 10px;
    border-radius: 6px;
    letter-spacing: 0.01em;
    transition: all 0.25s ease;
  }

  .service-row-v3:hover .service-tag-pill {
    background: rgba(124, 58, 237, 0.08);
    border-color: rgba(124, 58, 237, 0.2);
    color: #6d28d9;
  }

  /* ── Right Preview Card (Clean, Embedded, High-End) ── */
  .service-preview-frame {
    width: 220px;
    height: 130px;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: #0f1015;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-row-v3:hover .service-preview-frame {
    transform: scale(1.03);
    border-color: rgba(124, 58, 237, 0.4);
    box-shadow: 0 14px 34px rgba(124, 58, 237, 0.22);
  }

  .service-preview-img-v3 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.88;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-row-v3:hover .service-preview-img-v3 {
    opacity: 1;
    transform: scale(1.08);
  }

  .service-preview-badge {
    position: absolute;
    bottom: 8px;
    left: 8px;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(6px);
    color: #ffffff;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* ── Action Arrow Button ── */
  .service-arrow-v3 {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    flex-shrink: 0;
    color: #09090b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .service-row-v3:hover .service-arrow-v3 {
    background: #7c3aed;
    border-color: #7c3aed;
    color: #ffffff;
    transform: scale(1.08) rotate(45deg);
    box-shadow: 0 6px 18px rgba(124, 58, 237, 0.35);
  }

  /* ── Responsive Tablet & Mobile ── */
  @media (max-width: 1024px) {
    .service-row-v3 {
      grid-template-columns: 60px 1fr 180px 44px;
      gap: 20px;
      padding: 28px 14px;
    }
    .service-preview-frame {
      width: 180px;
      height: 110px;
    }
    .service-arrow-v3 {
      width: 44px;
      height: 44px;
    }
  }

  @media (max-width: 768px) {
    .services-section-v3 {
      padding: 60px 16px;
      border-radius: 24px 24px 0 0;
    }

    .service-row-v3 {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
      padding: 24px 14px;
    }

    .service-row-v3::before {
      display: none;
    }

    .service-mobile-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .service-num-v3 {
      font-size: 1.8rem;
    }

    .service-preview-frame {
      width: 100%;
      height: 160px;
      margin-top: 4px;
    }
  }
`;

const Services = () => {
  return (
    <section id="services" className="services-section-v3">
      <style dangerouslySetInnerHTML={{ __html: SERVICES_STYLES }} />

      {/* Header */}
      <div className="services-header-v3">
        <span className="services-badge">
          <span>✦</span>
          <span>Core Capabilities</span>
          <span>✦</span>
        </span>
        <h2>Full-Stack Services</h2>
        <p>
          High-performance engineering, scroll-stopping creative, and 360° growth architecture crafted to dominate your industry.
        </p>
      </div>

      {/* Interactive Service Rows */}
      <div className="services-list-v3">
        {servicesData.map((s, index) => {
          const num = serviceNumbers[s.id] || `0${index + 1}`;
          const displayTitle = serviceDisplayTitles[s.id] || s.title.toUpperCase();
          const targetPath = s.id === 'app-development' ? '/app-development' : `/services/${s.id}`;
          const previewImg = serviceHoverImages[s.id] || '/thubnail-website/image copy 2.png';
          const tags = serviceTags[s.id] || ['Strategy', 'Design', 'Execution'];

          return (
            <MotionLink
              key={s.id}
              href={targetPath}
              className="service-row-v3"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px -6% 0px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              aria-label={`Explore our ${s.title} service`}
            >
              {/* Number */}
              <div className="service-num-v3">{num}</div>

              {/* Title, Description & Capability Pills */}
              <div className="service-center-v3">
                <h3 className="service-title-v3">{displayTitle}</h3>
                <p className="service-desc-v3">{s.description}</p>
                <div className="service-tags-v3">
                  {tags.map((tag) => (
                    <span key={tag} className="service-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Seamlessly Integrated Project Preview Window */}
              <div className="service-preview-frame">
                <img
                  src={previewImg}
                  alt={`${s.title} Case Study Preview`}
                  className="service-preview-img-v3"
                  loading="lazy"
                />
                <span className="service-preview-badge">Featured Case</span>
              </div>

              {/* Circular Action Button */}
              <div className="service-arrow-v3">
                <ArrowUpRight size={20} strokeWidth={2.4} />
              </div>
            </MotionLink>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
