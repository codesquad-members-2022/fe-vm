const throttle = (callback, delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        callback(...args);
        timer = null;
      }, delay);
    }
  };
};

export default throttle;
