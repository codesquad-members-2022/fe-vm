import "./MessageView.css";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

const MessageView = () => {
  const { message } = useContext(MessageContext);
  return (
    <div className="message-view">
      {message.map((v, i) => (
        <div key={i}>
          <p>{v}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageView;
