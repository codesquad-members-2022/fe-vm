import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

import { Wrapper, MoneyArea, P } from "./TotalMoneyArea.styled";

const { seperateThousands } = numberUtil;
const { TOTAL_MONEY_NAME } = constants;
const { computeTotalMoney } = moneyHelper;

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
