import "./MessageView.css";

const MessageView = ({ message }) => {
  return (
    <div className="message-view">
      {message.map((v, i) => (
        <p key={i}>{v}</p>
      ))}
    </div>
  );
};

export default MessageView;
