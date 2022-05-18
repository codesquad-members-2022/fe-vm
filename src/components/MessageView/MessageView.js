import "./MessageView.css";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

const MessageView = () => {
  const { message } = useContext(MessageContext);
  return (
    <div className="message-view">
      {message.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </div>
  );
};

export default MessageView;
