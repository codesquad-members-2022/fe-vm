const returnMoney = (contextData) => {
  const copyInfo = contextData.moneyInfo.slice();
  let currMoney = contextData.currMoney;

  const returnCharge = (typeOfMoney, idx) => {
    let quotient = Math.floor(currMoney / typeOfMoney);
    copyInfo[copyInfo.length - 1 - idx].amount += quotient;
    currMoney = currMoney % typeOfMoney;
  };

  if (contextData.isInsertCoin && contextData.currMoney > 0) {
    [...copyInfo].reverse().forEach((moneyInfo, idx) => {
      returnCharge(moneyInfo.type, idx);
    });
    contextData.setMoneyInfo(copyInfo);
    contextData.setCurrMoney(0);
    contextData.setLogMessage(contextData.logMessage.concat(`${contextData.currMoney}원 반환`));
  }
};

export default returnMoney;
