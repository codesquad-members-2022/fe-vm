import { useContext } from 'react';
import { useMoneyState } from 'context/MoneyContext';
import { useLogState } from 'context/LogContext';
import { TimerContext } from 'context/TimerContext';

import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';
import OrderLog from './OrderLog';

export default function UserOrder() {
  const { insertMoneyData } = useMoneyState();
  const { machineLog } = useLogState();
  const totalInsertMoney = insertMoneyData;

  const orderLog = machineLog.map(log => {
    return <OrderLog key={log.id} log={log} />;
  });

  const { countdown } = useContext(TimerContext);

  return (
    <OrderInfo>
      <OrderList>{orderLog}</OrderList>
      <InputCostInfo>
        <InfoWrapper>
          <span>투입 금액: </span>
          <span>{setLocalString(totalInsertMoney)} 원</span>
        </InfoWrapper>
        <InfoWrapper>
          <span>남은 시간: </span>
          <span>{countdown} 초</span>
        </InfoWrapper>
      </InputCostInfo>
    </OrderInfo>
  );
}

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 400px;
  margin-bottom: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.offWhite};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const InputCostInfo = styled.div`
  border-top: 2px solid black;
  ${({ theme }) => theme.fontStyles.mediumBold};
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
`;

const OrderList = styled.ul`
  overflow-y: auto;
  margin-bottom: 6px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;
