import { css } from "styled-components";
import { useContext } from "react";
import { InputSum, Records } from "../../../ContextProvider";
import { activityType } from "../../../convention";
import Button from "../../common/Button";

const ReturnButton = () => {
  const { inputSum, setInputSum } = useContext(InputSum);
  const { updateRecord } = useContext(Records);

  const handleClick = () => {
    if (!inputSum) return;
    updateRecord(activityType.RETURN_MONEY, inputSum);
    setInputSum(0);
  };

  return <Button styles={returnButtonStyles} content={"return"} onClick={handleClick} />;
};

const returnButtonStyles = css`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default ReturnButton;
