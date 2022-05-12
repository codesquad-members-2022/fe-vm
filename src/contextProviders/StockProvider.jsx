import { createContext, useEffect, useState } from "react";
import { fetchData } from "../fetcher";

export const Stocks = createContext();

export const StocksProvider = ({ children }) => {
  const [stocks, setStocks] = useState();

  useEffect(() => {
    (async () => {
      const initialStocks = await fetchData("stock");
      setStocks(initialStocks);
    })();
  }, []);

  const updateStocks = (productId, newStock) => {
    //아래 두 줄을 한번에 처리하는 방법은 없나?
    const updatedStocks = { ...stocks };
    updateStocks[productId] = newStock;
    setStocks(updatedStocks);
  };

  return (
    <Stocks.Provider
      value={{
        stocks,
        updateStocks
      }}
    >
      {children}
    </Stocks.Provider>
  );
};
