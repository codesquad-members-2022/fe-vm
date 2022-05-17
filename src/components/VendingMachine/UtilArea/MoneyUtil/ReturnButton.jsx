import { css } from "styled-components";
import { useContext } from "react";
import { Balance } from "../../../../contextProviders/BalanceProvider";
import { Records } from "../../../../contextProviders/RecordsProvider";
import { activityType, moneyOrder } from "../../../../convention";
import Button from "../../../common/Button";

const ReturnButton = () => {
  const { inputSum, wallet, updateBalance } = useContext(Balance);
  const { updateRecord } = useContext(Records);

  const handleClick = () => {
    if (!inputSum) return;
    const change = packChange();
    const newWallet = putChangeIntoWallet(change);
    updateBalance(newWallet, 0);
    updateRecord(activityType.RETURN_MONEY, inputSum);
  };

  const putChangeIntoWallet = (change) => {
    const newWallet = {};
    moneyOrder.forEach((moneyType) => {
      newWallet[moneyType] = wallet[moneyType] + change[moneyType];
    });
    return newWallet;
  };

  const packChange = () => {
    const change = {};
    moneyOrder.reduce((remainInputSum, moneyType) => {
      const currMoneyNumber = parseInt(remainInputSum / Number(moneyType));
      change[moneyType] = currMoneyNumber;
      return remainInputSum % Number(moneyType);
    }, inputSum);

    return change;
  };

  return (
    <Button
      styles={returnButtonStyles}
      content={"return"}
      onClick={handleClick}
    />
  );
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
