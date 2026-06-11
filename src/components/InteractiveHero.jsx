import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const InteractiveHero = ({
  bgText = 'PORTFOLIO',
  tagline1 = 'TALENTELLA',
  tagline2 = 'PORTFOLIO PAGE',
  heading = 'IMPACTFUL',
  cursiveOverlay = null,
  description = null,
  links = []
}) => {
  return (
    <section style={{ 
      height: '100vh', width: '100vw', backgroundColor: '#05001a', 
      position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center' 
    }}>
      {/* Background Gradient & Huge Text */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, #3a0066 0%, #05001a 70%)', zIndex: 0 }} />
      <div style={{ 
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontSize: '35vw', fontWeight: 900, color: 'rgba(170, 59, 255, 0.04)',
        whiteSpace: 'nowrap', zIndex: 0, fontFamily: 'Impact, sans-serif',
        userSelect: 'none'
      }}>
        {bgText}
      </div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Top Text */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{tagline1}</span>
          <span style={{ fontSize: '0.7rem', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{tagline2}</span>
        </motion.div>

        {/* Main Text Container */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(4rem, 15vw, 12rem)', 
              fontWeight: 900, 
              margin: 0, 
              lineHeight: 1,
              textTransform: 'uppercase',
              color: '#fff',
              fontFamily: 'Impact, sans-serif',
              transform: 'scaleY(1.5)',
              letterSpacing: '-0.02em',
              display: 'inline-block'
            }}
          >
            {heading}
          </motion.h1>
          
          {/* Cursive Overlay */}
          {cursiveOverlay && (
            <motion.div
              initial={{ opacity: 0, x: -30, rotate: -5 }} animate={{ opacity: 1, x: 0, rotate: -12 }} transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              style={{ 
                position: 'absolute', 
                top: '50%', left: '50%', 
                transform: 'translate(-50%, -50%) rotate(-12deg)',
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontFamily: '"Great Vibes", "Brush Script MT", cursive',
                color: '#aa3bff',
                WebkitTextStroke: '2px #fff',
                whiteSpace: 'nowrap',
                zIndex: 3
              }}
            >
              {cursiveOverlay}
            </motion.div>
          )}
        </div>

        {/* Bottom Text & Links */}
        {(description || links.length > 0) && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
            style={{ position: 'absolute', bottom: '-20vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
            {description && (
              <p style={{ fontSize: '0.6rem', color: '#fff', letterSpacing: '0.1em', textAlign: 'center', maxWidth: '450px', lineHeight: 1.6, textTransform: 'uppercase', whiteSpace: 'pre-line' }}>
                {description}
              </p>
            )}
            {links.length > 0 && (
              <div style={{ display: 'flex', gap: '2rem' }}>
                {links.map((link, idx) => (
                  link.url.startsWith('/') || link.url.startsWith('#') ? (
                    <Link key={idx} href={link.url} style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, textDecoration: 'underline', letterSpacing: '0.1em' }}>
                      {link.text}
                    </Link>
                  ) : (
                    <a key={idx} href={link.url} style={{ color: '#fff', fontSize: '0.7rem', fontWeight: 700, textDecoration: 'underline', letterSpacing: '0.1em' }}>
                      {link.text}
                    </a>
                  )
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default InteractiveHero;
