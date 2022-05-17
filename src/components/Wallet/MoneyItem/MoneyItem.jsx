import { memo, useCallback, useContext } from "react";

import Button from "components/common/form/Button/Button";
import {
  SetInsertedMoneyContext,
  SetMoneyContext,
} from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import insertMoneyHelper from "helper/insertMoneyHelper";

import { MoneyLi, moneyButtonStyle } from "./MoneyItem.styled";

const { getInsertMoneyMessage } = insertMoneyHelper;

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ money, count }) => {
  const decreaseCashCount = useContext(SetMoneyContext);
  const insertMoney = useContext(SetInsertedMoneyContext);
  const updateProgress = useContext(SetProgressContext);

  const handleClickMoney = useCallback((curMoney) => {
    decreaseCashCount(curMoney);
    updateProgress(getInsertMoneyMessage(curMoney));
    insertMoney(curMoney);
  }, []);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isDisabled={!count}
        onClick={() => handleClickMoney(money)}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default memo(MoneyItem);
