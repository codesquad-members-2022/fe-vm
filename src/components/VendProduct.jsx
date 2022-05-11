import { product } from "data";
import styled from "styled-components";
import { Button } from "components";

const VendProductContainer = styled.ul`
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

const PriceLabel = styled.div`
  display: grid;
  place-items: center;
  margin-top: 20px;
`;

function Vendproduct() {
  return (
    <VendProductContainer>
      {product.map(({ id, name, price, stocked }) => (
        <li key={id}>
          <Button color={stocked ? "green" : "white"} size="small">
            {name}
          </Button>
          <PriceLabel>{price + "원"}</PriceLabel>
        </li>
      ))}
    </VendProductContainer>
  );
}

export { Vendproduct };
