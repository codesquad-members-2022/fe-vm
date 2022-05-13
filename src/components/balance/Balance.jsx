import { useEffect, useContext } from "react";
import styled from "styled-components";
import { CoinContext } from "context";
import { useBalance } from "hooks";

const StyledBalance = styled.div`
  width: 100%;
  background-color: #c0eda6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border: none;
  margin-top: 10px;
`;

function Balance() {
  const { coin } = useContext(CoinContext);
  const { balance, calcBalance } = useBalance(0);

  useEffect(() => {
    calcBalance(coin);
  }, [coin, calcBalance]);

  return <StyledBalance>{balance + "원"}</StyledBalance>;
}

export { Balance };
