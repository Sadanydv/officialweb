import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down a certain amount
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-[50px] rounded-full  w-[50px] h-[50px] flex items-center justify-center right-[5px]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=" text-white p-3 bg-red-500 rounded-full h-full w-full hover:bg-blue-400 transition duration-200"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
