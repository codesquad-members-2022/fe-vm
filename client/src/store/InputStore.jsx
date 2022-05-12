import React, { createContext, useState } from "react";

export const InputContext = createContext();

export default function InputStore(props) {
  const [input, setInput] = useState(0);

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {props.children}
    </InputContext.Provider>
  );
}
