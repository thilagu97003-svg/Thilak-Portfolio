import React, { useState, useRef, useEffect } from 'react';
import { useApi } from '../api';
import { profile as fallbackProfile } from '../data/profileData';
import { skills as fallbackSkills } from '../data/skillsData';
import { projects as fallbackProjects } from '../data/projectsData';

const SKILL_LABELS = { frontend: 'Frontend', backend: 'Backend & DB', ai: 'AI (Learning)', tools: 'Tools & Workflow', qa: 'Testing & QA' };

const TerminalModal = () => {
  const profile = useApi('profile', fallbackProfile);
  const skills = useApi('skills', fallbackSkills);
  const projects = useApi('projects', fallbackProjects);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to ${profile.displayName}'s Interactive Terminal v1.0` },
    { type: 'system', text: "Type 'help' to see the list of available commands." }
  ]);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${input}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Available commands:\n  • bio       : Quick summary about me\n  • skills    : Technical stack\n  • projects  : Major built applications\n  • contact   : Email & social links\n  • clear     : Clear terminal history\n  • exit      : Close terminal'
        });
        break;
      case 'bio':
        newHistory.push({ type: 'output', text: profile.bio });
        break;
      case 'skills': {
        const lines = Object.keys(SKILL_LABELS)
          .map((key) => ({ key, list: skills.filter((item) => item.category === key) }))
          .filter((group) => group.list.length > 0)
          .map((group) => `  • ${SKILL_LABELS[group.key]}: ${group.list.map((item) => item.name).join(', ')}`);
        newHistory.push({ type: 'output', text: `Technical stack:\n${lines.join('\n')}` });
        break;
      }
      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map((project, i) => `${i + 1}. ${project.title}`).join('\n')
        });
        break;
      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${profile.email}\nGitHub: ${profile.githubUrl.replace(/^https?:\/\//, '')}\nLinkedIn: ${profile.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '')}`
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        setIsOpen(false);
        setInput('');
        return;
      case '':
        break;
      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type 'help' for available commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="btn btn-dark border border-secondary shadow-lg rounded-circle d-flex align-items-center justify-content-center"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '48px',
          height: '48px',
          zIndex: 1050,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 0 15px rgba(0,0,0,0.4)'
        }}
        title="Open Interactive Terminal"
      >
        <i className="bi bi-terminal-fill text-primary fs-5"></i>
      </button>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            zIndex: 1060,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="rounded-3 shadow-lg overflow-hidden border border-secondary border-opacity-50"
            style={{
              width: '100%',
              maxWidth: '580px',
              height: '380px',
              backgroundColor: '#0b1120',
              fontFamily: 'monospace',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Window Title Bar */}
            <div className="d-flex align-items-center justify-content-between px-3 py-2 bg-dark border-bottom border-secondary border-opacity-25">
              <div className="d-flex gap-2">
                <span className="rounded-circle bg-danger" style={{ width: '10px', height: '10px' }} />
                <span className="rounded-circle bg-warning" style={{ width: '10px', height: '10px' }} />
                <span className="rounded-circle bg-success" style={{ width: '10px', height: '10px' }} />
              </div>
              <span className="text-secondary small">{profile.displayName.toLowerCase()}@portfolio:~</span>
              <button
                type="button"
                className="btn-close btn-close-white btn-sm"
                onClick={() => setIsOpen(false)}
                aria-label="Close"
              />
            </div>

            {/* Terminal Body */}
            <div
              ref={bodyRef}
              className="p-3 text-start overflow-auto flex-grow-1"
              style={{ fontSize: '13px', lineHeight: '1.6' }}
            >
              {history.map((item, idx) => (
                <div
                  key={idx}
                  className={`mb-1 ${
                    item.type === 'error'
                      ? 'text-danger'
                      : item.type === 'user'
                      ? 'text-info'
                      : item.type === 'system'
                      ? 'text-secondary'
                      : 'text-light'
                  }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {item.text}
                </div>
              ))}

              {/* Input Prompt */}
              <div className="d-flex align-items-center gap-2 mt-2">
                <span className="text-success">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-0 text-light p-0 flex-grow-1 outline-none"
                  style={{ outline: 'none', caretColor: '#38bdf8' }}
                  placeholder="type a command (e.g. help)..."
                  autoFocus
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TerminalModal;