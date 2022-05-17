import React, { useState } from "react";

export const MessageListContext = React.createContext([]);
export const SetMessageListContext = React.createContext(() => {});

export default function MessageListProvider({ children }) {
  const [messageList, setMessageList] = useState([]);

  return (
    <SetMessageListContext.Provider value={setMessageList}>
      <MessageListContext.Provider value={messageList}>{children}</MessageListContext.Provider>
    </SetMessageListContext.Provider>
  );
}
