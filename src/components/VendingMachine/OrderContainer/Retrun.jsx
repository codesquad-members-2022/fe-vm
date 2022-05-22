import { useMoneyState } from 'context/MoneyContext';

import styled from 'styled-components';
import exchangeMoney from 'utils/exchangeMoney';

export default function ReturnCost() {
  const { insertMoneyData, returnMoney } = useMoneyState();

  const handleClick = () => {
    const exchangeLog = exchangeMoney(insertMoneyData);
    returnMoney(exchangeLog);
  };

  return <ReturnBtn onClick={handleClick}>반환</ReturnBtn>;
}

const ReturnBtn = styled.button`
  padding: 4px 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 0 2px 2px 0 rgba(38, 38, 135, 0.3);
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;
