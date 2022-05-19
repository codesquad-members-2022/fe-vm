import React from 'react';
import ReactDOM from 'react-dom/client';

import 'reset-css';
import App from './App';
import MoneyProvider from './context/MoneyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoneyProvider>
      <App />
    </MoneyProvider>
  </React.StrictMode>
);
