import React from 'react';
import styled from 'styled-components';
import { flexBetween } from '../style/mixins';
import WalletItem from './WalletItem';

const WalletCoinBox = ({ coinData, setTotalMoney }) => {
  //돈 클릭 시 발생하는 이벤트
  const putMoneyVM = () => {};

  return (
    <>
      {coinData.map(({ id, unit, quantity }) => (
        <WalletList key={id}>
          <WalletItem unit={unit} quantity={quantity} onClick={putMoneyVM} />
        </WalletList>
      ))}
    </>
  );
};

const WalletList = styled.li`
  ${flexBetween}
  font-size: 30px;
`;

export default WalletCoinBox;
