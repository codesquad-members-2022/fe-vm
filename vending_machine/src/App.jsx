import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Wallet from './pages/Wallet';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import { changedKoreanLocaleMoney, fetchData } from './utility/util';

export const DrinkDataContext = React.createContext();
export const TotalMoneyContext = React.createContext();
export const ProgressContext = React.createContext();

const reducer = (state, { type, data }) => {
  let newState = [];

  switch (type) {
    case 'ADD_MONEY':
      newState = [...state, `${data}원 투입`];
      break;
    case 'RETURN_MONEY':
      newState = [...state, `${data}원 반환`];
      break;
    case 'SELECT_DRINK':
      newState = [...state, `${data} 선택`];
      break;

    default:
      return state;
  }

  return newState;
};

const App = () => {
  const [drinkData, setDrinkData] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [progressBox, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const drinkUrl = `${process.env.PUBLIC_URL}data/drink.json`;

    getDrinkData(drinkUrl, setDrinkData);
  }, []);

  const getDrinkData = async (url, setData) => {
    const response = await fetchData(url);

    setData(response.drink);
  };

  const addMoneyMessage = (inputMoney) => {
    dispatch({
      type: 'ADD_MONEY',
      data: changedKoreanLocaleMoney(inputMoney),
    });
  };

  const returnMoneyMessage = (totalMoney) => {
    dispatch({
      type: 'RETURN_MONEY',
      data: changedKoreanLocaleMoney(totalMoney),
    });
  };

  const selectedDrinkMessage = (drinkName) => {
    dispatch({
      type: 'SELECT_DRINK',
      data: drinkName,
    });
  };

  return (
    <DrinkDataContext.Provider value={{ drinkData, setDrinkData }}>
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
                  <Route path="/" element={<Home />} />
                  <Route path="/wallet" element={<Wallet />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </StyledMain>
            </StyledApp>
          </BrowserRouter>
        </ProgressContext.Provider>
      </TotalMoneyContext.Provider>
    </DrinkDataContext.Provider>
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
