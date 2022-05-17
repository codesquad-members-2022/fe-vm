import { memo, useContext } from "react";

import Button from "components/common/form/Button/Button";
import { SetMoneyContext } from "contexts/moneyContext";
import { SetProcessContext } from "contexts/processContext";
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
  const updateProcess = useContext(SetProcessContext);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isDisabled={!count}
        onClick={() => {
          decreaseCashCount(money);
          updateProcess(getInsertMoneyMessage(money));
        }}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default memo(MoneyItem);
