import styled from "styled-components";

import products from "../mock/products";
import Product from "./Product";

const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  border: 1px solid black;
  justify-content: space-around;
  align-items: center;
  background-color: #7093df;
`;

const Products = () => {
  return (
    <ProductsWrap>
      {products.map((product, idx) => {
        console.log({ product });
        return <Product key={idx} product={product} />;
      })}
    </ProductsWrap>
  );
};

export default Products;
