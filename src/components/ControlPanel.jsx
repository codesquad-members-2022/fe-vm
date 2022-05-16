/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';

function ControlPanel() {
  const { curMoney, coins } = useContext(MoneyContext);
  return (
    <Wrap>
      <Row>
        <Money onChange={(e) => console.log(e)}>{curMoney}</Money>
        <span>원</span>
      </Row>
      <button type="button">반환하기</button>
      <EventLog />
    </Wrap>
  );
  // TODO: Home 페이지에서 금액 입력할 때 아래 함수 활용 예정
  // function requestMoneyCharge(money) {
  //   let chargeMoney = 0;
  //   let requestMoney = money;
  //   coins.forEach((coin) => {
  //     const q = Math.floor(requestMoney / coin.AMOUNT);
  //     const hasEnoughCoins = coin.CNT >= q;
  //     if (requestMoney < 10) {
  //       return;
  //     }
  //     if (hasEnoughCoins) {
  //       chargeMoney += coin.AMOUNT * q;
  //       requestMoney -= coin.AMOUNT * q;
  //       return;
  //     }
  //     chargeMoney += coin.AMOUNT * coin.CNT;
  //     requestMoney -= coin.AMOUNT * coin.CNT;
  //   });
  //   return chargeMoney;
  // }
}

export default ControlPanel;

const Wrap = styled.div({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gap: '20px',
});
const Row = styled.div({
  display: 'flex',
});
const Money = styled.div({
  width: '100%',
  textAlign: 'right',
  border: '1px solid black',
  paddingRight: '5px',
});
const EventLog = styled.div({
  border: '1px solid black',
  height: '100%',
  overflowY: 'auto',
});
