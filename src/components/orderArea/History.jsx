import React, { useState, useContext, useEffect } from 'react';
import { HistoryList, HistoryItem } from 'components/orderArea/History.style';
import { SelectedProductContext } from 'App';
import { FinalPayContext } from 'pages/VendingMachine';

export default function History() {
  const [historyList, setHistoryList] = useState([]);
  const finalPay = useContext(FinalPayContext)[0];
  const selectedProduct = useContext(SelectedProductContext)[0];
  const HISTORY_TEXT = {
    INPUT: `💸 총 ${finalPay.toLocaleString('en')}원을 투입하였습니다.`,
    SELECT: `${selectedProduct.detail} 선택하였습니다.`
  };

  useEffect(() => {
    const newHistory = HISTORY_TEXT.INPUT;
    if (finalPay) setHistoryList([...historyList, newHistory]);
  }, [finalPay]);

  useEffect(() => {
    const newHistory = HISTORY_TEXT.SELECT;
    if (selectedProduct.detail) setHistoryList([...historyList, newHistory]);
    else setHistoryList([]);
  }, [selectedProduct]);

  return (
    <HistoryList>
      {historyList.map((item, idx) => (
        <HistoryItem key={`history_${idx}`}>{item}</HistoryItem>
      ))}
    </HistoryList>
  );
}
