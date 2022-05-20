import { useCallback } from "react";

const { createContext, useReducer } = require("react");

function historyReducer(histories, { type, history }) {
  const historyTemplate = {
    id: histories.history.length + 1,
    comment: "",
  };

  switch (type) {
    case "INSERT_COIN":
      return {
        history: histories.history.concat({
          ...historyTemplate,
          comment: `${history.coin}원이 투입되었습니다.`,
        }),
      };

    case "PURCHASE_PRODUCT":
      return {
        history: histories.history.concat({
          ...historyTemplate,
          comment: `${history.product}를(을) 구매했습니다.`,
        }),
      };

    case "RETURN_COIN":
      return {
        history: histories.history.concat({
          ...historyTemplate,
          comment: `잔돈 ${history.change}원을 반환합니다.`,
        }),
      };

    default:
      return histories;
  }
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
