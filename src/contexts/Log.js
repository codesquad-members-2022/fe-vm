import React, { useState, createContext } from "react";

const LogContext = createContext({
  logMessages: [],
  log: () => {},
});

function LogProvider({ children }) {
  const [logMessages, setLogMessages] = useState([]);

  function log(type, value) {
    switch (type) {
      case "insert":
        addLogMessage(`${value}원을 투입했습니다.`);
        break;
      case "return":
        addLogMessage(`${value}원을 반환했습니다.`);
        break;
      case "select":
        addLogMessage(`${value}을(를) 선택했습니다.`);
        break;
    }
  }
  function addLogMessage(newLogMessage) {
    setLogMessages([...logMessages, newLogMessage]);
  }
  const value = { logMessages, log };
  return <LogContext.Provider value={value}>{children}</LogContext.Provider>;
}

export { LogContext, LogProvider };
