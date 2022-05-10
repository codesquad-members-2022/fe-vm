import { Screen } from './MoneyScreen.styled';

export default function MoneyScreen() {
  const tempMoney = 500;
  return (
    <Screen flex justify="center" align="center">
      현재 투입된 금액 : {`${tempMoney}원`}
    </Screen>
  );
}
