import React from "react";
import { convertToMoneyUnit } from "utils";

const ProductItem = ({ id, image, name, price, count }) => {
  const handleClickItem = () => {};
  return (
    <div
      className="flex flex-col gap-1 items-center p-2 rounded-xl hover:ring-2 hover:ring-starbucks shadow-gray hover:scale-105 active:scale-110 cursor-pointer"
      onClick={handleClickItem}
    >
      <img className="flex-wrap mb-1 rounded-full" src={image} alt={name} />
      <h3 className="flex-1 text-sm font-semibold tracking-tighter ">{name}</h3>
      <span className="">{convertToMoneyUnit(price, "kr")}원</span>
    </div>
  );
};

export default ProductItem;
