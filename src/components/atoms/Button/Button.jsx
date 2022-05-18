import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.style';

const Button = ({ sizeType, borderType, colorType, fontType, children, onClick, disabled = false, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      sizeType={sizeType}
      borderType={borderType}
      colorType={colorType}
      fontType={fontType}
      disabled={disabled}
      props={props}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  sizeType: 'thin',
  // borderType: 'default',
  colorType: 'default',
  children: 'Button',
  disabled: false,
  onClick: () => {},
};

Button.propTypes = {
  sizeType: PropTypes.string,
  borderType: PropTypes.string,
  colorType: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
