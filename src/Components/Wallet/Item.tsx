import styled, { css } from 'styled-components';
import { useWalletDispatch } from '@/Context/WalletContext';
import { useMachineDispatch } from '@/Context/MachineContext';

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
  const machineDispatch = useMachineDispatch();

  const decreaseUnitCount = (unit: number, count: number) =>
    walletDispatch({ type: 'DECREASE_WALLET_UNIT', unit, count });

  const notifyUnitMessage = (unit: number, message: string) => {
    machineDispatch({ type: 'INSERT_MESSAGE', unit, message });
  };

  const handleUnitClick = (unit: number, count: number) => {
    if (count <= 0) return;
    decreaseUnitCount(unit, 1);
    notifyUnitMessage(unit, `${unit}원이 투입됐음`);
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
