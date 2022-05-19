import React, { useContext } from 'react';
import styled from 'styled-components';
import { _ } from '../../../constant/constant';
import Container from '../../UI/container';
import AmountContext from '../../../store/AmountContext';

const VendingLogLists = () => {
  const { log } = useContext(AmountContext);
  return (
    <VendingLogList>
      {log.map((v, i) => (
        <li key={i}>{v}</li>
      ))}
    </VendingLogList>
  );
};

const VendingLog = () => {
  return (
    <Container
      height="60%"
      width="90%"
      flexInfo={['column', _, 'space-around']}
    >
      <h3>VENDING LOG</h3>
      <VendingLogLists />
    </Container>
  );
};

export default VendingLog;

const VendingLogList = styled.ul`
  width: calc(90% - 5px);
  height: calc(90% - 5px);
  padding: 20px;
  border: 1px solid black;
  box-sizing: border-box;
`;
