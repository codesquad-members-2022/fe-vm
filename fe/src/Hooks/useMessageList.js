import { MessageListContext, SetMessageListContext } from "Context/MessageListProvider";
import { useContext } from "react";

export default function useMessageList() {
  const [messageList, setMessageList] = [useContext(MessageListContext), useContext(SetMessageListContext)];
  return [messageList, setMessageList];
}
