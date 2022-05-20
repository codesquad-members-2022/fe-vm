import { useCallback, useContext, useState } from 'react';
import styled from 'styled-components';

import { delay } from 'common/utils';
import Loading from 'components/Loading';
import VMItem from 'components/VendingMachine/VMItem';
import { MoneyContext } from 'context/MoneyProvider';
import useLoading from 'hooks/useLoading';
import vmItems from 'mocks/vmItems';

const initItems = vmItems;

const VMItems = () => {
  const [items, setItems] = useState(initItems);
  const {
    moneyState: { inputMoney },
    buyVMItem,
  } = useContext(MoneyContext);

  const handleClickItem = useCallback(
    async ({ id, amount, name }) => {
      await delay(2000);
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

  const { isLoading, toggleHandler } = useLoading(handleClickItem);

  return (
    <>
      <VMItemsWrapper>
        {items.map((item) => (
          <VMItem
            key={item.id}
            item={item}
            isSoldOut={item.count === 0}
            isActive={inputMoney >= item.amount && item.count !== 0}
            onClickActiveItem={toggleHandler}
          />
        ))}
      </VMItemsWrapper>
      {isLoading && <Loading />}
    </>
  );
};

const VMItemsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
`;

export default VMItems;
