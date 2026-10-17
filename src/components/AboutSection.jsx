import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force play the video to bypass browser autoplay restrictions
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      {/* ── VIDEO SECTION ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
        <div style={{ width: '95%', maxWidth: '1400px', aspectRatio: '21/9', minHeight: '300px', margin: '0 auto', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', backgroundColor: '#f0f2f5' }}>
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

      <section style={{ 
        backgroundColor: '#ffffff', 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '4rem 2rem' 
      }}>
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: 'clamp(4rem, 10vw, 7.5rem)',
              fontWeight: 900,
              color: '#7C3AED',
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              margin: '0 0 2rem 0',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase'
            }}
          >
            ABOUT US
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            style={{
              color: '#4b4d5a',
              fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
              lineHeight: 1.8,
              fontWeight: 400,
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              marginBottom: '4rem',
              letterSpacing: '-0.01em',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}
          >
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }} 
              style={{ margin: 0 }}
            >
              With over <strong style={{ color: '#0f1015', fontWeight: 700 }}>5 years of experience</strong> crafting digital products, I merge strategic thinking with cutting-edge design to solve complex problems.
            </motion.p>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }} 
              style={{ margin: 0 }}
            >
              My expertise spans across building <strong style={{ color: '#0f1015', fontWeight: 700 }}>complete brand identities, high-performance web applications, and intuitive user interfaces</strong> that drive engagement and retention.
            </motion.p>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }} 
              style={{ margin: 0 }}
            >
              I partner with forward-thinking businesses to translate their vision into measurable results through data-driven design and pixel-perfect development.
            </motion.p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default AboutSection;
