import React, { useState, createContext } from 'react';
import { Container, BtnWrap, PutBtn, ReturnBtn } from 'components/orderArea/OrderArea.style';
import MoneySlot from 'components/orderArea/MoneySlot';
import History from 'components/orderArea/History';

const PaymentContext = createContext([]);

export default function OrderArea() {
  const paymentState = useState('');

  return (
    <PaymentContext.Provider value={paymentState}>
      <Container>
        <MoneySlot />
        <BtnWrap>
          <PutBtn>투입</PutBtn>
          <ReturnBtn>반환</ReturnBtn>
        </BtnWrap>
        <History />
      </Container>
    </PaymentContext.Provider>
  );
}

export { PaymentContext };
