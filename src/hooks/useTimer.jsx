import { useState } from "react";

const useTimer = () => {
  const [timerId, setTimerId] = useState(undefined);

  const setDebounce = (callback, delay) => {
    if (timerId) clearTimeout(timerId);
    setTimerId(setTimeout(callback, delay));
  };

  return { setDebounce };
};

export { useTimer };
