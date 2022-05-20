import { useState, createContext, useCallback } from "react";

import Loading from "components/Loading/Loading";

export const DelayContext = createContext(() => {});
export const SetDelayContext = createContext(() => {});

const DelayProvider = ({ children }) => {
  const [purchasingItem, setPurchasingItem] = useState("");

  const setPurchasingNewItem = useCallback((newLoadingState) => {
    setPurchasingItem(() => newLoadingState);
  }, []);

  return (
    <SetDelayContext.Provider value={setPurchasingNewItem}>
      <DelayContext.Provider value={purchasingItem}>
        {purchasingItem && <Loading productName={purchasingItem} />}
        {children}
      </DelayContext.Provider>
    </SetDelayContext.Provider>
  );
};

export default DelayProvider;
