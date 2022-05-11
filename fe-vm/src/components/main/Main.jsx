import styled from "styled-components";

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default Main;
