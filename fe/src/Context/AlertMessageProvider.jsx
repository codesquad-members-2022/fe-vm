import React from "react";

export const AlertMessage = React.createContext({});
export const SetAlertMessage = React.createContext(() => {});

export default function AlertMessageProvider({ state, setState, children }) {
  return (
    <SetAlertMessage.Provider value={setState}>
      <AlertMessage.Provider value={state}>{children}</AlertMessage.Provider>
    </SetAlertMessage.Provider>
  );
}
