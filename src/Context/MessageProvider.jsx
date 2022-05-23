import { createContext, useState } from 'react';

export const MessageContext = createContext(null);

export function MessageProvider({ children }) {
  const [printMessages, setPrintMessages] = useState([]);
  return (
    <MessageContext.Provider value={{ printMessages, setPrintMessages }}>
      {children}
    </MessageContext.Provider>
  );
}
