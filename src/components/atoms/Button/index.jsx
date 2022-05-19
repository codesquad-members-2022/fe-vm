import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from 'components/atoms/Button/Button.style';

const Button = ({ sizeType, borderType, colorType, fontType, children, onClick, disabled = false, ...props }) => {
  return (
    <Styled.Button
      onClick={onClick}
      sizeType={sizeType}
      borderType={borderType}
      colorType={colorType}
      fontType={fontType}
      disabled={disabled}
      props={props}
    >
      {children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  sizeType: 'thin',
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
