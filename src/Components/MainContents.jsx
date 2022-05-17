import React, { useState } from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router';
import VendingMachine from './Contents/VendingMachine/index';
import Wallet from './Contents/Wallet/index';
import moneyData from './Contents/moneyData.json';

export const contentsContext = createContext();
export const myMoneyContext = createContext();

export default function MainContents() {
  const initMyMoney = moneyData.reduce(
    (prev, next) => prev + next.value * next.count,
    0,
  );
  const [payTotal, setPayTotal] = useState(0);
  const [printMessages, setPrintMessages] = useState([]);
  const [myMoneyDetails, setMyMoneyDetails] = useState(moneyData);
  const [myMoneyTotal, setMyMoneyTotal] = useState(initMyMoney);

  return (
    <contentsContext.Provider
      value={{ payTotal, setPayTotal, printMessages, setPrintMessages }}
    >
      <myMoneyContext.Provider
        value={{
          myMoneyDetails,
          setMyMoneyDetails,
          myMoneyTotal,
          setMyMoneyTotal,
        }}
      >
        <Routes path="/">
          <Route index element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </myMoneyContext.Provider>
    </contentsContext.Provider>
  );
}
