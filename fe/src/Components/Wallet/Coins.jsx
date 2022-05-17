import { AlertMessage, SetAlertMessage } from "Context/AlertMessageProvider";
import useInvestment from "Hooks/useInvestment";
import useWallet from "Hooks/useWallet";
import { INIT_ALERT_MESSAGE } from "Helper/constant";
import { useCallback, useContext, useEffect } from "react";
import { CoinBoxContainer, Count, Money, CoinBox, TotalBox } from "./Coins.styled";
import addMessageList from "Helper/message";
import useMessageList from "Hooks/useMessageList";

export default function Coins() {
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);
  const alertMessage = useContext(AlertMessage);
  const [messageList, setMessageList] = useMessageList([]);
  const coinBoxsProps = { walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage };
  const coinBoxs = getCoinBox(coinBoxsProps);

  const reflectNewMessage = useCallback(() => {
    const addMessageListProps = { alertMessage, setMessageList, messageList };
    addMessageList(addMessageListProps);
    setAlertMessage(INIT_ALERT_MESSAGE);
  }, [alertMessage, messageList, setAlertMessage, setMessageList]);

  useEffect(() => {
    reflectNewMessage();
  }, [alertMessage, reflectNewMessage]);

  return <CoinBoxContainer>{coinBoxs}</CoinBoxContainer>;
}

const getCoinBox = (props) => {
  const { walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage } = props;
  if (!walletMoney) {
    return;
  }

  const totalMoney = calculateTotalMoney(walletMoney.amount);
  const coinBoxs = Object.entries(walletMoney.amount).map((wallet) => {
    const coinBoxProps = { wallet, walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage };
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
