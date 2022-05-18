function getRandomNumber({ min, max }) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export { getRandomNumber, delay };

// TODO: Home 페이지에서 금액 입력할 때 아래 함수 활용 예정
// function requestMoneyCharge(money) {
//   let chargeMoney = 0;
//   let requestMoney = money;
//   coins.forEach((coin) => {
//     const q = Math.floor(requestMoney / coin.AMOUNT);
//     const hasEnoughCoins = coin.CNT >= q;
//     if (requestMoney < 10) {
//       return;
//     }
//     if (hasEnoughCoins) {
//       chargeMoney += coin.AMOUNT * q;
//       requestMoney -= coin.AMOUNT * q;
//       return;
//     }
//     chargeMoney += coin.AMOUNT * coin.CNT;
//     requestMoney -= coin.AMOUNT * coin.CNT;
//   });
//   return chargeMoney;
// }
