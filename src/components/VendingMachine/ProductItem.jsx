import React from "react";

const ProductItem = ({ image, name, price }) => {
  return (
    <div className="p-2 shadow-sm cursor-pointer shadow-gray rounded-xl">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

export default ProductItem;
