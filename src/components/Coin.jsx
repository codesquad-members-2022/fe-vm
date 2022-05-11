import styled from "styled-components";
import { Button } from "components";

const CoinContainer = styled.ul`
  li {
    display: grid;
    align-items: center;
    grid-template-columns: 50% 50%;

    div {
      background-color: #fff7bc;
      display: grid;
      place-items: center;
      height: 50px;
      color: #000;
      margin: 10px;
    }
  }
`;

const Count = styled.div``;

function Coin({ coin }) {
  return (
    <CoinContainer>
      {coin.map(({ id, unit, count }) => (
        <li key={id}>
          <Button color="yellow" size="medium">
            {unit}
          </Button>
          <Count>{count}</Count>
        </li>
      ))}
    </CoinContainer>
  );
}

export { Coin };
