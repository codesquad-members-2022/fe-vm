export const debounce = function () {
  let timer;

  return function (func, time) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, time);
  };
};
