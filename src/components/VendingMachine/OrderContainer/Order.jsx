import { useContext } from 'react';
import { MoneyContext } from 'context/MoneyContext';

import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';

export default function UserOrder() {
  const { insertMoneyData } = useContext(MoneyContext);
  const totalInsertMoney = insertMoneyData;

  return (
    <OrderInfo>
      <OrderList />
      <InputCostInfo>
        <span>투입금액: </span>
        <span>{setLocalString(totalInsertMoney)} 원</span>
      </InputCostInfo>
    </OrderInfo>
  );
}

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  margin-bottom: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.offWhite};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

const InputCostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 6px;
  border-top: 2px solid black;
  ${({ theme }) => theme.fontStyles.mediumBold};
`;

const OrderList = styled.ul`
  overflow-y: auto;
  margin: 12px 0;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera */
  }
`;

// const Order = styled.li`
//   margin-bottom: 4px;
//   ${({ theme }) => theme.fontStyles.xSmallRegular};

//   strong {
//     font-weight: 700;
//   }
// `;
