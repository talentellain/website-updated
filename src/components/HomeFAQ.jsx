import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const HomeFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="faq" style={{ padding: isMobile ? '60px 5%' : '100px 5%', backgroundColor: '#000000', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row', 
        gap: isMobile ? '3rem' : '8rem', 
        alignItems: 'flex-start',
        padding: isMobile ? '0 5%' : '0' 
      }}>
        {/* Left Column: Title & CTA */}
        <div style={{ 
          flex: isMobile ? 'none' : '1.5', 
          width: '100%',
          position: isMobile ? 'static' : 'sticky', 
          top: '100px',
          textAlign: isMobile ? 'center' : 'left',
          marginBottom: isMobile ? '2rem' : '0'
        }}>
          <span style={{ 
            fontWeight: 800, 
            letterSpacing: '0.25em', 
            textTransform: 'uppercase', 
            fontSize: '0.65rem', 
            display: 'block', 
            marginBottom: '0.75rem',
            color: '#AC58E9'
          }}>
            Inquiry & Support
          </span>
          <h2 style={{ 
            fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.4rem)' : 'clamp(2.5rem, 5vw, 4.5rem)', 
            fontWeight: 900, 
            lineHeight: 0.9, 
            color: '#ffffff', 
            margin: '0 0 1.2rem 0', 
            textTransform: 'uppercase', 
            letterSpacing: '-0.04em',
            wordBreak: isMobile ? 'break-word' : 'normal',
            overflowWrap: isMobile ? 'break-word' : 'normal',
            whiteSpace: isMobile ? 'normal' : 'nowrap'
          }}>
            QUESTIONS<br /><span style={{ color: '#AC58E9' }}>ANSWERED</span>
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.6)', 
            fontSize: '0.9rem', 
            lineHeight: 1.5, 
            marginBottom: '2rem', 
            maxWidth: isMobile ? '100%' : '300px',
            margin: isMobile ? '0 auto 2rem auto' : '0 0 2rem 0'
          }}>
            Have a specific query? Our experts are here to provide the clarity you need.
          </p>
          <Link href="/#contact" style={{ textDecoration: 'none' }} scroll={false}>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#9b47d6' }}
              style={{ 
                padding: isMobile ? '1rem 2.2rem' : '1rem 2rem', 
                borderRadius: '100px', 
                background: '#AC58E9', 
                color: '#fff', 
                border: 'none', 
                fontWeight: 800, 
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: '0.3s ease',
                margin: isMobile ? '0 auto' : '0'
              }}
            >
              Ask a Question
            </motion.button>
          </Link>
        </div>

        {/* Right Column: Accordion */}
        <div style={{ flex: isMobile ? 'none' : '2.5', width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)} 
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: isMobile ? '2.2rem 0' : '2rem 0', 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  color: '#ffffff', 
                  textAlign: 'left' 
                }}
              >
                <h3 style={{ 
                  fontSize: isMobile ? '0.9rem' : '0.95rem', 
                  fontWeight: 800, 
                  margin: 0, 
                  color: openIndex === idx ? '#AC58E9' : '#ffffff',
                  textTransform: 'uppercase',
                  maxWidth: '85%',
                  transition: '0.3s ease',
                  lineHeight: 1.4
                }}>
                  {faq.question}
                </h3>
                <span style={{ fontSize: '1.2rem', color: openIndex === idx ? '#AC58E9' : 'rgba(255,255,255,0.2)', fontWeight: 300, transition: '0.3s ease' }}>
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ 
                      color: 'rgba(255,255,255,0.6)', 
                      fontSize: '0.9rem', 
                      lineHeight: 1.6, 
                      paddingBottom: isMobile ? '2.2rem' : '2rem', 
                      margin: 0,
                      maxWidth: '100%'
                    }}>
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
