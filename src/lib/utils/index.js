export const formatPrice = price => price.toLocaleString('ko-KR');

export const getTotalMoney = money => {
  return money.reduce((total, { unit, quantity }) => total + unit * quantity, 0);
};
