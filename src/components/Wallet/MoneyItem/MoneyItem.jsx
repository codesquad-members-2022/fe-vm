import { useContext } from "react";

import Button from "components/common/form/Button/Button";
import { MoneyContext } from "pages/Layout/Layout";

import { MoneyLi, moneyButtonStyle } from "./MoneyItem.styled";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ onClick }) => {
  const { money, count } = useContext(MoneyContext);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isDisabled={!count}
        onClick={onClick}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default MoneyItem;
