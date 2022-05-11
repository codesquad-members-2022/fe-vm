import { useContext, useState } from "react";
import { InputSum, Records } from "../../../ContextProvider";
import styled from "styled-components";
import { activityType } from "../../../convention";

const SumInput = styled.input`
  width: 100%;
  height: 50px;
  font-size: 2rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const SubmitButton = styled.input`
  display: none;
`;

const InputSumDisplay = () => {
  const { inputSum, setInputSum } = useContext(InputSum);
  const { updateRecord } = useContext(Records);
  const [tempInputSum, setTempInputSum] = useState("");

  const updateInputSum = (e) => {
    e.preventDefault();
    if (checkInputMoneyValidity(tempInputSum)) {
      setInputSum(tempInputSum);
    }
    updateRecord(activityType.INPUT_MONEY, tempInputSum);
    setTempInputSum("");
  };

  const checkInputMoneyValidity = (money) => {
    return Number.isInteger(money) && money >= 0;
  };

  const updateTempInputSum = ({ target: { value } }) => {
    setTempInputSum(Number(value));
  };

  return (
    <form onSubmit={updateInputSum}>
      <SumInput
        type="number"
        placeholder={inputSum.toLocaleString()}
        value={tempInputSum}
        onChange={updateTempInputSum}
      />
      <SubmitButton type="submit" />
    </form>
  );
};

export default InputSumDisplay;
