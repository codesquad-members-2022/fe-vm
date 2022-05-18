import { convertToMoneyUnit } from "utils";

export const calcTotalMoney = (moneyObject) =>
  convertToMoneyUnit(
    moneyObject?.reduce((prev, { money, count }) => prev + money * count, 0),
    "kr"
  );
