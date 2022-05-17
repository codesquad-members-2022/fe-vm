import VmWalletContextStore from "../../stores/VmWalletStore";

const returnMoney = (contextApi) => {
  const copyInfo = contextApi.moneyInfo.slice();
  let currMoney = contextApi.currMoney;
  const returnCharge = (typeOfMoney, idx) => {
    let quotient = Math.floor(currMoney / typeOfMoney);
    copyInfo[copyInfo.length - 1 - idx].amount += quotient;
    currMoney = currMoney % typeOfMoney;
  };

  if (contextApi.isInsertCoin && contextApi.currMoney > 0) {
    [...copyInfo].reverse().forEach((moneyInfo, idx) => {
      returnCharge(moneyInfo.type, idx);
    });
    contextApi.setMoneyInfo(copyInfo);
    contextApi.setCurrMoney(0);
    contextApi.setLogMessage(contextApi.logMessage.concat(`${contextApi.currMoney}원 반환`));
  }
};

export default returnMoney;
