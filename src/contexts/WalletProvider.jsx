/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import walletData from 'data/wallet';

export const WalletContext = createContext([]);
export const WalletSetContext = createContext(null);

export function WalletProvider({ children }) {
  const [wallet, setWalletState] = useState(walletData);

  return (
    <WalletContext.Provider value={wallet}>
      <WalletSetContext.Provider value={setWalletState}>{children}</WalletSetContext.Provider>
    </WalletContext.Provider>
  );
}
