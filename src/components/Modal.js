import React, { useEffect, memo } from 'react';
import ReactDom from 'react-dom';

const Modal = ({ children }) => {
  const el = document.createElement('div');
  useEffect(() => {
    const root = document.getElementById('page-layout');
    root.appendChild(el);

    return () => {
      root.removeChild(el);
    };
  });

  return ReactDom.createPortal(children, el);
};

export default memo(Modal);
