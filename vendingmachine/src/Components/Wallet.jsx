import styled from 'styled-components';
import { Container } from '../styled-components/util';
import Money from './Money';

const Wallet = ({ walletInfo, totalMoney, handleClickMoney }) => {
  return (
    <WalletList as="ul">
      {walletInfo &&
        walletInfo.map(
          (money, index) =>
            money.unit && (
              <Money
                money={money}
                key={money.unit}
                index={index}
                handleClickMoney={handleClickMoney}
              ></Money>
            ),
        )}
      <TotalMoney>{totalMoney.toLocaleString()}원</TotalMoney>
    </WalletList>
  );
};

const WalletList = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: ${({ theme }) => theme.padding.large};
`;

const TotalMoney = styled.li`
  text-align: center;
  margin-top: ${({ theme }) => theme.margin.large};
  padding: ${({ theme }) => theme.padding.medium};
  font-size: ${({ theme }) => theme.fontSize.large};
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  cursor: default;
`;

export default Wallet;
