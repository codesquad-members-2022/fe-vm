import React, { createContext, useState } from "react";

export const TimerContext = createContext();

export default function TimerStore(props) {
  const [timer, setTimer] = useState(false);

  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {props.children}
    </TimerContext.Provider>
  );
}
