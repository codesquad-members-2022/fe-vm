function getRandomNumber({ min, max }) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export { getRandomNumber, delay };
