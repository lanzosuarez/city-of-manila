import React, { useState, useEffect } from 'react';

export const ExecAndLegislationContext = React.createContext();
export const ExecAndLegislationConsumer = ExecAndLegislationContext.Consumer;

const ExecAndLegislationProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dateFilter, setDateFilter] = useState({
    dateRange: [new Date(), new Date()],
    show: false
  });
  return (
    <ExecAndLegislationContext.Provider
      value={{
        activeTab,
        dateFilter,
        setActiveTab,
        setDateFilter
      }}
    >
      {children}
    </ExecAndLegislationContext.Provider>
  );
};

export default ExecAndLegislationProvider;
