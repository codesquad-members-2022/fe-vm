import { useContext } from "react";
import styled from "styled-components";
import { CoinContext } from "context";

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
  const balance = coin.reduce((acc, cur) => acc + cur.unit * cur.count, 0);

  return <StyledBalance>{balance + "원"}</StyledBalance>;
}

export { Balance };
