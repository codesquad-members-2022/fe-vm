import React from 'react';
import { Container, BtnWrap } from 'components/orderArea/OrderArea.style';
import useInputPay from 'hooks/useInputPay';
import MoneySlot from 'components/orderArea/MoneySlot';
import PutBtn from 'components/orderArea/PutBtn';
import ReturnBtn from 'components/orderArea/ReturnBtn';
import History from 'components/orderArea/History';
import ProductHole from 'components/orderArea/ProductHole';

export default function OrderArea() {
  const { inputPay, updateInputPay, resetInputPay } = useInputPay();

  return (
    <Container>
      <MoneySlot inputPay={inputPay} updateInputPay={updateInputPay} resetInputPay={resetInputPay} />
      <BtnWrap>
        <PutBtn inputPay={inputPay} />
        <ReturnBtn />
      </BtnWrap>
      <History />
      <ProductHole />
    </Container>
  );
}
