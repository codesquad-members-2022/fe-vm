import { useContext, useState } from "react";
import { Balance } from "contextProviders/BalanceProvider";
import { Records } from "contextProviders/RecordsProvider";
import styled from "styled-components";
import { activityType, moneyOrder } from "convention";

const InputSumDisplay = () => {
  const { wallet, inputSum, updateBalance, calTotalBalance } = useContext(Balance);
  const { updateRecord } = useContext(Records);
  const [tempInputSum, setTempInputSum] = useState("");

  const updateInputSum = (e) => {
    e.preventDefault();
    if (!checkInputMoneyValidity(tempInputSum)) return;

    const totalBalance = calTotalBalance();
    if (tempInputSum > totalBalance) {
      updateRecord(activityType.LACK_OF_BALANCE);
    } else {
      const { remainMoneyWallet, finalAmount } = filterSurplusMoney(tempInputSum, totalBalance);
      updateBalance(remainMoneyWallet, finalAmount);
      updateRecord(activityType.INPUT_MONEY, finalAmount);
    }
    setTempInputSum("");
  };

  const checkInputMoneyValidity = (money) => {
    return Number.isInteger(money) && money >= 0;
  };

  const filterSurplusMoney = (targetAmount, totalBalance) => {
    const remainMoneyWallet = {};

    const finalAmount = moneyOrder.reduce((currTotalAmount, moneyType) => {
      const idealSurplusAmount = parseInt((currTotalAmount - targetAmount) / Number(moneyType));
      const surplusAmount = Math.min(idealSurplusAmount, wallet[moneyType]);
      remainMoneyWallet[moneyType] = surplusAmount;
      return currTotalAmount - surplusAmount * Number(moneyType);
    }, totalBalance);
    return { remainMoneyWallet, finalAmount };
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

export default InputSumDisplay;