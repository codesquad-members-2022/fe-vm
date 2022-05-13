/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Button({ className, icon, disabled, onClick }) {
  return (
    <StyledButton disabled={disabled} className={className} onClick={onClick}>
      {icon}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  &:disabled {
    color: grey;
    cursor: default;
  }
`;

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
