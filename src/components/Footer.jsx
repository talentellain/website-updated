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

            <div className="flex-col-mobile" style={{ 
                position: 'relative', 
                zIndex: 2, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-end',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '3rem',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ fontWeight: 800, letterSpacing: '-1px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', color: '#ffffff' }}>
                        TALENT<span style={{ color: '#AC58E9', marginLeft: '4px' }}>ELLA</span>
                        <div style={{ width: '6px', height: '6px', background: '#AC58E9', borderRadius: '50%', marginLeft: '4px' }}></div>
                    </div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', maxWidth: '300px' }}>
                        India's 360° marketing agency crafting digital excellence through imagination, strategy, and precision.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>Connect</span>
                        <div style={{ display: 'flex', gap: '1.5rem', color: '#ffffff' }}>
                            <motion.a href="https://www.instagram.com/talentella.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#AC58E9' }} style={{ cursor: 'pointer', color: 'inherit' }}><Instagram size={20} /></motion.a>
                            <motion.a href="https://www.linkedin.com/company/talentella/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BoCez94fpRBmgazPJzx3LPw%3D%3D" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#AC58E9' }} style={{ cursor: 'pointer', color: 'inherit' }}><Linkedin size={20} /></motion.a>
                            <motion.a href="mailto:talentella.in@gmail.com" whileHover={{ scale: 1.2, color: '#AC58E9' }} style={{ cursor: 'pointer', color: 'inherit' }}><Mail size={20} /></motion.a>
                        </div>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}>Legal</span>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                            © 2026 TALENT ELLA. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
