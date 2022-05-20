import "./rechargemoney.css";
import { useContext } from "react";
import { MoneyContext } from "../../context/MoneyContext";

const RechargeMoney = () => {
  const { accumulatedPrice } = useContext(MoneyContext);
  return <div className="rechargemoney-wrapper">{accumulatedPrice}원</div>;
};

export default RechargeMoney;
