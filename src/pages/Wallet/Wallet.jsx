import { CoinContainer, Balance } from "components";
import { StyledWallet } from "./Wallet.styled";

const Wallet = () => {
  return (
    <StyledWallet>
      <CoinContainer />
      <Balance />
    </StyledWallet>
  );
};

export { Wallet };
