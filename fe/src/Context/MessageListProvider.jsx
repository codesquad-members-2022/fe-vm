import React from "react";

export const MessageListContext = React.createContext([]);
export const SetMessageListContext = React.createContext(() => {});

export default function MessageListProvider({ state, setState, children }) {
  return (
    <SetMessageListContext.Provider value={setState}>
      <MessageListContext.Provider value={state}>{children}</MessageListContext.Provider>
    </SetMessageListContext.Provider>
  );
}
