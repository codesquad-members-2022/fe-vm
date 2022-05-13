import { useState } from 'react';
import MoneyProvider from 'components/atoms/Context/MoneyContext';
import initialMoney from 'constants/money';
import MoneyBox from 'components/molecules/MoneyBox/MoneyBox';

function Wallet() {
  const [insertMoney, setInsertMoney] = useState(initialMoney);
  return (
    <MoneyProvider>
      <MoneyBox insertMoney={insertMoney} setInsertMoney={setInsertMoney} />
      <MoneyBox />
    </MoneyProvider>
  );
}

export default Wallet;
