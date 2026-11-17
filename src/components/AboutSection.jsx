import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ABOUT_STYLES = `
  .te-about-section {
    background-color: #ffffff;
    padding: clamp(40px, 6vw, 70px) 0 clamp(50px, 7vw, 80px) 0;
    position: relative;
    overflow: hidden;
  }

  .te-about-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 36px);
  }

  /* ── Clean Left-Aligned Stack ── */
  .te-about-stack {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    max-width: 820px;
  }

  /* ── Top Left Label (* ABOUT) ── */
  .te-about-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #7c3aed;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    margin-bottom: 16px;
  }

  .te-about-label-icon {
    font-size: 14px;
    line-height: 1;
    color: #7c3aed;
  }

  /* ── Normal, Clean, Readable Typography (Not Bold, Not Big) ── */
  .te-about-content {
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: left;
  }

  .te-about-lead {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-size: clamp(1rem, 1.25vw, 1.15rem);
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: -0.01em;
    text-transform: none;
    color: #3f3f46;
    margin: 0;
  }

  .te-about-accent {
    color: #7c3aed;
    font-weight: 600;
  }

  .te-about-sub {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-size: clamp(0.95rem, 1.15vw, 1.05rem);
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: -0.01em;
    text-transform: none;
    color: #64748b;
    margin: 0;
  }

  @media (max-width: 768px) {
    .te-about-label {
      font-size: 11px;
      margin-bottom: 12px;
    }

    .te-about-lead {
      font-size: 0.98rem;
      line-height: 1.68;
    }

    .te-about-sub {
      font-size: 0.92rem;
      line-height: 1.68;
    }
  }
`;

const AboutSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force play the video to bypass browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ABOUT_STYLES }} />

      {/* ── VIDEO SECTION ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '3.5rem 0 1rem 0' }}>
        <div
          style={{
            width: '95%',
            maxWidth: '1400px',
            aspectRatio: '21/9',
            minHeight: '280px',
            margin: '0 auto',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
            backgroundColor: '#f0f2f5',
          }}
        >
          <video
            ref={videoRef}
            src="/video/Ropes_weaving_with_marketing_terms_202607100004.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </section>

      {/* ── NORMAL FONT, LEFT-ALIGNED ABOUT SECTION ── */}
      <section className="te-about-section">
        <div className="te-about-container">
          <div className="te-about-stack">
            {/* Top Left Title: * ABOUT */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="te-about-label"
            >
              <span className="te-about-label-icon">*</span>
              <span>ABOUT</span>
            </motion.div>

            {/* Normal, Non-Bold, Compact Content Below */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="te-about-content"
            >
              <p className="te-about-lead">
                We&apos;re a 360° creative &amp; digital agency focused on crafting{' '}
                <span className="te-about-accent">high-performance web applications</span>,{' '}
                <span className="te-about-accent">complete brand identities</span>, and intuitive user
                experiences that dominate categories.
              </p>

              <p className="te-about-sub">
                With over 5 years of experience, we partner with forward-thinking founders to
                translate ambitious visions into measurable results through data-driven creative and
                pixel-perfect engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
