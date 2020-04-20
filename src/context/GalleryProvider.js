import React, { useState } from 'react';

export const GalleryContext = React.createContext();
export const GalleryConsumer = Gallery.Consumer;

const GalleryProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <GalleryContext.Provider
      value={{
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;
