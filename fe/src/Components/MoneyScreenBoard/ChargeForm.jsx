import { SetAlertMessage } from "App";
import { INIT_ALERT_MESSAGE } from "Helper/constant";
import useInvestment from "Hooks/useInvestment";
import useWallet from "Hooks/useWallet";
import { useContext, useState } from "react";
import { CashInput, Button, ChargeForm } from "./ChargeForm.styled";

export default function ChargeScreen() {
  const [cash, setCash] = useState(0);
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const coins = walletMoney.amount;
    const adjustedCash = adjustCash(coins, cash);

    if (!isReasonableCoin(walletMoney, adjustedCash)) {
      return;
    }

    chargeCash({
      investment,
      setInvestment,
      walletMoney,
      setWalletMoney,
      setCash,
      adjustedCash,
    });
    alertChargeMessage({ setAlertMessage, adjustedCash });
  };

  const handleInputChange = (evt) => {
    const { value } = evt.target;
    setCash(value);
  };

  return (
    <ChargeForm flex onSubmit={handleSubmit}>
      <CashInput
        type="text"
        placeholder="금액을 입력하세요"
        flex
        justify="center"
        align="center"
        onChange={handleInputChange}
        autoFocus
        value={cash || ""}
      />
      <Button type="submit" flex justify="center" align="center">
        클릭
      </Button>
    </ChargeForm>
  );
}

const convertCoin = (replaceCoin, coinAndCount, cash) => {
  const [coin, cnt] = coinAndCount.map(Number);
  if (cnt === 0) {
    return replaceCoin;
  }
  const moneyDiff = Math.abs(coin - cash);
  if (replaceCoin.moneyDiff > moneyDiff) {
    [replaceCoin.moneyDiff, replaceCoin.coin] = [moneyDiff, coin];
  }
  return replaceCoin;
};

const adjustCash = (coins, cash) => {
  cash = Number(cash);

  const { coin } = Object.entries(coins).reduce(
    (replaceCoin, coinAndCount) => {
      return convertCoin(replaceCoin, coinAndCount, cash);
    },
    {
      moneyDiff: Infinity,
      coin: 0,
    }
  );
  return coin;
};

const isReasonableCoin = (walletMoney, cash) => {
  cash = Number(cash);
  if (cash === 0) {
    return;
  }
  const coins = walletMoney.amount;
  const reasonableCoin = Object.entries(coins).find((coin) => {
    const [money, cnt] = coin.map(Number);
    return money === cash && cnt > 0;
  });
  return reasonableCoin;
};

const chargeCash = ({ investment, setInvestment, walletMoney, setWalletMoney, setCash, adjustedCash }) => {
  investment.amount += Number(adjustedCash);
  const newInvestment = { ...investment };

  if (walletMoney.amount[adjustedCash]) {
    walletMoney.amount[adjustedCash] -= 1;
  }
  const newWalletMoney = { ...walletMoney };

  setCash(adjustedCash);
  setInvestment(newInvestment);
  setWalletMoney(newWalletMoney);
};

const alertChargeMessage = ({ setAlertMessage, adjustedCash }) => {
  const newAlertMessage = { ...INIT_ALERT_MESSAGE };
  newAlertMessage.chargeCash = Number(adjustedCash);
  setAlertMessage(newAlertMessage);
};
