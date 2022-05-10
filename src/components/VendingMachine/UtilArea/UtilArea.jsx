import styled from "styled-components";
import MoneyUtil from "./MoneyUtil";

const UtilAreaWrapper = styled.div`
  width: 250px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 4px solid ${({ theme }) => theme.colors.black}; ;
`;
const UtilArea = () => {
  return (
    <UtilAreaWrapper>
      <MoneyUtil />
    </UtilAreaWrapper>
  );
};

export default UtilArea;
