import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import TotalMoneyArea from "components/Wallet/TotalMoneyArea/TotalMoneyArea";
import cash from "mockData/money";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const currentMoney = Object.entries(cash);

  return (
    <Wrapper>
      <ul>
        {currentMoney.map(([money, count]) => (
          <MoneyItem cash={money} count={count} key={money} />
        ))}
      </ul>
      <TotalMoneyArea moneyData={currentMoney} />
    </Wrapper>
  );
};

export default Wallet;
