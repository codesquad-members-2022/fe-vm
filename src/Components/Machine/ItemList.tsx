import styled from 'styled-components';
import Item from '@/Components/Machine/Item';
import { useRef } from 'react';

import { IItem, useItemState, useItemDispatch } from '@/Context/ItemContext';
import { useWalletDispatch } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

import { itemOutputDelay } from '@/Constants';
import keepTheChange from '@/Utils/keepTheChange';
import timeOut from '@/Utils/timeOut';

const ItemListerWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  grid-gap: 20px;
  width: 70%;
  border: 5px solid ${({ theme }) => theme.colors.ultramarine};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 0 0 20px;
`;

interface TimerType {
  timerId: React.MutableRefObject<any>;
}

export default function ItemList({ timerId }: TimerType): JSX.Element {
  const itemState = useItemState();
  const priceState = usePriceState();
  const walletDispatch = useWalletDispatch();
  const messageDispatch = useMessageDispatch();
  const priceDispatch = usePriceDispatch();
  const itemDispatch = useItemDispatch();

  const disposeTimerId = useRef(null);

  const availablePurchaseItem = (price: number, count: number) => {
    return count && priceState >= price ? true : false;
  };

  const handleImageClick = (item: IItem, available: boolean) => {
    if (item.count <= 0) {
      alert('매진된 상품입니다.');
      return;
    }

    if (!available) {
      return;
    }

    if (disposeTimerId.current) {
      alert('상품이 배출중입니다....');
      return;
    }

    // 5초 카운트 종료
    clearTimeout(timerId.current);

    // 2초 뒤 상품 배출
    disposeTimerId.current = timeOut(() => {
      messageDispatch({
        type: 'INSERT_MESSAGE',
        unit: 0,
        message: `${item.text}가 선택 됨`,
      });
      keepTheChange(
        priceState - item.price,
        walletDispatch,
        priceDispatch,
        messageDispatch,
      );
      itemDispatch({ type: 'UPDATE_ITEM', item, count: 1 });
    }, itemOutputDelay);
  };

  return (
    <>
      <ItemListerWrapper>
        <>
          {itemState.map(item => {
            return (
              <Item
                key={item.uuid}
                item={item}
                available={availablePurchaseItem(item.price, item.count)}
                handleImageClick={handleImageClick}
              />
            );
          })}
        </>
      </ItemListerWrapper>
    </>
  );
}
