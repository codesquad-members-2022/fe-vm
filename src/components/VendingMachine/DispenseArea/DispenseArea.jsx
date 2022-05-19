import DispenseAreaWrap from "./DispenseArea.styled";
import InsertMoneyArea from "./InsertMoneyArea/InsertMoneyArea";
import ProgressArea from "./ProgressArea/ProgressArea";
import ReturnButton from "./ReturnButton/ReturnButton";
import TotalInsertedMoneyArea from "./TotalInsertedMoneyArea/TotalInsertedMoneyArea";

const DispenseArea = () => {
  return (
    <DispenseAreaWrap>
      <InsertMoneyArea />
      <TotalInsertedMoneyArea />
      <ReturnButton />
      <ProgressArea />
    </DispenseAreaWrap>
  );
};

export default DispenseArea;
