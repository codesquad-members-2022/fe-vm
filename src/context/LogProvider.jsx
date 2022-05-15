import React, { useState } from 'react';

import vmLogs from 'mocks/vmLogs';

const initLogs = vmLogs;

export const LogContext = React.createContext();

export const LogProvider = (props) => {
  const MAX_LOG_LENGTH = 23;
  const [logs, setLogs] = useState(initLogs);

  const insertLog = (log) => {
    const lastLogId = logs[logs.length - 1].id;
    const newLog = { id: lastLogId + 1, ...log };
    const newLogs = [...logs, newLog];
    if (newLogs.length >= MAX_LOG_LENGTH) {
      newLogs.splice(0, 1);
    }
    setLogs(newLogs);
  };

  return (
    <LogContext.Provider value={[logs, insertLog]}>
      {props.children}
    </LogContext.Provider>
  );
};
