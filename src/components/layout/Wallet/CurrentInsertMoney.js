import React from 'react';
import styled from 'styled-components';
import Container from '../../UI/container';

const CurrentInsertMoney = (props) => {
  return (
    <Container height="50%" flexInfo={['column']}>
      <WalletTitle>입금된 금액</WalletTitle>
      <InsertedMoney>10000</InsertedMoney>
    </Container>
  );
};

export default CurrentInsertMoney;

const WalletTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 40px;
`;

const InsertedMoney = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
