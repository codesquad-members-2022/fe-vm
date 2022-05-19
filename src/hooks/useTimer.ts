import React, { createContext, useContext, useMemo } from 'react';

interface Props {
  children: string;
}

const timer = {};

const TimerContext = createContext(timer);

export const TimerProvider = ({ children }: Props) => {
  const value = useMemo(() => timer, [timer]);

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
};

export const useTimer = () => {
  const timer = useContext(TimerContext);

  const setTimer = (key) => {
    if (Object.hasOwn(timer, key)) {
      timer[key] += 1;
      return;
    }
    timer[key] = 1;
  };

  console.log('[useTimer]: ', timer);

  return [timer, setTimer];
};
