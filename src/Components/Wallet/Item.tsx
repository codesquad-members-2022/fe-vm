import styled, { css } from 'styled-components';

import { useWalletDispatch } from '@/Context/WalletContext';
import { useMessageDispatch } from '@/Context/MessageContext';
import { usePriceDispatch } from '@/Context/PriceContext';

interface TStyledView {
  uuid?: number;
}

interface ItemType {
  unit: number;
  count: number;
}

const ItemComponent = styled.div<TStyledView>`
  ${({ theme }) => theme.mixins.flexBox()};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.ultramarine};
  cursor: pointer;

  &:hover {
    ${props => {
      if (props.uuid) {
        return css`
          opacity: 0.5;
        `;
      }
    }}
  }
`;

export default function Item({ unit, count }: ItemType): JSX.Element {
  const walletDispatch = useWalletDispatch();
  const messageDispatch = useMessageDispatch();
  const priceDispatch = usePriceDispatch();

  const decreaseUnitCount = (unit: number, count: number) =>
    walletDispatch({ type: 'DECREASE_WALLET_UNIT', unit, count });

  const handleUnitClick = (unit: number, count: number) => {
    if (count <= 0) return;
    decreaseUnitCount(unit, 1);
    priceDispatch({ type: 'ADD_PRICE', price: unit });
    messageDispatch({
      type: 'INSERT_MESSAGE',
      unit,
      message: `${unit}원이 투입됐음`,
    });
  };

  return (
    <>
      <ItemComponent uuid={unit} onClick={() => handleUnitClick(unit, count)}>
        {unit}원
      </ItemComponent>
      <ItemComponent>{count}개</ItemComponent>
    </>
  );
}
