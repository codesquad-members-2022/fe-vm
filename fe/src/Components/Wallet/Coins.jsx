import { SetAlertMessage } from "Context/AlertMessageProvider";
import useInvestment from "Hooks/useInvestment";
import useWallet from "Hooks/useWallet";
import { INIT_ALERT_MESSAGE } from "Helper/constant";
import { useContext } from "react";
import { CoinBoxContainer, Count, Money, CoinBox, TotalBox } from "./Coins.styled";

export default function Coins() {
  const [investment, setInvestment] = useInvestment();
  const [walletMoney, setWalletMoney] = useWallet();
  const setAlertMessage = useContext(SetAlertMessage);
  const coinBoxs = getCoinBox({ walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage });

  return <CoinBoxContainer>{coinBoxs}</CoinBoxContainer>;
}

const getCoinBox = ({ walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage }) => {
  if (!walletMoney) {
    return;
  }

  const totalMoney = calculateTotalMoney(walletMoney.amount);
  const coinBoxs = Object.entries(walletMoney.amount).map((wallet) => {
    return createCoinBox({ wallet, walletMoney, setWalletMoney, investment, setInvestment, setAlertMessage });
  });
  const totalBox = createTotalBox(totalMoney);
  coinBoxs.push(totalBox);
  return coinBoxs;
};

const createCoinBox = ({
  wallet,
  walletMoney,
  setWalletMoney,
  investment,
  setInvestment,
  setAlertMessage,
}) => {
  const [coin, cnt] = wallet;
  const id = createKeyForNoHasId(coin, cnt);
  return (
    <CoinBox key={id} flex justify="center" align="center">
      <Money
        flex
        justify="center"
        align="center"
        onClick={() => {
          handleCoinClick({
            wallet,
            walletMoney,
            setWalletMoney,
            investment,
            setInvestment,
            setAlertMessage,
          });
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

const handleCoinClick = ({
  wallet,
  walletMoney,
  investment,
  setWalletMoney,
  setInvestment,
  setAlertMessage,
}) => {
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
