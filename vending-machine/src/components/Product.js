import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../contexts/productContext";
import canSrc from "../img/free-icon-beer-can-95982.png";
import { CenterSort, HeightSort } from "../style/Globalstyles";
import { decreaseAmount } from "../util/util";

function Product({ title, price, amount }) {
  const { beverage, setBeverage } = useContext(ProductContext);
  const isSoldOut = amount !== 0;
  return (
    <ProductWrap
      isSoldOut={isSoldOut}
      onClick={() => {
        decreaseAmount(beverage, amount, setBeverage, title);
      }}
    >
      <ProductImage src={canSrc}></ProductImage>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price.toLocaleString()}원</ProductPrice>
      {amount}
    </ProductWrap>
  );
}
const ProductWrap = styled.div`
  border: ${(props) =>
    props.isSoldOut ? `1px solid #000000` : `6px solid #f00`};
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
