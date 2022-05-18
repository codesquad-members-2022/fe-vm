import React, { useState } from "react";

export const OrderInProgressContext = React.createContext([]);
export const SetOrderInProgressContext = React.createContext(() => {});

export default function OrderInProgressProvider({ children }) {
  const [orderInProgress, setOrderInProgress] = useState(false);

  return (
    <SetOrderInProgressContext.Provider value={setOrderInProgress}>
      <OrderInProgressContext.Provider value={orderInProgress}>{children}</OrderInProgressContext.Provider>
    </SetOrderInProgressContext.Provider>
  );
}
