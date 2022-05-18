import styled from "styled-components";

const StyledMenu = styled.div`
  width: 17%;
  height: 90px;
  margin: 15px;
  text-align: center;
`;

const StyledMenuTitle = styled.div`
  height: 40px;
  line-height: 40px;
  padding: 10px;

  border: ${({ price, inputMoney, stock }) => (inputMoney >= price && stock ? "2px solid red" : "2px solid black")};
  background-color: ${({ stock }) => (stock ? "white" : "gray")};
  &:hover {
    background-color: ${({ stock }) => (stock ? "#ff8e14" : "gray")};
    background-color: ${({ stock }) => (stock ? "pointer" : "")};
  }
`;

const StyledMenuPrice = styled.p`
  margin-top: 10px;
`;

export { StyledMenu, StyledMenuTitle, StyledMenuPrice };
