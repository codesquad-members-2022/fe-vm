import { WalletMoneyContext } from 'App';
import { getWonTemplate } from 'Helper/utils';
import { useContext, useEffect, useState } from 'react';
import { Screen } from './RemainMoney.styled';

export default function RemainMoney() {
  const walletMoney = useContext(WalletMoneyContext);
  const [assets, setAssets] = useState(0);
  useEffect(() => {
    if (!walletMoney) {
      return;
    }

    const assets = Object.entries(walletMoney.amount).reduce((assets, [money, count]) => {
      return assets + money * count;
    }, 0);

    setAssets(assets);
  }, [walletMoney]);

  return (
    <Screen flex justify="center" align="center">
      {`현재 지갑에 남은 잔액 : ${getWonTemplate(assets)}`}
    </Screen>
  );
}
