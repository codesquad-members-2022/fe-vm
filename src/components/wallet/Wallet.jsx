import styled from "styled-components";

import colors from "../../constants/colors";
import MoneyInfo from "./MoneyInfo";
import TotalAmount from "./TotalAmount";
import VmWalletContextStore from "../../stores/VmWalletStore";
import { useContext } from "react";

const Wallet = () => {
  const VmWalletInfo = useContext(VmWalletContextStore);

  return (
    <WalletWrap>
      <MoneyWrap>
        {VmWalletInfo.moneyInfo.map((money, idx) => {
          console.log("re-rendering wallet");
          return <MoneyInfo money={money} number={idx} key={idx} />;
        })}
      </MoneyWrap>
      <TotalAmount />
    </WalletWrap>
  );
};

const WalletWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  height: 80vh;
  margin: auto;
  border-radius: 10px;
  border: 10px solid black;
  background-color: ${colors.lightWhite};
  margin-top: 5%;
`;

const MoneyWrap = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 15%;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export default Wallet;
