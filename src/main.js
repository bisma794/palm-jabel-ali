import './style.css';

console.log('Cosmic frontend initialized.');

// Smooth interactive lift effect script
document.addEventListener('DOMContentLoaded', () => {
  const interactiveElements = document.querySelectorAll('.interactive');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'translateY(-5px)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translateY(0)';
    });
  });
});
