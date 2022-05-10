import styled from "styled-components";
import Header from "./components/Header/Header";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import { InputBalanceContextProvider } from "./ContextProvider";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <InputBalanceContextProvider>
        <VendingMachine />
      </InputBalanceContextProvider>
    </AppWrapper>
  );
};

export default App;
