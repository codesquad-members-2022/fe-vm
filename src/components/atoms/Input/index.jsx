import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from 'components/atoms/Input/Input.style';

const Input = ({ inputType, placeholder, ...props }) => {
  return <Styled.Input type={inputType} placeholder={placeholder} {...props}></Styled.Input>;
};

Input.defaultProps = {
  inputType: 'text',
  placeholder: '0 원',
};

Input.propTypes = {
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
