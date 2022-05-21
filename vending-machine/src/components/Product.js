import React, { useContext } from "react";
import styled from "styled-components";
import { messageContext } from "../contexts/messageContext";
import { ProductContext } from "../contexts/productContext";
import { WalletContext } from "../contexts/walletContext";
import canSrc from "../img/free-icon-beer-can-95982.png";
import { CenterSort, HeightSort } from "../style/Globalstyles";
import { decreaseAmount } from "../util/util";

function Product({ title, price, amount }) {
  const { beverage, setBeverage } = useContext(ProductContext);
  const setInputMoney = useContext(WalletContext).value.setInputMoneySum;
  const inputMoney = useContext(WalletContext).value.inputMoneySum;
  const { message, setMessage } = useContext(messageContext);
  const isSoldOut = amount !== 0;
  function makeBuyMessage(title) {
    return `${title} 선택됨`;
  }

  function decreaseInput(price, amount, title) {
    if (price <= inputMoney && amount > 0) {
      setInputMoney(inputMoney - price);
      const newMessage = makeBuyMessage(title);
      setMessage([...message, newMessage]);
    } else {
      if (amount === 0) {
        alert("재고가 부족합니다!");
      } else alert("잔액이 부족합니다!");
    }
  }
  return (
    <ProductWrap
      isSoldOut={isSoldOut}
      onClick={() => {
        decreaseAmount(beverage, amount, setBeverage, title);
        decreaseInput(price, amount, title);
      }}
    >
      <ProductImage src={canSrc}></ProductImage>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>{price.toLocaleString("ko-KR")}원</ProductPrice>
    </ProductWrap>
  );
}
const ProductWrap = styled.div`
  border: ${({ isSoldOut }) =>
    isSoldOut ? `1px solid #000000` : `6px solid #f00`};
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
