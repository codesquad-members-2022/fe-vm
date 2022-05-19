import React, { useContext } from 'react';
import styled from 'styled-components';
import Container from '../../UI/container';
import AmountContext from '../../../store/AmountContext';

const CurrentInsertMoney = () => {
  const { money } = useContext(AmountContext);

  return (
    <Container height="50%" flexInfo={['column']}>
      <WalletTitle>입금된 금액</WalletTitle>
      <InsertedMoney>{money.TOTAL_AMOUNT}</InsertedMoney>
    </Container>
  );
};

export default React.memo(CurrentInsertMoney);

const WalletTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 40px;
`;

const InsertedMoney = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
