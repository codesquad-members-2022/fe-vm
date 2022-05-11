import styled from "styled-components";
import { useState } from "react";

const CustomButton = styled.button`
  ${({ styles }) => styles}
  ${({ isMouseDown, theme }) =>
    isMouseDown
      ? `
      margin: 2px 0 0 2px;
      box-shadow: none;
    `
      : `
      box-shadow: 0px 0px 2px ${theme.colors.black};
    `}
`;

const Button = ({ styles, content, onClick }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  return (
    <CustomButton
      styles={styles}
      isMouseDown={isMouseDown}
      onClick={onClick}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseLeave={() => setIsMouseDown(false)}
    >
      {content}
    </CustomButton>
  );
};

export default Button;
