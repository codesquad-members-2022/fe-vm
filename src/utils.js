/* eslint-disable no-restricted-syntax */
function getRandomNumber({ min, max }) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function copyObject(obj) {
  return { ...obj };
}

export { getRandomNumber, delay, copyObject };
