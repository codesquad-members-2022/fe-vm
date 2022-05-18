import React, { useRef, useState } from 'react';

import * as S from '@components/atoms/InputBox/InputBox.style';

export const NO_BALANCE = '0';
const SUFFIX = '원';

const InputBox = ({ inputValue, setInputValue }) => {
  const [isEditable, setIsEditable] = useState(false);

  const inputRef = useRef(null);

  const focusContentEditableTextToEnd = element => {
    if (element.innerText.length === 0) {
      element.focus();
      return;
    }

    const selection = window.getSelection();
    const newRange = document.createRange();
    newRange.selectNodeContents(element);
    newRange.collapse(false);
    selection?.removeAllRanges();
    selection?.addRange(newRange);
  };

  const isNumberIsEntered = key => {
    const check = /^[0-9]+$/;
    return check.test(key);
  };

  const isBalanceExist = inputValue => inputValue !== NO_BALANCE;

  const changeInputValue = (event, value) => {
    event.preventDefault();
    inputRef.current.innerText = value;
    focusContentEditableTextToEnd(inputRef.current);
  };

  const saveInputValue = event => {
    event.preventDefault();
    setIsEditable(false);
    setInputValue(inputRef.current.innerText);
  };

  // Handlers

  const clickHandler = async () => {
    await setIsEditable(true);
    focusContentEditableTextToEnd(inputRef.current);
  };

  const keyDownHandler = event => {
    const inputValue = inputRef.current.innerText,
      key = event.key;

    if (isNumberIsEntered(key)) {
      !isBalanceExist(inputValue) && changeInputValue(event, key);
      return;
    }

    if (key === 'Enter') saveInputValue(event);
    else if (key === 'Backspace') inputValue.length === 1 && changeInputValue(event, NO_BALANCE);
    else event.preventDefault();
  };

  return (
    <S.Container onClick={clickHandler}>
      <S.Input ref={inputRef} contentEditable={isEditable} onKeyDown={keyDownHandler}>
        {inputValue}
      </S.Input>
      <span>{SUFFIX}</span>
    </S.Container>
  );
};

export default InputBox;
