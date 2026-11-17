'use client';

import React from 'react';
import HeroShader from './HeroShader';

const PHONE = '6200713833';
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi TalentElla! I'm interested in scaling my business. Can we talk?")}`;

const HERO_STYLES = `
  .te-hero-root {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background-color: #EFEFEF;
    color: #111827;
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }

  .te-hero-root *, .te-hero-root *::before, .te-hero-root *::after {
    box-sizing: border-box;
  }

  /* ── Hero Bottom Content (z-20) ── */
  .te-hero-content {
    position: relative;
    z-index: 20;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 48px) clamp(44px, 6vw, 76px);
  }

  .te-hero-label {
    font-size: clamp(13px, 1.2vw, 14px);
    color: #111827;
    letter-spacing: 0.04em;
    font-weight: 600;
    margin-bottom: clamp(16px, 2.5vw, 28px);
    text-transform: uppercase;
  }

  .te-hero-h1 {
    font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
    font-size: clamp(2rem, 5.2vw, 4.4rem);
    font-weight: 700;
    line-height: 1.08;
    letter-spacing: -0.035em;
    color: #111827;
    margin: 0;
  }

  .te-hero-h1 .te-serif-italic {
    font-family: 'Bespoke Serif', Georgia, serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.01em;
    padding-right: 0.08em;
  }

  .te-hero-cta-row {
    margin-top: clamp(24px, 3.5vw, 44px);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }

  /* Purple CTA Button */
  .te-hero-cta-purple {
    background-color: #7c3aed;
    color: #ffffff;
    font-size: 13.5px;
    font-weight: 600;
    border-radius: 9999px;
    padding: 8px 8px 8px 24px;
    display: inline-flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25);
    transition: all 0.3s ease;
    border: none;
  }

  .te-hero-cta-purple:hover {
    background-color: #6d28d9;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35);
  }

  .te-hero-roll-box {
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .te-hero-roll-inner {
    display: flex;
    flex-direction: column;
    transition: transform 500ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .te-hero-cta-purple:hover .te-hero-roll-inner {
    transform: translateY(-50%);
  }

  .te-hero-roll-line {
    height: 20px;
    line-height: 20px;
    display: block;
    white-space: nowrap;
  }

  .te-hero-arrow-circle-purple {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    background-color: #ffffff;
    color: #7c3aed;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* ── Mobile View: Centered Vertically & Horizontally ── */
  @media (max-width: 768px) {
    .te-hero-root {
      height: 100dvh;
      min-height: 560px;
    }

    .te-hero-content {
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: clamp(60px, 10vh, 80px) clamp(16px, 5vw, 28px) clamp(50px, 8vh, 80px);
      margin: auto 0;
    }

    .te-hero-label {
      text-align: center;
      margin-bottom: 14px;
      font-size: 11px;
      letter-spacing: 0.06em;
    }

    .te-hero-h1 {
      font-size: clamp(1.8rem, 7.5vw, 2.6rem);
      line-height: 1.14;
      text-align: center;
      max-width: 100%;
      margin: 0 auto;
    }

    .te-hero-cta-row {
      justify-content: center;
      margin-top: 24px;
      width: 100%;
    }
  }

`;

export default function NewShaderHero() {
  return (
    <section className="te-hero-root">
      <style dangerouslySetInnerHTML={{ __html: HERO_STYLES }} />

      {/* Animated Shader Overlay */}
      <HeroShader />

      {/* Top spacing for the fixed floating universal pill navbar */}
      <div style={{ height: 'clamp(70px, 8vw, 96px)', pointerEvents: 'none' }} />

      {/* Hero Bottom Content (z-20) */}
      <div className="te-hero-content">
        <div className="te-hero-label">TalentElla • 360° Marketing &amp; Creative Agency</div>

        <h1 className="te-hero-h1">
          We craft digital <em className="te-serif-italic">experiences</em>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          for brands ready to <em className="te-serif-italic">dominate</em>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          their category online.
        </h1>

        <div className="te-hero-cta-row">
          {/* Purple Button with Text Roll Animation */}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="te-hero-cta-purple">
            <div className="te-hero-roll-box">
              <div className="te-hero-roll-inner">
                <span className="te-hero-roll-line">Start a project</span>
                <span className="te-hero-roll-line" aria-hidden="true">
                  Start a project
                </span>
              </div>
            </div>
            <div className="te-hero-arrow-circle-purple">
              <span style={{ fontSize: '15px', fontWeight: 'bold' }}>→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
