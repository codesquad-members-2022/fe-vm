import styled from 'styled-components';
import walletInfo from 'mock/Wallet';
import setLocalString from 'utils/setLocalString';

const Money = ({ info }) => {
  return (
    <MoneyWrapper>
      <span>{setLocalString(info.count)}원</span>
      <button>{info.amount}개</button>
    </MoneyWrapper>
  );
};

export default function Wallet() {
  const moneyInfo = walletInfo.map((money, index) => <Money key={index} info={money} />);
  const totalMoney = walletInfo.reduce((acc, cur) => acc + cur.count * cur.amount, 0);

  return (
    <WalletContainer>
      <TotalAmount>총 금액: {setLocalString(totalMoney)}원</TotalAmount>
      <WalletWrapper> {moneyInfo}</WalletWrapper>
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

const MoneyWrapper = styled.div`
  display: flex;
  border: 1px solid transparent;

  span {
    padding: 8px;
    width: 70%;
    background: ${({ theme }) => theme.colors.gray4};
    ${({ theme }) => theme.fontStyles.smallBold};
  }

  button {
    width: 30%;
    padding: 8px 4px;
    background: ${({ theme }) => theme.colors.orange};
    ${({ theme }) => theme.fontStyles.smallRegular};
  }
`;
