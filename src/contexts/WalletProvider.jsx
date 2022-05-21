/* eslint-disable react/prop-types */
import React, { useState, useMemo, useCallback, createContext } from 'react';
import { addCommasToNumber } from 'utils/util';
import walletData from 'data/wallet';

export const WalletContext = createContext([]);
export const WalletSetContext = createContext(null);

export function WalletProvider({ children }) {
  const [walletState, setWalletState] = useState(walletData);

  const getAmount = useCallback(() => {
    const amount = walletState.reduce((acc, { unit, quantity }) => acc + unit * quantity, 0);
    return addCommasToNumber(amount);
  }, [walletState]);

  const getSumOfUnitCloseToPayment = (sumOfUnit, unit, quantity, payment) => {
    const newSumOfUnit = sumOfUnit;
    let usedAmount = 1;

    while (usedAmount <= quantity) {
      newSumOfUnit.total += unit;
      newSumOfUnit.unitsToBeUsed = [...newSumOfUnit.unitsToBeUsed, unit];
      if (newSumOfUnit.total + unit > payment) break;
      usedAmount += 1;
    }

    return newSumOfUnit;
  };

  const calcPaymentToBeUsed = useCallback(
    payment => {
      const paymentToBeUsed = walletState.reduceRight(
        (sumOfUnit, { unit, quantity }) => {
          if (sumOfUnit.total + unit > payment || !quantity) return sumOfUnit;

          const newSumOfUnit = getSumOfUnitCloseToPayment(sumOfUnit, unit, quantity, payment);

          return newSumOfUnit;
        },
        { total: 0, unitsToBeUsed: [] }
      );

      return paymentToBeUsed;
    },
    [walletState]
  );

  const decreaseQuantity = useCallback(
    moneyID => {
      const newWalletState = walletState.map(item =>
        item.id === moneyID ? { ...item, quantity: item.quantity - 1 } : item
      );
      setWalletState(newWalletState);
    },
    [walletState, setWalletState]
  );

  const decreaseUnitsToBeUsed = useCallback(
    unitsToBeUsed => {
      const newWalletState = walletState.map(unitInfo => {
        let newUnitInfo = unitInfo;

        unitsToBeUsed.forEach(unitToBeUsed => {
          if (unitToBeUsed === unitInfo.unit) newUnitInfo = { ...unitInfo, quantity: newUnitInfo.quantity - 1 };
        });

        return newUnitInfo;
      });

      setWalletState(newWalletState);
    },
    [walletState, setWalletState]
  );

  const updateWalletState = useMemo(
    () => ({ getAmount, calcPaymentToBeUsed, decreaseQuantity, decreaseUnitsToBeUsed }),
    [getAmount, calcPaymentToBeUsed, decreaseQuantity, decreaseUnitsToBeUsed]
  );

  return (
    <WalletContext.Provider value={walletState}>
      <WalletSetContext.Provider value={updateWalletState}>{children}</WalletSetContext.Provider>
    </WalletContext.Provider>
  );
}
