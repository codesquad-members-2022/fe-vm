import { MachineStateContext } from "contexts/MachineProvider";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { convertMoneyUnit } from "utils";

const VMSideInfo = () => {
  const { totalMoney } = useContext(MachineStateContext);

  const handleReturnCoin = () => {};

  const handleChange = () => {};

  const getTotalMoney = useCallback(() => {
    const initTotalMoney = convertMoneyUnit(totalMoney);
    return initTotalMoney;
  }, [totalMoney]);

  useEffect(() => {
    getTotalMoney();
  }, [getTotalMoney]);

  return (
    <div className="flex flex-col gap-4 p-4 w-[30%] text-lg border-black ">
      <HistoryInfo />
      <div className="flex justify-between">
        <span>남은시간</span>
        <div className="flex">
          <span className="mr-1 w-24 text-xl font-semibold text-right">10</span>
          <div>초</div>
        </div>
      </div>
      <div className="flex justify-between">
        <span>넣은금액</span>
        <div className="flex justify-end items-center rounded-xl hover:ring-2">
          <input
            className="mr-1 w-24 text-xl font-semibold text-right bg-transparent outline-none cursor-pointer"
            value={getTotalMoney()}
            onChange={handleChange}
          />
          <div>원</div>
        </div>
      </div>
      <ReturnButton handleReturnCoin={handleReturnCoin} />
    </div>
  );
};

const HistoryInfo = () => {
  return <div className="p-2 h-[70%] text-base rounded-2xl border-4 border-starbucks">하이</div>;
};

const ReturnButton = ({ handleReturnCoin }) => {
  return (
    <button className="py-4 text-xl btn btn--starbucks" onClick={handleReturnCoin}>
      반환하기
    </button>
  );
};

export default VMSideInfo;
