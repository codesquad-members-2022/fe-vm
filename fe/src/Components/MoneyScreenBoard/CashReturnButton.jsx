import { SetAlertMessage } from "App";
import { COIN_LIST, INIT_ALERT_MESSAGE } from "Helper/constant";
import useInvestment from "Hooks/useInvestment";
import useWallet from "Hooks/useWallet";
import { useContext } from "react";
import { ReturnButton } from "./CashReturnButton.styled";

export default function CashReturnButton() {
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);

  const handleReset = () => {
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
  };
  return (
    <ReturnButton flex justify="center" align="center" onClick={handleReset}>
      거스름돈 반환
    </ReturnButton>
  );
}

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

const getChange = (price) => {
  const coins = COIN_LIST;
  return coins.reduce((change, coin) => {
    [price, change] = calculateChange(price, change, coin);
    return change;
  }, {});
};

const reflectChange = (wallet, coins) => {
  Object.entries(coins).forEach((money) => {
    const [coin, cnt] = money;
    wallet.amount[coin] = Number(wallet.amount[coin]) + cnt;
  });
};
