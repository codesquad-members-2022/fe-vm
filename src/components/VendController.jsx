import styled from "styled-components";
import { InsertCoin, ChangeOutlet, HistoryBox } from "components";

const StyledVendController = styled.div`
  width: 300px;
  margin-left: 10px;

  div {
    display: grid;
    place-items: center;
    margin: 0px 0px 10px 10px;
    font-size: 1.5em;
  }

  div + div {
    margin-top: 20px;
  }
`;

function VendController() {
  return (
    <StyledVendController>
      <InsertCoin />
      <ChangeOutlet />
      <HistoryBox />
    </StyledVendController>
  );
}

export { VendController };
