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
    () => ({ getAmount, decreaseQuantity, decreaseUnitsToBeUsed }),
    [getAmount, decreaseQuantity, decreaseUnitsToBeUsed]
  );

  return (
    <WalletContext.Provider value={walletState}>
      <WalletSetContext.Provider value={updateWalletState}>{children}</WalletSetContext.Provider>
    </WalletContext.Provider>
  );
}
