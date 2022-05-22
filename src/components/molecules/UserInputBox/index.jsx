import React, { useContext } from 'react';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Selector from 'components/molecules/Selector';
import * as Styled from 'components/molecules/UserInputBox/UserInputBox.style';
import { CURRENCY_STR } from 'constants';
import { WalletContext } from 'context/Wallet';

const UserInputBox = ({ title, ...props }) => {
  const { state, walletDispatch, insertMoney } = useContext(WalletContext);

  const buttonStyle = {
    sizeType: 'small',
    colorType: 'point',
    fontType: 'medium',
  };

  const handleKeyPress = ({ key, target }) => {
    if (key !== 'Enter' || target.value === '') {
      return;
    }

    insertMoney(walletDispatch, target.value);
    target.value = '';
  };

  const handleOnInput = ({ target }) => {
    const value = target.value;
    target.value = parseInt(value);

    if (value <= 0 || !state.sumOfMoney) {
      target.value = 0;
      return;
    }

    if (value > state.sumOfMoney) {
      target.value = state.sumOfMoney;
    }
  };

  return (
    <Styled.UserInputBox>
      <Input onKeyPress={handleKeyPress} onInput={handleOnInput} type="number" />
      <Styled.SelectorWrapper>
        <Selector></Selector>
        <Button {...buttonStyle}>추가</Button>
      </Styled.SelectorWrapper>
    </Styled.UserInputBox>
  );
};

export default UserInputBox;
