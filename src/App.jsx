import React, { useEffect } from 'react';
import { portfolio } from './data';

const iconForSkill = {
  'Programming Languages': 'code',
  'Core Concepts': 'hub',
  Technologies: 'neurology',
  'Libraries/Tools': 'package',
  'Other Skills': 'bolt'
};

const projectLabels = ['GenAI', 'NLP / ML', 'Medical AI', 'OCR / NLP', 'RAG / LangChain'];

const categoryLabels = {
  Technologies: 'AI & Machine Learning',
  'Other Skills': 'Professional Skills'
};

function SymbolIcon({ name, className = '' }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

function MagneticInner({ children, className = '' }) {
  return <span className={`magnetic-inner ${className}`}>{children}</span>;
}

function RevealTitle({ kicker, title, center = false }) {
  return (
    <div className={`reveal-container title-block ${center ? 'title-block-center' : ''}`}>
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h2>{title}</h2>
      <span className="reveal-line" />
    </div>
  );
}

function App() {
  const { name, headline, about, skills, projects, experience, contact } = portfolio;

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.14 }
    );

    const revealItems = document.querySelectorAll('.reveal-container');
    revealItems.forEach((item) => revealObserver.observe(item));

    const onScroll = () => {
      document.body.classList.toggle('scrolled', window.scrollY > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);

    const resetMagnet = (button) => {
      button.style.setProperty('--tx', '0px');
      button.style.setProperty('--ty', '0px');
      const inner = button.querySelector('.magnetic-inner');
      if (inner) {
        inner.style.setProperty('--itx', '0px');
        inner.style.setProperty('--ity', '0px');
      }
    };

    const onMouseMove = (event) => {
      const threshold = 100;
      document.querySelectorAll('.magnetic-button').forEach((button) => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;
        const distance = Math.hypot(distanceX, distanceY);

        if (distance < threshold) {
          const power = (threshold - distance) / threshold;
          button.style.setProperty('--tx', `${distanceX * 0.4 * power}px`);
          button.style.setProperty('--ty', `${distanceY * 0.4 * power}px`);

          const inner = button.querySelector('.magnetic-inner');
          if (inner) {
            inner.style.setProperty('--itx', `${distanceX * 0.2 * power}px`);
            inner.style.setProperty('--ity', `${distanceY * 0.2 * power}px`);
          }
        } else {
          resetMagnet(button);
        }
      });
    };

    const onMouseLeave = () => {
      document.querySelectorAll('.magnetic-button').forEach(resetMagnet);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      revealItems.forEach((item) => revealObserver.unobserve(item));
      revealObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="pillar-line pillar-left" />
      <div className="pillar-line pillar-left-inner" />
      <div className="pillar-line pillar-right-inner" />
      <div className="pillar-line pillar-right" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label={`${name} home`}>
          <SymbolIcon name="architecture" />
          <span>{name}</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">Profile</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className="icon-link magnetic-button" href="#contact" aria-label="Contact">
            <MagneticInner>
              <SymbolIcon name="terminal" />
            </MagneticInner>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-orbit reveal-container" aria-hidden="true">
            <div className="hero-glow" />
            <div className="orbit-shell floating-element">
              <div className="orbit-ring orbit-ring-fast" />
              <div className="orbit-ring orbit-ring-slow" />
              <div className="orbit-core">
                <SymbolIcon name="hub" />
              </div>
              <span className="orbit-node" />
            </div>
          </div>

          <div className="reveal-container hero-title-wrap">
            <h1>{name}</h1>
            <span className="reveal-line" />
          </div>
          <p className="hero-copy reveal-container">{headline}</p>
          <div className="hero-actions reveal-container">
            <a className="btn btn-primary magnetic-button" href={contact.resume} download>
              <MagneticInner>Download Resume</MagneticInner>
            </a>
            <a className="btn btn-secondary magnetic-button" href="#projects">
              <MagneticInner>View Projects</MagneticInner>
            </a>
          </div>
        </section>

        <section className="section discovery-section" id="about">
          <div className="split-layout">
            <div className="visual-panel reveal-container">
              <div className="panel-offset" />
              <div className="glass-card square-panel neural-network-bg">
                <div className="inner-frame">
                  <SymbolIcon name="psychology" />
                </div>
              </div>
            </div>
            <div className="section-copy">
              <RevealTitle kicker="Profile" title="Discovery" />
              <div className="prose reveal-container">
                <p>{about}</p>
              </div>
              <blockquote className="quote-panel reveal-container">
                The soul of the machine is built with the precision of logic and the fluidity of data.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <RevealTitle title="Technical Core" center />
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="glass-card skill-card reveal-container" key={skill.category}>
                <SymbolIcon name={iconForSkill[skill.category] || 'deployed_code'} />
                <h3>{categoryLabels[skill.category] || skill.category}</h3>
                <p>{skill.items.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <RevealTitle title="Professional Experience" center />
          <div className="timeline">
            <div className="timeline-pillar" />
            <article className="timeline-item reveal-container">
              <div className="timeline-content">
                <h3>{experience.company}</h3>
                <p className="timeline-meta">
                  {experience.title} | {experience.duration}
                </p>
                <ul>
                  {experience.summary.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-token" aria-hidden="true">
                <SymbolIcon name="token" />
              </div>
              <div className="timeline-spacer" />
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <RevealTitle title="The Showcase" center />
          <div className="project-grid">
            {projects.map((project, index) => {
              const isFeature = index === projects.length - 1;
              return (
                <article
                  className={`project-card reveal-container ${isFeature ? 'project-card-featured' : ''}`}
                  key={project.title}
                >
                  <div className={isFeature ? 'neural-network-bg project-text feature-text' : 'abstract-geometry'} />
                  <div className="project-shade" />
                  <div className="project-content">
                    {isFeature && <SymbolIcon name="smart_toy" className="project-feature-icon" />}
                    <div className="project-tags">
                      <span>{project.date}</span>
                      <span>{projectLabels[index] || project.tech[0]}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-geometry" />
          <div className="contact-inner">
            <RevealTitle title="Get In Touch" center />
            <p className="contact-copy reveal-container">
              Let&apos;s build something remarkable together! Reach out through the neural links below.
            </p>
            <div className="contact-grid reveal-container">
              <a className="magnetic-button" href={`mailto:${contact.email}`}>
                <MagneticInner className="contact-link-inner">
                  <SymbolIcon name="mail" /> Email Me
                </MagneticInner>
              </a>
              <a className="magnetic-button" href={contact.linkedin} target="_blank" rel="noreferrer">
                <MagneticInner className="contact-link-inner">
                  <SymbolIcon name="link" /> LinkedIn
                </MagneticInner>
              </a>
              <a className="magnetic-button" href={contact.github} target="_blank" rel="noreferrer">
                <MagneticInner className="contact-link-inner">
                  <SymbolIcon name="code" /> GitHub
                </MagneticInner>
              </a>
              <a className="magnetic-button" href={contact.resume} download>
                <MagneticInner className="contact-link-inner">
                  <SymbolIcon name="download" /> Resume
                </MagneticInner>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand reveal-container">
          <SymbolIcon name="architecture" />
          <span>The Digital Sanctuary</span>
        </div>
        <p className="reveal-container">&copy; 2024 {name} &bull; Crafted with intelligence &bull; All rights preserved</p>
      </footer>
    </>
  );
}

export default App;
