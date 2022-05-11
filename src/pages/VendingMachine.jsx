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
    <div className="border border-black flex  my-4">
      <div className="border border-black p-4 flex basis-3/5 flex-wrap gap-4">
        {beverageState.map(({ id, ...state }) => (
          <BeverageItem key={id} {...state} />
        ))}
      </div>
      <div className="border border-black p-4 flex basis-2/5 flex-col gap-4">
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
