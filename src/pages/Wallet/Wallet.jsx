import { useContext } from "react";

import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import TotalMoneyArea from "components/Wallet/TotalMoneyArea/TotalMoneyArea";
import { MoneyContext } from "contexts/moneyContext";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const { cashData } = useContext(MoneyContext);

  return (
    <Wrapper>
      <ul>
        {cashData.map(({ money, count }) => (
          <MoneyItem key={money} money={money} count={count} />
        ))}
      </ul>
      <TotalMoneyArea moneyData={cashData} />
    </Wrapper>
  );
};

export default Wallet;
