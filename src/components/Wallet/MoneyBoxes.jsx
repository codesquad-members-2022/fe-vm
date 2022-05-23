import { useCallback, useContext } from 'react';

import MoneyBox from 'components/Wallet/MoneyBox';
import { CountContext } from 'context/CountProvider';
import { MoneyContext } from 'context/MoneyProvider';

const MoneyBoxes = () => {
  const {
    moneyState: { walletMoney },
    insertMoneyByClick,
  } = useContext(MoneyContext);
  const [, setLastCountTime] = useContext(CountContext);

  const handleClickMoneyBox = useCallback((count, amount) => {
    insertMoneyByClick(count, amount);
    setLastCountTime(new Date());
  }, []);

  return (
    <>
      {walletMoney.map((money) => (
        <MoneyBox
          key={money.id}
          money={money}
          onMoneyBoxClick={handleClickMoneyBox}
        />
      ))}
    </>
  );
};

export default MoneyBoxes;
