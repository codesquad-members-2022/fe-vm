import React, {
  useContext,
  useRef,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';

import {UserAccount} from '../Store';

export const VendingMachineInterface = () => {
  const {userMoney, refundMoney} = useContext(UserAccount);
  const [history, setHistory] = useState({
    record: [],
    insertedMoney: null,
  });
  const refundBtn = useRef(null);

  useEffect(() => {
    setHistory({...history, insertedMoney: userMoney.insertedMoney});
    console.log(userMoney.insertedMoney);
  }, [userMoney.insertedMoney]);

  return (
    <VM_Wrapper>
      <VM_MoneyInput value={userMoney.insertedMoney} />
      <VM_RefundBtn ref={refundBtn} onClick={refundMoney}>
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
