import { MoneyScreenBoardContainer } from './MoneyScreenBoard.styled';
import ChargeForm from './MoneyScreenBoard/ChargeForm';
import MoneyScreen from './MoneyScreenBoard/MoneyScreen';
import { ThemeProvider } from 'styled-components';
import CashReturnButton from './MoneyScreenBoard/CashReturnButton';
import RemainMoney from './MoneyScreenBoard/RemainMoney';

const screenSize = {
  width: '260px',
  height: '40px',
  margin: '20px 0',
  border: '1px solid #000',
  borderRadius: '10px',
};

export default function MoneyScreenBoard() {
  return (
    <ThemeProvider theme={screenSize}>
      <MoneyScreenBoardContainer>
        <ChargeForm />
        <MoneyScreen />
        <CashReturnButton />
        <RemainMoney />
      </MoneyScreenBoardContainer>
    </ThemeProvider>
  );
}
