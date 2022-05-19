import React from 'react';
import styled from 'styled-components';
import VMItemList from 'components/VendingMachine/itemList';
import StatusWindow from 'components/VendingMachine/statusWindow';

const VM = () => {
  return (
    <>
      <VMBody>
        <VMItemList />
        <StatusWindow />
      </VMBody>
    </>
  );
};

export default VM;

const VMBody = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;
