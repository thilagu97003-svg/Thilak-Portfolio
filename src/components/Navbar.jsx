import React, { useState, useEffect } from 'react';
import { useApi } from '../api';
import { profile as fallbackProfile } from '../data/profileData';

const Navbar = () => {
  const profile = useApi('profile', fallbackProfile);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [accentColor, setAccentColor] = useState('#0d6efd');

  const palettes = [
    { name: 'Ocean Blue', color: '#0d6efd' },
    { name: 'Emerald Green', color: '#10b981' },
    { name: 'Purple Violet', color: '#8b5cf6' },
    { name: 'Amber Orange', color: '#f59e0b' },
    { name: 'Rose Red', color: '#f43f5e' }
  ];

  const handleColorChange = (hex) => {
    setAccentColor(hex);
    document.documentElement.style.setProperty('--accent-color', hex);
  };

  // Scroll spy effect for active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'journey', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Close Mobile Menu Function
  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-2 py-lg-3 sticky-top border-bottom border-secondary border-opacity-25" style={{ backgroundColor: 'var(--nav-bg)' }}>
      <div className="container d-flex align-items-center justify-content-between flex-nowrap">
        {/* Brand Name with Avatar Initials */}
        <a 
          className="navbar-brand fw-bold fs-5 d-flex align-items-center gap-2 text-decoration-none me-auto" 
          href="#home" 
          onClick={handleNavClick}
        >
          <div 
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center shadow-sm flex-shrink-0"
            style={{ 
              width: '34px', 
              height: '34px', 
              fontSize: '13px', 
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}
          >
            {profile.initials}
          </div>
          <span className="text-light fs-6 fw-semibold text-truncate" style={{ letterSpacing: '0.2px', maxWidth: '160px' }}>
            {profile.fullName}
          </span>
        </a>

        {/* Mobile View Controls (Only Theme Toggle & Hamburger) */}
        <div className="d-flex align-items-center gap-2 d-lg-none flex-shrink-0">
          {/* Mobile Theme Toggle Button */}
          <button 
            className="theme-btn btn btn-sm p-1 border-0" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-warning fs-5' : 'bi-moon-stars-fill text-primary fs-5'}`}></i>
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            className="navbar-toggler border-0 shadow-none p-1" 
            type="button" 
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`} id="navMenu">
          <ul className="navbar-nav align-items-center gap-1 gap-xl-2 pt-3 pt-lg-0">
            {navLinks.map((link) => (
              <li className="nav-item w-100 text-center text-lg-start" key={link.id}>
                <a 
                  className={`nav-link px-2 px-xl-3 fw-medium ${activeSection === link.id ? 'active-link' : 'text-secondary'}`} 
                  href={`#${link.id}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}

            {/* Accent Color Palette Dots (Desktop & Mobile inside collapse) */}
            <li className="nav-item my-2 my-lg-0 ms-lg-2">
              <div className="d-flex align-items-center justify-content-center gap-1 bg-dark bg-opacity-50 p-1 px-2 rounded-pill border border-secondary border-opacity-25">
                {palettes.map((p) => (
                  <button
                    key={p.name}
                    type="button"
                    onClick={() => handleColorChange(p.color)}
                    title={p.name}
                    className="btn p-0 rounded-circle border-0"
                    style={{
                      width: '13px',
                      height: '13px',
                      backgroundColor: p.color,
                      transform: accentColor === p.color ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: accentColor === p.color ? `0 0 6px ${p.color}` : 'none',
                      outline: accentColor === p.color ? '1px solid #fff' : 'none',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                    aria-label={`Select ${p.name}`}
                  />
                ))}
              </div>
            </li>

            {/* Desktop Theme Toggle Button */}
            <li className="nav-item ms-lg-1 d-none d-lg-block">
              <button 
                className="theme-btn btn btn-sm p-1 border-0" 
                onClick={toggleTheme} 
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <i className={`bi ${theme === 'dark' ? 'bi-sun-fill text-warning fs-5' : 'bi-moon-stars-fill text-primary fs-5'}`}></i>
              </button>
            </li>

            {/* Hire Me Button - Fixed no-wrap styling */}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0 w-100 w-lg-auto text-center text-lg-start flex-shrink-0">
              <a 
                href="#contact" 
                className="btn btn-primary btn-sm px-3 py-1.5 rounded-pill fw-medium text-nowrap d-inline-block"
                style={{ whiteSpace: 'nowrap' }}
                onClick={handleNavClick}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;