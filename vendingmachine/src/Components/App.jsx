import { useEffect, useState, useCallback, createContext } from 'react';
import Header from './Header';
import styled from 'styled-components';
import { FlexCenter } from '../styled-components/util';
import VendingMachine from './VendingMachine';
import Wallet from './Wallet';
import { Routes, Route } from 'react-router-dom';

export const myContext = createContext();

const MONEY_INFO = [
  { unit: 10, number: 0 },
  { unit: 50, number: 1 },
  { unit: 100, number: 5 },
  { unit: 500, number: 5 },
  { unit: 1000, number: 2 },
  { unit: 5000, number: 2 },
  { unit: 10000, number: 1 },
  { total: 25050 },
];

const App = () => {
  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyInfo, setMoneyInfo] = useState(null);
  const [inputMoney, setInputMoney] = useState(0);

  useEffect(() => {
    setMoneyInfo(MONEY_INFO);
    setTotalMoney(MONEY_INFO[MONEY_INFO.length - 1].total);
  }, []);

  const updateTotalMoney = useCallback(
    (temp, index) => {
      setTotalMoney(totalMoney - temp[index].unit);
      return temp;
    },
    [totalMoney],
  );

  function updateMoneyInfo(index) {
    const temp = JSON.parse(JSON.stringify(moneyInfo));

    temp[index] = temp[index].number > 0 && {
      ...moneyInfo[index],
      number: moneyInfo[index].number - 1,
    };

    return updateTotalMoney(temp, index);
  }

  function handleClickMoney(money, index) {
    setInputMoney(inputMoney + money);
    setMoneyInfo(updateMoneyInfo(index));
  }

  return (
    <>
      {moneyInfo && (
        <>
          <Header />
          <Container>
            <myContext.Provider
              value={{ moneyInfo, inputMoney, handleClickMoney }}
            >
              <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route
                  path="/wallet"
                  element={
                    <Wallet moneyInfo={moneyInfo} totalMoney={totalMoney} />
                  }
                />
              </Routes>
            </myContext.Provider>
          </Container>
        </>
      )}
    </>
  );
};

const Container = styled(FlexCenter)``;

export default App;
