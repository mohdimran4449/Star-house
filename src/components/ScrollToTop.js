import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element
    if (hash) {
      // Wait a bit for the DOM to be ready
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found, scroll to top
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 500);
    } else {
      // No hash, just scroll to top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
