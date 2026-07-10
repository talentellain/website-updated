import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, MonitorSmartphone, Layers, Lightbulb, ArrowRight } from 'lucide-react';

const FloatingElement = ({ children, top, left, right, bottom, delay, duration }) => (
  <motion.div
    initial={{ y: 0, rotate: 0 }}
    animate={{ 
      y: [0, -30, 0],
      rotate: [0, 5, -5, 0] 
    }}
    transition={{ repeat: Infinity, duration: duration, delay: delay, ease: "easeInOut" }}
    style={{
      position: 'absolute',
      top, left, right, bottom,
      zIndex: 0,
      pointerEvents: 'none'
    }}
  >
    {children}
  </motion.div>
);

const AboutSection = () => {
  return (
    <>
      {/* ── VIDEO SECTION ── */}
      <section style={{ backgroundColor: '#000', padding: '4rem 0' }}>
        <div style={{ width: '95%', maxWidth: '1400px', aspectRatio: '21/9', margin: '0 auto', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 30px rgba(0,0,0,0.5)' }}>
          <video 
            src="/video/Ropes_weaving_with_marketing_terms_202607100004.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      <section style={{ 
        backgroundColor: '#030303', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '4rem 2rem'
      }}>
        {/* Decorative Floating Elements representing Design & Tech */}
        
        {/* Top Left - Branding/Design */}
        <FloatingElement top="15%" left="12%" delay={0} duration={4}>
          <div style={{ 
            filter: 'drop-shadow(0px 10px 25px rgba(233, 88, 192, 0.5))',
            transform: 'rotate(-15deg)',
            color: '#E958C0'
          }}>
            <PenTool size={100} strokeWidth={1.5} />
          </div>
        </FloatingElement>
        
        {/* Top Right - Web Design / Devices */}
        <FloatingElement top="15%" right="12%" delay={1} duration={5}>
          <div style={{ 
            filter: 'drop-shadow(0px 15px 25px rgba(60, 150, 255, 0.5))',
            transform: 'rotate(10deg)',
            color: '#3C96FF'
          }}>
            <MonitorSmartphone size={110} strokeWidth={1.5} />
          </div>
        </FloatingElement>

        {/* Bottom Left - User Experience / UI Layers */}
        <FloatingElement bottom="20%" left="15%" delay={2} duration={4.5}>
          <div style={{ 
            filter: 'drop-shadow(0px 15px 25px rgba(255, 100, 100, 0.5))',
            transform: 'rotate(-10deg)',
            color: '#FF6464'
          }}>
            <Layers size={120} strokeWidth={1.5} />
          </div>
        </FloatingElement>

        {/* Bottom Right - Creativity / Ideas */}
        <FloatingElement bottom="25%" right="15%" delay={0.5} duration={6}>
          <div style={{ 
            filter: 'drop-shadow(0px 15px 25px rgba(172, 88, 233, 0.5))',
            transform: 'rotate(15deg)',
            color: '#AC58E9'
          }}>
            <Lightbulb size={110} strokeWidth={1.5} />
          </div>
        </FloatingElement>

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
              fontSize: 'clamp(5rem, 12vw, 9rem)',
              fontWeight: 900,
              color: 'var(--accent)',
              fontFamily: '"Impact", "Arial Black", sans-serif',
              margin: '0 0 2rem 0',
              lineHeight: 1,
              letterSpacing: '0.01em',
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
              color: '#d4d4d4',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              lineHeight: 1.8,
              fontWeight: 400,
              fontFamily: '"Inter", sans-serif',
              marginBottom: '4rem',
              letterSpacing: '0.02em',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem'
            }}
          >
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }} 
              style={{ margin: 0 }}
            >
              With over <strong style={{ color: '#fff', fontWeight: 600 }}>5 years of experience</strong> crafting digital products, I merge strategic thinking with cutting-edge design to solve complex problems.
            </motion.p>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } }} 
              style={{ margin: 0 }}
            >
              My expertise spans across building <strong style={{ color: '#fff', fontWeight: 600 }}>complete brand identities, high-performance web applications, and intuitive user interfaces</strong> that drive engagement and retention.
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
