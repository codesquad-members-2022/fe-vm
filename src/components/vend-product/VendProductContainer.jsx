import { product } from "data";
import { VendProduct } from "components";
import { StyledVendProductContainer } from "./VendProduct.styled";

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
