import { createContext, useState } from "react";

export const messageContext = createContext();

function MessageProvider({ children }) {
  const [title, setTitle] = useState("");
  const [input, setInput] = useState(0);
  const [inputSum, setInputSum] = useState(0);
  const [message, setMessage] = useState("");

  const value = {
    title,
    setTitle,
    input,
    setInput,
    inputSum,
    setInputSum,
    message,
    setMessage,
  };
  return (
    <messageContext.Provider value={value}>{children}</messageContext.Provider>
  );
}

export default MessageProvider;
