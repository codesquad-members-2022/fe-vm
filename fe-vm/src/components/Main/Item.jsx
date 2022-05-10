import styled from "styled-components";
import { makePriceFormat } from "../../util/makePriceFormat";

const Item = ({ menu, price }) => {
  return (
    <ItemContainer>
      <ItemName>{menu}</ItemName>
      <ItemPrice>{makePriceFormat(price)}</ItemPrice>
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
  padding: 2rem 0.5rem;
  border: 0.3rem solid black;
  font-size: 2rem;
  min-height: 100px;
`;

const ItemPrice = styled.div`
  padding: 1rem;
  font-size: 2rem;
`;

export default Item;
