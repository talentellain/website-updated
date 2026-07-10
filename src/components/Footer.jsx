'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';

const PHONE = '9709667244';
const WHATSAPP_NUMBER = `91${PHONE}`;

const planLabels = {
  'website-development': 'Website Development',
  'social-media-management': 'Social Media Management',
  'visual-identity-design': 'Visual Identity Design',
  'app-development': 'App Development',
};

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

const Footer = () => {
    const buttonRef = useRef(null);
    const containerRef = useRef(null);

    const params = useMemo(() => {
      const search = typeof window !== 'undefined' ? window.location.search : '';
      const sp = new URLSearchParams(search);
      const service = sp.get('service');
      const plan = sp.get('plan');
      return { service, plan };
    }, []);

    const serviceLabel = planLabels[params.service] || '';
    const planText = params.plan ? `${params.plan} Plan` : '';
    const msg = params.service
      ? `Hi TalentElla! I'm interested in your ${serviceLabel} — ${planText}. Can you share more details?`
      : "Hi TalentElla! I'm ready to scale my business. Can you help?";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });
    const borderRad = useTransform(scrollYProgress, [0, 1], ["60px", "0px"]);

    useEffect(() => {
        const btn = buttonRef.current;
        if (!btn || isMobile) return;

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = btn.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        btn.addEventListener('mousemove', handleMouseMove);
        btn.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
            btn.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <motion.footer id="footer" ref={containerRef} style={{ 
            zIndex: 80, 
            position: 'relative', // Slide over the previous sticky section
            backgroundColor: '#000000', 
            minHeight: '100vh', 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 -40px 100px rgba(0,0,0,0.5)',
            borderTopLeftRadius: borderRad,
            borderTopRightRadius: borderRad,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '5rem 5% 3rem',
            overflow: 'hidden'
        }}>
            {/* Subtle Center Glow */}
            <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(172, 88, 233, 0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1
            }}></div>

            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginTop: 'auto', marginBottom: 'auto', paddingTop: '6vh' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="accent-gradient" style={{ fontWeight: 800, letterSpacing: '0.4em', fontSize: '0.8rem', textTransform: 'uppercase', display: 'block', marginBottom: '2rem' }}>
                        The Next Step
                    </span>
                    <h2 
                        style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', marginBottom: '4rem', lineHeight: 1, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff', fontFamily: 'Syne, sans-serif' }}
                    >
                        Ready to <br /> Scale?
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div ref={buttonRef} style={{ display: 'inline-block' }}>
                        <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            style={{ 
                                padding: 'clamp(1rem, 3vw, 1.8rem) clamp(2rem, 5vw, 4.5rem)', 
                                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                                borderRadius: '100px',
                                background: '#25D366',
                                color: '#000',
                                border: 'none',
                                fontWeight: 800,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '1rem',
                                boxShadow: '0 20px 40px rgba(37,211,102,0.3)',
                                cursor: 'pointer',
                                textDecoration: 'none',
                                letterSpacing: '0.02em',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <MessageCircle size={26} /> Chat on WhatsApp <ArrowUpRight size={24} />
                        </motion.a>
                    </div>
                </div>
            </div>

            <div style={{
                position: 'relative',
                zIndex: 2,
                marginTop: '8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 600 }}>
                        <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
                        <a href="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a>
                        <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1rem', fontWeight: 500, paddingTop: '0.3rem' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white', marginBottom: '0.2rem' }}>Top Local Searches</span>
                        <a href="/digital-marketing-ranchi" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Digital Marketing Agency in Jharkhand</a>
                        <a href="/branding-agency-ranchi" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Graphic Designers in Ranchi</a>
                        <a href="/seo-services-ranchi" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>SEO Services near me</a>
                        <a href="/website-development-ranchi" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Website Development in Jharkhand</a>
                    </div>

                    <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>Office</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>Ranchi</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>Jharkhand</span>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>India</span>
                    </div>
                </div>

                <div style={{ width: '100%', textAlign: 'center', overflow: 'hidden', padding: '2rem 0' }}>
                    <h1 style={{ 
                        fontSize: 'clamp(3rem, 9.5vw, 10rem)', 
                        fontWeight: 800, 
                        lineHeight: 0.8, 
                        margin: 0, 
                        letterSpacing: '-0.04em',
                        color: 'white',
                        fontFamily: 'Syne, sans-serif'
                    }}>
                        TalentElla
                    </h1>
                </div>

                <div style={{ 
                    backgroundColor: '#B190FF', 
                    color: 'black', 
                    padding: '1.5rem 2rem', 
                    borderRadius: '20px',
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                }}>
                    <div>Copyright © TalentElla 2026</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        India
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="https://www.instagram.com/talentella.in" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Instagram</a>
                        <a href="https://www.linkedin.com/company/talentella" target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
