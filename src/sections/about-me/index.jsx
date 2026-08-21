import React from 'react';
import './styles.scss';
import { formatCurrency, formatDate } from '../../scripts/_global/utils.js';

export default function AboutMe() {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'SCSS', 'Vite',
    'Git', 'HTML5', 'CSS3', 'REST APIs'
  ];

  return (
    <section className="about-me-section">
      <h1>Hello! I'm Joseup</h1>
      <p>
        I create websites and software applications with passion and precision.
      </p>
      
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
      
      <section className="projects">
        <h2>What I Work On</h2>
        <ul className="projects-list">
          <li>React-based web applications</li>
          <li>CSS/SCSS theming and design systems</li>
          <li>Tooling and development workflows</li>
        </ul>
      </section>
      
      <footer className="footer">
        <p>Last updated: {formatDate(new Date(), { year: 'numeric', month: 'long' })}</p>
      </footer>
    </section>
  );
}
