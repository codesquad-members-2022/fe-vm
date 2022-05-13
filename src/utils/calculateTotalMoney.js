const calculateTotalMoney = moneyData => {
  return moneyData.reduce((acc, cur) => acc + cur.unit * cur.amount, 0);
};
export default calculateTotalMoney;
