import styled from 'styled-components';

interface ItemProps {
  money: string;
  count: number;
}

const ItemComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray1};
`;

export default function Item({ money, count }: ItemProps): JSX.Element {
  return (
    <>
      <ItemComponent>{money}원</ItemComponent>
      <ItemComponent>{count}개</ItemComponent>
    </>
  );
}
