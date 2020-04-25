import React, { useEffect } from 'react';

const useSlideIn = (cb, elementId) => {
  const startAnimation = () => {
    const element = document.getElementById(elementId);
    const slideInAt =
      window.scrollY + window.innerHeight - element.offsetHeight;
    if (slideInAt > element.offsetTop - element.offsetHeight) {
      cb();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', startAnimation);
    return () => {
      window.removeEventListener('scroll', startAnimation);
    };
  }, []);
};

export default useSlideIn;
