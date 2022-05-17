import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../style/variables';
import { changeKoreanLocalMoney } from '../utility/util';

const SumMoney = ({ coinData }) => {
  const myMoney = coinData.reduce(
    (acc, cur) => acc + cur.unit * cur.quantity,
    0
  );

  return <StyleCoin>{changeKoreanLocalMoney(myMoney)}원</StyleCoin>;
};

const StyleCoin = styled.span`
  display: inline-block;
  margin-top: 20px;
  width: 270px;
  border: 2px solid ${color.gray};
  padding: 20px 0;
  font-size: ${fontSize.xl};
`;

export default SumMoney;
