import styled from "styled-components";

import colors from "../../constants/colors";
import money from "../../constants/money";
import Text from "../../Text";
import { FONT } from "../../constants/fonts";

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

const MoneyInfoWrap = styled.div``;

const Wallet = () => {
  return (
    <WalletWrap>
      {money.map((money, idx) => {
        return (
          <MoneyInfoWrap key={idx}>
            <Text key={(idx + 1) / 3.3} font={FONT.MEDIUM_BOLD}>
              {money.type}
            </Text>
            <Text key={idx / 3.2} font={FONT.MEDIUM_BOLD}>
              {money.amount}
            </Text>
          </MoneyInfoWrap>
        );
      })}
    </WalletWrap>
  );
};

export default Wallet;
