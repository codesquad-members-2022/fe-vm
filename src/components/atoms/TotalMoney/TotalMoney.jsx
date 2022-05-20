import { useContext } from 'react';
import { MoneyContext } from 'context/MoneyContext';
import StyledTotalMoney from './TotalMoney.style';

function TotalMoney() {
  const { totalWalletMoney, totalInsertMoney } = useContext(MoneyContext);
  return (
    <StyledTotalMoney>
      <h3>{`Wallet Money : ${totalWalletMoney}`}</h3>
      <h3>{`inserted Money : ${totalInsertMoney}`}</h3>
    </StyledTotalMoney>
  );
}

export default TotalMoney;
