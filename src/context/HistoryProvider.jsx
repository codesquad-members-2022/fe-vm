import { useCallback, createContext, useReducer } from "react";

function historyReducer(histories, { type, history }) {
  const comment = {
    INSERT_COIN: `${history.coin}원이 투입되었습니다.`,
    PURCHASE_PRODUCT: `${history.product}를(을) 구매합니다.`,
    RETURN_COIN: `잔돈 ${history.change}를(을) 반환합니다.`,
  };

  const historyTemplate = {
    history: histories.history.concat({
      id: histories.history.length + 1,
      comment: comment[type],
    }),
  };

  return historyTemplate;
}

const initialHistory = {
  history: [],
};

const HistoryContext = createContext();
const AddHistoryContext = createContext();

function HistoryProvider({ children }) {
  const [histories, dispatch] = useReducer(historyReducer, initialHistory);

  const addHistory = useCallback((type, history) => {
    dispatch({
      type,
      history,
    });
  }, []);

  return (
    <HistoryContext.Provider value={histories}>
      <AddHistoryContext.Provider value={addHistory}>{children}</AddHistoryContext.Provider>
    </HistoryContext.Provider>
  );
}

export { HistoryContext, AddHistoryContext, HistoryProvider };
