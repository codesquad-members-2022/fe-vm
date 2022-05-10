import styled from 'styled-components';
import { Container, boxShadowBorderRadi } from '../styled-components/util';
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
  cursor: default;
  ${boxShadowBorderRadi}
`;

export default Wallet;
