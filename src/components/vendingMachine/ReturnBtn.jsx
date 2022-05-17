import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";
import VmWalletContextStore from "../../stores/VmWalletStore";
import { useContext } from "react";
import returnMoney from "./returnMoney";

const ReturnBtn = () => {
  const VmWalletInfo = useContext(VmWalletContextStore);

  const onReturnClick = () => {
    returnMoney(VmWalletInfo);
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
