import { useContext } from "react";

import { InsertedMoneyContext } from "contexts/moneyContext";
import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

import { Wrapper, TotalInsertedMoney } from "./TotalInsertedMoney.styled";

const { TOTAL_INSERTED_MONEY_NAME } = constants;
const { seperateThousands } = numberUtil;

const INITIAL_MONEY = 0;

const TotalInsertedMoneyArea = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);

  return (
    <Wrapper>
      {TOTAL_INSERTED_MONEY_NAME}
      <TotalInsertedMoney>
        {seperateThousands(
          insertedMoney.reduce((prev, { money }) => prev + money, INITIAL_MONEY)
        )}
      </TotalInsertedMoney>
    </Wrapper>
  );
};

export default TotalInsertedMoneyArea;
