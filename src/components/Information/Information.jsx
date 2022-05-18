import React, { useContext } from "react";
import {
  StyledInformation,
  InputPrice,
  TotalInputPrice,
  ChangeButton,
  ActionLog,
} from "./Information.styled";
import { MoneyContext, LogContext, WalletContext } from "../../App.js";
import { getTotalAmount } from "utils";

function Information() {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const { logs, setLogs } = useContext(LogContext);
  const { walletMoney } = useContext(WalletContext);

  const convertInputMoney = (money) => {
    let surplus = money > getTotalAmount(walletMoney) ? getTotalAmount(walletMoney) : money;

    for (let i = walletMoney.length - 1; i >= 0; i--) {
      const { price, quantity } = walletMoney[i];
      if (surplus >= price && quantity > 0) {
        const convertedQuantity = Math.min(Math.floor(surplus / price), quantity);
        surplus -= convertedQuantity * price;
        walletMoney[i] = { ...walletMoney[i], quantity: quantity - convertedQuantity };
      }
    }

    return money - surplus;
  };

  const getMoney = (e) => {
    if (e.key === "Enter") {
      const convertedInputMoney = convertInputMoney(+e.target.value);
      setInputMoney(convertedInputMoney + inputMoney); // 총 금액
      addInsertLog(convertedInputMoney); // 방금 넣은 금액
    }
  };

  const addInsertLog = (money) => {
    const newLog = { idx: logs.length + 1, type: "insert", data: money + "원이 투입됨" };
    setLogs([...logs, newLog]);
  };

  const addReturnLog = (money) => {
    const newLog = { idx: logs.length + 1, type: "return", data: money + "원이 반환됨" };
    setLogs([...logs, newLog]);
  };

  const returnChange = () => {
    let change = inputMoney;
    setInputMoney(inputMoney - change);
    addReturnLog(change);

    for (let i = walletMoney.length - 1; i >= 0; i--) {
      const { price, quantity } = walletMoney[i];
      if (change >= price) {
        const returnedCoinQuantity = Math.floor(change / price);
        change %= price;
        walletMoney[i] = { ...walletMoney[i], quantity: quantity + returnedCoinQuantity }; // set함수 안 쓰고 이렇게도 변경해도 되나
      }
    }
  };

  return (
    <StyledInformation>
      <InputPrice onKeyPress={getMoney} placeholder="금액을 입력하세요"></InputPrice>
      <TotalInputPrice>투입 금액: {inputMoney}</TotalInputPrice>
      <ChangeButton onClick={returnChange}>
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
