import { useContext } from 'react';
import styled from 'styled-components';

import VMItem from 'components/VendingMachine/VMItem';
import { ItemContext } from 'context/ItemProvider';

const VMItems = () => {
  const [items, setItems] = useContext(ItemContext);

  const reduceItemCount = (selectedItemId) => {
    const newItems = items.map((item) => {
      if (item.id === selectedItemId) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <VMItemsWrapper>
      {items.map((item) => (
        <VMItem key={item.id} item={item} onClickActiveItem={reduceItemCount} />
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
