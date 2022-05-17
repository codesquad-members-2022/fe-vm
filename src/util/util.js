export const formatPrice = price => Number(price).toLocaleString('ko-KR');

export const getTotalCash = cashData =>
  cashData.reduce((total, cash) => total + cash.unit * cash.count, 0);
