import { useContext } from "react";
import styled from "styled-components";
import { Balance } from "contextProviders/BalanceProvider";
import { Records } from "contextProviders/RecordsProvider";
import Money from "./Money";
import { activityType, moneyOrder } from "convention";
import { v4 as uuidv4 } from "uuid";

const Wallet = () => {
  const { wallet, inputSum, updateBalance, calTotalBalance } = useContext(Balance);
  const { updateRecord } = useContext(Records);

  const putMoneyIntoVendingMachine = (targetMoneyType) => {
    const targetMoneyAmount = wallet[targetMoneyType];
    if (!targetMoneyAmount) return;

    const newInputSum = inputSum + Number(targetMoneyType);
    const newWallet = { ...wallet };
    newWallet[targetMoneyType] = targetMoneyAmount - 1;

    updateBalance(newWallet, newInputSum);
    updateRecord(activityType.INPUT_MONEY, targetMoneyType);
  };

  return (
    wallet && (
      <WalletWrapper>
        {moneyOrder.map((moneyType) => (
          <Money
            key={uuidv4()}
            moneyType={moneyType}
            amount={wallet[moneyType]}
            putMoneyIntoVendingMachine={putMoneyIntoVendingMachine}
          />
        ))}
        <TotalBalance>총액: {calTotalBalance()}</TotalBalance>
      </WalletWrapper>
    )
  );
};

const WalletWrapper = styled.div`
  width: 350px;
  height: 900px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grey4};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const TotalBalance = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export default Wallet;
