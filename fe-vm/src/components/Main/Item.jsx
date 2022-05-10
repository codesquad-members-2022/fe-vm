import styled from "styled-components";

const Item = () => {
  return (
    <ItemContainer>
      <ItemName>콜라</ItemName>
      <ItemPrice>500</ItemPrice>
    </ItemContainer>
  );
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  max-width: 210px;
  cursor: pointer;
`;

const ItemName = styled.div`
  padding: 2rem;
  border: 0.3rem solid black;
  font-size: 2rem;
`;

const ItemPrice = styled.div`
  padding: 1rem;
  font-size: 2rem;
`;

export default Item;
