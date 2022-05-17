import React, { useContext } from "react";
import { StyledMenu, StyledMenuTitle, StyledMenuPrice } from "./Menu.styled";
import { addComma } from "utils";
import { MoneyContext, LogContext } from "../../App.js";

function Menu({ title, price }) {
  const { inputMoney } = useContext(MoneyContext);
  const { logs, setLogs } = useContext(LogContext);

  const addMenuLog = () => {
    const newLog = { idx: logs.length + 1, type: "select", data: title + "(이)가 선택됨" };
    setLogs([...logs, newLog]);
  };

  return (
    <StyledMenu>
      <StyledMenuTitle price={price} inputMoney={inputMoney} onClick={addMenuLog}>
        {title}
      </StyledMenuTitle>
      <StyledMenuPrice>{addComma(price)}</StyledMenuPrice>
    </StyledMenu>
  );
}

export { Menu };
