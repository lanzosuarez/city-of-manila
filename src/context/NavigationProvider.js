import React, { useState, useEffect } from 'react';

export const NavigationContext = React.createContext();
export const NavigationConsumer = NavigationContext.Consumer;

const NavigationProvider = ({ children }) => {
  const [showNav, toggleNav] = useState(false);
  useEffect(() => {
    toggleNav(false);
  }, []);
  return (
    <NavigationContext.Provider
      value={{
        showNav,
        toggleNav
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
