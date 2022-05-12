import React, { useState } from 'react';
import { HistoryList, HistoryItem } from 'components/orderArea/History.style';

export default function History() {
  const [historyList] = useState([]);

  return (
    <HistoryList>
      {historyList.map((item, idx) => (
        <HistoryItem key={`history_${idx}`}>{item}</HistoryItem>
      ))}
    </HistoryList>
  );
}
