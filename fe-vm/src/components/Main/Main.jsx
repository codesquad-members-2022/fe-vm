import styled from "styled-components";
import VendingMachine from "./VendingMachine";
import Wallet from "./Wallet";

const Main = () => {
  return (
    <MainContainer>
      <VendingMachine />
      <Wallet />
    </MainContainer>
  );
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
