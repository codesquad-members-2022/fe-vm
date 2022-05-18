import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

import { Wrapper, MoneyArea, P } from "./TotalMoneyArea.styled";

const computeTotalMoney = (moneyData) => {
  const INITIAL_VALUE = 0;

  return moneyData.reduce((prev, cur) => {
    const { money, count } = cur;
    return prev + money * count;
  }, INITIAL_VALUE);
};

const { seperateThousands } = numberUtil;
const { TOTAL_MONEY_NAME } = constants;

const TotalMoneyArea = ({ moneyData }) => {
  const totalMoney = seperateThousands(computeTotalMoney(moneyData));

  return (
    <Wrapper>
      <P>{TOTAL_MONEY_NAME}</P>
      <MoneyArea>{totalMoney}</MoneyArea>
    </Wrapper>
  );
};

export default TotalMoneyArea;