import styled from "styled-components";
import MoneyUtil from "./MoneyUtil/MoneyUtil";
import MessageDisplay from "./MessageDisplay/MessageDisplay";
import Outlet from "./Outlet/Outlet";

const UtilArea = () => {
  return (
    <UtilAreaWrapper>
      <MoneyUtil />
      <MessageDisplay />
      <Outlet />
    </UtilAreaWrapper>
  );
};

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
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default UtilArea;
