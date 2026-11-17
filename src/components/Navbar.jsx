'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import logo from '../assets/talentella-logo.png';

const UNIVERSAL_NAVBAR_STYLES = `
  .te-univ-nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    pointer-events: none;
    box-sizing: border-box;
  }

  .te-univ-nav-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: clamp(8px, 1.5vw, 14px) clamp(12px, 2.5vw, 24px);
    box-sizing: border-box;
    width: 100%;
    pointer-events: auto;
  }

  .te-univ-navbar {
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 9999px;
    padding: 6px 14px 6px 14px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
  }

  .te-univ-logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }

  .te-univ-logo-img {
    height: 38px;
    width: auto;
    mix-blend-mode: multiply;
    border-radius: 4px;
    display: block;
  }

  .te-univ-nav-links {
    display: flex;
    align-items: center;
    gap: clamp(14px, 1.8vw, 28px);
  }

  .te-univ-nav-link {
    position: relative;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0f1015;
    opacity: 0.75;
    text-decoration: none;
    transition: opacity 0.25s ease, color 0.25s ease;
    white-space: nowrap;
    padding: 0.5rem 0;
  }

  .te-univ-nav-link:hover {
    opacity: 1;
    color: #AC58E9;
  }

  .te-univ-nav-link.active {
    color: #AC58E9;
    opacity: 1;
  }

  .te-univ-nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #AC58E9;
    border-radius: 2px;
  }

  .te-univ-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .te-univ-get-in-touch-btn {
    padding: 0.65rem 1.6rem;
    font-size: 0.75rem;
    font-weight: 800;
    border-radius: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.05em;
    background-color: #0f1015;
    color: #ffffff;
    border: 1px solid #0f1015;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
    text-transform: uppercase;
  }

  .te-univ-get-in-touch-btn:hover {
    background-color: #7c3aed;
    border-color: #7c3aed;
    transform: scale(1.04);
    box-shadow: 0 8px 20px rgba(172, 88, 233, 0.35);
  }

  /* Mobile Toggle & Sheet */
  .te-univ-mobile-toggle {
    display: none;
    background-color: #0f1015;
    color: #ffffff;
    border-radius: 9999px;
    padding: 8px;
    border: none;
    cursor: pointer;
  }

  .te-univ-sheet-overlay {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.65);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .te-univ-sheet {
    background-color: #ffffff;
    border-radius: 20px 20px 0 0;
    padding: 24px 20px 36px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0 -10px 40px rgba(0,0,0,0.25);
    animation: teUnivSlideUp 0.4s cubic-bezier(0.32, 0.72, 0, 1);
  }

  @keyframes teUnivSlideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @media (max-width: 900px) {
    .te-univ-nav-links {
      display: none;
    }
    .te-univ-right {
      display: none;
    }
    .te-univ-mobile-toggle {
      display: flex;
    }
  }
`;

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'WEBSITE', href: '/services/website-development' },
  { label: 'SMM', href: '/services/social-media-management' },
  { label: 'IDENTITY', href: '/services/visual-identity-design' },
  { label: 'APP', href: '/app-development' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'BLOG', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (pathname === '/') {
      const el = document.getElementById('contact') || document.getElementById('footer');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
    setMobileMenuOpen(false);
  };

  const isItemActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div className="te-univ-nav-wrapper">
      <style dangerouslySetInnerHTML={{ __html: UNIVERSAL_NAVBAR_STYLES }} />

      <header className="te-univ-nav-container">
        <nav className="te-univ-navbar">
          {/* LEFT: Official Logo */}
          <Link href="/" className="te-univ-logo-link" title="TalentElla">
            <img
              src={logo?.src || logo}
              alt="TalentElla"
              className="te-univ-logo-img"
            />
          </Link>

          {/* CENTER: Exact Nav Links */}
          <div className="te-univ-nav-links">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`te-univ-nav-link ${active ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: GET IN TOUCH Button */}
          <div className="te-univ-right">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="te-univ-get-in-touch-btn"
            >
              GET IN TOUCH
            </a>
          </div>

          {/* MOBILE: Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="te-univ-mobile-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="te-univ-sheet-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="te-univ-sheet" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #f3f4f6',
                paddingBottom: '14px',
              }}
            >
              <img
                src={logo?.src || logo}
                alt="TalentElla"
                style={{ height: '34px', width: 'auto', mixBlendMode: 'multiply' }}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '9999px',
                  background: '#f3f4f6',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {NAV_ITEMS.map((item) => {
                const active = isItemActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: active ? '#AC58E9' : '#0f1015',
                      textDecoration: 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={handleContactClick}
              className="te-univ-get-in-touch-btn"
              style={{
                width: '100%',
                padding: '14px 24px',
                fontSize: '13px',
              }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
