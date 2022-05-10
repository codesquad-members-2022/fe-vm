import styled from 'styled-components';
import { Container } from '../styled-components/util';
import Money from './Money';

const MONEY_INFO = [
  { unit: 10, number: 0 },
  { unit: 50, number: 1 },
  { unit: 100, number: 5 },
  { unit: 500, number: 5 },
  { unit: 1000, number: 2 },
  { unit: 5000, number: 2 },
  { unit: 10000, number: 1 },
];

const Wallet = () => {
  return (
    <WalletList as="ul">
      {MONEY_INFO.map((money, index) => (
        <Money money={money} key={index}></Money>
      ))}
      <TotalMoney>25,455원</TotalMoney>
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
