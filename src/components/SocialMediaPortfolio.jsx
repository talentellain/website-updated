'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { useState, useMemo } from 'react';

const SocialMediaPortfolio = ({ portfolio }) => {
  const [selectedId, setSelectedId] = useState(null);

  // Interweave portrait and landscape items into a perfectly balanced grid pattern
  const mixedPortfolio = useMemo(() => {
    if (!portfolio || portfolio.length === 0) return [];
    
    const portraits = [...portfolio.filter(item => item.orientation !== 'landscape')];
    const landscapes = [...portfolio.filter(item => item.orientation === 'landscape')];
    
    const mixed = [];
    let pIdx = 0;
    let lIdx = 0;

    // Define a repeating layout structure that matches grid slots:
    // Row 1: Portrait (1 col) + Landscape (2 cols)
    if (portraits[pIdx]) mixed.push(portraits[pIdx++]);
    if (landscapes[lIdx]) mixed.push(landscapes[lIdx++]);

    // Row 2: Landscape (2 cols) + Portrait (1 col)
    if (landscapes[lIdx]) mixed.push(landscapes[lIdx++]);
    if (portraits[pIdx]) mixed.push(portraits[pIdx++]);

    // Row 3: 3 Portraits (1 col each)
    for (let i = 0; i < 3; i++) {
      if (portraits[pIdx]) mixed.push(portraits[pIdx++]);
    }

    // Row 4: Landscape (2 cols) + Portrait (1 col)
    if (landscapes[lIdx]) mixed.push(landscapes[lIdx++]);
    if (portraits[pIdx]) mixed.push(portraits[pIdx++]);

    // Row 5: Portrait (1 col) + Landscape (2 cols)
    if (portraits[pIdx]) mixed.push(portraits[pIdx++]);
    if (landscapes[lIdx]) mixed.push(landscapes[lIdx++]);

    // Row 6: 3 Portraits (1 col each)
    for (let i = 0; i < 3; i++) {
      if (portraits[pIdx]) mixed.push(portraits[pIdx++]);
    }

    // Row 7: Landscape (2 cols) + Portrait (1 col)
    if (landscapes[lIdx]) mixed.push(landscapes[lIdx++]);
    if (portraits[pIdx]) mixed.push(portraits[pIdx++]);

    // Append any leftover items dynamically
    while (pIdx < portraits.length) {
      mixed.push(portraits[pIdx++]);
    }
    while (lIdx < landscapes.length) {
      mixed.push(landscapes[lIdx++]);
    }

    return mixed;
  }, [portfolio]);

  if (!portfolio || portfolio.length === 0) return null;

  const selectedItem = portfolio.find(item => item.id === selectedId);

  return (
    <div style={{ position: 'relative', width: '100%', backgroundColor: '#000000', padding: '30px 0' }}>
      
      {/* Local CSS Stylesheet to guarantee dynamic orientation rendering and perfect grid pack flow */}
      <style dangerouslySetInnerHTML={{ __html: `
        .portfolio-grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          grid-auto-flow: dense;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .portfolio-bento-card {
          position: relative;
          border-radius: 24px;
          background-color: #0e0e11;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .portfolio-bento-card:hover {
          border-color: rgba(172, 88, 233, 0.35);
          box-shadow: 0 20px 40px rgba(172, 88, 233, 0.15);
        }

        .portfolio-card-portrait {
          grid-column: span 1;
          grid-row: span 2;
          min-height: 480px;
        }

        .portfolio-card-landscape {
          grid-column: span 2;
          grid-row: span 1;
          min-height: 230px;
        }

        .portfolio-card-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.55;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-bento-card:hover .portfolio-card-video {
          opacity: 0.9;
          transform: scale(1.05);
        }

        .portfolio-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.25) 60%, transparent 100%);
          pointer-events: none;
          z-index: 10;
        }

        .portfolio-card-text {
          position: relative;
          z-index: 20;
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .portfolio-card-category {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #AC58E9;
        }

        .portfolio-card-title {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.015em;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
          transition: color 0.3s ease;
        }

        .portfolio-bento-card:hover .portfolio-card-title {
          color: #AC58E9;
        }

        .portfolio-card-desc {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.5;
          margin: 4px 0 0 0;
          max-width: 92%;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .portfolio-card-arrow {
          position: absolute;
          top: 16px;
          right: 16px;
          z-index: 20;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .portfolio-bento-card:hover .portfolio-card-arrow {
          opacity: 1;
          transform: translateY(0);
          background: #AC58E9;
          border-color: #AC58E9;
          box-shadow: 0 0 15px rgba(172, 88, 233, 0.4);
        }

        @media (max-width: 1024px) {
          .portfolio-grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .portfolio-card-portrait {
            min-height: 420px;
          }
          .portfolio-card-landscape {
            min-height: 200px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-grid-container {
            grid-template-columns: 1fr;
            padding: 0 16px;
          }
          .portfolio-card-portrait, .portfolio-card-landscape {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            min-height: 280px !important;
          }
        }
      ` }} />

      {/* Bento Grid Layout Container */}
      <div className="portfolio-grid-container select-none">
        {mixedPortfolio.map((item) => {
          const isLandscape = item.orientation === 'landscape';
          return (
            <div 
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`portfolio-bento-card ${isLandscape ? 'portfolio-card-landscape' : 'portfolio-card-portrait'}`}
            >
              {item.type === 'video' ? (
                <video 
                  src={item.content}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="portfolio-card-video"
                />
              ) : (
                <img 
                  src={item.content} 
                  alt={item.title}
                  className="portfolio-card-video"
                />
              )}
              <div className="portfolio-card-overlay" />
              
              <div className="portfolio-card-text">
                <span className="portfolio-card-category">
                  {item.category || 'VIDEO PRODUCTION'}
                </span>
                <h3 className="portfolio-card-title">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="portfolio-card-desc">
                    {item.description}
                  </p>
                )}
              </div>
              
              <div className="portfolio-card-arrow">
                <ArrowUpRight size={18} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Pop-out Modal Overlay and Video Player */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              style={{ 
                position: 'fixed', 
                inset: 0, 
                backgroundColor: 'rgba(0,0,0,0.95)', 
                backdropFilter: 'blur(20px)',
                zIndex: 1000 
              }}
            />
            <div style={{ 
              position: 'fixed', 
              inset: 0, 
              zIndex: 1001, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              pointerEvents: 'none',
              padding: '2rem'
            }}>
              <motion.div
                layoutId={selectedId}
                style={{ 
                  width: '90%', 
                  maxWidth: '450px', 
                  aspectRatio: '9/16',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  backgroundColor: '#111',
                  pointerEvents: 'auto',
                  position: 'relative',
                  boxShadow: '0 40px 100px rgba(0,0,0,1)'
                }}
              >
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.content} 
                    autoPlay 
                    controls
                    preload="metadata"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img src={selectedItem.content} alt={selectedItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                )}
                
                {/* Modal Close Button */}
                <button 
                  onClick={() => setSelectedId(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <X size={20} />
                </button>

                {/* Modal Content Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2.5rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 100%)'
                  }}
                >
                  <h3 style={{ color: 'white', margin: 0, fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>{selectedItem.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.5 }}>{selectedItem.description}</p>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaPortfolio;
