import { SetAlertMessage } from "Context/AlertMessageProvider";
import { OrderInProgressContext } from "Context/OrderInProgressProvider";
import { INIT_ALERT_MESSAGE, INVESTMENT_API, INVESTMENT_COUNT_TIME, WALLET_API } from "Helper/constant";
import { fetchData } from "Helper/utils";
import useInvestment from "Hooks/useInvestment";
import useInvestmentTimer from "Hooks/useInvestmentTimer";
import useSetAlertMessage from "Hooks/useSetAlertMessage";
import useWallet from "Hooks/useWallet";
import { useContext, useEffect, useState } from "react";
import { CashInput, Button, ChargeForm } from "./ChargeForm.styled";

export default function ChargeScreen() {
  // cash : (투입될 화폐 단위) 자판기에 보유중인 잔액과 불일치할 경우 자판기 금액에 맞게 조정한다.
  // investment : 투입금액 (현재 자판기에 투입된 금액)
  // walletMoney : 현재 지갑 보유 금액 (객체)
  const [cash, setCash] = useState(0);
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);
  const resetInvestment = useInvestmentTimer();
  const orderInProgress = useContext(OrderInProgressContext);
  const applyAlertMessage = useSetAlertMessage();

  useEffect(() => {
    resetInvestment(INVESTMENT_COUNT_TIME);
  }, [investment]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (orderInProgress) {
      applyAlertMessage("buying");
      return;
    }
    const coins = walletMoney.amount;
    const adjustedCash = adjustCash(coins, cash);

    if (!isReasonableCoin(walletMoney, adjustedCash)) {
      return;
    }

    const chargeCashProps = { investment, setInvestment, walletMoney, setWalletMoney, setCash, adjustedCash };

    chargeCash(chargeCashProps);
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

const chargeCash = (props) => {
  const { investment, setInvestment, walletMoney, setWalletMoney, setCash, adjustedCash } = props;
  investment.amount += Number(adjustedCash);
  const newInvestment = { ...investment };

  if (walletMoney.amount[adjustedCash]) {
    walletMoney.amount[adjustedCash] -= 1;
  }
  const newWalletMoney = { ...walletMoney };

  setCash(adjustedCash);
  setInvestment(newInvestment);
  setWalletMoney(newWalletMoney);
  fetchData(WALLET_API, { method: "PUT", bodyData: newWalletMoney });
  fetchData(INVESTMENT_API, { method: "PUT", bodyData: newInvestment });
};

const alertChargeMessage = ({ setAlertMessage, adjustedCash }) => {
  const newAlertMessage = { ...INIT_ALERT_MESSAGE };
  newAlertMessage.chargeCash = Number(adjustedCash);
  setAlertMessage(newAlertMessage);
};
