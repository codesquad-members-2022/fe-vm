import { MachineDispatchContext } from "contexts/MachineProvider";
import { WalletDispatchContext } from "contexts/WalletProvider";
import React, { useContext } from "react";
import { convertToMoneyUnit } from "utils";

const MoneyUnitItem = ({ id, money, count, type }) => {
  const { onPushCoin } = useContext(WalletDispatchContext);
  const { onComeInCoin } = useContext(MachineDispatchContext);

  const handleInsertMoney = () => {
    if (count <= 0) {
      return;
    }
    onPushCoin(id);
    onComeInCoin(id);
  };

  return (
    <div key={id} className="flex justify-end items-center w-[90%]">
      <button
        className={`${styledMoneyType(type)} btn btn--starbucks leading-8 `}
        onClick={handleInsertMoney}
      >
        {convertToMoneyUnit(money, "kr")}원
      </button>
      <div className="">X</div>
      <span className={`${styledNoCount(count)} w-[30%] text-right`}>{count}개</span>
    </div>
  );
};

const styledMoneyType = (type) => {
  switch (type) {
    case "coin":
      return "rounded-full w-[70px] h-[70px] mr-12 tracking-tight";

    case "bill":
      return "rounded-none w-[140px] h-[70px] mr-6";

    default:
      return;
  }
};

const styledNoCount = (count) => {
  if (count <= 0) {
    return "empty-money";
  }
};

export default React.memo(MoneyUnitItem);
