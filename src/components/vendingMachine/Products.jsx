import styled from "styled-components";

import products from "../../mock/products";
import Product from "./Product";

const Products = () => {
  return (
    <ProductsWrap>
      {products.map((product, idx) => {
        return <Product key={idx} product={product} />;
      })}
    </ProductsWrap>
  );
};

const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 75%;
  width: 90%;
  border: 5px solid black;
  margin: auto auto;
  margin-top: 30px;
  border-radius: 5px;
  justify-content: space-around;
  align-items: center;
  background-color: #7093df;
`;

export default Products;
