import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = (sectionId, headerHeight) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && (!sectionId || sectionId === 'home')) {
      window.scrollTo({
        top: 0, 
        behavior: 'auto',
      });
    } else if (location.pathname === '/about' && (!sectionId || sectionId === 'about')) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
      
    } else {
      
      const element = document.getElementById(sectionId);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        window.scrollTo({
          top: elementTop + window.pageYOffset - headerHeight,
          behavior: 'auto',
        });
      }
    }
  }, [location, sectionId, headerHeight]);
};

export default useScrollToSection;
