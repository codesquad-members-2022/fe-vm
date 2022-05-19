import { useContext } from "react";
import { css } from "styled-components";
import { Balance } from "contextProviders/BalanceProvider";
import { Records } from "contextProviders/RecordsProvider";
import Button from "components/common/Button";
import { activityType, moneyOrder } from "convention";

const ReturnButton = () => {
  const { inputSum, wallet, updateBalance } = useContext(Balance);
  const { updateRecord } = useContext(Records);

  const handleReturnButtonClick = () => {
    if (!inputSum) return;
    const newWallet = packChange();
    updateBalance(newWallet, 0);
    updateRecord(activityType.RETURN_MONEY, inputSum);
  };

  const packChange = () => {
    const newWallet = {};
    moneyOrder.reduce((remainInputSum, moneyType) => {
      const currMoneyAmount = parseInt(remainInputSum / Number(moneyType));
      newWallet[moneyType] = wallet[moneyType] + currMoneyAmount;
      return remainInputSum % Number(moneyType);
    }, inputSum);

    return newWallet;
  };

  return <Button styles={returnButtonStyles} content={"return"} onClick={handleReturnButtonClick} />;
};

const returnButtonStyles = css`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default ReturnButton;
