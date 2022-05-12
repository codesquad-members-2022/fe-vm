import styled from "styled-components";

import colors from "../../constants/colors";
import money from "../../constants/money";
import MoneyInfo from "./MoneyInfo";
import TotalAmount from "./TotalAmount";

const Wallet = () => {
  return (
    <WalletWrap>
      <MoneyWrap>
        {money.map((money, idx) => {
          return <MoneyInfo money={money} key={idx} />;
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
