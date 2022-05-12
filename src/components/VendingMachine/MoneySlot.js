import { useContext, useState } from "react";
import styled from "styled-components";
import { InputAmountContext } from "../../contexts/InputAmount";
import { WalletContext } from "../../contexts/WalletContext";

export default function MoneySlot() {
  const { inputAmount, addInputAmount } = useContext(InputAmountContext);
  const { getWithDrawableAmount } = useContext(WalletContext);

  const [isInput, setIsInput] = useState(false);

  function inputMoney({ key, target }) {
    if (key !== "Enter") return;
    const withDrawableAmount = getWithDrawableAmount(Number(target.value));
    addInputAmount(withDrawableAmount);
    setInputFalse();
    console.log(`${withDrawableAmount}원이 투입됨`); // log context로 변경 예정
  }
  function setInputTrue() {
    setIsInput(true);
  }
  function setInputFalse() {
    setIsInput(false);
  }
  return (
    <div>
      {isInput ? (
        <MoneySlotInput
          defaultValue={!isInput ? inputAmount : ""}
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
