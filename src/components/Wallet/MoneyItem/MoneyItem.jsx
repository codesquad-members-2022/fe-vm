import Button from "components/common/form/Button/Button";

import { MoneyLi, moneyButtonStyle } from "./MoneyItem.styled";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ cash, count }) => {
  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: cash }}
        styles={moneyButtonStyle}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default MoneyItem;
