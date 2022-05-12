import React from 'react';
import styled from 'styled-components';
import { _ } from '../../../constant/constant';
import Container from '../../UI/container';

const VendingLog = () => {
  return (
    <Container
      height="60%"
      width="90%"
      flexInfo={['column', _, 'space-around']}
    >
      <h3>VENDING LOG</h3>
      <VendingLogLists>
        <li>입금되었습니다</li>
        <li>입금되었습니다</li>
      </VendingLogLists>
    </Container>
  );
};

export default VendingLog;

const VendingLogLists = styled.ul`
  width: calc(90% - 5px);
  height: calc(90% - 5px);
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
`;
