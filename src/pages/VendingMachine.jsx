import React, { useState } from "react";

const beverageInfo = [
  {
    id: 1,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "콜라",
    price: 1000,
    quantity: 100,
  },
  {
    id: 2,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "사이다",
    price: 1000,
    quantity: 100,
  },
  {
    id: 3,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "파인애플",
    price: 1000,
    quantity: 100,
  },
  {
    id: 4,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "포도",
    price: 1000,
    quantity: 100,
  },
  {
    id: 5,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "레몬",
    price: 1000,
    quantity: 100,
  },
  {
    id: 6,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "커피",
    price: 1000,
    quantity: 100,
  },
  {
    id: 7,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "초코우유",
    price: 1000,
    quantity: 100,
  },
  {
    id: 8,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "코코아",
    price: 1000,
    quantity: 100,
  },
  {
    id: 9,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "코코팜",
    price: 1000,
    quantity: 100,
  },
  {
    id: 10,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "코코봉",
    price: 1000,
    quantity: 100,
  },
  {
    id: 11,
    image: "https://dummyimage.com/200x200/000000/fff",
    name: "봉봉",
    price: 1000,
    quantity: 100,
  },
];

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
  const [beverageState, setBeverageState] = useState(beverageInfo);
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
