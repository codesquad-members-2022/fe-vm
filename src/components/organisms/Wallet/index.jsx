import Label from 'components/atoms/Label';
import Logo from 'components/molecules/Logo';
import MoneyBox from 'components/molecules/MoneyBox';
import * as Styled from 'components/organisms/Wallet/Wallet.style';
import { useContext } from 'react';
import { WalletContext } from 'context/Wallet';
import { CURRENCY_STR } from 'constants';

const Wallet = () => {
  const { state } = useContext(WalletContext);

  const labelStyle = {
    flexType: 'centerRight',
    sizeType: 'xLarge',
    fontType: 'logo',
    borderType: 'rounded',
  };

  return (
    <Styled.Wallet>
      <Label {...labelStyle}>
        {state?.sumOfMoney} {CURRENCY_STR}
      </Label>
      <Styled.MoneyList>
        {state?.walletData.map(({ id, unit, count, value }, index) => (
          <MoneyBox key={id} unit={unit} count={count} value={value} />
        ))}
      </Styled.MoneyList>
      <Logo type="pocket" />
    </Styled.Wallet>
  );
};

export default Wallet;
