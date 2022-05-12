import { createContext, useState } from "react";
import { wallet } from "../datas/wallet";

const initialState = {
  state: wallet,
  actions: {
    setWalletMoney: () => {},
  },
};

export const WalletContext = createContext(wallet);
function WalletProvider({ children }) {
  const [walletMoney, setWalletMoney] = useState(wallet);
  const moneyInfo = { walletMoney, setWalletMoney };
  const sum = initialState.state.reduce(
    (pre, cur) => pre + Number(cur.money) * Number(cur.amount),
    0
  );
  return (
    <WalletContext.Provider value={{ value: moneyInfo, sum: sum }}>
      {children}
    </WalletContext.Provider>
  );
}

export default WalletProvider;
