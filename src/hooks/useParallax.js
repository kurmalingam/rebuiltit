import { useEffect } from 'react';

// Moves elements with data-speed attribute opposite to scroll for subtle parallax
export function useParallax(){
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      document.querySelectorAll('[data-speed]').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
        el.style.transform = `translate3d(0, ${y * speed * -1}px, 0)`;
      });
    };
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
}
