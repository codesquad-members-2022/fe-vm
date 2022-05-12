import { createContext, useState } from "react";
import { wallet } from "../datas/wallet";

const initialState = {
  state: wallet,
  actions: {
    setMoneyAmount: () => {},
  },
};

export const WalletContext = createContext(initialState);

function WalletProvider({ children }) {
  let [moneyAmount, setMoneyAmount] = useState();
  const value = initialState;
  const sum = initialState.state.reduce(
    (pre, cur) => pre + Number(cur.money) * Number(cur.amount),
    0
  );
  return (
    <WalletContext.Provider value={{ value: value, sum: sum }}>
      {children}
    </WalletContext.Provider>
  );
}

export default WalletProvider;
