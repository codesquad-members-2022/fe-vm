import "./ReturnButton.css";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { MoneyContext } from "../../context/MoneyContext";

const ReturnButton = () => {
  const { setMessage } = useContext(MessageContext);
  const { setAccumulatedPrice } = useContext(MoneyContext);
  const returnPrice = () => {
    setAccumulatedPrice(0);
    setMessage([]);
  };
  return (
    <button className="return-value" onClick={returnPrice}>
      반환
    </button>
  );
};

export default ReturnButton;
