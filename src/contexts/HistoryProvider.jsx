/* eslint-disable react/prop-types */
import React, { createContext, useMemo } from 'react';
import useHistory from 'hooks/useHistory';

export const HistoryContext = createContext([]);
export const HistoryDispatchContext = createContext(null);

export function HistoryProvider({ children }) {
  const { historyList, addInputHistory, addSelectHistory, returnPayHistory, resetHistory } = useHistory();
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
