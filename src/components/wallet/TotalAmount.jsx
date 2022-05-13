import styled from "styled-components";

import Text from "../../Text";
import { FONT } from "../../constants/fonts";
import VmWalletContextStore from "../../stores/VmWalletStore";
import { useContext, useEffect, useState } from "react";

const TotalAmount = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const VmWalletInfo = useContext(VmWalletContextStore);

  useEffect(() => {
    const total = VmWalletInfo.moneyInfo.reduce((acc, money) => {
      return acc + money.type * money.amount;
    }, 0);

    setTotalAmount(total);
  }, [VmWalletInfo.moneyInfo]);

  return (
    <TotalAmountWrap>
      <Text font={FONT.MEDIUM_BOLD}>총액 : {totalAmount}원</Text>
    </TotalAmountWrap>
  );
};

const TotalAmountWrap = styled.div`
  margin-top: 15%;
  width: 80%;
  height: 5%;
  border-radius: 5px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TotalAmount;
