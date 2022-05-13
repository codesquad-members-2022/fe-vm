import React, { useState, useContext, useEffect } from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import { SelectedProductContext } from 'App';
import MoneySlot from 'components/orderArea/MoneySlot';
import PutBtn from 'components/orderArea/PutBtn';
import History from 'components/orderArea/History';
import ProductHoll from 'components/orderArea/ProductHoll';

const TIME_TO_PUT_OUT_PRODUCT = 2000;
const TIME_TO_SELCT_PRODUCT = 5000;

export default function OrderArea() {
  const useInputPayState = useState('');
  const [canOrderState, setOrderState] = useState(true);
  const [selectedProduct, setSelectedProduct] = useContext(SelectedProductContext);

  // TODO: 금액 반환
  let timerIDToSelectProduct;
  const startTimerToSelectProduct = () => {
    timerIDToSelectProduct = setTimeout(() => {}, TIME_TO_SELCT_PRODUCT);
  };

  const initVMState = () => {
    setSelectedProduct({});
    setOrderState(true);
  };

  const startTimerToPutOutProduct = () => {
    setTimeout(initVMState, TIME_TO_PUT_OUT_PRODUCT);
  };

  const putOutProduct = () => {
    clearTimeout(timerIDToSelectProduct);
    setOrderState(false);
    startTimerToPutOutProduct();
  };

  useEffect(() => {
    if (selectedProduct.detail) putOutProduct();
  }, [selectedProduct]);

  return (
    <Container>
      <MoneySlot useInputPayState={useInputPayState} canOrderState={canOrderState} />
      <BtnWrap>
        <PutBtn inputPay={useInputPayState[0]} startTimerToSelectProduct={startTimerToSelectProduct} />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History />
      <ProductHoll />
    </Container>
  );
}
