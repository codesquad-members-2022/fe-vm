import "./CurrentPrice.css";
const CurrentPrice = ({ amount }) => {
  return <p className="current-price">현재금액 : {amount}</p>;
};

export default CurrentPrice;
