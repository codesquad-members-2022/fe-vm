import styled from "styled-components";
import Header from "./components/Header/Header";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import { InputSumProvider, RecordsProvider } from "./ContextProvider";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <InputSumProvider>
        <VendingMachine />
      </InputSumProvider>
    </AppWrapper>
  );
};

export default App;
