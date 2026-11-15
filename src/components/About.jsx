import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5" style={{ scrollMarginTop: '70px' }}>
      <div className="container py-lg-4">
        {/* Section Header */}
        <div className="text-center mb-4 pb-2">
          <span className="text-primary fw-semibold small text-uppercase tracking-wider">
            Background
          </span>
          <h2 className="display-6 fw-bold text-light mt-1">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Narrative Story */}
          <div className="col-lg-7 d-flex flex-column justify-content-between">
            <div className="p-4 p-md-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-25 h-100 d-flex flex-column justify-content-between shadow-sm">
              <div>
                <h3 className="h4 fw-bold text-light mb-3">
                  Transitioning with Passion into Full Stack Development
                </h3>
                <p className="text-secondary mb-3" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>
                  With 4+ years of professional background across Quality Control and Academic Lecturing, 
                  I developed high attention to detail, structured problem-solving, and clear communication.
                </p>
                <p className="text-secondary mb-3" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>
                  I build complete web and mobile applications, from responsive React and React Native
                  interfaces to Django REST APIs and PostgreSQL databases, using{" "}
                  <strong className="text-white">HTML5, CSS3, JavaScript, Bootstrap 5, React.js,</strong>{" "}
                  <strong className="text-white">Python</strong>, and <strong className="text-white">Django</strong>.
                </p>

                {/* Educational / Direction Badges */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-dark border border-secondary border-opacity-50 text-light px-3 py-2 rounded-pill fw-normal" style={{ fontSize: '12.5px' }}>
                    🎓 B.Tech – Anna University (CGPA 8.43)
                  </span>
                  <span className="badge bg-dark border border-secondary border-opacity-50 text-light px-3 py-2 rounded-pill fw-normal" style={{ fontSize: '12.5px' }}>
                    🚀 Gen AI & Python Full Stack Learner
                  </span>
                </div>
              </div>

              {/* Quick Highlights Info Bar */}
              <div className="pt-3 border-top border-secondary border-opacity-25">
                <span className="text-primary fw-bold text-uppercase d-block mb-3" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                  Quick Highlights
                </span>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary px-3 py-2 rounded-pill">
                    📍 Tamil Nadu, India
                  </span>
                  <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary px-3 py-2 rounded-pill">
                    💼 Open for Remote / Full-Time
                  </span>
                  <span className="badge bg-dark border border-secondary border-opacity-25 text-secondary px-3 py-2 rounded-pill">
                    🗣️ English & Tamil
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Why Hire Me Card */}
          <div className="col-lg-5">
            <div className="h-100 p-4 rounded-4 bg-dark bg-opacity-75 border border-secondary border-opacity-25 shadow-lg d-flex flex-column justify-content-between">
              <div>
                <h4 className="h4 fw-bold text-light mb-4">Why Hire Me?</h4>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-check-circle-fill text-primary fs-5 mt-0.5"></i>
                    <div>
                      <strong className="text-light d-block mb-1" style={{ fontSize: '14.5px' }}>Precision & Quality</strong>
                      <span className="text-secondary" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                        QA background translates directly into clean, bug-resistant code across both frontend and backend.
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-check-circle-fill text-primary fs-5 mt-0.5"></i>
                    <div>
                      <strong className="text-light d-block mb-1" style={{ fontSize: '14.5px' }}>Strong Communication</strong>
                      <span className="text-secondary" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                        Lecturing background makes cross-team coordination, presentation, and technical documentation effortless.
                      </span>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <i className="bi bi-check-circle-fill text-primary fs-5 mt-0.5"></i>
                    <div>
                      <strong className="text-light d-block mb-1" style={{ fontSize: '14.5px' }}>Practical Execution</strong>
                      <span className="text-secondary" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                       8 live deployed projects, from React UIs to Django REST APIs with PostgreSQL, built with reusable architecture.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Focus Tags */}
                <div className="border-top border-secondary border-opacity-25 pt-3 mb-4">
                  <span className="text-secondary small d-block mb-2">Core Philosophy:</span>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge bg-secondary bg-opacity-25 text-light fw-normal py-1.5 px-2.5" style={{ fontSize: '11px' }}>Clean Code</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light fw-normal py-1.5 px-2.5" style={{ fontSize: '11px' }}>Pixel Perfect</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light fw-normal py-1.5 px-2.5" style={{ fontSize: '11px' }}>Continuous Learner</span>
                    <span className="badge bg-secondary bg-opacity-25 text-light fw-normal py-1.5 px-2.5" style={{ fontSize: '11px' }}>Agile Mindset</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a href="#contact" className="btn btn-outline-primary w-100 rounded-pill py-2.5 fw-medium">
                Let's Discuss Opportunities <i className="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;