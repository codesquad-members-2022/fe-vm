import { useContext, useState } from "react";
import styled from "styled-components";
import { InputAmountContext } from "../../contexts/InputAmount";
import { LogContext } from "../../contexts/Log";
import { WalletContext } from "../../contexts/WalletContext";

export default function MoneySlot() {
  const { inputAmount, addInputAmount } = useContext(InputAmountContext);
  const { getWithDrawableAmount } = useContext(WalletContext);
  const { log } = useContext(LogContext);

  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function inputMoney({ key, target }) {
    if (key !== "Enter") return;
    const withDrawableAmount = getWithDrawableAmount(Number(target.value));
    addInputAmount(withDrawableAmount);
    setInputFalse();
    log("insert", withDrawableAmount); // log context로 변경 예정
  }
  function setInputTrue() {
    setIsInput(true);
  }
  function setInputFalse() {
    setIsInput(false);
    setInputValue("");
  }
  function checkNumber({ target: { value } }) {
    const numberRegeExp = /^[0-9]*$/;
    if (numberRegeExp.test(value)) {
      setInputValue(value);
    }
  }
  return (
    <div>
      {isInput ? (
        <MoneySlotInput
          value={inputValue}
          onInput={checkNumber}
          onKeyPress={inputMoney}
          onBlur={setInputFalse}
          placeholder="돈 넣으세요"
          autoFocus
        />
      ) : (
        <MoneySlotLabel onClick={setInputTrue}>{inputAmount}</MoneySlotLabel>
      )}
    </div>
  );
}

const MoneySlotInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  text-align: right;
  font-size: 30px;
  :focus {
    outline: none;
  }
`;
const MoneySlotLabel = styled.div`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

  text-align: right;
  font-size: 30px;
  line-height: 40px;
`;
