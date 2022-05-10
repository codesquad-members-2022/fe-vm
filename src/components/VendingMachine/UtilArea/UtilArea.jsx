import styled from "styled-components";
import MoneyUtil from "./MoneyUtil";
import MessageDisplay from "./MessageDisplay";

const UtilAreaWrapper = styled.div`
  position: relative;
  width: 280px;
  padding: 50px 50px 50px 0;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 20px 20px 0;
  background-color: ${({ theme }) => theme.colors.lightNavy};
`;
const UtilArea = () => {
  return (
    <UtilAreaWrapper>
      <MoneyUtil />
      <MessageDisplay />
    </UtilAreaWrapper>
  );
};

export default UtilArea;
