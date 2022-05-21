import { useContext } from "react";
import { CoinContext } from "context";
import { MemoizedCoin } from "components";
import { StyledCoinContainer } from "./CoinContainer.styled";

function CoinContainer() {
  const coin = useContext(CoinContext);

  return (
    <StyledCoinContainer>
      {coin.map(({ id, unit, count }) => (
        <li key={id}>
          <MemoizedCoin unit={unit} count={count} />
        </li>
      ))}
    </StyledCoinContainer>
  );
}

export { CoinContainer };
