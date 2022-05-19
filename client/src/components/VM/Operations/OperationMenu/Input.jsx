import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputContext } from "store/InputStore";
import { MessageContext } from "store/MessageStore";
import { WalletContext } from "store/WalletStore";
import { getNeededMoney } from "utils/util";
import { moneyUnitArr, reversedMoneyUnitArr } from "constants/constants";

export default function Input() {
  const inputContext = useContext(InputContext);
  const { input, setInput } = inputContext;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;
  const walletContext = useContext(WalletContext);
  const { wallet, setWallet } = walletContext;

  const [text, setText] = useState(input);
  const [cursor, setCursor] = useState(true);
  const [temp, setTemp] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef();

  function onChangeHandler(e) {
    setText(e.target.value);
  }

  function onClickHandler() {
    setTemp(input);
    setText("");
    setIsClicked(true);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    setIsClicked(false);
    const value = Number(e.target[0].value);

    if (value % 10 > 0) {
      setInput(temp);
      setText(temp);
      setMessage((prev) => [...prev, `1원 단위는 입력할 수 없습니다`]);
      setCursor(false);
      return;
    }

    //가지고 있는 돈을 넘는 값을 입력했을 경우
    if (!validateInput(value, moneyUnitArr, wallet)) {
      setInput(temp);
      setText(temp);
      setMessage((prev) => [...prev, `충전에 실패하였습니다`]);
      setCursor(false);
      return;
    }

    const [newWallet, balanced] = validateInput(value, moneyUnitArr, wallet);

    if (newWallet) {
      if (balanced) {
        //보정이 된 경우
        setInput(temp + balanced);
        setMessage((prev) => [
          ...prev,
          `보정된 금액 ${balanced}원이 투입되었습니다`,
        ]);
      } else {
        //지갑에 알맞게 있어 보정되지 않은 경우
        setInput(temp + value);
        setMessage((prev) => [...prev, `${value}원이 투입되었습니다`]);
      }
      setWallet(newWallet);
      setTemp(value);
    }
    setCursor(false);
  }

  function outsideClickHandler(e) {
    if (!inputRef.current.contains(e.target) && isClicked) {
      setIsClicked(false);
      setInput(temp);
      setText(temp);
    }
  }

  function validateInput(input, moneyUnitArr, wallet) {
    const neededMoney = getNeededMoney(input, moneyUnitArr);
    const newWallet = { ...wallet };
    const left = [];
    let validation = true;
    let balanced = null;

    neededMoney.forEach(([unit, amount]) => {
      if (newWallet[unit] >= amount) {
        newWallet[unit] -= amount;
        amount = 0;
      } else {
        left.push([unit, amount]);
      }
    });

    if (!left.length) return [newWallet, balanced];

    const leftTotal = left.reduce((acc, [unit, amount]) => {
      return acc + unit * amount;
    }, 0);

    for (let i = 0; i < reversedMoneyUnitArr.length; i++) {
      if (
        reversedMoneyUnitArr[i] > leftTotal &&
        newWallet[reversedMoneyUnitArr[i]] > 0
      ) {
        newWallet[reversedMoneyUnitArr[i]] -= 1;
        balanced = reversedMoneyUnitArr[i];
        validation = true;
        break;
      } else {
        validation = false;
      }
    }

    return validation ? [newWallet, balanced] : false;
  }

  useEffect(() => {
    setCursor(true);
  }, [cursor]);

  useEffect(() => {
    setText(input);
  }, [input]);

  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);

    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      {cursor ? (
        <StyledInput
          ref={inputRef}
          value={text}
          onChange={onChangeHandler}
          onClick={onClickHandler}
        ></StyledInput>
      ) : (
        <StyledDiv>{text}</StyledDiv>
      )}
      원
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  height: 70px;
  margin: 25px 0;
  padding: 0 20px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  text-align: right;
  margin-right: 5px;
`;
const StyledDiv = styled.div`
  text-align: right;
  margin-right: 5px;
`;
