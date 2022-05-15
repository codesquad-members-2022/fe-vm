import React, { useCallback, useMemo, useState } from "react";

import Navbar from "components/Navbar/NavBar";
import cash from "mockData/money";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

// TODO: context 분리하기
export const MoneyContext = React.createContext({});
export const setMoneyContext = React.createContext(() => {});

const Layout = ({ menusData }) => {
  // NOTE: 더 좋은 방법이 없는지..?
  const [cashData, setCashData] = useState(cash);

  // NOTE: useMemo, useCallback사용에도 re-rendering이 되는 곳
  // (lint설정으로 인해 사용해야하기때문에 일단 놔두기😭)
  const decreaseCashCount = useCallback(
    (indexNo) =>
      setCashData(
        cashData.map((current, i) => {
          if (i === indexNo) {
            return { money: current.money, count: current.count - 1 };
          }
          return current;
        })
      ),
    [cashData]
  );

  const money = useMemo(
    () => ({
      cashData,
    }),
    [cashData]
  );

  return (
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <setMoneyContext.Provider value={decreaseCashCount}>
          <MoneyContext.Provider value={money}>
            <Outlet />
          </MoneyContext.Provider>
        </setMoneyContext.Provider>
      </Main>
    </Wrap>
  );
};

export default Layout;
