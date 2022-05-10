import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import GlobalStyle from './style/globalStyles';
import { fetchData } from './utility/util';

export const VmInputValueContext = React.createContext();
export const ProgressContext = React.createContext();

const App = () => {
  const [drinkData, setDrinkData] = useState([]);
  const [inputValue, setInputValue] = useState(0);

  const [progressBox, setProgressBox] = useState([]);

  useEffect(() => {
    const drinkUrl = `${process.env.PUBLIC_URL}data/drink.json`;

    getDrinkData(drinkUrl, setDrinkData);
  }, []);

  const getDrinkData = async (url, setData) => {
    const response = await fetchData(url);

    setData(response.drink);
  };

  const addMoneyMessage = (value) => {
    setProgressBox([...progressBox, `${value}원이 투입 되었습니다`]);
  };

  const returnMoneyMessage = (value) => {
    setProgressBox([...progressBox, `잔돈 ${value}원이 반환 되었습니다`]);
  };

  const selectedDrinkMessage = (drinkName) => {
    setProgressBox([...progressBox, `${drinkName}가 선택 되었습니다`]);
  };

  return (
    <VmInputValueContext.Provider value={{ inputValue, setInputValue }}>
      <ProgressContext.Provider
        value={{
          progressBox,
          addMoneyMessage,
          returnMoneyMessage,
          selectedDrinkMessage,
        }}
      >
        <GlobalStyle />
        <BrowserRouter>
          <StyledApp>
            <Header />
            <StyledMain>
              <Routes>
                <Route path="/" element={<Home drinkData={drinkData} />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </StyledMain>
          </StyledApp>
        </BrowserRouter>
      </ProgressContext.Provider>
    </VmInputValueContext.Provider>
  );
};

const StyledApp = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
`;

const StyledMain = styled.main`
  display: flex;
  margin-top: 20px;
  width: 100%;
`;

export default App;
