import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from './App';
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Store } from './components/main/store';
>>>>>>> 85646caaee5539adea0f7e7fcec66ef9a42f16ea

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/store" element={<Store />} />
      </Routes>
>>>>>>> 85646caaee5539adea0f7e7fcec66ef9a42f16ea
    </BrowserRouter>
  </React.StrictMode>
);
