import { useState } from "react";

const Input = ({ type, value }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return <input type={type} value={inputValue} onChange={handleInputChange} />;
};

export default Input;
