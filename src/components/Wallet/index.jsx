import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';
import calculateTotalMoney from 'utils/calculateTotalMoney';

import Money from './Money';
import { useMoneyState } from 'context/MoneyContext';

export default function Wallet() {
  const { walletMoneyData, buttonInsertMoney } = useMoneyState();

  const moneyComponents = walletMoneyData.map((money, index) => {
    return <Money key={index} info={money} buttonInsertMoney={buttonInsertMoney} />;
  });

  const totalMoney = calculateTotalMoney(walletMoneyData);

  return (
    <WalletContainer>
      <TotalAmount>총 금액: {setLocalString(totalMoney)}원</TotalAmount>
      <WalletWrapper>{moneyComponents}</WalletWrapper>
    </WalletContainer>
  );
}

const WalletContainer = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 20px;
  border-radius: 12px;
  background: rgba(235, 235, 235, 0.8);
  box-shadow: 0 2px 16px 0 rgba(38, 38, 38, 0.37);
`;

const TotalAmount = styled.div`
  margin: 0 auto;
  width: 40%;
  margin-bottom: 20px;
  padding: 8px 12px;
  border-radius: 12px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fontStyles.mediumBold};
`;

const WalletWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};
`;
