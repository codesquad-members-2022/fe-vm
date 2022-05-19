import React, { useState } from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import useInputPay from 'hooks/useInputPay';
import MoneySlot from 'components/orderArea/MoneySlot';
import PutBtn from 'components/orderArea/PutBtn';
import History from 'components/orderArea/History';
import ProductHole from 'components/orderArea/ProductHole';

export default function OrderArea() {
  const { inputPay, updateInputPay, resetInputPay } = useInputPay();
  const [canOrderState] = useState(true);

  return (
    <Container>
      <MoneySlot
        inputPay={inputPay}
        updateInputPay={updateInputPay}
        resetInputPay={resetInputPay}
        canOrderState={canOrderState}
      />
      <BtnWrap>
        <PutBtn inputPay={inputPay} />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
      <ProductHole />
    </Container>
  );
}
