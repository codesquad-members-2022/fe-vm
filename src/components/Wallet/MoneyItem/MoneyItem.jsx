import { memo, useContext } from "react";

import Button from "components/common/form/Button/Button";
import { SetMoneyContext } from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import constants from "mockData/constants";

import { MoneyLi, moneyButtonStyle } from "./MoneyItem.styled";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const getInsertMoneyMessage = (money) => {
  return `${money} ${constants.CURRENCY}이 투입되었습니다.`;
};

const MoneyItem = ({ money, count }) => {
  const decreaseCashCount = useContext(SetMoneyContext);
  const updateProgress = useContext(SetProgressContext);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isDisabled={!count}
        onClick={() => {
          decreaseCashCount(money);
          updateProgress(getInsertMoneyMessage(money));
        }}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default memo(MoneyItem);
