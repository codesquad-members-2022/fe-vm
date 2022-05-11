import Button from "components/common/form/Button/Button";
import constants from "mockData/constants";

import { returnButtonStyle, DispenseAreaWrap } from "./DispenseArea.styled";
import InsertMoneyArea from "./InsertMoneyArea/InsertMoneyArea";
import ProgressArea from "./ProgressArea/ProgressArea";

const INITIAL_MONEY_VALUE = 0;
const { RETURN } = constants.BUTTON_NAME;

const DispenseArea = () => {
  return (
    <DispenseAreaWrap>
      <InsertMoneyArea value={INITIAL_MONEY_VALUE} />
      <Button
        data={{
          name: RETURN,
        }}
        styles={returnButtonStyle}
      />
      <ProgressArea />
    </DispenseAreaWrap>
  );
};

export default DispenseArea;
