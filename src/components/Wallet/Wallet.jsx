import { useContext } from "react";
import styled from "styled-components";
import { Balance } from "contextProviders/BalanceProvider";
import Money from "./Money";
import { moneyOrder } from "convention";

const Wallet = () => {
  const { wallet } = useContext(Balance);

  const calTotalBalance = () => {
    const totalBalance = moneyOrder.reduce(
      (balance, moneyType) => balance + wallet[moneyType] * Number(moneyType),
      0
    );
    return totalBalance;
  };

  return (
    wallet && (
      <WalletWrapper>
        {moneyOrder.map((moneyType) => (
          <Money
            key={moneyType}
            moneyType={moneyType}
            number={wallet[moneyType]}
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
