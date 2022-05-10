import { useState } from "react";

import styled, { css } from "styled-components";

const Input = ({ type, value, style }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <StyledInput
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      style={style}
    />
  );
};

const StyledInput = styled.input`
  ${({ style: { size, fontSize } }) => {
    return css`
      width: ${size.width};
      height: ${size.height};
      font-size: ${fontSize};
    `;
  }}
`;

export default Input;
