'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

const TALENT_ELLA_AVANDE_STYLES = `
  .te-av-footer {
    --bg-paper: #ffffff;
    --card-bg: #ffffff;
    --box-dark: #0d0d0d;
    --text-primary: #0d0d0d;
    --text-muted: #64748b;
    --text-dim: #94a3b8;
    --border-light: rgba(0, 0, 0, 0.08);
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
    border-top: 1px solid rgba(0, 0, 0, 0.08);
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

  /* ── Top Banner Card: Minimal & Professional ── */
  .te-av-top-card {
    background-color: #ffffff;
    border-radius: 20px;
    padding: clamp(36px, 4.5vw, 56px);
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: clamp(36px, 5vw, 64px);
    align-items: center;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
  }

  .te-av-top-card-left {
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    z-index: 2;
  }

  .te-av-kicker {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--accent-purple);
  }

  .te-av-top-title {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: clamp(2rem, 3.4vw, 3rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin: 0;
    max-width: 520px;
  }

  .te-av-top-desc {
    font-size: 14.5px;
    line-height: 1.6;
    color: var(--text-muted);
    margin: 0;
    font-weight: 400;
    max-width: 480px;
  }

  .te-av-direct-contacts {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    color: var(--text-dim);
    font-weight: 500;
    padding-top: 4px;
  }

  .te-av-contact-sep {
    color: rgba(0, 0, 0, 0.2);
  }

  /* Right Minimalist Dark Action Box */
  .te-av-action-box {
    background-color: #0c0d12;
    color: #ffffff;
    border-radius: 16px;
    padding: clamp(24px, 3.2vw, 32px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .te-av-action-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .te-av-action-tag {
    font-family: 'Space Grotesk', system-ui, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #94a3b8;
  }

  .te-av-action-status {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: #cbd5e1;
    font-weight: 500;
  }

  .te-av-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #10b981;
  }

  /* Direct Action Button */
  .te-av-direct-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    padding: 14px 20px;
    color: #09090b !important;
    text-decoration: none !important;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.01em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .te-av-direct-btn:hover {
    background-color: #f8fafc;
    color: #000000 !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  .te-av-direct-btn:hover .te-av-btn-arrow {
    transform: translate(2px, -2px);
  }

  .te-av-btn-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .te-av-btn-arrow {
    transition: transform 0.2s ease;
  }

  .te-av-action-sub {
    font-size: 12.5px;
    line-height: 1.55;
    color: #94a3b8;
    margin: 0;
    font-weight: 400;
  }

  .te-av-action-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 11px;
    color: #64748b;
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
    border-radius: 8px;
    background-color: #f1f5f9;
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

  /* ── Giant Modern Agency Wordmark: TALENTELLA ® ── */
  .te-av-wordmark-container {
    margin: clamp(48px, 7vw, 76px) 0 clamp(32px, 5vw, 44px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .te-av-wordmark-container:hover {
    opacity: 0.82;
  }

  .te-av-wordmark-svg {
    width: 100%;
    height: auto;
    max-height: 120px;
    display: block;
  }

  .te-av-wordmark-svg text {
    font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
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
    .te-av-nav-grid {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 36px;
    }
  }

  @media (max-width: 680px) {
    .te-av-nav-grid {
      grid-template-columns: 1fr;
      row-gap: 32px;
      text-align: center;
    }

    .te-av-nav-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .te-av-col-title {
      text-align: center;
      margin-bottom: 14px;
    }

    .te-av-social-row {
      justify-content: center;
    }

    .te-av-col-list {
      align-items: center;
      text-align: center;
    }

    .te-av-contact-list {
      align-items: center;
      text-align: center;
    }

    .te-av-bottom-bar {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
    }

    .te-av-bottom-copy {
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .te-av-nav-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const PHONE = '6200713833';
const WHATSAPP_URL = `https://wa.me/91${PHONE}?text=${encodeURIComponent("Hi TalentElla! I'm interested in scaling my business. Can we talk?")}`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="te-av-footer">
      <style dangerouslySetInnerHTML={{ __html: TALENT_ELLA_AVANDE_STYLES }} />

      <div className="te-av-footer-inner">
        {/* Navigation Columns Grid with TalentElla Info */}
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
                href="https://www.linkedin.com/company/talentella-in"
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
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="te-av-nav-col">
            <h3 className="te-av-col-title">Services:</h3>
            <ul className="te-av-col-list">
              <li><Link href="/services/website-development">Website Development</Link></li>
              <li><Link href="/app-development">App Development</Link></li>
              <li><Link href="/services/social-media-management">Social Media Marketing</Link></li>
              <li><Link href="/services/visual-identity-design">Visual Identity</Link></li>
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
              <div><a href={`tel:+91${PHONE}`}>+91 62007 13833</a></div>
              <div><a href="https://www.talentella.in">talentella.in</a></div>
            </div>
          </div>
        </div>

        {/* 4. Giant Modern Agency Wordmark: TALENTELLA ® */}
        <div className="te-av-wordmark-container" onClick={scrollToTop} title="Back to top">
          <svg
            className="te-av-wordmark-svg"
            viewBox="0 0 1280 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="TALENTELLA"
          >
            <text
              x="0"
              y="114"
              fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="140"
              letterSpacing="-0.03em"
              textLength="1145"
              lengthAdjust="spacing"
              fill="#0D0D0D"
            >
              TALENTELLA
            </text>
            <g transform="translate(1196, 18)">
              <circle cx="34" cy="34" r="30" stroke="#0D0D0D" strokeWidth="5.5" fill="none" />
              <text
                x="34"
                y="44"
                fontFamily="'Space Grotesk', system-ui, -apple-system, sans-serif"
                fontWeight="800"
                fontSize="28"
                fill="#0D0D0D"
                textAnchor="middle"
              >
                R
              </text>
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
