import styled from "styled-components";

import Text from "../../Text";
import { FONT } from "../../constants/fonts";
import { useEffect, useState, useContext } from "react";
import VmWalletContextStore from "../../stores/VmWalletStore";

const MoneyInfo = ({ money, number }) => {
  const [moneyAmount, setMoneyAmount] = useState(0);
  const VmWalletInfo = useContext(VmWalletContextStore);
  const copyInfo = VmWalletInfo.moneyInfo.slice();

  const onMoneyClick = () => {
    if (moneyAmount > 0) {
      copyInfo[number].amount -= 1;
      setMoneyAmount(copyInfo[number].amount);
      VmWalletInfo.setMoneyInfo(copyInfo);
      VmWalletInfo.setIsInsertCoin(true);
      VmWalletInfo.setCurrMoney(VmWalletInfo.currMoney + money.type);
      VmWalletInfo.setLogMessage(VmWalletInfo.logMessage.concat(`${money.type}원 투입`));
    }
  };

  useEffect(() => {
    setMoneyAmount(copyInfo[number].amount);
  }, []);

  return (
    <MoneyInfoWrap>
      <MoneyWrap onClick={onMoneyClick}>
        <Text font={FONT.MEDIUM_BOLD}>{money.type}원</Text>
      </MoneyWrap>
      <AmountWrap>
        <Text font={FONT.LARGE_BOLD}>{moneyAmount}개</Text>
      </AmountWrap>
    </MoneyInfoWrap>
  );
};

const MoneyInfoWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
const MoneyWrap = styled.div`
  width: 50%;
  border-radius: 5px;
  border: 3px solid black;
  cursor: pointer;
`;
const AmountWrap = styled.div``;

export default MoneyInfo;
