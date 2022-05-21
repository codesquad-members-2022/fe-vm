import { SelectButton } from "components";
import { PriceLabel } from "./VendProduct.styled";

function VendProduct({ name, price, stocked }) {
  return (
    <>
      <SelectButton name={name} price={price} stocked={stocked} />
      <PriceLabel>{price + "원"}</PriceLabel>
    </>
  );
}

export { VendProduct };
