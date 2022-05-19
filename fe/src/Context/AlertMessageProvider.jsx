import React, { useState } from "react";

export const AlertMessage = React.createContext({});
export const SetAlertMessage = React.createContext(() => {});

export default function AlertMessageProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState({});

  return (
    <SetAlertMessage.Provider value={setAlertMessage}>
      <AlertMessage.Provider value={alertMessage}>{children}</AlertMessage.Provider>
    </SetAlertMessage.Provider>
  );
}
