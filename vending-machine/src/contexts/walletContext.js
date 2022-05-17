import { createContext, useState } from "react";
import { wallet } from "../datas/wallet";

export const WalletContext = createContext(wallet);
function WalletProvider({ children }) {
  const [walletMoney, setWalletMoney] = useState(wallet);
  const [inputMoney, setInputMoney] = useState(0);
  const moneyInfo = { walletMoney, setWalletMoney, inputMoney, setInputMoney };
  const sum = walletMoney.reduce(
    (pre, cur) => pre + Number(cur.title) * Number(cur.amount),
    0
  );
  return (
    <WalletContext.Provider value={{ value: moneyInfo, sum: sum }}>
      {children}
    </WalletContext.Provider>
  );
}

export default WalletProvider;
