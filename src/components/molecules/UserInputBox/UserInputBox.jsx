import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './UserInputBox.style';
import Input from 'components/atoms/Input/Input';
import Selector from '../Selector/Selector';
import Button from 'components/atoms/Button/Button';

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

UserInputBox.defaultProps = {};

UserInputBox.propTypes = {};

export default UserInputBox;
