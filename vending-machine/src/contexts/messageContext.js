import { createContext, useState } from "react";

export const messageContext = createContext();

function MessageProvider({ children }) {
  const [message, setMessage] = useState([]);

  const value = {
    message,
    setMessage,
  };
  return (
    <messageContext.Provider value={value}>{children}</messageContext.Provider>
  );
}

export default MessageProvider;
