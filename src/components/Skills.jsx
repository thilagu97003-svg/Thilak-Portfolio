import React, { useState } from 'react';


const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = [
    // Frontend
    { name: 'React.js', category: 'frontend', icon: 'bi-filetype-jsx', color: '#61dafb' },
    { name: 'JavaScript', category: 'frontend', icon: 'bi-filetype-js', color: '#f7df1e' },
    { name: 'HTML5', category: 'frontend', icon: 'bi-filetype-html', color: '#e34f26' },
    { name: 'CSS3', category: 'frontend', icon: 'bi-filetype-css', color: '#1572b6' },
    { name: 'Bootstrap 5', category: 'frontend', icon: 'bi-bootstrap-fill', color: '#7952b3' },
    { name: 'Responsive UI', category: 'frontend', icon: 'bi-phone', color: '#38bdf8' },

    // Tools & Design
    { name: 'Git & GitHub', category: 'tools', icon: 'bi-github', color: '#f05032' },
    { name: 'VS Code', category: 'tools', icon: 'bi-laptop', color: '#007acc' },
    { name: 'Figma to Code', category: 'tools', icon: 'bi-bounding-box-circles', color: '#a259ff' },
    { name: 'Vercel', category: 'tools', icon: 'bi-cloud-arrow-up-fill', color: '#ffffff' },

    // Testing & Strengths
    { name: 'QA Testing', category: 'qa', icon: 'bi-patch-check-fill', color: '#22c55e' },
    { name: 'Cross-Browser', category: 'qa', icon: 'bi-browser-chrome', color: '#3b82f6' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(item => item.category === activeTab);

  return (
    <section 
      id="skills" 
      className="min-vh-100 d-flex align-items-center py-5" 
      style={{ scrollMarginTop: '70px' }}
    >
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-primary fw-semibold small text-uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="display-6 fw-bold text-light mt-1">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '520px', fontSize: '15px' }}>
            Technologies and tools I use to design, develop, and deliver robust web interfaces.
          </p>
        </div>

        {/* Filter Filter Tabs */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {[
            { key: 'all', label: 'All Stack' },
            { key: 'frontend', label: 'Frontend Core' },
            { key: 'tools', label: 'Tools & Workflow' },
            { key: 'qa', label: 'Testing & QA' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`btn btn-sm px-4 py-2 rounded-pill fw-medium transition-all ${
                activeTab === tab.key
                  ? 'btn-primary shadow-sm'
                  : 'btn-outline-secondary text-secondary border-opacity-25'
              }`}
              style={{ fontSize: '13px' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Uniform Symmetric Grid */}
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 justify-content-center">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="col">
              <div 
                className="p-3 rounded-4 bg-dark bg-opacity-50 text-center h-100 d-flex flex-column align-items-center justify-content-center shadow-sm"
                style={{ 
                  minHeight: '125px', 
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = skill.color;
                  e.currentTarget.style.boxShadow = `0 8px 20px -4px ${skill.color}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center rounded-circle mb-2"
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <i 
                    className={`bi ${skill.icon} fs-4`} 
                    style={{ color: skill.color }}
                  ></i>
                </div>
                <span className="text-light fw-medium small text-truncate w-100">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;