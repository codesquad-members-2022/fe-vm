/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';

export const SelectedProductContext = createContext(null);
export const SelectedProductSetContext = createContext(null);

export function SelectedProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState({ detail: null, price: null });

  return (
    <SelectedProductContext.Provider value={selectedProduct}>
      <SelectedProductSetContext.Provider value={setSelectedProduct}>{children}</SelectedProductSetContext.Provider>
    </SelectedProductContext.Provider>
  );
}
