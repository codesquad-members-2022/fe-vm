import React, { useReducer, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import { changeKoreanLocalMoney } from './utility/util';

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
  const [totalMoney, setTotalMoney] = useState(0);
  const [progressBox, dispatch] = useReducer(reducer, []);

  const addMoneyMessage = (inputMoney) => {
    dispatch({
      type: 'ADD_MONEY',
      data: changeKoreanLocalMoney(inputMoney),
    });
  };

  const returnMoneyMessage = (totalMoney) => {
    dispatch({
      type: 'RETURN_MONEY',
      data: changeKoreanLocalMoney(totalMoney),
    });
  };

  const selectedDrinkMessage = (drinkName) => {
    dispatch({
      type: 'SELECT_DRINK',
      data: drinkName,
    });
  };

  const progressContextValue = {
    progressBox,
    addMoneyMessage,
    returnMoneyMessage,
    selectedDrinkMessage,
  };

  return (
    <TotalMoneyContext.Provider value={[totalMoney, setTotalMoney]}>
      <ProgressContext.Provider value={progressContextValue}>
        <BrowserRouter basename="fe-vm">
          <StyledApp>
            <Header />
            <Main />
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

export default App;
