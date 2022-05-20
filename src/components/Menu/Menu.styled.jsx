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
  position: relative;

  border: ${({ price, inputMoney, stock }) => (inputMoney >= price && stock ? "2px solid #0ead69" : "2px solid black")};
  background-color: ${({ stock }) => (stock ? "white" : "gray")};
  &:hover {
    background-color: ${({ price, inputMoney, stock }) => (stock ? (inputMoney >= price ? "#E2E2E2" : "white") : "gray")};
    cursor: ${({ price, inputMoney, stock }) => (stock ? (inputMoney >= price ? "pointer" : "") : "")};
  }
`;

const StyledMenuPrice = styled.p`
  margin-top: 10px;
`;

export { StyledMenu, StyledMenuTitle, StyledMenuPrice };
