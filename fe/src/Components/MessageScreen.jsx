import { INIT_ALERT_MESSAGE } from "Helper/constant";
import addMessageList from "Helper/message";
import useAlertMessage from "Hooks/useAlertMessage";
import useMessageList from "Hooks/useMessageList";
import { useEffect, useRef } from "react";
import { Message, Screen, ScreenContainer } from "./MessageScreen.styled";

export default function MessageScreen() {
  const [alertMessage, setAlertMessage] = useAlertMessage({});
  const [messageList, setMessageList] = useMessageList([]);
  const scrollRef = useRef();

  useEffect(() => {
    addMessageList({ alertMessage, setMessageList, messageList });
    setAlertMessage(INIT_ALERT_MESSAGE);
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }, [alertMessage, messageList, setMessageList, setAlertMessage]);

  return (
    <ScreenContainer>
      <Screen ref={scrollRef}>
        {messageList &&
          messageList.map((message, idx) => (
            <Message key={createArrayKeyForNoHasID(message, idx)}>{message}</Message>
          ))}
      </Screen>
    </ScreenContainer>
  );
}

const createArrayKeyForNoHasID = (message, key) => {
  return `${message + key}`;
};
