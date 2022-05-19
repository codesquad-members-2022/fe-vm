import React from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import useInputPay from 'hooks/useInputPay';
import MoneySlot from 'components/orderArea/MoneySlot';
import PutBtn from 'components/orderArea/PutBtn';
import History from 'components/orderArea/History';
import ProductHole from 'components/orderArea/ProductHole';

export default function OrderArea() {
  const { inputPay, updateInputPay, resetInputPay } = useInputPay();

  return (
    <Container>
      <MoneySlot inputPay={inputPay} updateInputPay={updateInputPay} resetInputPay={resetInputPay} />
      <BtnWrap>
        <PutBtn inputPay={inputPay} />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
      <ProductHole />
    </Container>
  );
}
