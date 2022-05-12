import React, { useState, useEffect, useContext } from "react";
import { StyledInformation, InputPrice, ChangeButton, ActionLog } from "./Information.styled";
import { MoneyContext } from "../../App.js";

function Information() {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);

  const getMoney = (e) => {
    if (e.key === "Enter") {
      setInputMoney(+e.target.value);
    }
  };

  return (
    <StyledInformation>
      <InputPrice onKeyPress={getMoney} placeholder="0"></InputPrice>
      <ChangeButton>
        <p>반환</p>
      </ChangeButton>
      <ActionLog></ActionLog>
    </StyledInformation>
  );
}

export { Information };
