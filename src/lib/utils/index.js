export const formatPrice = price => price.toLocaleString('ko-KR');

export const getTotalMoney = money => {
  return money.reduce((total, { unit, quantity }) => total + unit * quantity, 0);
};

export const calculateMoney = total => {
  const wallet = [10000, 1000, 500, 100, 50, 10];
  const money = {};
  for (let unit of wallet) {
    if (!total) break;
    const quotient = Math.floor(total / unit);
    if (quotient > 0) {
      money[unit] = quotient;
      total %= unit;
    }
  }
  return money;
};
