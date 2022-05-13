import React, { createContext, useState } from "react";

export const MessageContext = createContext();

export default function MessageStore(props) {
  const [message, setMessage] = useState([" ** PLEASE INSERT MONEY ** "]);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {props.children}
    </MessageContext.Provider>
  );
}
