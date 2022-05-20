import { createContext, useState } from 'react';
import moneyDate from '../Components/Contents/moneyData.json';
import { changeNumToLocalMoney } from '../Utils/utils';
import { MatchType } from '../Utils/constants';

export const WalletMoneyContext = createContext(null);

export function WalletMoneyProvider({ children }) {
  const [walletMoneyUnitInfo, setMoneyUnitInfo] = useState(moneyDate);
  const walletMoneyTotal = walletMoneyUnitInfo.reduce(
    (prev, next) => prev + next.unit * next.count,
    0,
  );
  const convertMoneyTotal = changeNumToLocalMoney(walletMoneyTotal);

  const matchPayMoneyToWalletBalnace = ({ matchType, payMoney, payTotal }) => {
    let calcPayMoney = payMoney;
    let calcPayTotal = payTotal;
    const newMoney = [...walletMoneyUnitInfo];

    if (payMoney > walletMoneyTotal) {
      resetWalletMoney();
      return {
        FinalPayMoney: walletMoneyTotal,
        FinalPayTotal: walletMoneyTotal + payTotal,
      };
    }
    switch (matchType) {
      case MatchType.ADD:
        for (let i = newMoney.length - 1; i >= 0; i--) {
          const { unit, count } = newMoney[i];
          if (calcPayMoney >= unit && count > 0) {
            const calcCount = Math.min(Math.floor(calcPayMoney / unit), count);
            calcPayMoney -= calcCount * unit;
            newMoney[i] = {
              ...newMoney[i],
              count: count - calcCount,
            };
          }
        }
        setMoneyUnitInfo(newMoney);
        return {
          FinalPayMoney: payMoney - calcPayMoney,
          FinalPayTotal: payTotal + (payMoney - calcPayMoney),
        };
      case MatchType.RETURN:
        for (let i = newMoney.length - 1; i >= 0; i--) {
          const { unit, count } = newMoney[i];
          if (calcPayTotal >= unit) {
            const calcCount = Math.min(Math.floor(calcPayTotal / unit), count);
            calcPayTotal -= calcCount * unit;
            newMoney[i] = {
              ...newMoney[i],
              count: count + calcCount,
            };
          }
        }
        setMoneyUnitInfo(newMoney);
        return;
      default:
        throw new Error('matchType type error');
    }
  };

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
        convertMoneyTotal,
        updateWalletMoney,
        resetWalletMoney,
        matchPayMoneyToWalletBalnace,
      }}
    >
      {children}
    </WalletMoneyContext.Provider>
  );
}
