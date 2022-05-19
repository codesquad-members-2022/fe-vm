import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BASE_URL, RouteURL } from 'constants/RouteUrl';
import Main from 'pages/Main';

const [vmPage, walletPage] = RouteURL;

function App() {
  return (
    <>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path={vmPage.path} element={vmPage.getElement()} />
            <Route path={walletPage.path} element={walletPage.getElement()} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
