import React, { useEffect } from 'react';

const useSlideIn = (cb, elementId) => {
  const startAnimation = () => {
    const element = document.getElementById(elementId);
    const slideInAt =
      window.scrollY + window.innerHeight - element.offsetHeight;
    console.log(slideInAt);
    console.log(element.offsetTop);
    if (slideInAt > element.offsetTop) {
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
