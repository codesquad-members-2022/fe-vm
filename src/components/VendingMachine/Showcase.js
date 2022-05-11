import styled from "styled-components";
import products from "../../data/products";
import Product from "./Product";

export default function Showcase() {
  return (
    <ShowcaseWrapper>
      {products.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </ShowcaseWrapper>
  );
}

const ShowcaseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
