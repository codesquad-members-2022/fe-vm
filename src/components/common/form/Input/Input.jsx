import { forwardRef } from "react";

import StyledInput from "./Input.styled";

const Input = forwardRef(
  ({ type, styles, placeholder = "", stateData }, ref) => {
    // const [inputValue, setInputValue] = useState(value);
    const { inputValue, setInputValue } = stateData;

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
