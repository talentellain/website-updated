'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

const TALENT_ELLA_AVANDE_STYLES = `
  .te-av-footer {
    --bg-paper: #f4f3ec;
    --card-bg: #e7e5dc;
    --box-dark: #0d0d0d;
    --text-primary: #0d0d0d;
    --text-muted: #666660;
    --text-dim: #8c8c84;
    --border-light: rgba(0, 0, 0, 0.1);
    --accent-purple: #7c3aed;
    --accent-purple-hover: #6d28d9;
    
    background-color: var(--bg-paper);
    color: var(--text-primary);
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    padding: clamp(40px, 5vw, 64px) clamp(20px, 4.5vw, 60px) 36px;
    position: relative;
    z-index: 80;
    box-sizing: border-box;
    width: 100%;
  }

  .te-av-footer *,
  .te-av-footer *::before,
  .te-av-footer *::after {
    box-sizing: border-box;
  }

  .te-av-footer-inner {
    max-width: 1360px;
    margin: 0 auto;
  }

  /* ── Top Banner Card ── */
  .te-av-top-card {
    background-color: var(--card-bg);
    border-radius: 18px;
    padding: clamp(36px, 5vw, 64px);
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: clamp(32px, 5vw, 64px);
    align-items: center;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.04);
  }

  /* Halftone background texture on the top card */
  .te-av-top-card-texture {
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    height: 100%;
    pointer-events: none;
    opacity: 0.18;
    background-image: radial-gradient(circle, #000 1.5px, transparent 1.5px);
    background-size: 14px 14px;
    mask-image: linear-gradient(to right, transparent, black 40%);
    -webkit-mask-image: linear-gradient(to right, transparent, black 40%);
  }

  .te-av-top-card-left {
    position: relative;
    z-index: 2;
  }

  .te-av-top-title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: clamp(2rem, 3.8vw, 3.4rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin: 0;
    max-width: 500px;
  }

  /* Right Black Fast-Track Card */
  .te-av-action-box {
    background-color: var(--box-dark);
    color: #ffffff;
    border-radius: 12px;
    padding: clamp(26px, 3.5vw, 38px);
    position: relative;
    z-index: 2;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
  }

  .te-av-action-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .te-av-action-tag {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #a0a0a0;
  }

  .te-av-action-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: #10b981;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .te-av-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #10b981;
    box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);
    animation: te-pulse-dot 2s infinite;
  }

  @keyframes te-pulse-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.3); opacity: 0.7; }
  }

  /* Direct Action Button */
  .te-av-direct-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 8px;
    padding: 14px 18px;
    color: #ffffff !important;
    text-decoration: none !important;
    font-size: 14.5px;
    font-weight: 600;
    letter-spacing: -0.01em;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .te-av-direct-btn:hover {
    background: var(--accent-purple);
    border-color: var(--accent-purple);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(124, 58, 237, 0.4);
  }

  .te-av-btn-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .te-av-action-sub {
    font-size: 12px;
    line-height: 1.55;
    color: #94a3b8;
    margin: 16px 0 0;
    font-weight: 400;
  }

  /* ── Divider ── */
  .te-av-divider {
    height: 1px;
    background-color: var(--border-light);
    margin: clamp(40px, 6vw, 64px) 0 clamp(36px, 5vw, 48px);
    width: 100%;
  }

  /* ── Navigation Columns ── */
  .te-av-nav-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr 1fr 1.2fr;
    gap: clamp(20px, 3vw, 40px);
    align-items: start;
  }

  .te-av-nav-col {
    display: flex;
    flex-direction: column;
  }

  .te-av-col-title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-primary);
    margin: 0 0 18px 0;
  }

  /* Social Icons */
  .te-av-social-row {
    display: flex;
    gap: 8px;
    margin-top: 2px;
  }

  .te-av-social-box {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: #dfded6;
    color: #0d0d0d;
    text-decoration: none;
    transition: all 0.2s ease;
  }

  .te-av-social-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .te-av-social-box.te-av-social-accent {
    background-color: var(--accent-purple);
    color: #ffffff;
  }

  .te-av-social-box.te-av-social-accent:hover {
    background-color: var(--accent-purple-hover);
    box-shadow: 0 4px 14px rgba(124, 58, 237, 0.4);
  }

  /* Column Link Lists */
  .te-av-col-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .te-av-col-list li a {
    color: #2b2b28;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 500;
    transition: color 0.2s ease, transform 0.2s ease;
    display: inline-block;
  }

  .te-av-col-list li a:hover {
    color: var(--accent-purple);
    transform: translateX(2px);
    text-decoration: underline;
  }

  .te-av-contact-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 11px;
  }

  .te-av-contact-list a {
    color: #2b2b28;
    text-decoration: underline;
    font-size: 13.5px;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  .te-av-contact-list a:hover {
    color: var(--accent-purple);
  }

  /* ── Giant Segmented Brutalist Wordmark: TALENT ELLA [R] ── */
  .te-av-wordmark-container {
    margin: clamp(48px, 7vw, 76px) 0 clamp(32px, 5vw, 44px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
  }

  .te-av-wordmark-svg {
    width: 100%;
    height: auto;
    max-height: 115px;
    display: block;
  }

  /* ── Bottom Bar ── */
  .te-av-bottom-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 11.5px;
    color: var(--text-muted);
    padding-top: 16px;
  }

  .te-av-bottom-copy a {
    color: var(--text-muted);
    text-decoration: none;
  }

  .te-av-bottom-copy a:hover {
    text-decoration: underline;
    color: #000000;
  }

  .te-av-back-top-btn {
    background-color: var(--box-dark);
    color: #ffffff;
    border: none;
    border-radius: 3px;
    padding: 9px 18px;
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .te-av-back-top-btn:hover {
    background-color: var(--accent-purple);
    transform: translateY(-1px);
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .te-av-top-card {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .te-av-top-title {
      max-width: 100%;
    }
    .te-av-nav-grid {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 36px;
    }
  }

  @media (max-width: 680px) {
    .te-av-nav-grid {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 32px;
    }
    .te-av-bottom-bar {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  @media (max-width: 480px) {
    .te-av-nav-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const PHONE = '9709667244';
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi TalentElla! I'm interested in scaling my business. Can we talk?")}`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="te-av-footer">
      <style dangerouslySetInnerHTML={{ __html: TALENT_ELLA_AVANDE_STYLES }} />

      <div className="te-av-footer-inner">
        {/* 1. Top Callout Card: Direct Access & Project Fast-Track (No redundant email input!) */}
        <div className="te-av-top-card">
          <div className="te-av-top-card-texture" aria-hidden="true" />

          <div className="te-av-top-card-left">
            <h2 className="te-av-top-title">
              Ready to turn<br />
              your brand into<br />
              a dominant<br />
              market leader?
            </h2>
          </div>

          <div className="te-av-action-box">
            <div className="te-av-action-header">
              <span className="te-av-action-tag">Fast-Track Project</span>
              <span className="te-av-action-status">
                <span className="te-av-status-dot" />
                Team Online
              </span>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="te-av-direct-btn"
            >
              <span className="te-av-btn-left">
                <MessageCircle size={18} strokeWidth={2.2} />
                <span>Chat on WhatsApp Directly</span>
              </span>
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </a>

            <p className="te-av-action-sub">
              Skip waiting for email replies. Connect directly with our lead strategists for immediate project scoping, timeline estimates, and honest quotes.
            </p>
          </div>
        </div>

        {/* 2. Divider */}
        <div className="te-av-divider" />

        {/* 3. Navigation Columns Grid with TalentElla Info */}
        <div className="te-av-nav-grid">
          {/* Col 1: Socials */}
          <div className="te-av-nav-col">
            <h3 className="te-av-col-title">Our Social:</h3>
            <div className="te-av-social-row">
              <a
                href="https://www.instagram.com/talentella.in"
                target="_blank"
                rel="noopener noreferrer"
                className="te-av-social-box te-av-social-accent"
                aria-label="Instagram"
              >
                <Instagram size={17} strokeWidth={2.2} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="te-av-social-box"
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} strokeWidth={2.2} />
              </a>
              <a
                href="https://www.linkedin.com/company/talentella"
                target="_blank"
                rel="noopener noreferrer"
                className="te-av-social-box"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} strokeWidth={2.2} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="te-av-social-box"
                aria-label="X Twitter"
              >
                <Twitter size={17} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Col 2: Pages */}
          <div className="te-av-nav-col">
            <h3 className="te-av-col-title">Pages:</h3>
            <ul className="te-av-col-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Features</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="te-av-nav-col">
            <h3 className="te-av-col-title">Services:</h3>
            <ul className="te-av-col-list">
              <li><Link href="/services#website-development">Website Development</Link></li>
              <li><Link href="/services#app-development">App Development</Link></li>
              <li><Link href="/services#social-media-management">Social Media Marketing</Link></li>
              <li><Link href="/services#visual-identity-design">Visual Identity</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="te-av-nav-col">
            <h3 className="te-av-col-title">Legal:</h3>
            <ul className="te-av-col-list">
              <li><Link href="/services">Term</Link></li>
              <li><Link href="/services">Policy</Link></li>
              <li><Link href="/services">Cookies</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="te-av-nav-col">
            <h3 className="te-av-col-title">Contact Us:</h3>
            <div className="te-av-contact-list">
              <div><a href="mailto:talentella.in@gmail.com">talentella.in@gmail.com</a></div>
              <div><a href={`tel:+91${PHONE}`}>+91-970-966-7244</a></div>
              <div><a href="https://www.talentella.in">talentella.in</a></div>
            </div>
          </div>
        </div>

        {/* 4. Giant Segmented Brutalist Wordmark: TALENT ELLA [R] */}
        <div className="te-av-wordmark-container">
          <svg
            className="te-av-wordmark-svg"
            viewBox="0 0 1280 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="TALENT ELLA"
          >
            {/* ── T ── */}
            <path
              d="M 16 0 L 74 0 L 90 16 L 90 32 L 61 32 L 61 130 L 29 130 L 29 32 L 0 32 L 0 16 Z"
              fill="#0D0D0D"
            />

            {/* ── A ── */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 134 0 L 186 0 L 210 24 L 210 130 L 178 130 L 178 82 L 142 82 L 142 130 L 110 130 L 110 24 Z M 142 52 L 178 52 L 178 34 L 166 22 L 154 22 L 142 34 Z"
              fill="#0D0D0D"
            />

            {/* ── L ── */}
            <path
              d="M 230 0 L 262 0 L 262 98 L 312 98 L 312 114 L 296 130 L 230 130 Z"
              fill="#0D0D0D"
            />

            {/* ── E ── */}
            <path
              d="M 332 0 L 402 0 L 418 16 L 418 28 L 364 28 L 364 51 L 410 51 L 410 79 L 364 79 L 364 102 L 418 102 L 418 114 L 402 130 L 332 130 Z"
              fill="#0D0D0D"
            />

            {/* ── N ── */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 438 0 L 470 0 L 512 68 L 512 0 L 542 0 L 542 130 L 510 130 L 468 62 L 468 130 L 438 130 Z"
              fill="#0D0D0D"
            />

            {/* ── T ── */}
            <path
              d="M 578 0 L 636 0 L 652 16 L 652 32 L 623 32 L 623 130 L 591 130 L 591 32 L 562 32 L 562 16 Z"
              fill="#0D0D0D"
            />

            {/* ── (Space) ── */}

            {/* ── E ── */}
            <path
              d="M 686 0 L 756 0 L 772 16 L 772 28 L 718 28 L 718 51 L 764 51 L 764 79 L 718 79 L 718 102 L 772 102 L 772 114 L 756 130 L 686 130 Z"
              fill="#0D0D0D"
            />

            {/* ── L ── */}
            <path
              d="M 792 0 L 824 0 L 824 98 L 874 98 L 874 114 L 858 130 L 792 130 Z"
              fill="#0D0D0D"
            />

            {/* ── L ── */}
            <path
              d="M 894 0 L 926 0 L 926 98 L 976 98 L 976 114 L 960 130 L 894 130 Z"
              fill="#0D0D0D"
            />

            {/* ── A ── */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 1020 0 L 1072 0 L 1096 24 L 1096 130 L 1064 130 L 1064 82 L 1028 82 L 1028 130 L 996 130 L 996 24 Z M 1028 52 L 1064 52 L 1064 34 L 1052 22 L 1040 22 L 1028 34 Z"
              fill="#0D0D0D"
            />

            {/* ── [R] Octagonal Registered Trademark Badge ── */}
            <g transform="translate(1140, 8)">
              {/* Octagonal Outer Ring */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M 34 0 L 80 0 L 114 34 L 114 80 L 80 114 L 34 114 L 0 80 L 0 34 Z M 38 12 L 76 12 L 102 38 L 102 76 L 76 102 L 38 102 L 12 76 L 12 38 Z"
                fill="#0D0D0D"
              />
              {/* Letter 'R' inside */}
              <path
                d="M 38 32 L 66 32 C 73 32 78 37 78 44 C 78 50 74 55 68 56 L 79 82 L 66 82 L 56 58 L 50 58 L 50 82 L 38 82 Z M 50 42 L 50 50 L 64 50 C 66.5 50 68 48.5 68 46 C 68 43.5 66.5 42 64 42 Z"
                fill="#0D0D0D"
              />
            </g>
          </svg>
        </div>

        {/* 5. Bottom Copyright Bar */}
        <div className="te-av-bottom-bar">
          <div className="te-av-bottom-copy">
            © 2026 Copyright — <Link href="/">TalentElla</Link> | All Rights Reserved | Ranchi &amp; Pan-India
          </div>

          <button className="te-av-back-top-btn" onClick={scrollToTop}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
