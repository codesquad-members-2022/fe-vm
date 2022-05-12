import React, { useState } from 'react';

import vmLogs from 'mocks/vmLogs';

const initLogs = vmLogs;

export const LogContext = React.createContext();

export const LogProvider = (props) => {
  const [logs, setLogs] = useState(initLogs);

  const insertLog = (log) => {
    const lastLogId = logs[logs.length - 1].id;
    const newLog = { id: lastLogId + 1, ...log };
    setLogs([...logs, newLog]);
  };

  return (
    <LogContext.Provider value={[logs, insertLog]}>
      {props.children}
    </LogContext.Provider>
  );
};
