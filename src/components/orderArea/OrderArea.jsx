import React, { useState } from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import MoneySlot from 'components/orderArea/MoneySlot';
import History from 'components/orderArea/History';
import PutBtn from 'components/orderArea/PutBtn';

export default function OrderArea() {
  const usePaymentState = useState('');

  return (
    <Container>
      <MoneySlot usePaymentState={usePaymentState} />
      <BtnWrap>
        <PutBtn usePaymentState={usePaymentState} />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
    </Container>
  );
}
