import React, { useState } from 'react';
import { formatPrice } from 'util/util';

export const LogMessagesContext = React.createContext();

export const LogMessagesProvider = props => {
  const initialLogMessagesData = [
    {
      id: 1,
      date: new Date(),
      type: 'INFO',
      value:
        '자판기 서비스에 오신 걸 환영합니다. 금액을 넣고 원하는 음료를 골라보세요.--------------------------------------------------',
    },
    { id: 2, date: new Date(), type: 'CASH_INSERTED', value: '1000' },
    { id: 3, date: new Date(), type: 'CASH_RETRUNED', value: '' },
    { id: 4, date: new Date(), type: 'CASH_INSERTED_SCOPE_FAILED', value: '' },
    { id: 5, date: new Date(), type: 'CASH_INSERTED_UNIT_FAILED', value: '' },
    { id: 9, date: new Date(), type: 'CASH_INSERTED_BALANCE_FAILED', value: '1000' },
    { id: 6, date: new Date(), type: 'CASH_AUTO_RETURNED', value: '1000' },
    { id: 7, date: new Date(), type: 'PRODUCT_SELECTED', value: '콜라 500ml' },
    { id: 8, date: new Date(), type: 'PRODUCT_SHIPPED', value: '콜라 500ml' },
  ];

  const [logMessages, setLogMessages] = useState(initialLogMessagesData);

  const getLogContent = (type, value) => {
    if (type === 'INFO') return value;
    if (type === 'CASH_INSERTED') return `${formatPrice(value)}원이 투입됐습니다.`;
    if (type === 'CASH_RETRUNED') return `${formatPrice(value)}원이 반환됐습니다.`;
    if (type === 'CASH_AUTO_RETURNED')
      return `5초 동안 입력이 없어서 ${formatPrice(value)}원이 자동반환됐습니다.`;

    if (type === 'PRODUCT_SELECTED') return `${value}를 선택했습니다. 음료는 2초 뒤 출고됍니다.`;
    if (type === 'PRODUCT_SHIPPED') return `${value}가 출고됐습니다.`;

    if (type === 'CASH_INSERTED_SCOPE_FAILED') return `10~50000원이 사이의 금액을 입력해주세요.`;
    if (type === 'CASH_INSERTED_BALANCE_FAILED')
      return `지갑에 ${formatPrice(value)}원 짜리가 없습니다.`;
    if (type === 'CASH_INSERTED_UNIT_FAILED')
      return `화폐 단위로 금액을 입력해주세요.(10, 50, 500, 1000, 5000, 10000, 50000)`;
  };

  return (
    <LogMessagesContext.Provider value={{ logMessages, setLogMessages, getLogContent }}>
      {props.children}
    </LogMessagesContext.Provider>
  );
};
