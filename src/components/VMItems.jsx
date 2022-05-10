import { useState } from 'react';
import styled from 'styled-components';

import VMItem from 'components/VMItem';
import vmItems from 'mocks/vmItems';

const initItems = vmItems;

const VMItems = () => {
  const [items] = useState(initItems);
  return (
    <VMItemsWrapper>
      {items.map((item) => (
        <VMItem key={item.id} item={item} />
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
