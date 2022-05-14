import styled from "styled-components";
import { CoinContainer, Balance } from "components";

const StyledWallet = styled.div`
  width: 400px;
  padding: 20px;
  font-size: 1.2em;
  font-weight: 700;
  background-color: #ff8080;
`;

const Wallet = () => {
  return (
    <StyledWallet>
      <CoinContainer />
      <Balance />
    </StyledWallet>
  );
};

export { Wallet };
