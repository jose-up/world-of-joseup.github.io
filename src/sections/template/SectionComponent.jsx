import React from 'react';

/**
 * Base Section Component Template
 * 
 * Usage: Create a new file in src/sections/{section-name}/SectionName.jsx
 * and follow this pattern.
 */
export default function Section({ title, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      {title && <h2 className="section__title">{title}</h2>}
      {children}
    </section>
  );
}
