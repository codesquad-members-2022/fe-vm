import { createContext, useState } from 'react';
import { walletData } from '../db/data';

export const WalletContext = createContext([]);

export function WalletProvider({ children }) {
  const [walletInfo, setWalletInfo] = useState(walletData);

  function incrementCoin(coin) {
    setWalletInfo(prevWalletInfo =>
      prevWalletInfo.map(currentCoin => {
        if (currentCoin.coin === coin) {
          return { ...currentCoin, quantity: currentCoin.quantity + 1 };
        }
        return currentCoin;
      })
    );
  }

  function decrementCoin(coin) {
    setWalletInfo(prevWalletInfo =>
      prevWalletInfo.map(currentCoin => {
        if (currentCoin.coin === coin) {
          return { ...currentCoin, quantity: currentCoin.quantity - 1 };
        }
        return currentCoin;
      })
    );
  }

  return (
    <WalletContext.Provider value={{ walletInfo, incrementCoin, decrementCoin }}>{children}</WalletContext.Provider>
  );
}
