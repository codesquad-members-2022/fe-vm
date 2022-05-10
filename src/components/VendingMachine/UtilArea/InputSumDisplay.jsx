import { useContext, useState } from "react";
import { InputSum } from "../../../ContextProvider";
import styled from "styled-components";

const SumInput = styled.input`
  width: 80%;
  height: 50px;
  font-size: 2rem;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.navy};

  ::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const SubmitButton = styled.input`
  display: none;
`;

const InputSumDisplay = () => {
  const { inputSum, setInputSum } = useContext(InputSum);
  const [tempInputSum, setTempInputSum] = useState("");

  const updateInputSum = (e) => {
    e.preventDefault();
    if (checkInputMoneyValidity(tempInputSum)) {
      setInputSum(tempInputSum);
    }
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
