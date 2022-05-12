export const parseMoneyFormat = (money) => {
  const commaMoney = money.toLocaleString('ko-KR');
  return `${commaMoney}원`;
};
