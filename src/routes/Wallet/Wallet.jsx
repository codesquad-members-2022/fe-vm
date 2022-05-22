import MoneyBox from 'components/molecules/MoneyBox/MoneyBox';
import TotalMoney from 'components/atoms/TotalMoney/TotalMoney';
import StyledWallet from './Wallet.style';

function Wallet() {
  return (
    <StyledWallet>
      <MoneyBox />
      <TotalMoney />
    </StyledWallet>
  );
}

export default Wallet;
