import React, { useEffect, useContext, useRef } from 'react';
import { HistoryList, HistoryItem } from 'components/orderArea/History.style';
import { HistoryContext } from 'contexts/HistoryProvider';

export default function History() {
  const historyList = useContext(HistoryContext);
  const historyContainer = useRef(null);

  useEffect(() => {
    historyContainer.current.scrollTop = historyContainer.current.scrollHeight;
  }, [historyList]);

  return (
    <HistoryList ref={historyContainer}>
      {historyList.map((item, idx) => (
        <HistoryItem key={`history_${idx}`}>{item}</HistoryItem>
      ))}
    </HistoryList>
  );
}
