import styled from 'styled-components';
import Item from '@/Machine/Item';

const ItemListerWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  grid-gap: 20px;
  width: 70%;
  height: 100%;
  border: 5px solid black;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 0 0 20px;
`;

export default function ItemList(): JSX.Element {
  const itemObj = [
    { id: 1, image: '', text: 'Cola', price: 77777 },
    { id: 2, image: '', text: 'Cola', price: 77777 },
    { id: 3, image: '', text: 'Cola', price: 77777 },
    { id: 4, image: '', text: 'Cola', price: 77777 },
    { id: 5, image: '', text: 'Cola', price: 77777 },
    { id: 6, image: '', text: 'Cola', price: 77777 },
    { id: 7, image: '', text: 'Cola', price: 77777 },
    { id: 8, image: '', text: 'Cola', price: 77777 },
    { id: 9, image: '', text: 'Cola', price: 77777 },
    { id: 10, image: '', text: 'Cola', price: 77777 },
    { id: 11, image: '', text: 'Cola', price: 77777 },
    { id: 12, image: '', text: 'Cola', price: 77777 },
  ];
  return (
    <>
      <ItemListerWrapper>
        <>
          {itemObj.map(item => {
            return <Item key={item.id} item={item} />;
          })}
        </>
      </ItemListerWrapper>
    </>
  );
}
