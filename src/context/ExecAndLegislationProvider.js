import React, { useState } from 'react';

export const ExecAndLegislationContext = React.createContext();
export const ExecAndLegislationConsumer = ExecAndLegislationContext.Consumer;

const ExecAndLegislationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [filters, setFilters] = useState({
    dateRange: null,
    searchText: '',
    showDateFilter: false
  });

  return (
    <ExecAndLegislationContext.Provider
      value={{
        activeTab,
        filters,
        setActiveTab,
        setFilters
      }}
    >
      {children}
    </ExecAndLegislationContext.Provider>
  );
};

export default ExecAndLegislationProvider;
