import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';

import VMItem from 'components/VendingMachine/VMItem';
import { MoneyContext } from 'context/MoneyProvider';
import vmItems from 'mocks/vmItems';

const initItems = vmItems;

const VMItems = () => {
  const [items, setItems] = useState(initItems);
  const { inputMoney, buyVMItem } = useContext(MoneyContext);

  const handleClickItem = useCallback(
    ({ id, amount, name }) => {
      const newItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
      setItems(newItems);
      buyVMItem(amount, name);
    },
    [items]
  );

  return (
    <VMItemsWrapper>
      {items.map((item) => (
        <VMItem
          key={item.id}
          item={item}
          isSoldOut={item.count === 0}
          isActive={inputMoney >= item.amount && item.count !== 0}
          onClickActiveItem={handleClickItem}
        />
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
