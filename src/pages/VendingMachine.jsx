import React, { useEffect, useState } from "react";
import ProductStand from "components/VendingMachine/ProductStand";
import VMSideInfo from "components/VendingMachine/VMSideInfo";
import { API } from "utils";
import MotionPageContainer from "components/Motion/MotionPageContainer";

const VendingMachine = () => {
  const [beverage, setBeverage] = useState([]);

  // TODO 임시
  const getTemp = async () => {
    const { data: beverageData } = await API.getBeverage();
    setBeverage(beverageData);
  };

  useEffect(() => {
    getTemp();
  }, []);

  return (
    <MotionPageContainer
      className={"text-lg rounded-b-2xl shadow-lg shadow-gray"}
      translateX={-100}
    >
      <div className="p-4 text-2xl font-medium text-center text-white bg-starbucks rounded-t-2xl border-starbucks-dark">
        쥬의 음료 자판기
      </div>
      <div className="flex">
        <ProductStand beverage={beverage} />
        <VMSideInfo />
      </div>
    </MotionPageContainer>
  );
};

export default VendingMachine;
