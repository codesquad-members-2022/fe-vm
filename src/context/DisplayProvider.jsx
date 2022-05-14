import React, { useState, createContext } from "react";

const DisplayContext = createContext();

function DisplayProvider({ children }) {
  const [displayMode, setDisplayMode] = useState("light");

  return (
    <DisplayContext.Provider value={{ displayMode, setDisplayMode }}>{children}</DisplayContext.Provider>
  );
}

export { DisplayContext, DisplayProvider };
