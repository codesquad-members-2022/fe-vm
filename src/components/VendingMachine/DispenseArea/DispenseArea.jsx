import DispenseAreaWrap from "./DispenseArea.styled";
import InsertMoneyArea from "./InsertMoneyArea/InsertMoneyArea";
import ProgressArea from "./ProgressArea/ProgressArea";
import ReturnButton from "./ReturnButton/ReturnButton";
import TotalInsertedMoneyArea from "./TotalInsertedMoneyArea/TotalInsertedMoneyArea";

const INITIAL_MONEY_VALUE = 0;

const DispenseArea = () => {
  return (
    <DispenseAreaWrap>
      <InsertMoneyArea value={INITIAL_MONEY_VALUE} />
      <TotalInsertedMoneyArea />
      <ReturnButton />
      <ProgressArea />
    </DispenseAreaWrap>
  );
};

export default DispenseArea;
