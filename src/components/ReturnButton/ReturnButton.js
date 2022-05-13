import "./ReturnButton.css";
const ReturnButton = ({ onClick }) => {
  return (
    <button className="return-value" onClick={onClick}>
      반환
    </button>
  );
};

export default ReturnButton;
