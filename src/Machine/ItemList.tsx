import styled from 'styled-components';

const ItemListerWrapper = styled.article`
  width: 70%;
  height: 100%;
  border: 5px solid black;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 0 0 20px;
`;

export default function ItemList(): JSX.Element {
  return (
    <>
      <ItemListerWrapper></ItemListerWrapper>
    </>
  );
}
