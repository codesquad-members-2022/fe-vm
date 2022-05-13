import React, { useState } from "react";
import beverage from "data/beverage";
import ProductItem from "components/VendingMachine/ProductItem";
import ProductTab from "components/VendingMachine/ProductTab";
import VMInfo from "components/VendingMachine/VMInfo";

const VendingMachine = () => {
  const [beverageState, setBeverageState] = useState(beverage);
  return (
    <div className="text-lg shadow-lg shadow-gray rounded-b-2xl">
      <div className="p-4 text-2xl font-medium text-center text-white rounded-t-2xl bg-starbucks border-starbucks-dark">
        쥬의 음료 자판기
      </div>
      <div className="flex">
        {/* TODO ProductStand */}
        <div className="flex flex-col">
          <ProductTab />
          <div className="grid grid-flow-row grid-cols-4 gap-5 p-4 border-black">
            {beverageState.map(({ id, ...state }) => (
              <ProductItem key={id} {...state} />
            ))}
          </div>
        </div>
        <VMInfo />
      </div>
    </div>
  );
};

export default VendingMachine;
