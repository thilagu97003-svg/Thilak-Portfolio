import React, { useState } from 'react';
import { useApi } from '../api';
import { skills as fallbackSkills } from '../data/skillsData';

const CATEGORY_LABELS = {
  frontend: 'Frontend Core',
  backend: 'Backend & DB',
  ai: 'AI (Learning)',
  tools: 'Tools & Workflow',
  qa: 'Testing & QA',
};


const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Skills come from the Django API; skillsData.js is the offline fallback
  const skillsData = useApi('skills', fallbackSkills);
  const tabs = [
    { key: 'all', label: 'All Stack' },
    ...Object.keys(CATEGORY_LABELS)
      .filter((key) => skillsData.some((item) => item.category === key))
      .map((key) => ({ key, label: CATEGORY_LABELS[key] })),
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
          {tabs.map((tab) => (
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