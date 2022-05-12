import styled from 'styled-components';

interface ItemProps {
  unit: number;
  count: number;
}

const ItemComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

export default function Item({ unit, count }: ItemProps): JSX.Element {
  return (
    <>
      <ItemComponent>{unit}원</ItemComponent>
      <ItemComponent>{count}개</ItemComponent>
    </>
  );
}
