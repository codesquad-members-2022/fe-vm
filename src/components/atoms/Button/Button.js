import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Size, Border, ColorStyle } from './Button.style';

const Button = ({ sizeType, borderType, colorType, children, onClick, disabled = false, ...props }) => {
  return (
    <StyledButton
      onClick={onClick}
      sizeType={sizeType}
      borderType={borderType}
      colorType={colorType}
      disabled={disabled}
      props={props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${({ sizeType }) => sizeType && Size[sizeType]}
  ${({ borderType }) => borderType && Border[borderType]}
  ${ColorStyle};
`;

Button.defaultProps = {
  sizeType: 'thin',
  borderType: 'default',
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
