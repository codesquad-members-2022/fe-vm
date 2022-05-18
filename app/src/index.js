import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './component/App';
import products from './mock/products.json';

export const ProductsContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContext.Provider value={products}>
        <App />
      </ProductsContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
