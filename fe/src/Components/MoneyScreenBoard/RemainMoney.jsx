import { Screen } from './RemainMoney.styled';

export default function RemainMoney() {
  const tempMoney = 1000;
  return (
    <Screen flex justify="center" align="center">
      {`현재 지갑에 남은 잔액 : ${tempMoney}`}
    </Screen>
  );
}
