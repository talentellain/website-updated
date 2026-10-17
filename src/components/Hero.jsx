'use client';

import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const STYLES = `
  /* ── Root ── */
  .hs-root {
    position: relative;
    width: 100%;
    height: 100vh;
    height: 100dvh;
    background: #fafafa;
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  /* ── Blobs ── */
  .hs-blobs {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .hs-blob-main {
    position: absolute;
    top: -20%;
    right: -6%;
    width: 58%;
    height: 88%;
    border-radius: 42% 58% 55% 45% / 48% 52% 48% 52%;
    background: conic-gradient(
      from 200deg at 55% 45%,
      rgba(139,92,246,0.85),
      rgba(99,102,241,0.75),
      rgba(147,197,253,0.6),
      rgba(192,132,252,0.7),
      rgba(139,92,246,0.85)
    );
    filter: blur(32px);
    animation: hs-morph 20s ease-in-out infinite alternate;
    will-change: transform, border-radius;
  }

  .hs-blob-soft {
    position: absolute;
    top: 5%;
    right: 10%;
    width: 40%;
    height: 65%;
    border-radius: 50%;
    background: radial-gradient(ellipse at 45% 40%,
      rgba(224,231,255,0.7) 0%,
      rgba(196,181,253,0.4) 45%,
      transparent 70%
    );
    filter: blur(50px);
    animation: hs-morph 26s 4s ease-in-out infinite alternate-reverse;
  }

  .hs-blob-accent {
    position: absolute;
    top: 30%;
    right: 28%;
    width: 22%;
    height: 35%;
    border-radius: 50%;
    background: radial-gradient(ellipse at center,
      rgba(255,255,255,0.55) 0%,
      transparent 70%
    );
    filter: blur(20px);
  }

  @keyframes hs-morph {
    0%   { transform: translate(0,0) scale(1); border-radius: 42% 58% 55% 45% / 48% 52% 48% 52%; }
    33%  { transform: translate(-18px, 22px) scale(1.03); border-radius: 55% 45% 42% 58% / 52% 48% 52% 48%; }
    66%  { transform: translate(12px,-18px) scale(0.97); border-radius: 48% 52% 60% 40% / 44% 56% 44% 56%; }
    100% { transform: translate(-8px, 10px) scale(1.05); border-radius: 58% 42% 48% 52% / 50% 50% 50% 50%; }
  }

  /* ── Inner content ── */
  .hs-inner {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 6vw 5.5vh;
    height: 100%;
  }

  /* ── Tag row ── */
  .hs-tags {
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
    margin-bottom: 3.2vh;
    animation: hs-up 0.6s 0.1s cubic-bezier(0.16,1,0.3,1) both;
  }

  .hs-tag {
    font-size: 10.5px;
    font-weight: 600;
    color: #4b5563;
    padding: 5px 13px;
    border-radius: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    font-family: 'Plus Jakarta Sans', sans-serif;
    letter-spacing: 0.01em;
    white-space: nowrap;
    transition: border-color 0.2s, color 0.2s;
  }
  .hs-tag:hover {
    border-color: rgba(124,58,237,0.3);
    color: #7C3AED;
  }

  .hs-tag-active {
    background: rgba(124,58,237,0.06);
    border-color: rgba(124,58,237,0.25);
    color: #7C3AED;
  }

  /* ── Serif italic headline ── */
  .hs-h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-style: italic;
    font-weight: 700;
    font-size: clamp(2rem, 5.2vw, 5.8rem);
    color: #111827;
    line-height: 1.05;
    margin: 0 0 0.5vh;
    letter-spacing: -0.02em;
    animation: hs-up 0.75s 0.2s cubic-bezier(0.16,1,0.3,1) both;
  }

  /* ── Big bold word row ── */
  .hs-h2-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2vw;
    animation: hs-up 0.85s 0.3s cubic-bezier(0.16,1,0.3,1) both;
  }

  .hs-h2 {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-weight: 900;
    font-size: clamp(4rem, 13.5vw, 13rem);
    color: #09090b;
    line-height: 0.88;
    letter-spacing: -0.055em;
    text-transform: uppercase;
    margin: 0;
    flex: 1;
    white-space: nowrap;
  }

  /* ── Right side: desc + CTA ── */
  .hs-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    flex-shrink: 0;
    padding-bottom: 6px;
    max-width: 280px;
    animation: hs-up 0.85s 0.38s cubic-bezier(0.16,1,0.3,1) both;
  }

  .hs-desc {
    font-size: 12px;
    line-height: 1.65;
    color: rgba(0,0,0,0.42);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 450;
    text-align: right;
    margin: 0;
    letter-spacing: -0.005em;
  }

  .hs-cta {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 13px 24px;
    border-radius: 100px;
    background: #09090b;
    color: #ffffff;
    font-size: 13.5px;
    font-weight: 700;
    font-family: 'Plus Jakarta Sans', sans-serif;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    box-shadow: 0 8px 28px rgba(15,16,21,0.22);
    letter-spacing: -0.01em;
    flex-shrink: 0;
  }
  .hs-cta:hover {
    background: #7C3AED;
    box-shadow: 0 12px 36px rgba(124,58,237,0.42);
    transform: translateY(-2px);
  }
  .hs-cta-icon {
    width: 26px; height: 26px;
    border-radius: 50%;
    background: rgba(255,255,255,0.14);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .hs-cta:hover .hs-cta-icon {
    transform: rotate(45deg) scale(1.1);
  }

  /* ── Bottom strip ── */
  .hs-strip {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 6vw;
    border-top: 1px solid rgba(0,0,0,0.06);
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    animation: hs-up 0.7s 0.5s both;
  }

  .hs-strip-left {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .hs-metric {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .hs-metric-val {
    font-size: 15px;
    font-weight: 900;
    color: #09090b;
    font-family: 'Space Grotesk', sans-serif;
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .hs-metric-lbl {
    font-size: 9.5px;
    font-weight: 600;
    color: rgba(0,0,0,0.35);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .hs-strip-sep {
    width: 1px;
    height: 28px;
    background: rgba(0,0,0,0.08);
  }

  .hs-strip-right {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 600;
    color: rgba(0,0,0,0.35);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .hs-strip-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #7C3AED;
    box-shadow: 0 0 8px rgba(124,58,237,0.5);
    animation: hs-pulse 2.5s ease-in-out infinite;
  }

  @keyframes hs-pulse {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:0.4; transform:scale(0.75); }
  }

  @keyframes hs-up {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .hs-h2 { font-size: clamp(3rem, 14vw, 7rem); }
    .hs-h1 { font-size: clamp(1.8rem, 5.5vw, 3.2rem); }
    .hs-right { max-width: 220px; }
    .hs-desc { font-size: 11px; }
  }

  @media (max-width: 640px) {
    .hs-inner { padding: 0 5% 4vh; }
    .hs-h2-row { flex-direction: column; align-items: flex-start; gap: 16px; }
    .hs-h2 { font-size: clamp(3.5rem, 18vw, 6rem); white-space: normal; }
    .hs-h1 { font-size: clamp(1.6rem, 7vw, 2.8rem); }
    .hs-right { max-width: 100%; align-items: flex-start; flex-direction: row; flex-wrap: wrap; }
    .hs-desc { text-align: left; display: none; }
    .hs-strip-left { gap: 16px; }
    .hs-metric-val { font-size: 13px; }
  }

  @media (max-width: 400px) {
    .hs-h2 { font-size: 3rem; }
    .hs-tags { gap: 5px; }
    .hs-tag { font-size: 9.5px; padding: 4px 10px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hs-blob-main, .hs-blob-soft, .hs-strip-dot { animation: none !important; }
  }
`;

const TAGS = ['Smart Design', 'Experiences', 'Strategy', 'Branding'];
const METRICS = [
  { val: '150+', lbl: 'Brands Scaled' },
  { val: '340%', lbl: 'Avg ROI' },
  { val: '98%',  lbl: 'Retention Rate' },
];

const Hero = () => {
  return (
    <div id="hero" className="hs-root">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Gradient Blobs */}
      <div className="hs-blobs" aria-hidden="true">
        <div className="hs-blob-main" />
        <div className="hs-blob-soft" />
        <div className="hs-blob-accent" />
      </div>

      {/* Main Content */}
      <div className="hs-inner">

        {/* Tag Pills */}
        <div className="hs-tags" role="list" aria-label="Expertise areas">
          {TAGS.map((tag, i) => (
            <span key={tag} role="listitem" className={`hs-tag${i === 2 ? ' hs-tag-active' : ''}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Serif italic line */}
        <h1 className="hs-h1">Creative digital</h1>

        {/* Giant word + right side */}
        <div className="hs-h2-row">
          <h2 className="hs-h2">STRATEGY</h2>

          <div className="hs-right">
            <p className="hs-desc">
              TalentElla builds brands that dominate — high-performance websites,
              scroll-stopping content, and full-scale campaigns that turn businesses
              into market leaders.
            </p>
            <button
              className="hs-cta"
              onClick={() => scrollTo('contact')}
              aria-label="Let's Talk"
            >
              <span>Let's Talk</span>
              <span className="hs-cta-icon">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom metrics strip */}
      <div className="hs-strip">
        <div className="hs-strip-left">
          {METRICS.map((m, i) => (
            <React.Fragment key={m.lbl}>
              <div className="hs-metric">
                <span className="hs-metric-val">{m.val}</span>
                <span className="hs-metric-lbl">{m.lbl}</span>
              </div>
              {i < METRICS.length - 1 && <div className="hs-strip-sep" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
        <div className="hs-strip-right">
          <div className="hs-strip-dot" aria-hidden="true" />
          Jharkhand &amp; Pan-India
        </div>
      </div>
    </div>
  );
};

export default Hero;
