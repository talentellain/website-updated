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
  { value: '1–30', label: 'Team Sizes Supported' },
  { value: '100%', label: 'Founder-Led Attention' },
];

const INDUSTRIES = [
  'Early-Stage Startups',
  'E-Commerce & D2C',
  'Mobile & Web Apps',
  'Regional Growth Brands',
  'Creators & Media',
  'B2B Services',
];

const ClientsSection = () => {
  return (
    <section className="te-clients-section" id="clients">
      <style dangerouslySetInnerHTML={{ __html: `
        .te-clients-section {
          background-color: #ffffff;
          padding: clamp(60px, 8vw, 100px) 0 clamp(70px, 9vw, 110px);
          position: relative;
          z-index: 38;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
        }

        .te-clients-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 clamp(18px, 3vw, 32px);
          box-sizing: border-box;
        }

        /* ── Header ── */
        .te-clients-header {
          text-align: center;
          max-width: 820px;
          margin: 0 auto clamp(40px, 5vw, 56px);
        }

        .te-clients-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #7c3aed;
          text-transform: uppercase;
          background: rgba(124, 58, 237, 0.08);
          border: 1px solid rgba(124, 58, 237, 0.16);
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 18px;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .te-clients-title {
          font-size: clamp(2.4rem, 4.8vw, 4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #0f1015;
          line-height: 1.06;
          margin: 0 0 16px 0;
          text-transform: uppercase;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }

        .te-clients-title .te-serif-italic {
          font-family: 'Bespoke Serif', Georgia, serif;
          font-style: italic;
          font-weight: 400;
          letter-spacing: -0.01em;
          padding-right: 0.08em;
        }

        .te-clients-subtitle {
          font-size: clamp(15px, 1.3vw, 17px);
          line-height: 1.65;
          color: #555869;
          margin: 0 auto;
          font-weight: 400;
          max-width: 680px;
        }

        /* ── Industry Pills ── */
        .te-industry-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 10px;
          margin-top: 24px;
        }

        .te-industry-pill {
          font-size: 12px;
          font-weight: 600;
          color: #4b4f63;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.06);
          padding: 6px 14px;
          border-radius: 9999px;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
        }

        .te-industry-pill:hover {
          color: #7c3aed;
          border-color: rgba(124, 58, 237, 0.25);
          background: #faf5ff;
        }

        /* ── Metrics Bar ── */
        .te-metrics-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: #fcfcfd;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 20px;
          padding: clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 32px);
          margin-bottom: clamp(48px, 6vw, 68px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .te-metric-item {
          text-align: center;
          position: relative;
          padding: 8px 12px;
        }

        .te-metric-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(0, 0, 0, 0.08);
        }

        .te-metric-number {
          font-size: clamp(2rem, 3.2vw, 2.8rem);
          font-weight: 800;
          color: #0f1015;
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          margin-bottom: 6px;
        }

        .te-metric-label {
          font-size: clamp(11.5px, 1.05vw, 13px);
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* ── Full-Width Smooth Marquee Tracks ── */
        .te-marquee-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 10px 0;
        }

        /* Gradient Edge Fade Out */
        .te-marquee-fade-left,
        .te-marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: clamp(60px, 12vw, 180px);
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
          gap: 20px;
          width: max-content;
          will-change: transform;
        }

        .te-marquee-row:hover .te-marquee-track {
          animation-play-state: paused;
        }

        .te-marquee-left {
          animation: teScrollLeft 36s linear infinite;
        }

        .te-marquee-right {
          animation: teScrollRight 36s linear infinite;
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

        /* ── Sleek Logo Cards ── */
        .te-logo-card {
          width: clamp(190px, 17vw, 240px);
          height: 94px;
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 26px;
          box-sizing: border-box;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }

        .te-logo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(124, 58, 237, 0.35);
          box-shadow: 0 12px 28px rgba(124, 58, 237, 0.1);
          background: #faf8ff;
        }

        .te-logo-img {
          max-height: 46px;
          max-width: 150px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.65;
          transition: all 0.35s ease;
        }

        .te-logo-card:hover .te-logo-img {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        /* Specific rule for white logos on light background */
        .te-logo-img-darkened {
          filter: brightness(0) grayscale(100%);
          opacity: 0.6;
        }

        .te-logo-card:hover .te-logo-img-darkened {
          filter: brightness(0);
          opacity: 0.95;
          transform: scale(1.05);
        }

        /* ── Responsive Queries ── */
        @media (max-width: 1024px) {
          .te-metrics-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 0;
            padding: 24px 16px;
          }
          .te-metric-item:nth-child(2)::after {
            display: none;
          }
          .te-metric-item::after {
            top: 20%;
            height: 60%;
          }
        }

        @media (max-width: 640px) {
          .te-metrics-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px 0;
            padding: 18px 12px;
            border-radius: 16px;
            margin-bottom: 36px;
          }
          .te-logo-card {
            width: 160px;
            height: 80px;
            padding: 12px 18px;
            border-radius: 14px;
          }
          .te-logo-img {
            max-height: 38px;
            max-width: 120px;
          }
          .te-marquee-container {
            gap: 14px;
          }
          .te-marquee-left {
            animation-duration: 24s;
          }
          .te-marquee-right {
            animation-duration: 24s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .te-marquee-left,
          .te-marquee-right {
            animation: none !important;
          }
        }
      `}} />

      {/* Main Content Container */}
      <div className="te-clients-container">
        {/* Header Block */}
        <div className="te-clients-header">
          <div className="te-clients-badge">
            <span>✦</span>
            <span>WHO WE SERVE</span>
          </div>

          <h2 className="te-clients-title">WHO WE WORK <em className="te-serif-italic">WITH</em></h2>

          <p className="te-clients-subtitle">
            From ambitious founders to growing teams of up to 30 people, we provide dedicated, founder-led engineering and creative direction to launch and scale your business.
          </p>

          {/* Industry Focus Tags */}
          <div className="te-industry-pills">
            {INDUSTRIES.map((ind, i) => (
              <span key={i} className="te-industry-pill">
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Live Metrics Bar */}
        <div className="te-metrics-bar">
          {METRICS.map((m, idx) => (
            <div key={idx} className="te-metric-item">
              <div className="te-metric-number">{m.value}</div>
              <div className="te-metric-label">{m.label}</div>
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
