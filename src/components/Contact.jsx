import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const emailAddress = "thilagu97003@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      newErrors.name = "Please enter your name (min 3 characters).";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f78ea06d-b4ac-433d-ab1c-08c771c0647f",
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          to_email: emailAddress,
          subject: `Portfolio Hiring Lead: ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setStatus({ loading: false, success: false, error: false }), 4000);
      } else {
        throw new Error("Submission issue");
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: true });
      setTimeout(() => setStatus({ loading: false, success: false, error: false }), 4000);
    }
  };

  return (
    <section 
      id="contact" 
      className="min-vh-100 d-flex align-items-center py-5"
      style={{ scrollMarginTop: '70px' }}
    >
      <div className="container py-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold small text-uppercase tracking-wider">
            Communication
          </span>
          <h2 className="display-6 fw-bold text-light mt-1">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-secondary mx-auto mb-0" style={{ maxWidth: '520px', fontSize: '15px' }}>
            Interested in hiring or discussing frontend roles? Reach out directly through the channels below.
          </p>
        </div>

        <div className="row g-4 justify-content-center align-items-stretch">
          {/* Left Side: Profiles */}
          <div className="col-lg-5 d-flex flex-column gap-3">
            
           {/* Box 1: Interactive Email Link + Copy */}
            <a 
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 p-md-4 rounded-4 bg-dark bg-opacity-75 border border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-decoration-none shadow-sm"
              style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108, 117, 125, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="rounded-circle bg-primary bg-opacity-25 text-white d-flex align-items-center justify-content-center border border-primary border-opacity-40"
                  style={{ width: '46px', height: '46px', flexShrink: 0 }}
                >
                  <i className="bi bi-envelope-fill fs-5 text-white"></i>
                </div>
                <div>
                  <span className="text-secondary small d-block" style={{ fontSize: '12px' }}>Email Address</span>
                  <span className="text-light fw-medium small text-break">{emailAddress}</span>
                </div>
              </div>

              <button 
                onClick={handleCopyEmail}
                className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1 text-light border-opacity-25"
                type="button"
                title="Copy email to clipboard"
              >
                <i className={copied ? "bi bi-check2 text-success me-1" : "bi bi-clipboard me-1"}></i>
                <span style={{ fontSize: '11.5px' }}>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </a>

            {/* Box 2: GitHub Profile */}
            <a 
              href="https://github.com/thilagu97003-svg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3.5 p-md-4 rounded-4 bg-dark bg-opacity-75 border border-secondary border-opacity-25 d-flex align-items-center justify-content-between text-decoration-none shadow-sm"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108, 117, 125, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="rounded-circle bg-light bg-opacity-10 text-white d-flex align-items-center justify-content-center border border-secondary border-opacity-25"
                  style={{ width: '46px', height: '46px', flexShrink: 0 }}
                >
                  <i className="bi bi-github fs-5 text-white"></i>
                </div>
                <div>
                  <span className="text-secondary small d-block" style={{ fontSize: '12px' }}>GitHub Profile</span>
                  <span className="text-light fw-medium small">thilagu97003-svg</span>
                </div>
              </div>
              <i className="bi bi-arrow-up-right text-secondary small"></i>
            </a>

            {/* Box 3: Preferred Work Mode */}
            <div className="p-3.5 p-md-4 rounded-4 bg-dark bg-opacity-75 border border-secondary border-opacity-25 d-flex align-items-center gap-3 shadow-sm">
              <div 
                className="rounded-circle bg-success bg-opacity-25 text-white d-flex align-items-center justify-content-center border border-success border-opacity-40"
                style={{ width: '46px', height: '46px', flexShrink: 0 }}
              >
                <i className="bi bi-laptop fs-5 text-white"></i>
              </div>
              <div>
                <span className="text-secondary small d-block" style={{ fontSize: '12px' }}>Preferred Work Mode</span>
                <span className="text-light fw-medium small">Open for 100% Remote / Work From Home (Full-Time)</span>
              </div>
            </div>
          </div>

          {/* Right Side: Message Box */}
          <div className="col-lg-6">
            <div className="h-100 p-4 rounded-4 bg-dark bg-opacity-75 border border-secondary border-opacity-25 shadow-sm d-flex flex-column justify-content-between">
              <div>
                <h3 className="h6 fw-bold text-light mb-1">Direct Message</h3>
                <p className="text-secondary small mb-3" style={{ fontSize: '13px' }}>
                  Have an open role or interview request? Drop a message directly.
                </p>

                <form onSubmit={handleSubmit} noValidate className="d-flex flex-column gap-2.5">
                  <div>
                    <label className="text-light small mb-1 fw-medium" style={{ fontSize: '12.5px' }}>Your Name / Company</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Recruiter Name / Tech Corp"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`form-control text-light rounded-3 py-2 px-3 border ${errors.name ? 'border-danger' : 'border-secondary border-opacity-50'}`}
                      style={{ fontSize: '13.5px', backgroundColor: '#0d131f', color: '#ffffff' }}
                    />
                    {errors.name && (
                      <small className="text-danger d-block mt-1" style={{ fontSize: '11.5px' }}>
                        <i className="bi bi-exclamation-circle me-1"></i>{errors.name}
                      </small>
                    )}
                  </div>

                  <div>
                    <label className="text-light small mb-1 fw-medium" style={{ fontSize: '12.5px' }}>Your Contact Email</label>
                    <input 
                      type="email" 
                      placeholder="e.g. hr@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`form-control text-light rounded-3 py-2 px-3 border ${errors.email ? 'border-danger' : 'border-secondary border-opacity-50'}`}
                      style={{ fontSize: '13.5px', backgroundColor: '#0d131f', color: '#ffffff' }}
                    />
                    {errors.email && (
                      <small className="text-danger d-block mt-1" style={{ fontSize: '11.5px' }}>
                        <i className="bi bi-exclamation-circle me-1"></i>{errors.email}
                      </small>
                    )}
                  </div>

                  <div>
                    <label className="text-light small mb-1 fw-medium" style={{ fontSize: '12.5px' }}>Message</label>
                    <textarea 
                      rows="3" 
                      placeholder="Share your job opportunity details or interview invitation..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`form-control text-light rounded-3 py-2 px-3 border ${errors.message ? 'border-danger' : 'border-secondary border-opacity-50'}`}
                      style={{ fontSize: '13.5px', resize: 'none', backgroundColor: '#0d131f', color: '#ffffff' }}
                    ></textarea>
                    {errors.message && (
                      <small className="text-danger d-block mt-1" style={{ fontSize: '11.5px' }}>
                        <i className="bi bi-exclamation-circle me-1"></i>{errors.message}
                      </small>
                    )}
                  </div>

                  {status.success && (
                    <div className="alert alert-success py-2 px-3 small rounded-3 mb-0 d-flex align-items-center gap-1.5" role="alert">
                      <i className="bi bi-check-circle-fill"></i>
                      <span>Message sent successfully! I will get back to you shortly.</span>
                    </div>
                  )}

                  {status.error && (
                    <div className="alert alert-danger py-2 px-3 small rounded-3 mb-0 d-flex align-items-center gap-1.5" role="alert">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                      <span>Something went wrong. Please reach out via email directly.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status.loading}
                    className="btn btn-primary rounded-pill py-2.5 fw-medium d-flex align-items-center justify-content-center gap-2 mt-1"
                  >
                    {status.loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send-fill small"></i>
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;