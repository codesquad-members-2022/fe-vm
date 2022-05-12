import React, { useContext } from 'react';
import styled from 'styled-components';

import { TotalMoneyContext } from '../App';
import InputForm from './InputForm';
import Message from './Message';
import ReturnBtn from './ReturnBtn';

const Order = () => {
  const { totalMoney, setTotalMoney } = useContext(TotalMoneyContext);

  return (
    <>
      <StyledTotal>투입금액 : {totalMoney}원</StyledTotal>
      <InputForm totalMoney={totalMoney} setTotalMoney={setTotalMoney} />
      <ReturnBtn totalMoney={totalMoney} setTotalMoney={setTotalMoney} />
      <Message />
    </>
  );
};

const StyledTotal = styled.span`
  display: inline-block;
  margin-top: 20px;
  width: 270px;
  border: 2px solid gray;
  padding: 20px 0;
  font-size: 20px;
`;

export default Order;
