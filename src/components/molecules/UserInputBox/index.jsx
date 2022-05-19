import React from 'react';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Selector from 'components/molecules/Selector';
import * as Styled from 'components/molecules/UserInputBox/UserInputBox.style';

const UserInputBox = ({ title, ...props }) => {
  const buttonStyle = {
    sizeType: 'small',
    colorType: 'point',
    fontType: 'medium',
  };

  return (
    <Styled.UserInputBox>
      <Input />
      <Styled.SelectorWrapper>
        <Selector></Selector>
        <Button {...buttonStyle}>추가</Button>
      </Styled.SelectorWrapper>
    </Styled.UserInputBox>
  );
};

export default UserInputBox;
