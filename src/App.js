import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
  const [money, setMoney] = useState(moneyUnit);
  const MoneyContext = React.createContext(money);

  return (
    <div className="my-3 mx-auto max-w-7xl">
      <nav className="flex justify-center">
        <Link to="/" className="p-6 bg-slate-200 hover:bg-blue-200">
          자판기
        </Link>
        <Link to="/wallet" className="p-6 bg-slate-200 hover:bg-blue-200">
          지갑
        </Link>
      </nav>
      <Outlet context={[money, setMoney]} />
    </div>
  );
};

export default App;
