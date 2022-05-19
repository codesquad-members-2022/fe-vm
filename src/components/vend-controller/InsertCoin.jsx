import { useContext } from "react";
import { InsertCoinContext } from "context";
import styled from "styled-components";

const StyledInsertCoin = styled.input`
  width: 100%;
  height: 70px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
  margin: 0px 10px 10px 0px;
  text-align: center;
  font-size: 1.5em;

  &:focus {
    outline: none;
  }
`;

function InsertCoin() {
  const insertCoin = useContext(InsertCoinContext);

  return (
    <StyledInsertCoin
      defaultValue={insertCoin}
      type="number"
      min="0"
      placeholder="INSERT COIN"
    ></StyledInsertCoin>
  );
}

export { InsertCoin };
