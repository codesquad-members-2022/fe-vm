import { useState } from "react";

import StyledInput from "./Input.styled";

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

export default Input;
