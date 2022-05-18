import Label from 'components/atoms/Label/Label';
import Logo from 'components/molecules/Logo/Logo';
import MoneyBox from 'components/molecules/MoneyBox/MoneyBox';
import { useEffect } from 'react';
import * as Styled from './Wallet.style';
import mockData from './WalletMockData';
const Wallet = () => {
  const labelStyle = {
    flexType: 'centerRight',
    sizeType: 'xLarge',
    fontType: 'logo',
    borderType: 'rounded',
  };

  return (
    <Styled.Wallet>
      <Label {...labelStyle}>16,280원</Label>
      <Styled.MoneyList>
        {mockData.map((data, index) => (
          <MoneyBox key={index} unit={data.unit} count={data.count} />
        ))}
      </Styled.MoneyList>
      <Logo type="pocket" />
    </Styled.Wallet>
  );
};

export default Wallet;
