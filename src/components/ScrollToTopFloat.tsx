import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const ScrollToTopFloat: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTopHandler = () => {
    scrollToTop();
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTopHandler}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-accent hover:bg-accent-hover text-accent-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopFloat;
