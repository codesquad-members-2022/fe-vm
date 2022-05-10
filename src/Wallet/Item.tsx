import styled from 'styled-components';

interface ItemProps {
  money: string;
  count: number;
}

const ItemComponent = styled.div``;

export default function Item(props: ItemProps): JSX.Element {
  return (
    <>
      <ItemComponent></ItemComponent>
    </>
  );
}
