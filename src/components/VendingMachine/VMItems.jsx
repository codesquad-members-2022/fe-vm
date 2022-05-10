import { useState } from 'react';
import styled from 'styled-components';

import VMItem from 'components/VendingMachine/VMItem';
import vmItems from 'mocks/vmItems';

const initItems = vmItems;

const VMItems = ({ insertVMLog }) => {
  const [items] = useState(initItems);
  return (
    <VMItemsWrapper>
      {items.map((item) => (
        <VMItem key={item.id} item={item} insertVMLog={insertVMLog} />
      ))}
    </VMItemsWrapper>
  );
};

const VMItemsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`;

export default VMItems;
