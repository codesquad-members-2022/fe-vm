import React, { useState } from 'react';

import vmLogs from 'mocks/vmLogs';

const initLogs = vmLogs;

export const LogContext = React.createContext();

export const LogProvider = (props) => {
  const [logs, setLogs] = useState(initLogs);
  return (
    <LogContext.Provider value={[logs, setLogs]}>
      {props.children}
    </LogContext.Provider>
  );
};
