import { SetAlertMessage } from "Context/AlertMessageProvider";
import { COIN_LIST, INIT_ALERT_MESSAGE, INVESTMENT_API, WALLET_API } from "Helper/constant";
import { fetchData } from "Helper/utils";
import { useCallback, useContext } from "react";
import useInvestment from "./useInvestment";
import useWallet from "./useWallet";

export default function useResetInvestment() {
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);

  const handleReset = useCallback(() => {
    if (!investment || investment.amout === 0) {
      return;
    }
    const investmentPrice = investment.amount;
    investment.amount = 0;
    if (investmentPrice === 0) {
      return;
    }
    const coins = getChange(investmentPrice);
    reflectChange(walletMoney, coins);
    const newInvestment = { ...investment };
    const newWalletMoney = { ...walletMoney };

    const alertMessage = { ...INIT_ALERT_MESSAGE };
    alertMessage.changeAmount = investmentPrice;
    setAlertMessage(alertMessage);
    setInvestment(newInvestment);
    setWalletMoney(newWalletMoney);
    fetchData(WALLET_API, { method: "PUT", bodyData: newWalletMoney });
    fetchData(INVESTMENT_API, { method: "PUT", bodyData: newInvestment });
  }, [investment]);

  return handleReset;
}

const getChange = (price) => {
  const coins = COIN_LIST;
  return coins.reduce((change, coin) => {
    [price, change] = calculateChange(price, change, coin);
    return change;
  }, {});
};

const calculateChange = (price, change, coin) => {
  if (price === 0) {
    return [price, change];
  }
  const count = Math.floor(price / coin);
  if (count === 0) {
    return [price, change];
  }
  price -= count * coin;
  change[coin] = count;
  return [price, change];
};

const reflectChange = (wallet, coins) => {
  Object.entries(coins).forEach((money) => {
    const [coin, cnt] = money;
    wallet.amount[coin] = Number(wallet.amount[coin]) + cnt;
  });
};
