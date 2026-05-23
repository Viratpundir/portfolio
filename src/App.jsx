import React, { useState, useEffect } from 'react';
import { portfolio } from './data';

function App() {
  const { name, headline, about, skills, projects, experience, contact } = portfolio;
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll tracker to highlight the active section in navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating Glassmorphic Header & Navbar */}
      <header className="app-header">
        <div className="nav-container">
          <a href="#home" className="logo">
            {name.split(' ')[0]}<span>{name.split(' ')[1] ? ` ${name.split(' ')[1]}` : ''}</span>
          </a>
          <nav className="nav-links">
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
            <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Application Shell */}
      <div className="app-shell">
        
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-glow"></div>
          <h1>{name}</h1>
          <p>{headline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </section>

        {/* SUMMARY / ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-title-wrap">
            <div className="section-subtitle">Discovery</div>
            <h2>Professional Summary</h2>
          </div>
          <div className="card">
            <p>{about}</p>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="section-title-wrap">
            <div className="section-subtitle">Career Path</div>
            <h2>Professional Experience</h2>
          </div>
          <div className="card">
            <div className="experience-container">
              <div className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-header">
                  <div>
                    <h3>{experience.title}</h3>
                    <div className="experience-duration">{experience.duration}</div>
                  </div>
                  <span className="experience-meta">{experience.company}</span>
                </div>
                <ul className="experience-list">
                  {experience.summary.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="section-title-wrap">
            <div className="section-subtitle">Showcase</div>
            <h2>Featured Projects</h2>
          </div>
          <div className="grid project-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                {project.date && <div className="project-date">{project.date}</div>}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="section-title-wrap">
            <div className="section-subtitle">Expertise</div>
            <h2>Technical Skills</h2>
          </div>
          <div className="card">
            <div className="grid skills-grid">
              {skills.map((skill) => (
                <div key={skill.category} className="skill-group">
                  <h3>{skill.category}</h3>
                  <div className="skill-items">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT / CONNECT SECTION */}
        <section id="contact" className="section contact-section card">
          <div className="section-title-wrap">
            <div className="section-subtitle">Let's Connect</div>
            <h2>Get In Touch</h2>
          </div>
          <p>I am open to internships, industry collaborations, and AI/ML project opportunities. Let's build something remarkable together!</p>
          <div className="contact-actions">
            <a href={`mailto:${contact.email}`} className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Email Me
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href={contact.resume} download className="btn btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </a>
          </div>
        </section>

        {/* Footer info */}
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Virat Pundir. Crafted with <span>&hearts;</span> & React.</p>
        </footer>

      </div>
    </>
  );
}

export default App;
