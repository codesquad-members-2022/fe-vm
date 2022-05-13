import React from "react";
import { convert2MoneyUnit } from "utils";

const MoneyUnitItem = ({ id, money, count, type }) => {
  const krMoney = convert2MoneyUnit(money, "kr");
  return (
    <div key={id} className="flex justify-end items-center w-[90%]">
      <button className={`${styledMoneyType(type)} btn btn--starbucks mr-10 `}>{krMoney}원</button>
      <div>X</div>
      <span className="w-[30%] text-right">{count}개</span>
    </div>
  );
};

const styledMoneyType = (type) => {
  switch (type) {
    case "coin":
      return "rounded-full py-4 w-[30%]";

    case "bill":
      return "rounded-none px-2 py-3 w-[50%]";

    default:
      return;
  }
};

export default MoneyUnitItem;
