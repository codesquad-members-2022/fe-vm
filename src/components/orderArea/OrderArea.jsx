import React from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import MoneySlot from 'components/orderArea/MoneySlot';
import History from 'components/orderArea/History';
import PutBtn from 'components/orderArea/PutBtn';

export default function OrderArea() {
  return (
    <Container>
      <MoneySlot />
      <BtnWrap>
        <PutBtn />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
    </Container>
  );
}
