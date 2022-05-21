import { MachineStateContext } from "contexts/MachineProvider";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { convertMoneyUnit } from "utils";

const VMSideInfo = () => {
  const handleReturnCoin = () => {};

  return (
    <div className="flex flex-col gap-4 p-4 w-[30%] min-h-[680px] text-lg border-black ">
      <HistoryInfo />
      <RemainTimeBox />
      <InputMoneyBox />
      <ReturnButton handleReturnCoin={handleReturnCoin} />
    </div>
  );
};

const HistoryInfo = () => {
  return <div className="p-2 h-[70%] text-base rounded-2xl border-4 border-starbucks">하이</div>;
};

const RemainTimeBox = () => {
  return (
    <div className="flex justify-between">
      <span>남은시간</span>
      <div className="flex">
        <span className="mr-1 w-24 text-xl font-semibold text-right">10</span>
        <div>초</div>
      </div>
    </div>
  );
};

const InputMoneyBox = () => {
  const { totalMoney } = useContext(MachineStateContext);

  const getTotalMoney = useCallback(() => {
    const initTotalMoney = convertMoneyUnit(totalMoney);
    return initTotalMoney;
  }, [totalMoney]);

  const handleChange = (e) => {
    console.log("e.target.value :>> ", e.target.value);
  };

  return (
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
  );
};

const ReturnButton = ({ handleReturnCoin }) => {
  return (
    <button className="py-4 text-xl btn btn--starbucks" onClick={handleReturnCoin}>
      반환하기
    </button>
  );
};

export default VMSideInfo;
