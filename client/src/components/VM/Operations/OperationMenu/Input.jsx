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
  const { message, setMessage } = messageContext;
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
    if (input !== "") setTemp(input);
    setText("");
    setIsClicked(true);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    // if (validateInput(input, moneyUnitArr, wallet)) {
    //   setInput(temp + input);
    //   setWallet(validateInput(input, moneyUnitArr, wallet));
    // }
    setInput(Number(e.target[0].value));
    setTemp(Number(e.target[0].value));
    setCursor(false);
  }

  function outsideClickHandler(e) {
    if (!inputRef.current.contains(e.target) && isClicked) {
      setIsClicked(false);
      setInput(temp);
      setText(temp);
    }
  }

  //TODO: 돈 투입 알고리즘 완성
  // function validateInput(input, moneyUnitArr, wallet) {
  //   //1. input을 [unit, amout]로 만들기
  //   //2. 산출된 배열을 돌며 wallet과 비교하여 wallet[unit] - amout > 0 이라면 빼주고 아니라면 일단 보류
  //   //3. unit이 없어 처리되지 못한 값들을 reduce로 합쳐줌
  //   //4. wallet을 돌며 unit > acc인 최소 경우부터 올라가며 amount가 있는지 판별 후, 있으면 그 값으로 보정하여 입력
  //   //?? 하지만 이 경우 3700원이 남을 경우 5000원을 투입하면 되지만, 5000, 10000원이 없다면 50000원을 넣는건데 이게 맞나?
  //   //앞 뒤로 한 단위만 탐색을 하는게 나을 것 같음
  //   const neededMoney = getNeededMoney(input, moneyUnitArr);
  //   const newWallet = { ...wallet };
  //   const left = [];
  //   let validation = true;

  //   neededMoney.forEach(([unit, amount]) => {
  //     if (newWallet[unit] >= amount) {
  //       newWallet[unit] -= amount;
  //       amount = 0;
  //     } else {
  //       left.push([unit, amount]);
  //     }
  //   });

  //   const leftTotal = left.reduce((acc, [unit, amount]) => {
  //     return acc + unit * amount;
  //   }, 0);
  //   console.log(leftTotal, moneyUnitArr);
  //   if (!leftTotal) return newWallet;

  //   moneyUnitArr.reverse().forEach((unit) => {
  //     if (unit > leftTotal && newWallet[unit] > 0) {
  //       newWallet[unit] -= 1;
  //     } else {
  //       validation = false;
  //     }
  //   });

  //   return validation ? newWallet : false;
  // }

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
