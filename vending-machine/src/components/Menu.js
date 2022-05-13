import React, { useContext } from "react";
import styled from "styled-components";
import { CenterSort } from "../style/Globalstyles";
import { ProductContext } from "../contexts/productContext";
import Product from "./Product";

function Menu() {
  const beverage = useContext(ProductContext).beverage;
  return (
    <MenuWrap>
      <ProductWindow>
        {beverage.map((product, idx) => (
          <Product
            key={idx}
            title={product.title}
            price={product.price}
            amount={product.amount}
          ></Product>
        ))}
      </ProductWindow>
      <ProductOutput></ProductOutput>
    </MenuWrap>
  );
}
const MenuWrap = styled.div`
  width: 900px;
  height: 100%;
  border-right: 5px solid black;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  gap: 10%;
  ${CenterSort}
`;
const ProductWindow = styled.div`
  width: 800px;
  height: 70%;
  border: 3px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  place-content: start center;
  grid-gap: 10px;
  grid-auto-rows: 130px;
  grid-template-columns: repeat(7, 1fr);
`;
const ProductOutput = styled.div`
  width: 800px;
  height: 20%;
  border: 3px solid black;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 40px;
`;
export default Menu;
