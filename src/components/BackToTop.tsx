import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-22 sm:bottom-24 right-6 z-40 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-studio-950 text-studio-700 hover:text-white border border-studio-300/80 shadow-md backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-105 group"
        aria-label="Kembali ke atas"
        title="Kembali ke atas"
      >
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
};
