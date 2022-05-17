import { useContext } from 'react';
import { MoneyContext } from 'components/atoms/Context/MoneyContext';
import StyledTotalMoney from './TotalMoney.style';

function TotalMoney() {
  const { totalMoney } = useContext(MoneyContext);
  return <StyledTotalMoney>{totalMoney}</StyledTotalMoney>;
}
export default TotalMoney;
