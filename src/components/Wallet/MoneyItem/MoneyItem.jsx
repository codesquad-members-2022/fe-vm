import { memo, useCallback, useContext } from "react";

import Button from "components/common/form/Button/Button";
import { MoneyActionsContext } from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";

import { MoneyLi, moneyButtonStyle } from "./MoneyItem.styled";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ money, count }) => {
  const { insertMoney } = useContext(MoneyActionsContext);
  const updateProgress = useContext(SetProgressContext);

  const handleClickMoney = useCallback(() => {
    insertMoney(money);
    updateProgress("insert", money);
  }, [updateProgress, insertMoney, money]);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isAvailableClick={count}
        onClick={handleClickMoney}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default memo(MoneyItem);
