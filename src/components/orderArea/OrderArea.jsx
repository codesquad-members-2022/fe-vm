import React, { useState, useContext, useEffect, useReducer } from 'react';
import { Container, BtnWrap, ReturnBtn } from 'components/orderArea/OrderArea.style';
import { SelectedProductContext } from 'App';
import { FinalPayContext } from 'pages/VendingMachine';
import MoneySlot from 'components/orderArea/MoneySlot';
import PutBtn from 'components/orderArea/PutBtn';
import History from 'components/orderArea/History';
import ProductHole from 'components/orderArea/ProductHole';

const TIME_TO_PUT_OUT_PRODUCT = 2000;
const TIME_TO_SELCT_PRODUCT = 5000;

const historyReducer = (historyList, { action, newHistoryState }) => {
  switch (action) {
    case 'INPUT':
      return [...historyList, `💸 총 ${newHistoryState}원을 투입하였습니다.`];
    case 'SELECT':
      return [...historyList, `${newHistoryState} 선택하였습니다.`];
    default:
      return historyList;
  }
};

export default function OrderArea() {
  const useInputPayState = useState('');
  const [canOrderState, setOrderState] = useState(true);
  const [historyList, dispatchHistoryList] = useReducer(historyReducer, []);
  const [selectedProduct, setSelectedProduct] = useContext(SelectedProductContext);
  const finalPay = useContext(FinalPayContext)[0];

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
    if (selectedProduct.detail) {
      putOutProduct();
      dispatchHistoryList({ action: 'SELECT', newHistoryState: selectedProduct.detail });
    } // else dispatchHistoryList(); // TODO
  }, [selectedProduct]);

  useEffect(() => {
    if (finalPay) dispatchHistoryList({ action: 'INPUT', newHistoryState: finalPay.toLocaleString('en') });
  }, [finalPay]);

  return (
    <Container>
      <MoneySlot useInputPayState={useInputPayState} canOrderState={canOrderState} />
      <BtnWrap>
        <PutBtn inputPay={useInputPayState[0]} startTimerToSelectProduct={startTimerToSelectProduct} />
        <ReturnBtn>반환</ReturnBtn>
      </BtnWrap>
      <History historyList={historyList} />
      <ProductHole />
    </Container>
  );
}
