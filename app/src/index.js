import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App';
import products from './mock/products.json';
import money from './mock/money.json';

export const ProductsContext = createContext();
export const MoneyContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
      <MoneyContext.Provider value={money}>
        <App />
      </MoneyContext.Provider>
      </ProductsContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
