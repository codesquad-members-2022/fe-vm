import styled from "styled-components";
import MoneyUnits from "./MoneyUnits";

const Wallet = () => {
  return (
    <WalletContainer>
      <MoneyUnits />
    </WalletContainer>
  );
};

const WalletContainer = styled.div`
  border: 0.3rem solid black;
  min-width: 300px;
`;

export default Wallet;
