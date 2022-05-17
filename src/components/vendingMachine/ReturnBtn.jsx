import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";
import VmWalletContextStore from "../../stores/VmWalletStore";
import { useContext } from "react";

const ReturnBtn = () => {
  const VmWalletInfo = useContext(VmWalletContextStore);
  const copyInfo = VmWalletInfo.moneyInfo.slice();

  const onReturnClick = () => {
    if (VmWalletInfo.isInsertCoin && VmWalletInfo.currMoney > 0) {
      copyInfo.forEach((moneyInfo, idx) => {
        if (moneyInfo.type === 10000) {
          copyInfo[idx].amount += Math.floor(VmWalletInfo.currMoney / 10000);
        } else if (moneyInfo.type === 5000) {
          copyInfo[idx].amount += Math.floor((VmWalletInfo.currMoney % 10000) / 5000);
        } else if (moneyInfo.type === 1000) {
          copyInfo[idx].amount += Math.floor(((VmWalletInfo.currMoney % 10000) % 5000) / 1000);
        } else if (moneyInfo.type === 500) {
          copyInfo[idx].amount += Math.floor(
            (((VmWalletInfo.currMoney % 10000) % 5000) % 1000) / 500
          );
        } else if (moneyInfo.type === 100) {
          copyInfo[idx].amount += Math.floor(
            ((((VmWalletInfo.currMoney % 10000) % 5000) % 1000) % 500) / 100
          );
        } else if (moneyInfo.type === 50) {
          copyInfo[idx].amount += Math.floor(
            (((((VmWalletInfo.currMoney % 10000) % 5000) % 1000) % 500) % 100) / 50
          );
        } else if (moneyInfo.type === 10) {
          copyInfo[idx].amount += Math.floor(
            ((((((VmWalletInfo.currMoney % 10000) % 5000) % 1000) % 500) % 100) % 50) / 10
          );
        }
      });
      VmWalletInfo.setMoneyInfo(copyInfo);
      VmWalletInfo.setCurrMoney(0);
      VmWalletInfo.setLogMessage(
        VmWalletInfo.logMessage.concat(`${VmWalletInfo.currMoney}원 반환`)
      );
    }
  };

  return (
    <ReturnBtnWrap onClick={onReturnClick}>
      <Text font={FONT.LARGE_BOLD}>반환</Text>
    </ReturnBtnWrap>
  );
};

const ReturnBtnWrap = styled.div`
  padding-top: 3%;
  width: 80%;
  height: 10%;
  margin: 5% auto 0 auto;
  border-radius: 10px;
  border: 9px solid black;
  text-align: center;
  background-color: white;
  cursor: pointer;
`;

export default ReturnBtn;
