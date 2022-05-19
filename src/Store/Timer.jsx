import React, {useContext} from 'react';

export const TimerContext = React.createContext(null);

export const TimerStore = ({children}) => {
  const Timer = {};

  const setTimer = (key, callback, time) => {
    Timer[key] = setTimeout(callback, time);
  };

  const clearTimer = key => {
    clearTimeout(Timer[key]);
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
