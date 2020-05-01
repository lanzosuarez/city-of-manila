import React, { useState } from 'react';

export const LatestUpdatesContext = React.createContext();
export const LatestUpdatesConsumer = LatestUpdatesContext.Consumer;

const LatestUpdatesProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [filters, setFilters] = useState({
    dateRange: null,
    searchText: '',
    showDateFilter: false
  });

  return (
    <LatestUpdatesContext.Provider
      value={{
        activeTab,
        filters,
        setActiveTab,
        setFilters
      }}
    >
      {children}
    </LatestUpdatesContext.Provider>
  );
};

export default LatestUpdatesProvider;
