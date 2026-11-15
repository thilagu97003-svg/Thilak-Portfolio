import React, { useEffect, useState } from 'react';
import { useApi } from '../api';
import { projects as fallbackProjects } from '../data/projectsData';

/* ---------- Details popup: description, features, tech and screenshot gallery ---------- */
const ProjectModal = ({ project, onClose }) => {
  const items = [
    ...(project.image ? [{ url: project.image, caption: '' }] : []),
    ...(project.gallery || []),
  ];
  const [index, setIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (total > 1 && e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
      if (total > 1 && e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [total, onClose]);

  const current = items[index];

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal bg-dark rounded-4 border border-secondary border-opacity-25 shadow-lg"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="project-modal-close btn-close btn-close-white" onClick={onClose} aria-label="Close" />

        {current && (
          <div className="project-modal-stage">
            <img src={current.url} alt={current.caption || project.title} />
            {total > 1 && (
              <>
                <button type="button" className="project-modal-nav start-0" onClick={() => setIndex((index - 1 + total) % total)} aria-label="Previous image">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button type="button" className="project-modal-nav end-0" onClick={() => setIndex((index + 1) % total)} aria-label="Next image">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </>
            )}
          </div>
        )}

        {total > 1 && (
          <div className="project-modal-thumbs">
            {items.map((item, i) => (
              <button
                type="button"
                key={i}
                className={i === index ? 'active' : ''}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
              >
                <img src={item.url} alt="" />
              </button>
            ))}
          </div>
        )}
        {current?.caption && <p className="text-secondary small text-center mt-2 mb-0">{current.caption}</p>}

        <div className="p-4">
          <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
            <h3 className="h4 fw-bold text-light mb-0">{project.title}</h3>
            <span className="badge bg-black bg-opacity-50 border border-secondary border-opacity-25 text-light rounded-pill project-tech">
              {project.badge}
            </span>
          </div>
          <p className="text-secondary" style={{ lineHeight: '1.7' }}>{project.description}</p>

          {project.features?.length > 0 && (
            <>
              <h4 className="h6 fw-bold text-light mt-4 mb-2">Key features</h4>
              <ul className="text-secondary small ps-3 mb-3" style={{ lineHeight: '1.8' }}>
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          <div className="d-flex flex-wrap gap-1 mb-4">
            {project.techStack.map((tech, i) => (
              <span key={i} className="badge bg-black bg-opacity-50 border border-secondary border-opacity-25 text-light fw-normal px-2 py-1 project-tech" style={{ fontSize: '11.5px' }}>
                {tech}
              </span>
            ))}
          </div>

          <div className="d-flex gap-2 flex-wrap">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">
                Live Demo <i className="bi bi-arrow-up-right ms-1"></i>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary rounded-pill px-4">
                <i className="bi bi-github me-2 text-light"></i>
                <span className="text-light">Source code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Projects section: one auto-moving row (carousel) ---------- */
const Projects = () => {
  // Projects come from the Django API; projectsData.js is the offline fallback
  const projects = useApi('projects', fallbackProjects);
  const [selected, setSelected] = useState(null);

  // The list is rendered twice so the loop never shows a gap (CSS moves the track by -50%)
  const slides = [...projects, ...projects];

  return (
    <>
      <section id="projects" className="min-vh-100 d-flex align-items-center py-5" style={{ scrollMarginTop: '70px' }}>
        <div className="w-100">
          {/* Header */}
          <div className="container py-4">
            <div className="text-center mb-4">
              <span className="text-primary fw-semibold small text-uppercase tracking-wider">Showcase</span>
              <h2 className="display-6 fw-bold text-light mt-1">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '580px', fontSize: '15px' }}>
                Real-world web applications and responsive portals built with clean frontend architecture.
                Hover to pause, click a card for details.
              </p>
            </div>
          </div>

          {/* Carousel: hover pauses it, popup open pauses it */}
          <div className="projects-marquee">
            <div
              className={`projects-track${selected ? ' paused' : ''}`}
              style={{ animationDuration: `${Math.max(projects.length, 4) * 6}s` }}
            >
              {slides.map((project, i) => {
                const isCopy = i >= projects.length;
                const tab = isCopy ? -1 : 0;

                return (
                  <div className="project-slide" key={`${i}-${project.id}`} aria-hidden={isCopy || undefined}>
                    <article
                      className="project-card rounded-4 bg-dark bg-opacity-75 d-flex flex-column justify-content-between overflow-hidden"
                      role="button"
                      tabIndex={tab}
                      aria-label={`View details of ${project.title}`}
                      onClick={() => setSelected(project)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelected(project);
                        }
                      }}
                    >
                      {/* Image preview */}
                      <div className="position-relative overflow-hidden" style={{ height: '180px', backgroundColor: '#111827' }}>
                        {project.image && (
                          <img src={project.image} alt={project.title} className="w-100 h-100 object-fit-cover project-img" loading="lazy" />
                        )}
                        <span
                          className="position-absolute top-0 start-0 m-3 badge bg-black bg-opacity-75 text-light border border-secondary border-opacity-25 rounded-pill px-2.5 py-1 project-badge"
                          style={{ fontSize: '11px', backdropFilter: 'blur(4px)' }}
                        >
                          {project.badge}
                        </span>
                        {project.liveDemo && (
                          <span
                            className="position-absolute top-0 end-0 m-3 badge bg-success bg-opacity-90 text-light rounded-pill px-2.5 py-1 d-flex align-items-center gap-1 project-badge"
                            style={{ fontSize: '11px' }}
                          >
                            <span className="rounded-circle bg-light d-inline-block" style={{ width: '6px', height: '6px' }}></span>
                            Live
                          </span>
                        )}
                      </div>

                      {/* Card body */}
                      <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                        <div>
                          <h3 className="h5 fw-bold text-light mb-2">{project.title}</h3>
                          <p className="text-secondary small mb-3 project-desc">{project.description}</p>

                          <div className="d-flex flex-wrap gap-1.5 mb-4">
                            {project.techStack.map((tech, idx) => (
                              <span
                                key={idx}
                                className="badge bg-black bg-opacity-50 border border-secondary border-opacity-25 text-light text-opacity-80 fw-normal px-2.5 py-1.5 project-tech"
                                style={{ fontSize: '11.5px' }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions (the rest of the card opens the details popup) */}
                        <div className="d-flex align-items-center gap-2 pt-3 border-top border-secondary border-opacity-15">
                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={tab}
                              onClick={(e) => e.stopPropagation()}
                              className="btn btn-primary btn-sm flex-grow-1 rounded-pill py-2 fw-medium shadow-sm d-flex align-items-center justify-content-center gap-1.5"
                            >
                              <span>Live Demo</span>
                              <i className="bi bi-arrow-up-right small"></i>
                            </a>
                          )}

                          <span
                            className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                            style={{ width: '38px', height: '38px', flexShrink: 0 }}
                            title="View details"
                          >
                            <i className="bi bi-images text-light fs-6"></i>
                          </span>

                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              tabIndex={tab}
                              onClick={(e) => e.stopPropagation()}
                              className="btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center justify-content-center"
                              style={{ width: '38px', height: '38px', flexShrink: 0 }}
                              title="GitHub Repository"
                            >
                              <i className="bi bi-github text-light fs-6"></i>
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default Projects;