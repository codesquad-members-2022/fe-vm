import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BASE_URL, RouteURL } from 'constants/RouteUrl';

const [vmPage, walletPage] = RouteURL;

function App() {
  return (
    <>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path={vmPage.path} element={vmPage.getElement()} />
          <Route path={walletPage.path} element={walletPage.getElement()} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
