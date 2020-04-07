import React, { useState } from 'react';

export const NavigationContext = React.createContext();
export const NavigationConsumer = NavigationContext.Consumer;

const NavigationProvider = ({ children }) => {
  const [showNav, toggleNav] = useState(false);
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
