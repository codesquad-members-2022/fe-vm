import styled from "styled-components";

const StyledHistoryBox = styled.ul`
  height: 300px;
  background-color: #f2f2f2;
  overflow-y: scroll;
  margin-top: 10px;

  li {
    padding: 5px;
  }
`;

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

const TotalInsertCoin = styled.p`
  color: #f2f2f2;
  border: 2px solid;
  border-radius: 10px;
  padding: 20px;
`;

const StyledVendController = styled.div`
  width: 300px;
  margin-left: 10px;

  div,
  p {
    display: grid;
    place-items: center;
    margin: 10px 0px;
    font-size: 1.5em;
  }

  div + div {
    margin-top: 20px;
  }
`;

export { StyledHistoryBox, StyledInsertCoin, TotalInsertCoin, StyledVendController };
