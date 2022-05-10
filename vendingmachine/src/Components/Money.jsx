import styled from 'styled-components';
import { FlexCenter } from '../styled-components/util';

const Money = ({ money }) => {
  return (
    <MoneyItem>
      <Unit>{money.unit}원</Unit>
      <Number>{money.number}개</Number>
    </MoneyItem>
  );
};

const MoneyItem = styled.li`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: ${({ theme }) => theme.margin.large};
`;

const Unit = styled.button`
  width: 50%;
  background: transparent;
  border: none;
  padding: ${({ theme }) => theme.padding.medium};
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  font-size: ${({ theme }) => theme.fontSize.medium};

  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

const Number = styled(FlexCenter)`
  width: 50%;
  padding: ${({ theme }) => theme.padding.medium};
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  cursor: default;
  font-size: ${({ theme }) => theme.fontSize.medium};
`;

export default Money;
