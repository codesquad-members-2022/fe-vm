import React from 'react';
import ReactDOM from 'react-dom/client';

import 'reset-css';
import App from './App';
import MoneyProvider from './context/MoneyProvider';
import PriceProvider from './context/PriceProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PriceProvider>
      <MoneyProvider>
        <App />
      </MoneyProvider>
    </PriceProvider>
  </React.StrictMode>
);
