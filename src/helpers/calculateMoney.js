import { convert2MoneyUnit } from "utils";

export const calcTotalMoney = (wallet) =>
  convert2MoneyUnit(
    wallet.reduce((prev, { money, count }) => prev + money * count, 0),
    "kr"
  );
