import "./CurrentPrice.css";
import { useContext } from "react";
import { MoneyContext } from "../../context/MoneyContext";
const CurrentPrice = () => {
  const { accumulatedPrice } = useContext(MoneyContext);
  return <p className="current-price">누적 금액 : {accumulatedPrice}원</p>;
};

export default CurrentPrice;
