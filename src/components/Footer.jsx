import React from 'react';
import { useApi } from '../api';
import { profile as fallbackProfile } from '../data/profileData';

const Footer = () => {
  const profile = useApi('profile', fallbackProfile);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-4 border-top border-secondary border-opacity-15 bg-black bg-opacity-40">
      <div className="container">
        <div className="row align-items-center gy-3">
          
          {/* Left: Copyright */}
          <div className="col-md-4 text-center text-md-start">
            <span className="text-secondary small" style={{ fontSize: '13px' }}>
              © {new Date().getFullYear()} <span className="text-light fw-semibold">{profile.displayName}</span>. All rights reserved.
            </span>
          </div>

          {/* Center: Back to Top */}
          <div className="col-md-4 text-center">
            <button
              onClick={scrollToTop}
              className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1 text-secondary border-secondary border-opacity-25"
              style={{ fontSize: '12px', transition: 'all 0.25s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '';
                e.currentTarget.style.borderColor = '';
              }}
              title="Scroll to Top"
            >
              <i className="bi bi-arrow-up me-1"></i> Back to Top
            </button>
          </div>

          {/* Right: Social Links with LinkedIn */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end gap-3" style={{ fontSize: '13.5px' }}>
              {/* GitHub */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none d-flex align-items-center gap-1.5"
                style={{ transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none d-flex align-items-center gap-1.5"
                style={{ transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0a66c2'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <i className="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer"
                className="text-secondary text-decoration-none d-flex align-items-center gap-1.5"
                style={{ transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <i className="bi bi-envelope-fill"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;