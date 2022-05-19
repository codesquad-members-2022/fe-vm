import React, {useContext} from 'react';

export const TimerContext = React.createContext(null);

//TODO: Timer 객체를 순수하게 사용하기? 클로저?
export const TimerStore = ({children}) => {
  const Timer = {
    reservation: null,
    logs: [],
  };

  const setTimer = (callback, type, productData) => {
    switch (type) {
      case 'insert':
        Timer.reservation = setTimeout(() => {
          callback();
        }, 5000);
        break;

      // TODO: 투입금액의 상태를 받아 얼마 잔돈 남았는지도 로그에 출력 가능
      case 'buy':
        Timer.logs = [...Timer.logs, productData];
        Timer.reservation = setTimeout(() => {
          callback(Timer.logs);
          Timer.logs = [];
        }, 2000);
        break;

      default:
        throw new Error(`타이머 type 에러: ${type}`);
    }
  };

  const clearTimer = () => {
    clearTimeout(Timer.reservation);
  };

  return (
    <TimerContext.Provider value={{Timer, setTimer, clearTimer}}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const {Timer, setTimer, clearTimer} = useContext(TimerContext);

  return {Timer, setTimer, clearTimer};
};
