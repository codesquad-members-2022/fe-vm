import { WalletDispatchContext } from "contexts/WalletProvider";
import React, { useContext, useEffect } from "react";
import { convert2MoneyUnit } from "utils";

const MoneyUnitItem = ({ id, money, count, type }) => {
  useEffect(() => {
    console.log(`${money} 아이템 렌더`);
  });

  const { onInsertCoin } = useContext(WalletDispatchContext);

  const krMoney = convert2MoneyUnit(money, "kr");

  const handleInsertMoney = () => {
    onInsertCoin(id);
  };

  return (
    <div key={id} className="flex justify-end items-center w-[90%]">
      <button
        className={`${styledMoneyType(type)} btn btn--starbucks mr-10`}
        onClick={handleInsertMoney}
      >
        {krMoney}원
      </button>
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

export default React.memo(MoneyUnitItem);
