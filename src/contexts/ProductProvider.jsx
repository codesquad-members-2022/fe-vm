import React, { createContext, useCallback, useEffect, useMemo, useReducer } from "react";
import { API } from "utils";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "INCREASE":
      const increasedProducts = state.map((product) => {
        return product.id === action.targetId ? { ...product, count: product.count + 1 } : product;
      });
      return increasedProducts;

    case "DECREASE":
      const decreasedProducts = state.map((product) => {
        return product.id === action.targetId ? { ...product, count: product.count - 1 } : product;
      });
      return decreasedProducts;

    default:
      throw new Error("ProductProvider Invalid Type");
  }
};

const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, []);

  const fetchProductData = async () => {
    const { data: berverageData } = await API.getBeverage();
    dispatch({ type: "INIT", data: berverageData });
  };

  const onIncreaseProduct = useCallback((targetId) => {
    dispatch({ type: "INCREASE", targetId });
  }, []);

  const onDecreaseProduct = useCallback((targetId) => {
    dispatch({ type: "DECREASE", targetId });
  }, []);

  const dispatches = useMemo(() => {
    return {
      onIncreaseProduct,
      onDecreaseProduct,
    };
  }, [onIncreaseProduct, onDecreaseProduct]);

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <ProductStateContext.Provider value={products}>
      <ProductDispatchContext.Provider value={dispatches}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};

export const ProductStateContext = createContext();
export const ProductDispatchContext = createContext();
export default ProductProvider;
