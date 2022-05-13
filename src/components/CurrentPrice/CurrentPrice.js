import "./CurrentPrice.css";
const CurrentPrice = ({ accumulatedPrice }) => {
  return <p className="current-price">누적 금액 : {accumulatedPrice} 원</p>;
};

export default CurrentPrice;
