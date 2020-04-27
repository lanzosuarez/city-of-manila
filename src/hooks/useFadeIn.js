import React, { useState, useEffect, useCallback } from 'react';

const setStyle = el => (prop, val) => (el.style[prop] = val);
const checkIfElIsAlreadyVisible = el => {
  const currentBottom = window.scrollY + window.innerHeight;
  if (currentBottom > el.offsetTop) {
    return true;
  }
  return false;
};
const removeEl = (elements, el) => elements.filter(elItem => elItem !== el);
const sign = dir => (dir === 'up' ? '' : '-');

const useFadeIn = () => {
  const [elements, setElements] = useState([]);

  const startAnimation = useCallback(() => {
    elements.forEach(el => {
      const slideInAt = window.scrollY + window.innerHeight - el.offsetHeight;
      if (slideInAt > el.offsetTop - el.offsetHeight) {
        const setElStyle = setStyle(el);
        setElStyle('transform', 'translateY(0px)');
        setElStyle('opacity', 1);
        const els = removeEl(elements, el);
        setElements(els);
      }
    });
  }, [elements]);

  const setUpElement = (id, options = {}) => {
    const { dir = 'up', offset = '100px', delay = '' } = options;
    const el = document.querySelector(`[data-usefadein="${id}"]`);
    if (el) {
      const setElStyle = setStyle(el);
      const visible = checkIfElIsAlreadyVisible(el);
      setElStyle('transform', `translateY(${sign(dir)}${offset})`);
      setElStyle('opacity', visible ? 0.5 : 0);
      window.setTimeout(() => {
        setElStyle(
          'transition',
          `opacity 1s ease-out ${delay}, transform 600ms ease-in-out ${delay}`
        );
        if (visible) {
          setElStyle('transform', 'translateY(0px)');
          setElStyle('opacity', 1);
        }
      }, 0);
      if (!visible) setElements(els => [...els, el]);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', startAnimation);
    return () => {
      window.removeEventListener('scroll', startAnimation);
    };
  }, [elements, startAnimation]);

  return [setUpElement];
};

export default useFadeIn;
