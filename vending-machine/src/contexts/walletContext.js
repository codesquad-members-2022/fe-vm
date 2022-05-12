import { createContext, useState } from "react";
import { wallet } from "../datas/wallet";
import Currency from "../components/Currency";
import TotalMoney from "../components/TotalMoney";

const initialState = {
  state: wallet,
  actions: {
    setMoneyAmount: () => {},
  },
};

const WalletContext = createContext(initialState);

function WalletProvider() {
  let [moneyAmount, setMoneyAmount] = useState();
  const value = initialState;
  const sum = initialState.state.reduce(
    (pre, cur) => pre + Number(cur.money) * Number(cur.amount),
    0
  );
  return (
    <WalletContext.Provider value={value}>
      {value.state.map((currency, idx) => (
        <Currency
          key={idx}
          money={currency.money}
          amount={currency.amount}
        ></Currency>
      ))}
      <TotalMoney sum={sum}></TotalMoney>
    </WalletContext.Provider>
  );
}

export default WalletProvider;
