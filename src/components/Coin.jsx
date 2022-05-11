import styled from "styled-components";

const CoinContainer = styled.ul`
  li {
    display: grid;
    grid-template-columns: 50% 50%;

    div {
      background-color: #fff7bc;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      color: #000;
      margin: 10px;
    }
  }
`;

const Unit = styled.div`
  &:hover {
    cursor: pointer;
    background-color: #fd5d5d;
    color: #fff;
  }
`;

const Count = styled.div``;

function Coin({ coin }) {
  return (
    <CoinContainer>
      {coin.map(({ id, unit, count }) => (
        <li key={id}>
          <Unit>{unit}</Unit>
          <Count>{count}</Count>
        </li>
      ))}
    </CoinContainer>
  );
}

export { Coin };
