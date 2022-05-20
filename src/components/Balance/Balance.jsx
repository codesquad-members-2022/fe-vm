import { useContext } from "react";
import { CoinContext } from "context";
import { StyledBalance } from "./Balance.styled";

function Balance() {
  const coin = useContext(CoinContext);
  const balance = coin.reduce((acc, cur) => acc + cur.unit * cur.count, 0);

  return <StyledBalance>{balance + "원"}</StyledBalance>;
}

export { Balance };
