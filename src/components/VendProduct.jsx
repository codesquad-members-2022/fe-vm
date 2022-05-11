import { product } from "data";
import styled, { css } from "styled-components";

const VendProductContainer = styled.ul`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  li {
    background-color: #f2f2f2;
    border: 1px solid;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      color: #000;
      margin: 10px;
    }
  }
`;

const BrandLabel = styled.div`
  border: 1px solid;
  border-color: #6ebf8b;
  &:hover {
    cursor: pointer;
  }
  ${({ stocked }) => {
    return (
      stocked &&
      css`
        background-color: #b9f8d3;
      `
    );
  }}
`;

const PriceLabel = styled.div``;

function Vendproduct() {
  return (
    <VendProductContainer>
      {product.map(({ id, name, price, stocked }) => (
        <li key={id}>
          <BrandLabel stocked={stocked}>{name}</BrandLabel>
          <PriceLabel>{price + "원"}</PriceLabel>
        </li>
      ))}
    </VendProductContainer>
  );
}

export { Vendproduct };
