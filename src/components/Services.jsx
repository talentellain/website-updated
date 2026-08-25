'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const serviceDisplayTitles = {
  'app-development': 'APP DEVELOPMENT',
  'website-development': 'WEBSITE DEVELOPMENT',
  'social-media-management': 'SOCIAL MEDIA MARKETING',
  'visual-identity-design': 'VISUAL IDENTITY DESIGN'
};

const serviceNumbers = {
  'app-development': '01',
  'website-development': '02',
  'social-media-management': '03',
  'visual-identity-design': '04'
};

const MotionLink = motion(Link);

const Services = () => {
  return (
    <section id="services" className="services-section-v2">
      {/* Embedded CSS for clean style definition and zero bleed */}
      <style dangerouslySetInnerHTML={{ __html: `
        .services-section-v2 {
          background-color: #000000;
          color: #ffffff;
          padding: 100px 24px;
          position: relative;
          z-index: 35;
          font-family: 'Inter', sans-serif;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .services-header-v2 {
          max-width: 960px;
          margin: 0 auto 75px auto;
          text-align: center;
        }

        .services-header-v2 h2 {
          font-size: clamp(2.2rem, 5.5vw, 4.5rem);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 14px;
          font-family: 'Syne', sans-serif;
          line-height: 0.95;
        }

        .services-header-v2 p {
          color: rgba(255, 255, 255, 0.5);
          font-size: clamp(0.85rem, 1.8vw, 1rem);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
        }

        .services-list-v2 {
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .service-row-v2 {
          display: flex;
          align-items: center;
          padding: 38px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-decoration: none !important;
          color: #ffffff !important;
          transition: border-color 0.4s ease;
          position: relative;
          cursor: pointer;
          outline: none;
        }

        /* Border top on the first row to frame the list */
        .service-row-v2:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-row-v2:hover {
          border-color: rgba(124, 58, 237, 0.4);
        }

        .service-num-v2 {
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          font-weight: 800;
          color: rgba(255, 255, 255, 0.15);
          min-width: 180px; /* Increased gap between number and text */
          transition: color 0.4s ease, transform 0.4s ease;
          font-family: 'Syne', sans-serif;
        }

        .service-row-v2:hover .service-num-v2 {
          color: #7C3AED;
          transform: translateX(8px);
        }

        .service-content-v2 {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-right: 40px;
        }

        .service-title-v2 {
          font-size: clamp(1.25rem, 2.8vw, 1.85rem); /* Made slightly smaller */
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.015em;
          color: #ffffff;
          font-family: 'Syne', sans-serif;
          margin: 0;
          line-height: 1.1;
        }

        .service-desc-v2 {
          font-size: clamp(0.85rem, 1.6vw, 0.95rem); /* Made slightly smaller */
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 400;
          max-width: 820px;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          transition: color 0.4s ease;
        }

        .service-row-v2:hover .service-desc-v2 {
          color: rgba(255, 255, 255, 0.85);
        }

        .service-arrow-v2 {
          width: 50px; /* Made slightly smaller */
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.16);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          background: transparent;
        }

        .service-row-v2:hover .service-arrow-v2 {
          background: #7C3AED;
          border-color: #7C3AED;
          transform: scale(1.08);
          box-shadow: 0 0 20px rgba(124, 58, 237, 0.4);
        }

        .service-arrow-v2 svg {
          color: rgba(255, 255, 255, 0.6);
          transition: color 0.4s ease, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-row-v2:hover .service-arrow-v2 svg {
          color: #ffffff;
          transform: rotate(45deg);
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .services-section-v2 {
            padding: 70px 16px;
          }

          .services-header-v2 {
            margin-bottom: 40px;
          }

          .service-row-v2 {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 30px 8px;
          }

          .service-num-v2 {
            min-width: auto;
            font-size: 2rem;
            line-height: 1;
          }

          .service-row-v2:hover .service-num-v2 {
            transform: translateX(4px);
          }

          .service-content-v2 {
            padding-right: 0;
          }

          .service-arrow-v2 {
            align-self: flex-end;
            margin-top: 6px;
            width: 44px;
            height: 44px;
          }
        }
      `}} />

      <div className="services-header-v2">
        <h2>SERVICES</h2>
        <p>Full-service 360° marketing solutions — brand development, social media marketing, and integrated digital strategies.</p>
      </div>

      <div className="services-list-v2">
        {servicesData.map((s, index) => {
          const num = serviceNumbers[s.id] || `0${index + 1}`;
          const displayTitle = serviceDisplayTitles[s.id] || s.title.toUpperCase();
          const targetPath = s.id === 'app-development' ? '/app-development' : `/services/${s.id}`;

          return (
            <MotionLink 
              key={s.id} 
              href={targetPath} 
              className="service-row-v2"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              aria-label={`Explore our ${s.title} service`}
            >
              <div className="service-num-v2">{num}</div>
              
              <div className="service-content-v2">
                <h3 className="service-title-v2">{displayTitle}</h3>
                <p className="service-desc-v2">{s.description}</p>
              </div>

              <div className="service-arrow-v2">
                <ArrowUpRight size={20} />
              </div>
            </MotionLink>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
