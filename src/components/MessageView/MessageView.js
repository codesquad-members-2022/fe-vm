import "./MessageView.css";

const MessageView = ({ message }) => {
  return (
    <div className="message-view">
      {message.map((v, i) => (
        <div key={i}>
          {typeof v === "string" ? <p>{v} 선택</p> : <p>{v} 투입</p>}
        </div>
      ))}
    </div>
  );
};

export default MessageView;
