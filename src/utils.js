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

function getQuotient(parent, child) {
  return Math.floor(parent, child);
}

export { getRandomNumber, delay, copyObject, getQuotient };
