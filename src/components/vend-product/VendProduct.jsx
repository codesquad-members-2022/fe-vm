import styled from "styled-components";
import { SelectButton } from "./SelectButton";

const PriceLabel = styled.span`
  display: grid;
  place-items: center;
  margin-top: 30px;
`;

function VendProduct({ name, price, stocked }) {
  return (
    <>
      <SelectButton name={name} price={price} stocked={stocked} />
      <PriceLabel>{price + "원"}</PriceLabel>
    </>
  );
}

export { VendProduct };
