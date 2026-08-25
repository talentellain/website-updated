'use client';

import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { id: 1, name: 'Brand R.Comm', src: '/clients-logos/Brand R.Comm 4 final logo-02.png' },
  { id: 2, name: 'EcoServeDev', src: '/clients-logos/EcoServeDev Logo.png' },
  { id: 3, name: 'Simetra', src: '/clients-logos/Simetra-Logo-02(1).png' },
  { id: 4, name: 'Snail', src: '/clients-logos/Snail-New-logo-01-scaled.png' },
  { id: 5, name: 'Biospec', src: '/clients-logos/biospec-logo.png' },
  { id: 6, name: 'Inclusive', src: '/clients-logos/inclusive-logo.png' },
  { id: 7, name: 'Real Estate', src: '/clients-logos/logo white real estate (1).png' },
  { id: 8, name: 'Trenvity', src: '/clients-logos/logo-trenvity.png' },
  { id: 9, name: 'Trenvity Studio', src: '/clients-logos/logo-trenvity1.png' },
  { id: 10, name: 'Partner Brand', src: '/clients-logos/logo-white.png' },
];

const ClientsSection = () => {
  return (
    <section className="who-we-work-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .who-we-work-section {
          background-color: #000000;
          padding: 60px 24px;
          position: relative;
          z-index: 38;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .who-we-work-card {
          background: #0d0d10;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border-radius: 32px;
          padding: 60px 56px;
          max-width: 1320px;
          margin: 0 auto;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
        }

        .who-header-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 64px;
          align-items: start;
        }

        .who-title {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
          line-height: 1.05;
          margin: 0;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
        }

        .who-serve-block {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .who-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #AC58E9;
          text-transform: uppercase;
          margin: 0;
        }

        .who-text-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .who-desc {
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          font-weight: 400;
          font-family: 'Outfit', sans-serif;
        }

        /* Real Client Logo Grid — Balanced 5-Column Desktop Grid */
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 56px;
        }

        .logo-card-item {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 20px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .logo-card-item:hover {
          background: rgba(172, 88, 233, 0.12);
          border-color: rgba(172, 88, 233, 0.45);
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(172, 88, 233, 0.3);
        }

        /* Invert logos to crisp pure white for 100% visibility on black cards */
        .logo-card-img {
          max-width: 82%;
          max-height: 50px;
          width: auto;
          height: auto;
          object-fit: contain;
          opacity: 0.85;
          filter: brightness(0) invert(1);
          transition: all 0.4s ease;
        }

        .logo-card-item:hover .logo-card-img {
          opacity: 1;
          filter: brightness(0) invert(1);
          transform: scale(1.06);
        }

        /* Mobile & Tablet Responsiveness */
        @media (max-width: 1200px) {
          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
        }

        @media (max-width: 1024px) {
          .who-we-work-card {
            padding: 44px 32px;
            border-radius: 24px;
          }

          .who-header-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 44px;
          }

          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding-top: 40px;
          }
        }

        @media (max-width: 768px) {
          .logo-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .logo-card-item {
            height: 85px;
            padding: 14px 16px;
          }
        }

        @media (max-width: 550px) {
          .who-we-work-card {
            padding: 32px 20px;
            border-radius: 20px;
          }

          .who-text-columns {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .logo-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .logo-card-item {
            height: 80px;
            padding: 12px 14px;
          }

          .logo-card-img {
            max-height: 44px;
          }
        }
      `}} />

      <div className="who-we-work-card">
        {/* Header Grid */}
        <div className="who-header-grid">
          <h2 className="who-title">Who we work with</h2>

          <div className="who-serve-block">
            <h3 className="who-eyebrow">
              <span>✦</span>
              <span>WHO WE SERVE</span>
            </h3>
            <div className="who-text-columns">
              <p className="who-desc">
                From fast-growing businesses to early-stage start-ups, we are committed to building a community of trust. We assist companies that have anywhere from 10 to 2,000 employees, across all markets.
              </p>
              <p className="who-desc">
                Our team's experience spans a variety of industries, including high-tech SaaS, e-commerce, life sciences, real estate, and consumer brands scaling across regional and global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Real Client Logo Grid — 10 White Inverted Logos on Black Cards */}
        <div className="logo-grid">
          {clientLogos.map((item, idx) => (
            <motion.div
              key={item.id}
              className="logo-card-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
            >
              <img
                src={item.src}
                alt={`${item.name} Client Logo`}
                className="logo-card-img"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
