import React, { useState } from 'react';
import { projects } from '../data/projectsData';

const Projects = () => {
  // Pure-ah mouse hover panra card mattum track panna state
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section 
      id="projects" 
      className="min-vh-100 d-flex align-items-center py-5" 
      style={{ scrollMarginTop: '70px' }}
    >
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold small text-uppercase tracking-wider">
            Showcase
          </span>
          <h2 className="display-6 fw-bold text-light mt-1">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '580px', fontSize: '15px' }}>
            Real-world web applications and responsive portals built with clean frontend architecture.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="row g-4">
          {projects.map((project) => {
            const isHovered = hoveredCardId === project.id;

            return (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div 
                  onMouseEnter={() => setHoveredCardId(project.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="h-100 rounded-4 bg-dark bg-opacity-75 d-flex flex-column justify-content-between overflow-hidden"
                  style={{ 
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    border: isHovered 
                      ? '1.5px solid #3b82f6' 
                      : '1.5px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isHovered 
                      ? '0 12px 30px -4px rgba(59, 130, 246, 0.35)' 
                      : '0 4px 12px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  {/* Visual Project Image Preview */}
                  <div className="position-relative overflow-hidden" style={{ height: '180px', backgroundColor: '#111827' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                      style={{ 
                        transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)'
                      }}
                    />
                    {/* Floating Badges */}
                    <span 
                      className="position-absolute top-0 start-0 m-3 badge bg-black bg-opacity-75 text-light border border-secondary border-opacity-25 rounded-pill px-2.5 py-1"
                      style={{ fontSize: '11px', backdropFilter: 'blur(4px)' }}
                    >
                      {project.badge}
                    </span>
                    <span 
                      className="position-absolute top-0 end-0 m-3 badge bg-success bg-opacity-90 text-light rounded-pill px-2.5 py-1 d-flex align-items-center gap-1"
                      style={{ fontSize: '11px' }}
                    >
                      <span className="rounded-circle bg-light d-inline-block" style={{ width: '6px', height: '6px' }}></span>
                      Live
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 className="h5 fw-bold text-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-secondary small mb-3" style={{ lineHeight: '1.6', minHeight: '60px' }}>
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="d-flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="badge bg-black bg-opacity-50 border border-secondary border-opacity-25 text-light text-opacity-80 fw-normal px-2.5 py-1.5"
                            style={{ fontSize: '11.5px' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Dual Action Buttons */}
                    <div className="d-flex align-items-center gap-2 pt-3 border-top border-secondary border-opacity-15">
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm flex-grow-1 rounded-pill py-2 fw-medium shadow-sm d-flex align-items-center justify-content-center gap-1.5"
                      >
                        <span>Live Demo</span>
                        <i className="bi bi-arrow-up-right small"></i>
                      </a>

                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '38px', height: '38px', flexShrink: 0 }}
                        title="GitHub Repository"
                      >
                        <i className="bi bi-github text-light fs-6"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;