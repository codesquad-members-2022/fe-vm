import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import cash from "mockData/money";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const currentMoney = Object.entries(cash);

  return (
    <Wrapper>
      {currentMoney.map(([money, count]) => (
        <MoneyItem cash={money} count={count} key={money} />
      ))}
    </Wrapper>
  );
};

export default Wallet;
