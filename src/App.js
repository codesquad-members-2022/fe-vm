import HeaderNav from "components/Nav/HeaderNav";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const moneyUnit = {
  money: [
    {
      id: 1,
      money: 10,
      currentNumber: 7,
    },
    {
      id: 2,
      money: 50,
      currentNumber: 2,
    },
    {
      id: 3,
      money: 100,
      currentNumber: 3,
    },
    {
      id: 4,
      money: 500,
      currentNumber: 4,
    },
    {
      id: 5,
      money: 1000,
      currentNumber: 0,
    },
    {
      id: 6,
      money: 5000,
      currentNumber: 1,
    },
    {
      id: 7,
      money: 10000,
      currentNumber: 2,
    },
  ],
  unit: "원",
};

const App = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <HeaderNav />
      <Outlet />
    </div>
  );
};

export default App;
