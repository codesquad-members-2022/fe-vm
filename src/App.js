import React from 'react';
import Main from 'pages/Main';
import ContextProvider from 'context';
import { BASE_URL, RouteURL } from 'constants/RouteUrl';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const [vmPage, walletPage] = RouteURL;

function App() {
  return (
    <ContextProvider>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path={vmPage.path} element={vmPage.getElement()} />
            <Route path={walletPage.path} element={walletPage.getElement()} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
