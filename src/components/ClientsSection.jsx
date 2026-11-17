'use client';

import React from 'react';

const row1Logos = [
  { id: 1, name: 'Brand R.Comm', src: '/clients-logos/brand-rcomm-new.png', isWhite: false },
  { id: 2, name: 'EcoServeDev', src: '/clients-logos/EcoServeDev Logo.png', isWhite: false },
  { id: 3, name: 'Simetra', src: '/clients-logos/Simetra-Logo-02(1).png', isWhite: false },
  { id: 4, name: 'Snail Integral', src: '/clients-logos/Snail-New-logo-01-scaled.png', isWhite: false },
  { id: 5, name: 'Digniteq', src: '/clients-logos/logo-white.png', isWhite: true },
];

const row2Logos = [
  { id: 6, name: 'Biospec', src: '/clients-logos/biospec-logo.png', isWhite: false },
  { id: 7, name: 'InclusivAll', src: '/clients-logos/inclusive-logo.png', isWhite: false },
  { id: 8, name: 'Zobiit', src: '/clients-logos/logo white real estate (1).png', isWhite: true },
  { id: 9, name: 'Trenvity', src: '/clients-logos/logo-trenvity.png', isWhite: false },
  { id: 10, name: 'Brand R.Comm', src: '/clients-logos/brand-rcomm-new.png', isWhite: false },
];

const METRICS = [
  { value: '80+', label: 'Projects & Brands Scaled' },
  { value: '75%', label: 'Client Retention Rate' },
  { value: '1–30', label: 'Team Size Supported' },
  { value: '100%', label: 'Founder-Led Attention' },
];

const INDUSTRIES = [
  'Startups',
  'E-Commerce & D2C',
  'Mobile & Web Apps',
  'Creator Brands',
  'B2B Services',
];

const ClientsSection = () => {
  return (
    <section className="te-clients-section" id="clients">
      <style dangerouslySetInnerHTML={{ __html: `
        .te-clients-section {
          background-color: #ffffff;
          padding: clamp(64px, 8vw, 108px) 0 clamp(72px, 9vw, 116px);
          position: relative;
          z-index: 38;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
        }

        .te-clients-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 36px);
          box-sizing: border-box;
        }

        /* ── Minimal Editorial Header ── */
        .te-clients-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
        }

        .te-clients-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #7c3aed;
          text-transform: uppercase;
          background: rgba(124, 58, 237, 0.06);
          border: 1px solid rgba(124, 58, 237, 0.16);
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 20px;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .te-clients-title {
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.035em;
          color: #0f1015;
          line-height: 1.05;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .te-clients-subtitle {
          font-size: clamp(15px, 1.25vw, 16.5px);
          line-height: 1.65;
          color: #555869;
          margin: 0 auto;
          font-weight: 400;
          max-width: 640px;
        }

        /* Subtle Industry Tagline */
        .te-industry-line {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.02em;
        }

        .te-industry-sep {
          color: #cbd5e1;
          font-size: 11px;
        }

        /* ── Minimal Hairline Metric Grid (No bulky box) ── */
        .te-hairline-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding: clamp(34px, 4vw, 46px) 0;
          margin: clamp(42px, 5vw, 64px) 0 clamp(50px, 6vw, 76px) 0;
          width: 100%;
        }

        .te-hairline-item {
          text-align: center;
          position: relative;
          padding: 0 clamp(12px, 2vw, 24px);
        }

        .te-hairline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(0, 0, 0, 0.08);
        }

        .te-hairline-number {
          font-size: clamp(2.4rem, 3.8vw, 3.4rem);
          font-weight: 800;
          color: #0f1015;
          line-height: 1;
          letter-spacing: -0.04em;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          margin-bottom: 8px;
        }

        .te-hairline-label {
          font-size: clamp(11.5px, 1.05vw, 12.5px);
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── Seamless Full-Width Marquee ── */
        .te-marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 6px 0;
        }

        /* Soft Left & Right Edge Vignettes */
        .te-marquee-fade-left,
        .te-marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(60px, 14vw, 200px);
          z-index: 10;
          pointer-events: none;
        }

        .te-marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, #ffffff 25%, rgba(255, 255, 255, 0) 100%);
        }

        .te-marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, #ffffff 25%, rgba(255, 255, 255, 0) 100%);
        }

        .te-marquee-row {
          width: 100%;
          overflow: hidden;
          display: flex;
          user-select: none;
        }

        .te-marquee-track {
          display: flex;
          align-items: center;
          gap: 18px;
          width: max-content;
          will-change: transform;
        }

        .te-marquee-row:hover .te-marquee-track {
          animation-play-state: paused;
        }

        .te-marquee-left {
          animation: teScrollLeft 34s linear infinite;
        }

        .te-marquee-right {
          animation: teScrollRight 34s linear infinite;
        }

        @keyframes teScrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes teScrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* ── Minimalist Logo Tiles ── */
        .te-logo-card {
          width: clamp(180px, 16vw, 220px);
          height: 88px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          box-sizing: border-box;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .te-logo-card:hover {
          transform: translateY(-3px);
          border-color: rgba(124, 58, 237, 0.3);
          box-shadow: 0 10px 24px rgba(124, 58, 237, 0.08);
          background: #faf8ff;
        }

        .te-logo-img {
          max-height: 44px;
          max-width: 140px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.65;
          transition: all 0.3s ease;
        }

        .te-logo-card:hover .te-logo-img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.04);
        }

        /* White logo inverted for crisp contrast */
        .te-logo-img-darkened {
          filter: brightness(0) grayscale(100%);
          opacity: 0.6;
        }

        .te-logo-card:hover .te-logo-img-darkened {
          filter: brightness(0);
          opacity: 0.95;
          transform: scale(1.04);
        }

        /* ── Responsive Refinements ── */
        @media (max-width: 1024px) {
          .te-hairline-metrics {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 28px;
            padding: 30px 0;
          }
          .te-hairline-item:nth-child(2)::after {
            display: none;
          }
          .te-hairline-item::after {
            top: 15%;
            height: 70%;
          }
        }

        @media (max-width: 640px) {
          .te-hairline-metrics {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 22px;
            padding: 24px 0;
            margin: 32px 0 44px 0;
          }
          .te-hairline-number {
            font-size: 2.2rem;
          }
          .te-hairline-label {
            font-size: 11px;
          }
          .te-industry-line {
            gap: 8px;
            font-size: 12px;
          }
          .te-logo-card {
            width: 150px;
            height: 76px;
            padding: 12px 16px;
            border-radius: 12px;
          }
          .te-logo-img {
            max-height: 36px;
            max-width: 110px;
          }
          .te-marquee-container {
            gap: 12px;
          }
          .te-marquee-left,
          .te-marquee-right {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .te-marquee-left,
          .te-marquee-right {
            animation: none !important;
          }
        }
      `}} />

      {/* Main Container */}
      <div className="te-clients-container">
        {/* Clean Minimal Header */}
        <div className="te-clients-header">
          <div className="te-clients-badge">
            <span>✦</span>
            <span>WHO WE SERVE</span>
            <span>✦</span>
          </div>

          <h2 className="te-clients-title">WHO WE WORK WITH</h2>

          <p className="te-clients-subtitle">
            From ambitious founders to growing teams of up to 30 people, we provide dedicated, founder-led engineering and creative direction to launch and scale your business.
          </p>

          {/* Minimalist Industry Line (No scattered pill boxes) */}
          <div className="te-industry-line">
            {INDUSTRIES.map((ind, i) => (
              <React.Fragment key={i}>
                <span>{ind}</span>
                {i < INDUSTRIES.length - 1 && <span className="te-industry-sep">•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Minimal Hairline Metrics Strip (Replaces bulky box) */}
        <div className="te-hairline-metrics">
          {METRICS.map((m, idx) => (
            <div key={idx} className="te-hairline-item">
              <div className="te-hairline-number">{m.value}</div>
              <div className="te-hairline-label">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width Smooth Infinite Marquee Tracks */}
      <div className="te-marquee-container">
        {/* Soft Left & Right Fade Masks */}
        <div className="te-marquee-fade-left" aria-hidden="true" />
        <div className="te-marquee-fade-right" aria-hidden="true" />

        {/* Track 1: Gliding to LEFT */}
        <div className="te-marquee-row" aria-label="Client logos row 1">
          <div className="te-marquee-track te-marquee-left">
            {[...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos].map((item, idx) => (
              <div key={`r1-${idx}`} className="te-logo-card">
                <img
                  src={item.src}
                  alt={`${item.name} Client Logo`}
                  className={`te-logo-img ${item.isWhite ? 'te-logo-img-darkened' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Gliding to RIGHT */}
        <div className="te-marquee-row" aria-label="Client logos row 2">
          <div className="te-marquee-track te-marquee-right">
            {[...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos].map((item, idx) => (
              <div key={`r2-${idx}`} className="te-logo-card">
                <img
                  src={item.src}
                  alt={`${item.name} Client Logo`}
                  className={`te-logo-img ${item.isWhite ? 'te-logo-img-darkened' : ''}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
