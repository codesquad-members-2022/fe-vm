import { useContext, useEffect, useRef, useState } from "react";

import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import { MoneyContext, MoneyActionsContext } from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";

import {
  Wrapper,
  Form,
  insertButtonStyle,
  inputStyle,
} from "./InsertMoneyArea.styled";

const {
  CURRENCY,
  MONEY_ARR_DESC_ORDER,
  INITIAL_MONEY,
  DECREASE_COUNT,
  BUTTON_NAME: { INSERT },
  DELAY: { DEFAULT_DELAY_MS },
} = constants;

const alertMessages = {
  initialMessage: "투입할 금액을 입력하세요.",
  underMinLength: "두 자리 이상 입력하세요.",
  notValidLastIndex: "일의 자리가 유효하지 않습니다.",
  inputIsZero: "0원은 입력할 수 없습니다.",
  overMaxLength: "만 단위까지만 입력 가능합니다.",
  overBaseMoney: "소지금 초과. 최대 금액이 투입됩니다.",
  hasNoMoney: "소지한 금액이 없습니다.",
  insertSimilarMoney: "입력금액과 가까운 금액이 투입됩니다.",
  insertExactMoney: "입력금액을 투입합니다.",
};

const {
  hasNoMoney,
  overBaseMoney,
  insertSimilarMoney,
  insertExactMoney,
  underMinLength,
  overMaxLength,
  notValidLastIndex,
  initialMessage,
  inputIsZero,
} = alertMessages;

const { isWithinBaseMoney, computeTotalMoney } = moneyHelper;
const MAX_INPUT_LENGTH = 5;
const MIN_INPUT_LENGTH = 2;
const INITIAL_INPUT_VALUE = "";

const isInputOverMaxLength = (input) => {
  return input.length > MAX_INPUT_LENGTH;
};

const isInputUnderMinLength = (input) => {
  return input.length < MIN_INPUT_LENGTH;
};

const isLastIndexZero = (input) => {
  return input[input.length - 1] === "0";
};

const isInputNumberZero = (input) => {
  return input === 0;
};

const InsertMoneyArea = () => {
  const [message, setMessage] = useState(initialMessage);
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUE);

  const updateProgress = useContext(SetProgressContext);
  const { insertTotalMoney, insertMoney } = useContext(MoneyActionsContext);
  const { cashData } = useContext(MoneyContext);

  const inputRef = useRef(null);

  const showMessage = (selectedMessage) => {
    setMessage(selectedMessage);

    setTimeout(() => {
      setMessage(initialMessage);
    }, DEFAULT_DELAY_MS);
  };

  const resetInputValue = () => {
    setTimeout(() => {
      setInputValue(INITIAL_INPUT_VALUE);
    }, DEFAULT_DELAY_MS);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    focusInput();
  });

  const isValidInput = (currentInputValue) => {
    if (isInputUnderMinLength(currentInputValue)) {
      showMessage(underMinLength);
      return false;
    }

    if (!isLastIndexZero(currentInputValue)) {
      showMessage(notValidLastIndex);
      return false;
    }

    if (isInputOverMaxLength(currentInputValue)) {
      showMessage(overMaxLength);
      return false;
    }

    if (isInputNumberZero(Number(currentInputValue))) {
      showMessage(inputIsZero);
      return false;
    }

    return true;
  };

  const hasMoney = (totalMoney) => {
    showMessage(hasNoMoney);
    return totalMoney > 0;
  };

  const insertMoneyDescOrder = (inputNumber) => {
    let inputMoney = inputNumber;

    MONEY_ARR_DESC_ORDER.forEach((unit) => {
      const [{ money, count }] = cashData.filter(
        (current) => current.money === unit
      );

      if (inputMoney < 0 || money > inputMoney) {
        return;
      }

      let moneyCount = count;
      if (!(inputMoney % money)) {
        while (inputMoney && moneyCount > 0) {
          insertMoney(money);
          inputMoney -= money;
          moneyCount -= DECREASE_COUNT;
          updateProgress("insert", money);
        }
        return;
      }

      while (inputMoney > money && moneyCount > 0) {
        insertMoney(money);
        inputMoney -= money;
        moneyCount -= DECREASE_COUNT;
        updateProgress("insert", money);
      }
    });
    return inputMoney;
  };

  const insertMoneyAscOrder = (inputNumber) => {
    let inputMoney = inputNumber;
    for (let i = 0; i < cashData.length; i += 1) {
      const { money, count } = cashData[i];

      if (count) {
        insertMoney(money);
        inputMoney -= money;
        updateProgress("insert", money);
      }

      if (inputMoney <= 0) {
        break;
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const currentInputValue = inputRef.current.value;
    if (!isValidInput(currentInputValue)) {
      focusInput();
      return;
    }

    let inputNumber = Number(currentInputValue);
    const totalMoney = computeTotalMoney(cashData);

    if (!hasMoney(totalMoney)) {
      return;
    }

    if (!isWithinBaseMoney(inputNumber, totalMoney)) {
      showMessage(overBaseMoney);
      insertTotalMoney(cashData);
      updateProgress("insert", totalMoney);
      return;
    }

    // 높은 금액부터 확인하며 투입
    inputNumber = insertMoneyDescOrder(inputNumber);
    // 전부 투입된 경우 (inputNumber가 0만 남음)
    if (!inputNumber) {
      showMessage(insertExactMoney);
      resetInputValue();
      return;
    }

    // 여전히 inputNumber가 남아있으면 작은 금액부터 확인해서 다시 투입
    insertMoneyAscOrder(inputNumber);
    showMessage(insertSimilarMoney);
    resetInputValue();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <div className="input-wrap">
          <Input
            type="number"
            placeholder={INITIAL_MONEY}
            styles={inputStyle}
            ref={inputRef}
            stateData={{ inputValue, setInputValue }}
          />
          {CURRENCY}
        </div>
        <Button
          data={{ name: INSERT }}
          styles={insertButtonStyle}
          type="submit"
        />
      </Form>
      <div className="alert">{message}</div>
    </Wrapper>
  );
};

export default InsertMoneyArea;
