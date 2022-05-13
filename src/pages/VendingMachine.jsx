import beverage from "data/beverage";
import React, { useState } from "react";

const BeverageItem = ({ image, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
};

const VendingMachine = () => {
  const [beverageState, setBeverageState] = useState(beverage);
  return (
    <div className="flex my-10 border border-black">
      <div className="flex flex-wrap gap-4 p-4 border border-black basis-3/5">
        {beverageState.map(({ id, ...state }) => (
          <BeverageItem key={id} {...state} />
        ))}
      </div>
      <div className="flex flex-col gap-4 p-4 border border-black basis-2/5">
        <div className="flex">
          <input className="text-right" value={500} /> 원
        </div>
        <button>반환버튼</button>
        <div>인포창</div>
      </div>
    </div>
  );
};

export default VendingMachine;
