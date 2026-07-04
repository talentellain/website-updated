'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';


// ── Security helpers ──────────────────────────────────────────────
const RATE_LIMIT_KEY = 'te_contact_submissions';
const RATE_LIMIT_MAX = 3;           // max submissions
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes in ms

const sanitize = (str) =>
  str.trim().replace(/<[^>]*>/g, '').replace(/[<>"'`]/g, '').slice(0, 500);

const validateEmail = (email) => {
  // Standard format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
  // Domain must have at least 2 chars after the dot (e.g. .co not .c)
  const domain = email.split('@')[1] || '';
  const tld = domain.split('.').pop();
  if (tld.length < 2) return false;
  // Block obvious disposable/temporary patterns
  const blocked = ['mailinator', 'guerrillamail', 'tempmail', 'throwam', 'yopmail', 'sharklasers'];
  if (blocked.some(b => domain.includes(b))) return false;
  return true;
};

const validatePhone = (phone) =>
  phone === '' || /^[+\d\s\-().]{7,20}$/.test(phone);

const checkRateLimit = () => {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    const submissions = raw ? JSON.parse(raw).filter(t => now - t < RATE_LIMIT_WINDOW) : [];
    if (submissions.length >= RATE_LIMIT_MAX) {
      const wait = Math.ceil((RATE_LIMIT_WINDOW - (now - submissions[0])) / 60000);
      return { allowed: false, wait };
    }
    submissions.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions));
    return { allowed: true };
  } catch {
    return { allowed: true }; // fail open if localStorage unavailable
  }
};
// ─────────────────────────────────────────────────────────────────

const Contact = () => {
  const outerRef = useRef(null);
  const isMobileScroll = typeof window !== 'undefined' && window.innerWidth <= 768;
  const { scrollYProgress } = useScroll({ target: isMobileScroll ? undefined : outerRef, offset: ['start end', 'start start'] });
  const borderRad = useTransform(scrollYProgress, [0, 1], ['60px', '0px']);


  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [honeypot, setHoneypot] = useState(''); // bot trap

  const [status, setStatus] = useState('idle'); // idle | loading | success | error | rate_limited
  const [validationError, setValidationError] = useState('');

  const handleChange = (e) => {
    setValidationError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check — bots fill hidden fields, humans don't
    if (honeypot) return;

    // 2. Input validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      return setValidationError('Please enter your full name (at least 2 characters).');
    }
    if (!validateEmail(formData.email)) {
      return setValidationError('Please enter a valid email address.');
    }

    if (!validatePhone(formData.phone)) {
      return setValidationError('Please enter a valid phone number.');
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return setValidationError('Message must be at least 10 characters.');
    }

    // 3. Rate limiting
    const { allowed, wait } = checkRateLimit();
    if (!allowed) {
      setStatus('rate_limited');
      setTimeout(() => setStatus('idle'), 8000);
      return setValidationError(`Too many submissions. Please wait ${wait} minute${wait > 1 ? 's' : ''} before trying again.`);
    }

    setStatus('loading');
    setValidationError('');

    const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // 4. Sanitize all fields before sending
    const templateParams = {
      user_name:  sanitize(formData.fullName),
      user_email: sanitize(formData.email),
      phone:      sanitize(formData.phone),
      message:    sanitize(formData.message),
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
        console.error('EmailJS error:', error?.text ?? error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };


  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div id="contact" ref={outerRef} className="sticky-outer" style={{ zIndex: 80, backgroundColor: '#000000', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background massive text */}
      <div style={{ 
        position: 'absolute', 
        top: isMobile ? '8%' : '12%', 
        left: isMobile ? '50%' : '40%', 
        transform: 'translate(-50%, -50%) scaleY(1.4)', 
        width: '100%', 
        textAlign: 'center',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        <h1 style={{ 
          fontSize: isMobile ? 'clamp(4rem, 25vw, 7rem)' : 'clamp(6rem, 18vw, 20rem)', 
          fontWeight: 900, 
          margin: 0,
          color: '#ffffff',
          lineHeight: 0.8,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          fontFamily: 'Impact, sans-serif'
        }}>
          CONTACT
        </h1>
      </div>

      <motion.section
        className="sticky-section"
        style={{ 
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          borderTopLeftRadius: isMobile ? '0px' : borderRad, 
          borderTopRightRadius: isMobile ? '0px' : borderRad, 
          color: '#ffffff',
          justifyContent: 'center',
          minHeight: '100dvh'
        }}
      >
        <div className="hide-scrollbar" style={{ width: '100%', minHeight: '100dvh', padding: isMobile ? '5rem 5% 4rem' : 'clamp(2rem, 10vh, 5rem) 5%', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', margin: '0 auto', position: 'relative' }}>
            
            {/* The Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ 
                backgroundColor: '#7c3aed', // Purple background
                padding: isMobile ? '2.5rem 1.5rem' : '3rem',
                width: '100%',
                maxWidth: '750px',
                margin: isMobile ? '3rem auto 0' : '1.5rem -2% 0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: isMobile ? '1.5rem' : '2rem'
              }}
            >
              <h3 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', margin: 0, textTransform: 'uppercase', color: 'white' }}>REACH US</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full relative z-20">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={e => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                  {/* Left Column Fields */}
                  <div className="flex flex-col gap-5">
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="First & Last Name"
                      disabled={status === 'loading'}
                      className="contact-input"
                      style={{
                        width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.4)',
                        padding: '0.6rem 0', fontSize: '1rem', color: 'white', fontWeight: 500, outline: 'none'
                      }}
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone (Optional)"
                      disabled={status === 'loading'}
                      className="contact-input"
                      style={{
                        width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.4)',
                        padding: '0.6rem 0', fontSize: '1rem', color: 'white', fontWeight: 500, outline: 'none'
                      }}
                    />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email"
                      disabled={status === 'loading'}
                      className="contact-input"
                      style={{
                        width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.4)',
                        padding: '0.6rem 0', fontSize: '1rem', color: 'white', fontWeight: 500, outline: 'none'
                      }}
                    />
                    
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginTop: '1rem' }}>
                      <input type="checkbox" required style={{ marginTop: '0.2rem', accentColor: '#7c3aed', width: '18px', height: '18px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', lineHeight: 1.4, color: 'rgba(255,255,255,0.9)' }}>
                        I give TalentElla permission to contact me at this email address.
                      </span>
                    </div>
                  </div>

                  {/* Right Column Fields */}
                  <div className="flex flex-col h-full justify-between gap-5">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Type your message here"
                      disabled={status === 'loading'}
                      style={{
                        width: '100%', backgroundColor: 'transparent', borderBottom: '1px solid rgba(255,255,255,0.4)',
                        padding: '0.6rem 0', fontSize: '1rem', color: 'white', fontWeight: 500, outline: 'none', resize: 'none', minHeight: isMobile ? '160px' : '110px'
                      }}
                    />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                        This site is protected by reCAPTCHA and the Google <a href="#" style={{textDecoration: 'underline', color: 'white'}}>Privacy Policy</a> and <a href="#" style={{textDecoration: 'underline', color: 'white'}}>Terms of Service</a> apply.<br/><br/>
                        For information on how to unsubscribe, please review our <a href="#" style={{textDecoration: 'underline', color: 'white'}}>privacy policy</a>.
                      </p>
                      
                      <div className="flex justify-end">
                        <button 
                          type="submit" 
                          disabled={status === 'loading'}
                          style={{ 
                            border: '1px solid white', 
                            background: 'transparent', 
                            color: 'white',
                            padding: '0.6rem 2rem',
                            borderRadius: '100px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            fontSize: '1rem',
                            fontWeight: 500,
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s'
                          }}
                          onMouseEnter={(e) => { if(status!=='loading'){ e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#7c3aed'; } }}
                          onMouseLeave={(e) => { if(status!=='loading'){ e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'white'; } }}
                        >
                          {status === 'loading' ? 'Sending...' : 'Send'}
                          {status !== 'loading' && <ArrowUpRight size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Messages */}
                {validationError && (
                  <div style={{ color: 'white', background: 'rgba(255,0,0,0.2)', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
                    {validationError}
                  </div>
                )}
                {status === 'success' && (
                  <div style={{ color: 'white', background: 'rgba(255,255,255,0.2)', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
                    Success! Message received loud and clear.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ color: 'white', background: 'rgba(255,0,0,0.2)', padding: '1rem', textAlign: 'center', marginTop: '1rem' }}>
                    Failed to route. Try sending an email directly.
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
