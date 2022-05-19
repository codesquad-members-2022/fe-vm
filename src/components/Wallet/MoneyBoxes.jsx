import { useCallback, useContext } from 'react';

import MoneyBox from 'components/Wallet/MoneyBox';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';

const MoneyBoxes = () => {
  const {
    moneyState: { walletMoney },
    insertMoneyByClick,
  } = useContext(MoneyContext);
  const [, insertLog] = useContext(LogContext);

  const handleClickMoneyBox = useCallback((count, amount) => {
    insertMoneyByClick(count, amount);
    insertLog({
      type: 'insert',
      data: amount,
    });
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
