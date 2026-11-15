import React, { useState, useRef } from 'react';
import profileImg from '../assets/profile.png';
import { useApi } from '../api';
import { profile as fallbackProfile } from '../data/profileData';

const Hero = () => {
  const profile = useApi('profile', fallbackProfile);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(40);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && audioRef.current.duration) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Column: Bio & CTA */}
          <div className="col-lg-7 text-center text-lg-start order-2 order-lg-1">
           {profile.availableForHire && (
<span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 mb-3 px-3 py-1.5 rounded-pill fw-medium">
          <span className="spinner-grow spinner-grow-sm me-1 text-success" style={{ width: '8px', height: '8px' }}></span>
           Available for Hire
          </span>
            )}
            <h1 className="display-4 fw-bold mb-2">
              Hi, I'm <span className="gradient-text">{profile.displayName}</span>
            </h1>
            <h4 className="text-light fw-medium mb-3">
              {profile.role}
            </h4>
            <p className="lead text-secondary mb-4 col-lg-10 p-0">
              {profile.tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
              <a href="#projects" className="btn btn-primary px-4 py-2 rounded-pill fw-medium shadow-sm">
                View Projects <i className="bi bi-arrow-right ms-1"></i>
              </a>

              <a 
                href="/resume.pdf" 
                download="K_Thilagavathi_Resume.pdf" 
                className="btn btn-outline-light px-4 py-2 rounded-pill fw-medium"
              >
                <i className="bi bi-download me-2"></i>Download CV
              </a>

              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-secondary text-light px-4 py-2 rounded-pill fw-medium"
              >
                <i className="bi bi-envelope-fill me-2"></i>Email Me
              </a>
            </div>

            {/* Social Connect */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 pt-1">
              <span className="text-secondary small fw-medium">Connect:</span>
              <a 
                href={profile.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                title="GitHub"
              >
                <i className="bi bi-github text-light fs-6"></i>
              </a>
              <a 
                href={profile.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                title="LinkedIn"
              >
                <i className="bi bi-linkedin text-light fs-6"></i>
              </a>
            </div>

            {/* Metrics */}
            <div className="row g-3 mt-4 pt-3 border-top border-secondary border-opacity-25" style={{ maxWidth: '420px' }}>
              {profile.stats.map((stat) => (
                <div className="col-4" key={stat.label}>
                  <h4 className="fw-bold text-light mb-0">{stat.value}</h4>
                  <span className="text-secondary small">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Profile Image & Audio Intro Widget */}
          <div className="col-lg-5 text-center order-1 order-lg-2">
            <div className="p-2 mx-auto" style={{ maxWidth: '340px' }}>
              <div 
                className="ratio ratio-1x1 rounded-circle overflow-hidden shadow-lg border border-primary border-3"
                style={{ background: 'linear-gradient(145deg, #1e293b, #0f172a)' }}
              >
                <img 
                  src={profileImg} 
                  alt={`${profile.fullName} profile photo`} 
                  className="w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
                />
              </div>

              {/* HTML5 Audio Element */}
              <audio 
                ref={audioRef} 
                src="/intro.mp3" 
                onTimeUpdate={handleTimeUpdate} 
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleAudioEnd} 
              />

              {/* Interactive Capsule Audio Card */}
              <div 
                onClick={toggleAudio}
                className="mt-3 p-2 px-3 rounded-pill bg-dark border d-flex align-items-center justify-content-between shadow-sm"
                style={{ 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  borderColor: isPlaying ? '#3b82f6' : 'rgba(108, 117, 125, 0.25)',
                  boxShadow: isPlaying ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none'
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <button 
                    type="button"
                    className={`btn btn-sm ${isPlaying ? 'btn-danger' : 'btn-primary'} rounded-circle d-flex align-items-center justify-content-center shadow-sm`}
                    style={{ width: '38px', height: '38px', flexShrink: 0 }}
                  >
                    <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'} fs-6`}></i>
                  </button>

                  <div className="text-start">
                    <div className="d-flex align-items-center gap-2">
                      <span className="text-light fw-medium small mb-0" style={{ fontSize: '13px' }}>
                        Quick Audio Pitch
                      </span>
                      {isPlaying && (
                        <span className="badge bg-primary bg-opacity-25 text-primary rounded-pill px-2 py-0.5" style={{ fontSize: '9px' }}>
                          Playing
                        </span>
                      )}
                    </div>
                    <span className="text-secondary d-block" style={{ fontSize: '11px' }}>
                      {isPlaying ? `${formatTime(currentTime)} / ${formatTime(duration)}` : '50 sec overview'}
                    </span>
                  </div>
                </div>

                {/* Sound Wave Equalizer Bars */}
                <div className="d-flex align-items-end gap-1 pe-2" style={{ height: '18px' }}>
                  {[40, 90, 60, 100, 50].map((h, i) => (
                    <span
                      key={i}
                      className="bg-primary rounded-pill"
                      style={{
                        width: '3px',
                        height: isPlaying ? `${h}%` : '4px',
                        opacity: isPlaying ? 1 : 0.35,
                        transition: 'height 0.25s ease'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;