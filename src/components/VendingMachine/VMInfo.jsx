import { MachineStateContext } from "contexts/MachineProvider";
import { calcTotalMoney } from "helpers/calculateMoney";
import React, { useContext, useEffect, useState } from "react";

const VMInfo = () => {
  const { storedMoney } = useContext(MachineStateContext);
  const [totalMoney, setTotalMoney] = useState(0);

  const handleReturnCoin = () => {};

  const handleChange = () => {};

  useEffect(() => {
    setTotalMoney(calcTotalMoney(storedMoney));
  }, [storedMoney]);

  return (
    <div className="flex flex-col gap-4 p-4 w-[30%] text-lg border-black ">
      <div className="p-2 h-[70%] text-base rounded-2xl border-4 border-starbucks">하이</div>
      <div className="flex justify-between">
        <span>남은시간</span>
        <div className="flex">
          <span className="w-24 font-semibold text-right">10</span>
          <div>초</div>
        </div>
      </div>
      <div className="flex justify-between">
        <span>넣은금액</span>
        <div className="flex justify-end items-center rounded-xl hover:ring-2">
          <input
            className="w-24 text-xl font-semibold text-right bg-transparent outline-none cursor-pointer"
            value={totalMoney}
            onChange={handleChange}
          />
          <div>원</div>
        </div>
      </div>
      <button className="py-4 text-xl btn btn--starbucks" onClick={handleReturnCoin}>
        반환하기
      </button>
    </div>
  );
};

export default VMInfo;
