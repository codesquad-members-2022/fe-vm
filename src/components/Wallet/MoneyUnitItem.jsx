import { MachineDispatchContext } from "contexts/MachineProvider";
import { WalletDispatchContext } from "contexts/WalletProvider";
import React, { useContext } from "react";
import { convertMoneyUnit } from "utils";
import { styledIsEmptyMoney, styledIsMoneyType } from "helpers/styleTemplate";

const MoneyUnitItem = ({ id, money, count, type }) => {
  const { onPushCoin } = useContext(WalletDispatchContext);
  const { onComeInCoin } = useContext(MachineDispatchContext);

  const handleInsertMoney = () => {
    if (count <= 0) return;

    onPushCoin(id);
    onComeInCoin(money);
  };

  return (
    <div className="flex justify-end items-center w-[90%]">
      <button
        className={`${styledIsMoneyType(type)} btn btn--starbucks leading-8 `}
        onClick={handleInsertMoney}
      >
        {convertMoneyUnit(money, "kr")}원
      </button>
      <div className="">X</div>
      <span className={`${styledIsEmptyMoney(count)} w-[30%] text-right`}>{count}개</span>
    </div>
  );
};

export default React.memo(MoneyUnitItem);
