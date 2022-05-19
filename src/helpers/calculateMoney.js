export const calcTotalMoney = (moneyObject) =>
  moneyObject?.reduce((prev, { money, count }) => prev + money * count, 0);
