import { AlertMessage, SetAlertMessage } from "Context/AlertMessageProvider";
import useInvestment from "Hooks/useInvestment";
import useWallet from "Hooks/useWallet";
import { INIT_ALERT_MESSAGE, INVESTMENT_COUNT_TIME } from "Helper/constant";
import { useCallback, useContext, useEffect } from "react";
import { CoinBoxContainer, Count, Money, CoinBox, TotalBox } from "./Coins.styled";
import addMessageList from "Helper/message";
import useMessageList from "Hooks/useMessageList";
import useInvestmentTimer from "Hooks/useInvestmentTimer";

export default function Coins() {
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);
  const alertMessage = useContext(AlertMessage);
  const [messageList, setMessageList] = useMessageList([]);
  const resetInvestment = useInvestmentTimer();
  const coinBoxsProps = { walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage };

  const coinBoxs = getCoinBox(coinBoxsProps);

  useEffect(() => {
    const reflectNewMessageProps = { alertMessage, setMessageList, messageList, setAlertMessage };
    reflectNewMessage(reflectNewMessageProps);
    resetInvestment(INVESTMENT_COUNT_TIME);
  }, [alertMessage]);

  return <CoinBoxContainer>{coinBoxs}</CoinBoxContainer>;
}

const getCoinBox = (props) => {
  const { walletMoney } = props;
  if (!walletMoney) {
    return;
  }

  const totalMoney = calculateTotalMoney(walletMoney.amount);
  const coinBoxs = Object.entries(walletMoney.amount).map((wallet) => {
    const coinBoxProps = { ...props, wallet };
    return createCoinBox(coinBoxProps);
  });
  const totalBox = createTotalBox(totalMoney);
  coinBoxs.push(totalBox);
  return coinBoxs;
};

const createCoinBox = (props) => {
  const { wallet } = props;
  const [coin, cnt] = wallet;
  const id = createKeyForNoHasId(coin, cnt);
  return (
    <CoinBox key={id} flex justify="center" align="center">
      <Money
        flex
        justify="center"
        align="center"
        onClick={() => {
          handleCoinClick(props);
        }}
      >
        {coin}
      </Money>
      <Count flex justify="center" align="center">
        {cnt}
      </Count>
    </CoinBox>
  );
};

const createTotalBox = (total) => {
  const id = createKeyForNoHasId(total, 1);
  return (
    <TotalBox key={id} flex justify="center" align="center">
      <div>{total}</div>
    </TotalBox>
  );
};

const calculateTotalMoney = (walletMoneyAmount) => {
  const total = Object.entries(walletMoneyAmount).reduce((total, [coin, cnt]) => {
    return total + coin * cnt;
  }, 0);
  return total;
};

const handleCoinClick = (props) => {
  const { wallet, walletMoney, investment, setWalletMoney, setInvestment, setAlertMessage } = props;
  const [coin, count] = wallet.map(Number);

  if (count === 0) {
    return;
  }

  const newWalletMoney = { ...walletMoney };
  const newInvestment = { ...investment };
  const newAlertMessage = { ...INIT_ALERT_MESSAGE };
  newWalletMoney.amount[coin] -= 1;
  newInvestment.amount += coin;
  newAlertMessage.chargeCash = coin;
  setWalletMoney(newWalletMoney);
  setInvestment(newInvestment);
  setAlertMessage(newAlertMessage);
};

const createKeyForNoHasId = (coin, cnt) => {
  return `${coin}+${cnt}}`;
};

const reflectNewMessage = (props) => {
  const { alertMessage, setMessageList, messageList, setAlertMessage } = props;
  const addMessageListProps = { alertMessage, setMessageList, messageList };
  addMessageList(addMessageListProps);
  setAlertMessage(INIT_ALERT_MESSAGE);
};
