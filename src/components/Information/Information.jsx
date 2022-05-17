import React, { useContext } from "react";
import {
  StyledInformation,
  InputPrice,
  TotalInputPrice,
  ChangeButton,
  ActionLog,
} from "./Information.styled";
import { MoneyContext, LogContext } from "../../App.js";

function Information() {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const { logs, setLogs } = useContext(LogContext);

  const getMoney = (e) => {
    if (e.key === "Enter") {
      setInputMoney(+e.target.value + inputMoney);
      addInsertLog(e.target.value);
    }
  };

  const addInsertLog = (money) => {
    const newLog = { idx: logs.length + 1, type: "insert", data: money + "원이 투입됨" };
    setLogs([...logs, newLog]);
  };

  return (
    <StyledInformation>
      <InputPrice onKeyPress={getMoney} placeholder="금액을 입력하세요"></InputPrice>
      <TotalInputPrice>총 금액: {inputMoney}</TotalInputPrice>
      <ChangeButton>
        <p>반환</p>
      </ChangeButton>
      <ActionLog>
        <ul>
          {logs.map(({ idx, data }) => (
            <li key={idx}>{data}</li>
          ))}
        </ul>
      </ActionLog>
    </StyledInformation>
  );
}

export { Information };