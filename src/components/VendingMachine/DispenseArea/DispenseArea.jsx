import Button from "components/common/form/Button/Button";
import constants from "utils/constants";

import { returnButtonStyle, DispenseAreaWrap } from "./DispenseArea.styled";
import InsertMoneyArea from "./InsertMoneyArea/InsertMoneyArea";
import ProgressArea from "./ProgressArea/ProgressArea";
import TotalInsertedMoneyArea from "./TotalInsertedMoneyArea/TotalInsertedMoneyArea";

const INITIAL_MONEY_VALUE = 0;
const { RETURN } = constants.BUTTON_NAME;

const DispenseArea = () => {
  return (
    <DispenseAreaWrap>
      <InsertMoneyArea value={INITIAL_MONEY_VALUE} />
      <TotalInsertedMoneyArea />
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
