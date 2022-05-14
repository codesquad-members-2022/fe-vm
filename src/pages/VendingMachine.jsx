import React from "react";
import ProductStand from "components/VendingMachine/ProductStand";
import VMInfo from "components/VendingMachine/VMInfo";

const VendingMachine = () => {
  return (
    <div className="text-lg shadow-lg shadow-gray rounded-b-2xl">
      <div className="p-4 text-2xl font-medium text-center text-white rounded-t-2xl bg-starbucks border-starbucks-dark">
        쥬의 음료 자판기
      </div>
      <div className="flex">
        <ProductStand />
        <VMInfo />
      </div>
    </div>
  );
};

export default VendingMachine;
