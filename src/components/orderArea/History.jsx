import React, { useContext } from 'react';
import { HistoryList, HistoryItem } from 'components/orderArea/History.style';
import { HistoryContext } from 'contexts/HistoryProvider';

export default function History() {
  const historyList = useContext(HistoryContext);

  return (
    <HistoryList>
      {historyList.map((item, idx) => (
        <HistoryItem key={`history_${idx}`}>{item}</HistoryItem>
      ))}
    </HistoryList>
  );
}
