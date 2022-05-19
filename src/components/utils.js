export default function getTotalMoneyInWallet(coins) {
  return coins.reduce((prev, { AMOUNT, CNT }) => prev + AMOUNT * CNT, 0);
}
