import { useContext } from "react";

import { InsertedMoneyContext } from "contexts/moneyContext";
import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

import { Wrapper, TotalInsertedMoney } from "./TotalInsertedMoneyArea.styled";

const { TOTAL_INSERTED_MONEY_NAME } = constants;
const { seperateThousands } = numberUtil;
const { computeTotalMoney } = moneyHelper;

const TotalInsertedMoneyArea = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);

  return (
    <Wrapper>
      {TOTAL_INSERTED_MONEY_NAME}
      <TotalInsertedMoney>
        {seperateThousands(computeTotalMoney(insertedMoney))}
      </TotalInsertedMoney>
    </Wrapper>
  );
};

export default TotalInsertedMoneyArea;
