import "./MessageView.css";

const MessageView = ({ message, text }) => {
  return (
    <div className="message-view">
      {text.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      {message.map((v, i) => (
        <p key={i}>{v}원 투입</p>
      ))}
    </div>
  );
};

export default MessageView;
