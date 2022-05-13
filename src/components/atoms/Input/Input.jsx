import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './Input.style';

const Input = ({ inputType, placeholder, ...props }) => {
  return <StyledInput type={inputType} placeholder={placeholder} {...props}></StyledInput>;
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
