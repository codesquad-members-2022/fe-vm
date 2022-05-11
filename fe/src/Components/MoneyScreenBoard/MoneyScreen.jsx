import { InvestmentContext } from 'Pages/VendingMachine';
import { useContext } from 'react';
import { Screen } from './MoneyScreen.styled';

export default function MoneyScreen() {
  const investmentData = useContext(InvestmentContext);
  const investment = (investmentData && investmentData.amount) || 0;

  return (
    <Screen flex justify="center" align="center">
      현재 투입된 금액 : {`${investment}원`}
    </Screen>
  );
}
