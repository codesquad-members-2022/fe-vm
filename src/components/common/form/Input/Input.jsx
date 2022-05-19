import { forwardRef, useState } from "react";

import StyledInput from "./Input.styled";

const Input = forwardRef(
  ({ type, value = "", styles, placeholder = "" }, ref) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = ({ target }) => {
      setInputValue(target.value);
    };

    return (
      <StyledInput
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        styles={styles}
        ref={ref}
      />
    );
  }
);

export default Input;
