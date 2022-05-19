import Label from 'components/atoms/Label';
import Logo from 'components/molecules/Logo';
import MoneyBox from 'components/molecules/MoneyBox';
import mockData from 'components/organisms/Wallet/WalletMockData';
import * as Styled from 'components/organisms/Wallet/Wallet.style';

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
