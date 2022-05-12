import React, { useState } from 'react';
import { Container, BtnWrap, PutBtn, ReturnBtn } from 'components/orderArea/OrderArea.style';
import MoneySlot from 'components/orderArea/MoneySlot';
import History from 'components/orderArea/History';

export default function OrderArea() {
  const usePaymentState = useState('');

  return (
    <Container>
      <MoneySlot usePaymentState={usePaymentState} />
      <BtnWrap>
        <PutBtn>투입</PutBtn>
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
    </Container>
  );
}
