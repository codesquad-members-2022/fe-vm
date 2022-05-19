import React, {useContext} from 'react';

export const TimerContext = React.createContext(null);

//TODO: Timer 객체를 순수하게 사용하기? 클로저?
export const TimerStore = ({children}) => {
  const Timer = {
    reservation: null,
    logs: [],
  };

  const setTimer = (callback, time, data) => {
    Timer.reservation = setTimeout(() => {
      callback(data);
      Timer.logs = [];
    }, time);
    // Timer.logs = [...Timer.logs, {title: data.title, price: data.price}];
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
