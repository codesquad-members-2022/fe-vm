import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';

import theme from '@/theme';
import Home from '@/Page/Home';
import MyPage from '@/Page/MyPage';

import { WalletContextProvider } from '@/Context/WalletContext';
import { MessageContextProvider } from './Context/MessageContext';
import { PriceContextProvider } from '@/Context/PriceContext';

interface ProviderProps {
  contexts: Array<React.ElementType | any>;
  children: React.ReactNode;
}

const AppProvider = ({ contexts, children }: ProviderProps) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children,
  );

export default function App(): JSX.Element {
  return (
    <>
      <AppProvider
        contexts={[
          WalletContextProvider,
          MessageContextProvider,
          PriceContextProvider,
        ]}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </>
  );
}