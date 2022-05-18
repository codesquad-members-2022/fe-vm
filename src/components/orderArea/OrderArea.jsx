import React, { useState } from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import MoneySlot from 'components/orderArea/MoneySlot';
import PutBtn from 'components/orderArea/PutBtn';
import History from 'components/orderArea/History';
import ProductHole from 'components/orderArea/ProductHole';

export default function OrderArea() {
  const useInputPayState = useState('');
  const [canOrderState] = useState(true);

  return (
    <Container>
      <MoneySlot useInputPayState={useInputPayState} canOrderState={canOrderState} />
      <BtnWrap>
        <PutBtn inputPay={useInputPayState[0]} />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
      <ProductHole />
    </Container>
  );
}
