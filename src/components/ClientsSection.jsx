'use client';

import React from 'react';

const row1Logos = [
  { id: 1, name: 'Brand R.Comm', src: '/clients-logos/brand-rcomm-new.png', isWhite: false },
  { id: 2, name: 'EcoServeDev', src: '/clients-logos/EcoServeDev Logo.png', isWhite: false },
  { id: 3, name: 'Simetra', src: '/clients-logos/Simetra-Logo-02(1).png', isWhite: false },
  { id: 4, name: 'Snail Integral', src: '/clients-logos/Snail-New-logo-01-scaled.png', isWhite: false },
  { id: 5, name: 'Biospec', src: '/clients-logos/biospec-logo.png', isWhite: false },
];

const row2Logos = [
  { id: 6, name: 'InclusivAll', src: '/clients-logos/inclusive-logo.png', isWhite: false },
  { id: 7, name: 'Zobiit', src: '/clients-logos/logo white real estate (1).png', isWhite: true },
  { id: 8, name: 'Trenvity', src: '/clients-logos/logo-trenvity.png', isWhite: false },
  { id: 10, name: 'Digniteq', src: '/clients-logos/logo-white.png', isWhite: true },
];

const ClientsSection = () => {
  return (
    <section className="who-we-work-section">
      <style dangerouslySetInnerHTML={{ __html: `
        .who-we-work-section {
          background-color: #ffffff;
          padding: 70px 24px;
          position: relative;
          z-index: 38;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .who-we-work-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #0d0d12;
          border-radius: 32px;
          padding: 60px 48px;
          max-width: 1320px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
          position: relative;
          overflow: hidden;
        }

        .who-header-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          margin-bottom: 56px;
          align-items: start;
        }

        .who-title {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0f1015;
          line-height: 1.05;
          margin: 0;
          text-transform: uppercase;
          font-family: 'Space Grotesk', system-ui, sans-serif;
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
          color: #8b28de;
          text-transform: uppercase;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          margin: 0;
        }

        .who-text-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .who-desc {
          font-size: 14.5px;
          line-height: 1.7;
          color: #4b4d5a;
          margin: 0;
          font-weight: 400;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        /* ── Floating Logo Marquee (No Boxes, Large Logos) ── */
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding-top: 52px;
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        /* Edge Vignettes for smooth in/out transitions */
        .marquee-fade-left {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: clamp(40px, 9vw, 130px);
          background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
          z-index: 10;
          pointer-events: none;
        }

        .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: clamp(40px, 9vw, 130px);
          background: linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0));
          z-index: 10;
          pointer-events: none;
        }

        .marquee-row {
          width: 100%;
          overflow: hidden;
          display: flex;
          position: relative;
          user-select: none;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: clamp(48px, 6.5vw, 88px);
          width: max-content;
          will-change: transform;
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Row 1 glides continuously to the LEFT on loop */
        .marquee-track-left {
          animation: marqueeScrollLeft 32s linear infinite;
        }

        /* Row 2 glides continuously to the RIGHT on loop */
        .marquee-track-right {
          animation: marqueeScrollRight 32s linear infinite;
        }

        @keyframes marqueeScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marqueeScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* ── Individual Logo Items (No boxes, pure large logos) ── */
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          background: transparent;
          border: none;
          box-shadow: none;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .logo-item:hover {
          transform: translateY(-4px) scale(1.08);
        }

        /* Large Prominent Logo Images */
        .logo-item-img {
          height: clamp(60px, 6vw, 82px);
          max-height: 82px;
          max-width: clamp(180px, 18vw, 260px);
          width: auto;
          object-fit: contain;
          opacity: 0.92;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .logo-item:hover .logo-item-img {
          opacity: 1;
        }

        /* Darkened filter ONLY for pure-white assets to ensure high legibility on light background */
        .logo-img-darkened {
          filter: brightness(0);
        }

        /* ── Responsive adjustments ── */
        @media (max-width: 1024px) {
          .who-we-work-card {
            padding: 44px 28px;
            border-radius: 24px;
          }

          .who-header-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 40px;
          }

          .marquee-wrapper {
            gap: 28px;
            padding-top: 40px;
          }

          .marquee-track {
            gap: clamp(36px, 5vw, 60px);
          }

          .logo-item-img {
            height: clamp(52px, 6vw, 70px);
            max-height: 70px;
          }
        }

        @media (max-width: 640px) {
          .who-we-work-section {
            padding: 50px 16px;
          }

          .who-we-work-card {
            padding: 32px 18px;
            border-radius: 20px;
          }

          .who-text-columns {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .marquee-wrapper {
            gap: 24px;
            padding-top: 32px;
          }

          .marquee-track {
            gap: 32px;
          }

          .logo-item-img {
            height: clamp(44px, 12vw, 58px);
            max-height: 58px;
            max-width: 160px;
          }

          .marquee-track-left {
            animation-duration: 22s;
          }

          .marquee-track-right {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-left,
          .marquee-track-right {
            animation: none !important;
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

        {/* Floating Logo Marquees (No Boxes, Infinite Left & Right Loop) */}
        <div className="marquee-wrapper">
          <div className="marquee-fade-left" aria-hidden="true" />
          <div className="marquee-fade-right" aria-hidden="true" />

          {/* Row 1: Smoothly scrolling LEFT on loop */}
          <div className="marquee-row" aria-label="Client logos row 1">
            <div className="marquee-track marquee-track-left">
              {[...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos].map((item, idx) => (
                <div key={`r1-${idx}`} className="logo-item">
                  <img
                    src={item.src}
                    alt={`${item.name} Client Logo`}
                    className={`logo-item-img ${item.isWhite ? 'logo-img-darkened' : ''}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Smoothly scrolling RIGHT on loop */}
          <div className="marquee-row" aria-label="Client logos row 2">
            <div className="marquee-track marquee-track-right">
              {[...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos].map((item, idx) => (
                <div key={`r2-${idx}`} className="logo-item">
                  <img
                    src={item.src}
                    alt={`${item.name} Client Logo`}
                    className={`logo-item-img ${item.isWhite ? 'logo-img-darkened' : ''}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
