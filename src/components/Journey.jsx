import React, { useState } from 'react';

const Journey = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      role: 'Full Stack Developer (Trainee / Course)',
      company: 'Vetri Technology Solutions, Tenkasi',
      period: 'July 2026 - Present',
      description:
        'Building full-stack web applications and GenAI implementations. Engineering interactive frontends with React.js, modern CSS, and Python backend fundamentals.',
      badge: 'Current'
    },
    {
      role: 'Lecturer / Academic Instructor',
      company: 'P.A.C. Ramasamy Raja Polytechnic College, Rajapalayam',
      period: 'Dec 2019 - Apr 2023',
      description:
        'Taught technical curriculum, guided student engineering projects, and managed lab sessions with a focus on clear technical communication and structured problem-solving.',
      badge: 'Academic / 3.4 Yrs'
    },
    {
      role: 'Quality Assurance Investigator (QAI)',
      company: 'Jay Jay Mills India Pvt Ltd, Perundurai, Erode',
      period: ' Apr 2019 - Nov 2019 ',
      description:
        'Conducted systematic quality investigations, process audits, and root-cause analysis across production workflows.',
      badge: 'Quality Assurance'
    },
    {
      role: 'Quality Assurance Investigator (QAI)',
      company: 'Sri Saravana Spinning Mills Ltd, Dindigul',
      period: 'May 2015 - Jun 2016',
      description:
        'Managed rigorous quality investigation protocols, defect identification, and operational compliance reporting.',
      badge: 'Quality Assurance'
    }
  ];

  const educationData = [
    {
      degree: 'B.Tech in Textile Technology',
      institution: 'Bannari Amman Institute of Technology, Erode',
      period: '2016 - 2019',
      description:
        'Cultivated strong analytical reasoning, mathematical fundamentals, and process optimization techniques.',
      badge: "Bachelor's Degree"
    },
    {
      degree: 'Diploma in Textile Technology',
      institution: 'P.A.C. Ramasamy Raja Polytechnic College, Rajapalayam',
      period: '2012 - 2015',
      description:
        'Built a strong technical base in process mechanics and laboratory operations (later returned to serve as faculty).',
      badge: 'Diploma'
    }
  ];

  const displayList = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section id="journey" className="py-5" style={{ backgroundColor: 'var(--bg-color, #0b1120)' }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-4">
          <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-1 rounded-pill mb-2">
            CAREER & LEARNING
          </span>
          <h2 className="fw-bold text-light">My Journey</h2>
          <p className="text-secondary small mx-auto" style={{ maxWidth: '520px' }}>
            A structured path through technical instruction, quality assurance investigations, and modern web engineering.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="d-flex justify-content-center gap-2 mb-5">
          <button
            type="button"
            className={`btn btn-sm px-4 py-2 rounded-pill fw-medium ${
              activeTab === 'experience'
                ? 'btn-primary shadow-sm'
                : 'btn-outline-secondary text-secondary border-opacity-25'
            }`}
            onClick={() => setActiveTab('experience')}
          >
            <i className="bi bi-briefcase me-2"></i>Experience
          </button>
          <button
            type="button"
            className={`btn btn-sm px-4 py-2 rounded-pill fw-medium ${
              activeTab === 'education'
                ? 'btn-primary shadow-sm'
                : 'btn-outline-secondary text-secondary border-opacity-25'
            }`}
            onClick={() => setActiveTab('education')}
          >
            <i className="bi bi-mortarboard me-2"></i>Education
          </button>
        </div>

        {/* Timeline Stepper Container */}
        <div className="mx-auto" style={{ maxWidth: '720px' }}>
          <div className="position-relative border-start border-secondary border-opacity-25 ps-4 ms-3">
            {displayList.map((item, idx) => (
              <div key={idx} className="mb-4 position-relative">
                {/* Node Bullet */}
                <div
                  className="position-absolute bg-primary rounded-circle"
                  style={{
                    width: '12px',
                    height: '12px',
                    left: '-31px',
                    top: '8px',
                    border: '2px solid #0b1120',
                    boxShadow: '0 0 8px var(--accent-color, #0d6efd)'
                  }}
                />

                {/* Timeline Card */}
                <div className="card bg-dark bg-opacity-50 border border-secondary border-opacity-25 rounded-3 p-3 shadow-sm">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-1 mb-1">
                    <h5 className="text-light mb-0 fw-semibold fs-6">
                      {item.role || item.degree}
                    </h5>
                    <span className="badge bg-transparent text-info border border-info border-opacity-50 px-2 py-1 small rounded-pill">
                    {item.badge}
                    </span>
                  </div>

                  <div className="text-secondary small fw-medium mb-2">
                    {item.company || item.institution} &nbsp;•&nbsp; <span className="text-info">{item.period}</span>
                  </div>

                  <p className="text-light text-opacity-75 small mb-0 lh-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;