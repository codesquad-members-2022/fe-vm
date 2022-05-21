/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import { addCommasToNumber } from 'utils/util';

export const HistoryContext = createContext([]);
export const HistoryDispatchContext = createContext(null);

export function HistoryProvider({ children }) {
  const historyReducer = (historyList, { action, historyState }) => {
    switch (action) {
      case 'INPUT':
        return [...historyList, `💵 총 ${addCommasToNumber(historyState)}원을 투입하였습니다.`];
      case 'SELECT':
        return [
          ...historyList,
          `${historyState.selectedProduct.detail} 선택하였습니다.`,
          `💰 총 ${addCommasToNumber(historyState.restMoney)}원이 남았습니다.`
        ];
      case 'RETURN':
        return [...historyList, `💸 ${addCommasToNumber(historyState)}원이 반환되었습니다.`];
      case 'RESET':
        return [];
      default:
        return new Error("'action'이 없습니다.");
    }
  };

  const [historyList, dispatchHistoryList] = useReducer(historyReducer, []);

  const addInputHistory = useCallback(finalPay => {
    dispatchHistoryList({ action: 'INPUT', historyState: finalPay });
  }, []);

  const addSelectHistory = useCallback((selectedProduct, restMoney) => {
    dispatchHistoryList({ action: 'SELECT', historyState: { selectedProduct, restMoney } });
  }, []);

  const returnPayHistory = useCallback(totalPay => {
    dispatchHistoryList({ action: 'RETURN', historyState: totalPay });
  }, []);

  const resetHistory = useCallback(() => {
    dispatchHistoryList({ action: 'RESET' });
  }, []);

  const dispatches = useMemo(
    () => ({ addInputHistory, addSelectHistory, returnPayHistory, resetHistory }),
    [addInputHistory, addSelectHistory, returnPayHistory, resetHistory]
  );

  return (
    <HistoryContext.Provider value={historyList}>
      <HistoryDispatchContext.Provider value={dispatches}>{children}</HistoryDispatchContext.Provider>
    </HistoryContext.Provider>
  );
}
