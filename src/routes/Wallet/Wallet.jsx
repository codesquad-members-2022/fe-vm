import { useState } from 'react';
import initialMoney from 'constants/money';
import MoneyBox from 'components/molecules/MoneyBox/MoneyBox';

function Wallet() {
  const [insertMoney, setInsertMoney] = useState(initialMoney);
  return <MoneyBox insertMoney={insertMoney} setInsertMoney={setInsertMoney} />;
}

export default Wallet;
