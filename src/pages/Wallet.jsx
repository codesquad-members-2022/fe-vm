import React, { useContext } from "react";
import MoneyUnitItem from "components/Wallet/MoneyUnitItem";
import { WalletStateContext } from "contexts/WalletProvider";
import { calcTotalMoney } from "helpers/calculateMoney";
import MotionPageContainer from "components/Motion/MotionPageContainer";
import { convertMoneyUnit } from "utils";

const Wallet = () => {
  const wallet = useContext(WalletStateContext);
  const totalMoney = convertMoneyUnit(calcTotalMoney(wallet));

  return (
    <MotionPageContainer
      className={
        "flex flex-col gap-3 items-center p-4 mx-auto max-w-xs text-2xl rounded-3xl border-4 border-starbucks shadow-lg shadow-gray"
      }
      translateX={100}
    >
      {wallet.map((moneyInfo) => (
        <MoneyUnitItem key={moneyInfo.id} {...moneyInfo} />
      ))}
      <span className="py-3 mt-5 w-[95%] text-3xl text-center rounded-md border-4 border-starbucks">
        {totalMoney}원
      </span>
    </MotionPageContainer>
  );
};

export default Wallet;
