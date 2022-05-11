import styled from "styled-components";
import { Coin, Balance } from "components";
import { money } from "data";
import { useState } from "react";

const StyledWallet = styled.div`
  width: 400px;
  padding: 20px;
  font-size: 1.2em;
  font-weight: 700;
  background-color: #ff8080;
`;

const Wallet = () => {
  const calcBalance = (coin) => {
    return coin.reduce((acc, cur) => acc + cur.unit * cur.count, 0);
  };

  const [coin, setCoin] = useState(money);
  const [balance, setBalance] = useState(calcBalance(coin));

  return (
    <StyledWallet>
      <Coin coin={coin} />
      <Balance balance={balance} />
    </StyledWallet>
  );
};

export { Wallet };
