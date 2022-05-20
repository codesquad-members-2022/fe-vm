export const formatPrice = price => Number(price).toLocaleString('ko-KR');

export const getTotalCash = cashData =>
  cashData.reduce((total, cash) => total + cash.unit * cash.count, 0);

export const addZero = number => (number >= 10 ? number : `0${number}`);

export const createNextId = (list = []) => Math.max(...list.map(item => item.id)) + 1;
