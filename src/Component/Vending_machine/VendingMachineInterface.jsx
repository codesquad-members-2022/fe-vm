import React, {useContext, useRef} from 'react';
import styled from 'styled-components';

import {UserAccount} from '../../Store';

export const VendingMachineInterface = () => {
  const {insertedMoney, dispatchCurrentMoney, dispatchInsertedMoney} =
    useContext(UserAccount);
  const refundBtn = useRef(null);

  const handleRefundBtn = () => {
    console.log(refundBtn.current);
    dispatchCurrentMoney({type: 'increase', income: refundBtn.current.value});
    dispatchInsertedMoney({type: 'refund'});
  };

  return (
    <VM_Wrapper>
      <VM_MoneyInput value={insertedMoney} />
      <VM_RefundBtn ref={refundBtn} onClick={handleRefundBtn}>
        잔액 반환
      </VM_RefundBtn>
      <VM_History></VM_History>
    </VM_Wrapper>
  );
};

const VM_Wrapper = styled.ul`
  width: 40%;
  display: flex;
    align-items: center;
  justify-content: space-around;
  flex-direction: column;
    padding 10px
`;

const VM_MoneyInput = styled.input`
  width: 300px;
  height: 80px;
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
`;

const VM_RefundBtn = styled.button`
  width: 300px;
  height: 80px;
  font-size: 20px;
  border-radius: 20px;
  background-color: white;
  padding: 10px;

  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const VM_History = styled.div`
  width: 300px;
  height: 500px;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px;
`;
