/* eslint-disable react/prop-types */
import React, { createContext, useMemo } from 'react';
import useHistory from 'hooks/useHistory';

export const HistoryContext = createContext([]);
export const HistoryDispatchContext = createContext(null);

export function HistoryProvider({ children }) {
  const { historyList, addInputHistory, addSelectHistory, resetHistory } = useHistory();
  const dispatches = useMemo(
    () => ({ addInputHistory, addSelectHistory, resetHistory }),
    [addInputHistory, addSelectHistory, resetHistory]
  );

  return (
    <HistoryContext.Provider value={historyList}>
      <HistoryDispatchContext.Provider value={dispatches}>{children}</HistoryDispatchContext.Provider>
    </HistoryContext.Provider>
  );
}
