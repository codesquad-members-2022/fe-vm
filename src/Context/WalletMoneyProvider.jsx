import { createContext, useState } from 'react';
import moneyDate from '../Components/Contents/moneyData.json';
import { changeNumToLocalMoney } from '../Utils/utils';

export const WalletMoneyContext = createContext(null);

export function WalletMoneyProvider({ children }) {
  const [walletMoneyUnitInfo, setMoneyUnitInfo] = useState(moneyDate);
  const walletMoneyTotal = changeNumToLocalMoney(
    walletMoneyUnitInfo.reduce(
      (prev, next) => prev + next.unit * next.count,
      0,
    ),
  );

  const updateWalletMoney = (moneyInfo) => {
    const updateMoney = {
      type: moneyInfo.type,
      unit: moneyInfo.unit,
      count: moneyInfo.count - 1,
    };
    const updateMoneyUnitInfo = walletMoneyUnitInfo.map((money) => {
      return money.unit === moneyInfo.unit ? updateMoney : money;
    });

    setMoneyUnitInfo(updateMoneyUnitInfo);
  };

  const resetWalletMoney = () => {
    const resetMoneyUnitInfo = walletMoneyUnitInfo.map((money) => {
      return {
        type: money.type,
        unit: money.unit,
        count: 0,
      };
    });

    setMoneyUnitInfo(resetMoneyUnitInfo);
  };

  return (
    <WalletMoneyContext.Provider
      value={{
        walletMoneyUnitInfo,
        setMoneyUnitInfo,
        walletMoneyTotal,
        updateWalletMoney,
        resetWalletMoney,
      }}
    >
      {children}
    </WalletMoneyContext.Provider>
  );
}
