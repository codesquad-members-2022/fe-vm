const addCommasToNumber = number => number.toLocaleString('en');

const delay = time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });

export { addCommasToNumber, delay };
