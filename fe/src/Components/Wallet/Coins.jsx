import { WalletMoneyContext } from 'App';
import { useContext } from 'react';
import { CoinBoxContainer, Count, Money, CoinBox, TotalBox } from './Coins.styled';

export default function Coins() {
  const walletMoney = useContext(WalletMoneyContext);

  const coinBoxs = getCoinBox(walletMoney);

  return <CoinBoxContainer>{coinBoxs}</CoinBoxContainer>;
}

const getCoinBox = (walletMoney) => {
  if (!walletMoney) {
    return;
  }

  const totalMoney = calculateTotalMoney(walletMoney.amount);
  const coinBoxs = Object.entries(walletMoney.amount).map((wallet) => {
    return createCoinBox(wallet);
  });
  const totalBox = createTotalBox(totalMoney);
  coinBoxs.push(totalBox);
  return coinBoxs;
};

const createCoinBox = ([coin, cnt]) => {
  return (
    <CoinBox flex justify="center" align="center">
      <Money flex justify="center" align="center">
        {coin}
      </Money>
      <Count flex justify="center" align="center">
        {cnt}
      </Count>
    </CoinBox>
  );
};

const createTotalBox = (total) => {
  return (
    <TotalBox flex justify="center" align="center">
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
