import { useReducer, useCallback } from 'react';

const historyReducer = (historyList, { action, historyState }) => {
  switch (action) {
    case 'INPUT':
      return [...historyList, `💸 총 ${historyState}원을 투입하였습니다.`];
    case 'SELECT':
      return [...historyList, `${historyState} 선택하였습니다.`];
    case 'RETURN':
      return [...historyList, `${historyState}원이 반환되었습니다.`];
    case 'RESET':
      return [];
    default:
      return new Error("'action'이 없습니다.");
  }
};

export default function useHistory() {
  const [historyList, dispatchHistoryList] = useReducer(historyReducer, []);

  const addInputHistory = useCallback(finalPay => {
    dispatchHistoryList({ action: 'INPUT', historyState: finalPay });
  }, []);

  const addSelectHistory = useCallback(selectedProduct => {
    dispatchHistoryList({ action: 'SELECT', historyState: selectedProduct.detail });
  }, []);

  const returnPayHistory = useCallback(totalPay => {
    dispatchHistoryList({ action: 'RETURN', historyState: totalPay });
  }, []);

  const resetHistory = useCallback(() => {
    dispatchHistoryList({ action: 'RESET' });
  }, []);

  return { historyList, addInputHistory, addSelectHistory, returnPayHistory, resetHistory };
}
