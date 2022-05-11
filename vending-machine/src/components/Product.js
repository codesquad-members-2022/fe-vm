import React from "react";
import styled from "styled-components";
import canSrc from "../img/free-icon-beer-can-95982.png";
import { CenterSort, HeightSort } from "../style/Globalstyles";

function Product() {
  return (
    <ProductWrap>
      <ProductImage src={canSrc}></ProductImage>
      <ProductTitle>콜라</ProductTitle>
      <ProductPrice>1000원</ProductPrice>
    </ProductWrap>
  );
}
const ProductWrap = styled.div`
  border: 2px solid black;
  flex-direction: column;
  ${HeightSort}
`;
const ProductImage = styled.img`
  width: 100%;
  height: 70px;
`;
const ProductTitle = styled.div`
  width: 100%;
  height: 30px;
  ${CenterSort}
`;
const ProductPrice = styled.div`
  width: 100%;
  height: 30px;
  font-weight: bolder;
  ${CenterSort}
`;
export default Product;
