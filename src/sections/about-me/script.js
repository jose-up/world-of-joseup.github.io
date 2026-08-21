/**
 * About Me Section Script
 */

(function() {
  'use strict';

  // Initialize section behavior when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    
    if (!aboutSection) return;

    // Animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    // Observe card elements
    aboutSection.querySelectorAll('.card, .skills, .projects').forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    console.log('About Me section initialized');
  });

})();
