import { useContext } from 'react';
import MoneyBox from 'components/molecules/MoneyBox/MoneyBox';
import { MoneyContext } from 'components/atoms/Context/MoneyContext';

function Wallet() {
  const { insertMoney, setInsertMoney } = useContext(MoneyContext);
  return <MoneyBox insertMoney={insertMoney} setInsertMoney={setInsertMoney} />;
}

export default Wallet;
