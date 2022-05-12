import React from 'react';
import { Container, BtnWrap, PutBtn, ReturnBtn } from 'components/orderArea/OrderArea.style';
import MoneySlot from 'components/orderArea/MoneySlot';
import History from 'components/orderArea/History';

export default function OrderArea() {
  return (
    <Container>
      <MoneySlot />
      <BtnWrap>
        <PutBtn>투입</PutBtn>
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
    </Container>
  );
}
