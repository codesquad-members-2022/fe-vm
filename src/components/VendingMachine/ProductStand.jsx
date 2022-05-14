import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductTab from "./ProductTab";
import beverage from "mocks/beverage";

const ProductStand = () => {
  const [beverageState, setBeverageState] = useState(beverage);

  return (
    <div className="flex flex-col">
      <ProductTab />
      <div className="grid grid-flow-row grid-cols-4 gap-5 p-4 border-black">
        {beverageState.map(({ id, ...state }) => (
          <ProductItem key={id} {...state} />
        ))}
      </div>
    </div>
  );
};

export default ProductStand;
