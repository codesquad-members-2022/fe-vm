import styled from "styled-components";
import { useEffect, useRef, useContext } from "react";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";
import VmWalletContextStore from "../../stores/VmWalletStore";

const InfoWrap = styled.div`
  width: 80%;
  height: 10%;
  margin: 5% auto 0 auto;
  border-radius: 10px;
  border: 9px solid black;
  font-size: 18px;
  text-align: center;
  background-color: white;
`;
const InputCoins = styled.input`
  width: 80%;
  height: 50%;
  margin-top: 5%;
  font-size: 18px;
  text-align: right;
  border: none;
  outline: none;
`;

const ShowCoins = styled.div`
  width: 80%;
  height: 50%;
  margin-top: 5%;
  font-size: 18px;
  text-align: right;
`;

const InputCoin = () => {
  const inputRef = useRef();
  const VmWalletInfo = useContext(VmWalletContextStore);

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      inputRef.current.disabled = true;
      VmWalletInfo.setCurrMoney(Number(inputRef.current.value));
      VmWalletInfo.setIsInsertCoin(true);
    }
  };
  const onInputClick = () => {
    VmWalletInfo.setIsInsertCoin(false);
  };
  useEffect(() => {}, []);
  return (
    <InfoWrap>
      {VmWalletInfo.isInsertCoin ? (
        <ShowCoins onClick={onInputClick}>{VmWalletInfo.currMoney}원</ShowCoins>
      ) : (
        <div>
          <InputCoins onKeyPress={onKeyPress} ref={inputRef} placeholder="금액을 입력하세요"></InputCoins>
          <Text font={FONT.LARGE_BOLD}>원</Text>
        </div>
      )}
    </InfoWrap>
  );
};

export default InputCoin;
