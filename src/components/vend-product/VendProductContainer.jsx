import { product } from "data";
import styled from "styled-components";
import { VendProduct } from "./VendProduct";

const StyledVendProductContainer = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  li {
    background-color: #f2f2f2;
    border: 1px solid;
    padding: 10px;

    button {
      border: 1px solid;
      border-color: #2fc4b2;
    }
  }
`;

function VendProductContainer() {
  return (
    <StyledVendProductContainer>
      {product.map(({ id, name, price, stocked }) => (
        <li key={id}>
          <VendProduct name={name} price={price} stocked={stocked} />
        </li>
      ))}
    </StyledVendProductContainer>
  );
}

export { VendProductContainer };
