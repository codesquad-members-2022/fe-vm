import { InsertCoin, ChangeOutlet, HistoryBox } from "components";
import { StyledVendController } from "./VendController.styled";

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
