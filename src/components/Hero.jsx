'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const videoRef = React.useRef(null);
  useEffect(() => {
    let animationTriggered = false;
    const forceIsIn = () => {
      if (animationTriggered) return;
      animationTriggered = true;
      document.querySelectorAll('.appear, .hero-photo').forEach(el => {
        el.classList.add('is-in');
      });
    };

    // Fallback animation check after 2 requestAnimationFrames
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        let hasActiveAnimation = false;
        const elements = document.querySelectorAll('.appear');
        elements.forEach(el => {
          if (typeof el.getAnimations === 'function' && el.getAnimations().length > 0) {
            hasActiveAnimation = true;
          }
        });
        if (!hasActiveAnimation) {
          forceIsIn();
        }
      });
    });

    const timeoutId = setTimeout(forceIsIn, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleAnimationEnd = (e) => {
    e.currentTarget.classList.add('is-in');
  };

  return (
    <div id="hero" className="hero-landing-wrapper">
      {/* CSS Stylesheet optimized for performance, fluid typography, and accessibility */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --bg: #000000;
          --text: #ffffff;
          --muted: #9a9a9a;
          --border: rgba(255, 255, 255, 0.16);
          --border-soft: rgba(255, 255, 255, 0.12);

          --logo: 15.5px;
          --logo-mark: 22px;
          --nav: 14px;
          --nav-h: 40px;
          --btn: 13.5px;
          --btn-h: 40px;
          --hero-btn-h: 42px;
          --lede: 15.5px;
          --badge: 12.5px;
          --stat-size: 13.5px;
          --header-y: 22px;
          --header-x: 40px;
          --stats-x: 72px;
          --stats-y: 36px;
          --hero-gap: 85px;
          --copy-max: 960px;
          --lede-max: 470px;

          --nav-gap: 8px;
          --nav-pad: 0 18px;
          --btn-pad: 0 16px;
          --badge-pad: 9px 15px;
          --badge-mb: 22px;
          --lede-mt: 18px;
          --actions-mt: 26px;
          --actions-gap: 10px;

          /* INDUSTRY STANDARD: Fluid typography using clamp() to prevent jumpy breakpoints */
          --h1-fluid: clamp(2.5rem, 8.5vw, 8.5rem);
        }

        .hero-landing-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          background: #000000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }

        /* Grain Overlay */
        .grain {
          position: absolute;
          inset: 0;
          z-index: 100;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }

        /* Background video styling with purple overlay */
        .hero-photo {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: #000000;
        }

        .hero-photo video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.15) brightness(0.95);
        }

        /* INDUSTRY STANDARD: Scrim/Overlay gradient to ensure WCAG AAA readability contrast */
        .hero-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(12, 10, 20, 0.2) 0%, rgba(0, 0, 0, 0.75) 100%), #7C3AED;
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        /* Hero content block styling */
        .hero {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 24px;
          width: 100%;
          z-index: 10;
        }

        .hero-copy {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: var(--copy-max);
          width: 100%;
          margin: auto 0;
        }

        /* Hero Tagline Badge */
        .hero-badge {
          color: #7C3AED;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        /* Main Branding Title */
        .hero-title {
          font-size: var(--h1-fluid);
          font-weight: 900;
          letter-spacing: -0.015em;
          line-height: 0.95;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-transform: uppercase;
          font-family: 'Syne', 'Inter', sans-serif;
          margin-bottom: 8px;
        }

        .headline-line {
          display: block;
          overflow: hidden;
          padding: 0.06em 0.15em 0.14em;
        }

        /* Centered Subtitle (SEO Target Keyword H1) */
        .hero-subtitle-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 620px;
          margin-top: 18px;
          gap: 16px;
          z-index: 10;
        }

        .hero-subtitle {
          font-size: clamp(0.75rem, 2.5vw, 1rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        .hero-desc {
          font-size: clamp(0.85rem, 2vw, 0.95rem);
          line-height: 1.6;
          color: var(--muted);
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'Outfit', 'Inter', sans-serif;
        }

        .hero-subtitle-container .hero-actions {
          margin-top: 12px;
        }

        /* Button Custom Language */
        .btn {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: var(--hero-btn-h, 42px);
          padding: 0 28px;
          border-radius: 50px;
          font-size: var(--btn, 13.5px);
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, color 0.35s ease;
        }

        .btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.45) 48%, transparent 76%);
          transform: translateX(-130%);
          transition: transform 0.65s ease;
          z-index: 1;
          pointer-events: none;
        }

        .btn:hover::after {
          transform: translateX(130%);
        }

        .btn-solid {
          background: linear-gradient(180deg, #ffffff 0%, #e7e7e7 48%, #cfcfcf 100%);
          color: #111111;
          border: 1px solid #ffffff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.95);
        }

        .btn-solid:hover {
          background: linear-gradient(180deg, #ffffff 0%, #f3f6ff 42%, #d5def2 100%);
          border-color: #f2f6ff;
          box-shadow: inset 0 1px 0 #ffffff, 0 0 26px rgba(186,208,255,0.4), 0 8px 18px rgba(255,255,255,0.12);
        }

        /* --- Entrance Motion System --- */
        .appear {
          opacity: 1;
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes in-pop {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes in-mask {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes in-soft {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .appear--pop { animation: in-pop 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .appear--mask { animation: in-mask 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .appear--soft { animation: in-soft 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }

        .hero-photo {
          opacity: 1;
          transition: opacity 0.4s ease;
        }
      ` }} />

      {/* Decorative Grain texture */}
      <div className="grain"></div>

      {/* Background purple smoke video (Instant render optimized) */}
      <div className="hero-photo">
        <video 
          ref={videoRef}
          src="/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          fetchPriority="high"
          aria-hidden="true"
          tabIndex="-1"
          onCanPlay={(e) => {
            e.currentTarget.play().catch(() => {});
          }}
          onAnimationEnd={handleAnimationEnd}
        ></video>
      </div>

      {/* Centered Hero Landing content */}
      <main className="hero">
        <div className="hero-copy">
          {/* Tagline Badge */}
          <div 
            className="hero-badge appear appear--pop" 
            style={{ '--d': '0.22s' }}
            onAnimationEnd={handleAnimationEnd}
          >
            THE FUTURE OF MARKETING
          </div>

          {/* Branding Title (Branding text — not a semantic heading to optimize page SEO) */}
          <div className="hero-title">
            <span className="headline-line">
              <span 
                className="appear appear--mask" 
                style={{ '--d': '0.42s' }}
                onAnimationEnd={handleAnimationEnd}
              >
                TALENTELLA
              </span>
            </span>
          </div>

          {/* Subtitle & Desc Description Container */}
          <div 
            className="hero-subtitle-container appear appear--soft" 
            style={{ '--d': '0.82s' }}
            onAnimationEnd={handleAnimationEnd}
          >
            {/* INDUSTRY STANDARD SEO: Primary search keyword is the semantic H1 heading */}
            <h1 className="hero-subtitle">Top Digital Marketing Agency in Jharkhand</h1>
            <p className="hero-desc">
              TalentElla is a full-service digital marketing and web development agency near you. We offer premium branding, graphic design, social media marketing, and SEO services for startups and businesses across India.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-solid"
                onClick={() => {
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get a Free Strategy Call <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
