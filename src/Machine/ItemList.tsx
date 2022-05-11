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
    { id: 1, image: '', text: '아메리카노', price: 1111, count: 5 },
    { id: 2, image: '', text: '카페라떼', price: 2222, count: 5 },
    { id: 3, image: '', text: '카푸치노', price: 3333, count: 5 },
    { id: 4, image: '', text: '모카치노', price: 4444, count: 5 },
    { id: 5, image: '', text: '녹차라떼', price: 5555, count: 5 },
    { id: 6, image: '', text: '핫초코', price: 6666, count: 5 },
    { id: 7, image: '', text: '오곡라떼', price: 7777, count: 5 },
    { id: 8, image: '', text: '초코밀크', price: 8888, count: 5 },
    { id: 9, image: '', text: '오트밀라떼', price: 9999, count: 5 },
    { id: 10, image: '', text: '검정콩라떼', price: 11111, count: 5 },
    { id: 11, image: '', text: '레몬에이드', price: 22222, count: 5 },
    { id: 12, image: '', text: '블루베리 에이드', price: 33333, count: 5 },
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
