import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import { fetchData } from './utility/util';

export const TotalMoneyContext = React.createContext();
export const ProgressContext = React.createContext();

const App = () => {
  const [drinkData, setDrinkData] = useState([]);
  const [progressBox, setProgressBox] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

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
    <TotalMoneyContext.Provider value={{ totalMoney, setTotalMoney }}>
      <ProgressContext.Provider
        value={{
          progressBox,
          addMoneyMessage,
          returnMoneyMessage,
          selectedDrinkMessage,
        }}
      >
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
    </TotalMoneyContext.Provider>
  );
};

const StyledApp = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const StyledMain = styled.main`
  display: flex;
  margin-top: 20px;
`;

export default App;
