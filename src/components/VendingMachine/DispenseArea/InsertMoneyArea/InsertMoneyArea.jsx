import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import constants from "utils/constants";

import { Wrapper, insertButtonStyle } from "./InsertMoneyArea.styled";

const { CURRENCY } = constants;
const { INSERT } = constants.BUTTON_NAME;

const InsertMoneyArea = ({ value }) => {
  return (
    <Wrapper>
      <div className="input-wrap">
        <Input
          type="number"
          value={value}
          style={{ size: { width: "80%", height: "2rem" }, fontSize: "2rem" }}
        />{" "}
        {CURRENCY}
      </div>
      <Button data={{ name: INSERT }} styles={insertButtonStyle} />
    </Wrapper>
  );
};

export default InsertMoneyArea;
