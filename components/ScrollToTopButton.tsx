import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Go to top"
      // Optimized classes for appearance and behavior
      className={`fixed z-50 flex items-center justify-center rounded-full bg-primary/80 backdrop-blur-sm border border-white/20 text-white shadow-lg hover:bg-primary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-white transition-all duration-300 ease-out-expo
        bottom-4 right-4 w-10 h-10 md:bottom-8 md:right-8 md:w-12 md:h-12
        ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
    >
      <ArrowUpIcon className="h-5 w-5 md:h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;