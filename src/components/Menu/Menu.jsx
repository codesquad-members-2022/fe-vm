import React, { useContext } from "react";
import { StyledMenu, StyledMenuTitle, StyledMenuPrice } from "./Menu.styled";
import { addComma } from "utils";
import { MoneyContext, LogContext } from "../../App.js";

function Menu({ title, price, stock }) {
  const { inputMoney } = useContext(MoneyContext);
  const { logs, setLogs } = useContext(LogContext);

  //TODO: handle 상품 처리로 바꿔야 할 듯
  const addMenuLog = () => {
    if (!stock) return;
    const newLog = { idx: logs.length + 1, type: "select", data: title + "(이)가 선택됨" };
    setLogs([...logs, newLog]);
  };

  return (
    <StyledMenu>
      <StyledMenuTitle price={price} inputMoney={inputMoney} stock={+stock} onClick={addMenuLog}>
        {title}
      </StyledMenuTitle>
      <StyledMenuPrice>{stock ? addComma(price) : "품절"}</StyledMenuPrice>
    </StyledMenu>
  );
}

export { Menu };
