import styled from 'styled-components';
import Item from '@/Components/Machine/Item';

import { IItem, useItemState } from '@/Context/ItemContext';
import { useWalletDispatch } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceState, usePriceDispatch } from '@/Context/PriceContext';

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

export default function ItemList(): JSX.Element {
  const itemState = useItemState();
  const priceState = usePriceState();
  const walletDispatch = useWalletDispatch();
  const messageDispatch = useMessageDispatch();
  const priceDispatch = usePriceDispatch();

  const availablePurchaseItem = (price: number, count: number) => {
    return count && priceState > price ? true : false;
  };

  const handleImageClick = (item: IItem, available: boolean) => {
    if (item.count <= 0) {
      alert('매진된 상품입니다.');
      return;
    }

    if (!available) {
      return;
    }

    messageDispatch({
      type: 'INSERT_MESSAGE',
      unit: 0,
      message: `${item.text}가 선택 됨`,
    });
    // 잔돈 -> Wallet Update -> 잔돈을 어떻게 동전/화폐로 나눠서 지갑에 다시 넣어줄까
    priceDispatch({ type: 'DELETE_ALL_PRICE' });
    // 5초 카운트 종료
    // 2초 뒤 상품 배출
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
