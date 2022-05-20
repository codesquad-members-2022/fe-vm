import { useContext } from 'react';
import { MoneyContext } from 'context/MoneyContext';
import MoneyUnit from 'components/atoms/MoneyUnit/MoneyUnit';
import StyledMoneyBox from './MoneyBox.style';

function MoneyBox() {
  const { walletMoney } = useContext(MoneyContext);
  return (
    <StyledMoneyBox>
      {walletMoney.map(coin => {
        return <MoneyUnit key={coin.id} coin={coin} />;
      })}
    </StyledMoneyBox>
  );
}

export default MoneyBox;
