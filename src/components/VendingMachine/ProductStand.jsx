import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductTab from "./ProductTab";

const ProductStand = ({ beverage }) => {
  return (
    <div className="flex flex-col w-[70%]">
      <ProductTab />
      <div className="grid grid-cols-4 grid-flow-row gap-2 p-4">
        {beverage.map((itemInfo) => (
          <ProductItem key={itemInfo.id} {...itemInfo} />
        ))}
      </div>
    </div>
  );
};

export default ProductStand;
