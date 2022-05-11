import { MoneyScreenBoardContainer, themeScreenSize } from './MoneyScreenBoard.styled';
import ChargeForm from './MoneyScreenBoard/ChargeForm';
import MoneyScreen from './MoneyScreenBoard/MoneyScreen';
import { ThemeProvider } from 'styled-components';
import CashReturnButton from './MoneyScreenBoard/CashReturnButton';
import RemainMoney from './MoneyScreenBoard/RemainMoney';

export default function MoneyScreenBoard() {
  return (
    <ThemeProvider theme={themeScreenSize}>
      <MoneyScreenBoardContainer>
        <ChargeForm />
        <MoneyScreen />
        <CashReturnButton />
        <RemainMoney />
      </MoneyScreenBoardContainer>
    </ThemeProvider>
  );
}
