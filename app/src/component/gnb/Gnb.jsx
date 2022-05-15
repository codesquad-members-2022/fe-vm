import { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import GnbItem from './GnbItem';

function Gnb({ items }) {
  const defaultItem = useRef(items[0][0]);
  const [activeItem, setActiveItem] = useState(defaultItem.current);

  const isActive = useCallback(
    item => {
      return activeItem === item;
    },
    [activeItem],
  );

  return (
    <Nav>
      {items.map(item => {
        const itemKey = item[0];
        return (
          <GnbItem
            key={itemKey}
            item={item}
            numOfItem={items.length}
            isActive={isActive(itemKey)}
            setActiveTab={setActiveItem}
            role="button"
          />
        );
      })}
    </Nav>
  );
}

const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2px;
  margin: 50px auto 0;
  width: 400px;
  height: 70px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export default Gnb;
