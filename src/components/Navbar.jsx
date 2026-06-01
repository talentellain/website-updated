import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/talentella-logo.png';

// Nav items that are anchor-scroll vs page links
const PAGE_LINKS = { 
    HOME: '/',
    PORTFOLIO: '/portfolio',
    APP: '/app-development',
    BLOG: '/blog',
    WEBSITE: '/services/website-development',
    'SMM': '/services/social-media-management',
    IDENTITY: '/services/visual-identity-design'
};

const MobileMenuItem = ({ item, index, handleNavClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const pillImg = "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=600&auto=format&fit=crop";

    return (
        <a 
            href={PAGE_LINKS[item] ? PAGE_LINKS[item] : `#${item.toLowerCase()}`}
            onClick={(e) => {
                if (!PAGE_LINKS[item]) {
                    handleNavClick(e, item.toLowerCase());
                } else {
                    // Let the Link handle it if possible, but this is a raw <a>
                    // So we'll let it navigate normally and close the menu
                    if (typeof handleNavClick === 'function') handleNavClick(e, null); 
                }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            style={{ 
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                padding: '1.4rem 0',
                color: isHovered ? '#000000' : 'white', 
                backgroundColor: isHovered ? '#ffffff' : 'transparent',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                borderTop: index === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                transition: 'background-color 0.4s ease, color 0.4s ease',
                display: 'block',
                cursor: 'pointer'
            }}
        >
            {/* Base Text (visible when not hovered) */}
            <div style={{ opacity: isHovered ? 0 : 1, transition: 'opacity 0.3s ease', fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', fontWeight: 700, letterSpacing: '0.08em' }}>
                {item}
            </div>

            {/* Marquee (visible when hovered) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                opacity: isHovered ? 1 : 0,
                pointerEvents: 'none',
                transition: 'opacity 0.3s ease'
            }}>
                <motion.div
                    animate={isHovered ? { x: ["0%", "-50%"] } : { x: "0%" }}
                    transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                        width: 'fit-content'
                    }}
                >
                    {/* Repeat exactly elements so we can scroll perfectly 50% */}
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', fontWeight: 700, letterSpacing: '0.08em', margin: '0 1.5rem', color: '#000000' }}>{item}</span>
                            <div style={{
                                width: '70px',
                                height: '35px',
                                borderRadius: '50px',
                                overflow: 'hidden',
                                display: 'inline-block'
                            }}>
                                <img src={pillImg} alt="ocean" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" decoding="async" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </a>
    );
};

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, targetId) => {
        if (targetId) {
            e.preventDefault();
            if (location.pathname !== '/') {
                // Navigate to home and then trigger scroll
                navigate('/');
                setTimeout(() => {
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'auto' });
                    }
                }, 400); // More time for pages with high-quality media
            } else {
                const el = document.getElementById(targetId);
                if (el) {
                    // Let Lenis handle the smoothing natively
                    el.scrollIntoView({ behavior: 'auto' });
                }
            }
        }
        if (isOpen) setIsOpen(false);
    };

    // Keep the theme detection logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { id: 'footer', isLight: true },
                { id: 'contact', isLight: false },
                { id: 'faq', isLight: true },
                { id: 'why-talentella', isLight: false },
                { id: 'process', isLight: true },
                { id: 'projects', isLight: false },
                { id: 'services', isLight: true },
                { id: 'hero', isLight: false },
            ];
            
            let overLight = false;
            
            for (let i = 0; i < sections.length; i++) {
                const sectionEl = document.getElementById(sections[i].id);
                if (sectionEl) {
                    const rect = sectionEl.getBoundingClientRect();
                    if (rect.top <= 100) {
                        overLight = sections[i].isLight;
                        break;
                    }
                }
            }
            
            setIsDarkTheme(overLight);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const textColor = isDarkTheme ? '#000000' : '#ffffff';
    const borderColor = isDarkTheme ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)';
    const glassBg = isDarkTheme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(5, 5, 5, 0.85)';

    return (
        <>
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                zIndex: 1000, 
                backgroundColor: glassBg,
                borderBottom: `1px solid ${borderColor}`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
        >
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0.8rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Logo */}
                <Link 
                    to="/" 
                    onClick={(e) => {
                        if (location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        } else {
                            window.scrollTo(0, 0);
                        }
                    }} 
                    style={{ textDecoration: 'none' }}
                >
                    <motion.div 
                        style={{ 
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                        }}
                    >
                        <img 
                          src={logo} 
                          alt="Talent Ella Logo" 
                          fetchpriority="high"
                          decoding="async"
                          style={{ 
                            height: '40px',
                            width: 'auto',
                            mixBlendMode: isDarkTheme ? 'multiply' : 'screen',
                            filter: isDarkTheme ? 'contrast(1.2)' : 'none',
                            borderRadius: '6px'
                          }} 
                        />
                    </motion.div>
                </Link>

                {/* Navigation Menu */}
                <div 
                    className="hidden-mobile"
                    style={{ 
                        display: 'flex', 
                        gap: '2rem', 
                        alignItems: 'center',
                        pointerEvents: 'auto',
                    }}
                >
                            {['HOME', 'WEBSITE', 'SMM', 'IDENTITY', 'APP', 'PORTFOLIO', 'BLOG'].map((item, index) => {
                        const isPageLink = !!PAGE_LINKS[item];
                        const isActive = isPageLink ? location.pathname === PAGE_LINKS[item] : false;
                        const activeColor = '#a78bfa';
                        const linkColor = isActive ? activeColor : textColor;
                        const linkOpacity = isActive ? 1 : (hoveredIndex === index ? 1 : 0.7);

                        return isPageLink ? (
                            <Link
                                key={item}
                                to={PAGE_LINKS[item]}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    position: 'relative',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.12em',
                                    color: linkColor,
                                    opacity: linkOpacity,
                                    transition: 'opacity 0.3s ease, color 0.3s ease',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    padding: '0.5rem 0'
                                }}
                            >
                                {item}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '2px', backgroundColor: activeColor, borderRadius: '2px' }}
                                    />
                                )}
                            </Link>
                        ) : (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item.toLowerCase())}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                style={{
                                    position: 'relative',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    letterSpacing: '0.12em',
                                    color: linkColor,
                                    opacity: linkOpacity,
                                    transition: 'opacity 0.3s ease, color 0.3s ease',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                    padding: '0.5rem 0'
                                }}
                            >
                                {item}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        style={{ position: 'absolute', bottom: '-2px', left: 0, right: 0, height: '2px', backgroundColor: activeColor, borderRadius: '2px' }}
                                    />
                                )}
                            </motion.a>
                        );
                    })}
                </div>

                {/* Action Button */}
                <div className="hidden-mobile" style={{ pointerEvents: 'auto' }}>
                    <Link to="/#contact" onClick={(e) => handleNavClick(e, 'contact')} style={{ textDecoration: 'none' }}>
                        <motion.div 
                          whileHover={{ scale: 1.05, y: -1, boxShadow: '0 8px 20px rgba(167, 139, 250, 0.2)' }}
                          whileTap={{ scale: 0.98 }}
                          style={{ 
                              padding: '0.65rem 1.6rem', 
                              fontSize: '0.75rem', 
                              fontWeight: 800,
                              borderRadius: '100px',
                              display: 'inline-flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              letterSpacing: '0.05em',
                              backgroundColor: isDarkTheme ? '#121212' : '#ffffff',
                              color: isDarkTheme ? '#ffffff' : '#121212',
                              border: isDarkTheme ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                              transition: 'all 0.3s ease'
                          }}
                        >
                            GET IN TOUCH
                        </motion.div>
                    </Link>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="show-mobile" style={{ pointerEvents: 'auto' }}>
                   <button onClick={toggleMenu} style={{ background: 'none', border: 'none', color: textColor, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                       <Menu size={28} />
                   </button>
                </div>
            </div>
        </motion.nav>

            {/* Mobile Fullscreen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0, left: 0, right: 0, bottom: 0,
                            backgroundColor: '#050508',
                            zIndex: 2000,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            padding: '2rem'
                        }}
                    >
                        <button onClick={toggleMenu} style={{ position: 'absolute', top: '1.5rem', right: '5%', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                            <X size={36} />
                        </button>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center', overflowY: 'auto', flex: 1, justifyContent: 'center' }}>
                    {['HOME', 'WEBSITE', 'SMM', 'IDENTITY', 'APP', 'PORTFOLIO', 'BLOG'].map((item, index) => {
                                const isActive = PAGE_LINKS[item] ? location.pathname === PAGE_LINKS[item] : false;
                                return PAGE_LINKS[item] ? (
                                    <Link
                                        key={item}
                                        to={PAGE_LINKS[item]}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            width: '100%',
                                            padding: '1.4rem 0',
                                            color: isActive ? '#a78bfa' : 'white',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                                            borderTop: index === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                                            display: 'block',
                                            fontSize: 'clamp(1.2rem, 5vw, 1.8rem)',
                                            fontWeight: 700,
                                            letterSpacing: '0.08em',
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        {item}
                                    </Link>
                                ) : (
                                    <MobileMenuItem
                                        key={item}
                                        item={item}
                                        index={index}
                                        handleNavClick={handleNavClick}
                                    />
                                );
                            })}
                        </div>
                        <Link to="/#contact" onClick={(e) => { handleNavClick(e, 'contact'); setIsOpen(false); }} style={{ textDecoration: 'none', marginTop: '1.5rem', width: '100%', maxWidth: '280px' }}>
                            <motion.div
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '0.9rem 2rem',
                                    fontSize: '0.8rem',
                                    fontWeight: 800,
                                    borderRadius: '100px',
                                    textAlign: 'center',
                                    letterSpacing: '0.08em',
                                    backgroundColor: '#a78bfa',
                                    color: '#000',
                                }}
                            >
                                GET IN TOUCH
                            </motion.div>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
