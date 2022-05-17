import { createContext, useState } from "react";
import { wallet } from "../datas/wallet";

export const WalletContext = createContext(wallet);
function WalletProvider({ children }) {
  const [walletMoney, setWalletMoney] = useState(wallet);
  const [inputMoneySum, setInputMoneySum] = useState(0);
  const moneyInfo = {
    walletMoney,
    setWalletMoney,
    inputMoneySum,
    setInputMoneySum,
  };
  const [sum, setSum] = useState(
    walletMoney.reduce(
      (pre, cur) => pre + Number(cur.title) * Number(cur.amount),
      0
    )
  );
  return (
    <WalletContext.Provider
      value={{ value: moneyInfo, sum: sum, setSum: setSum }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export default WalletProvider;
