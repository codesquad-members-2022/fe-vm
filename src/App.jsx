import styled from "styled-components";
import Header from "./components/Header/Header";
import VendingMachine from "./components/VendingMachine/VendingMachine";
import { InputSumProvider, RecordsProvider } from "./ContextProvider";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.navy} 0%,
    ${({ theme }) => theme.colors.lightNavy} 44%,
    ${({ theme }) => theme.colors.skyBlue} 100%
  );
`;

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <InputSumProvider>
        <RecordsProvider>
          <VendingMachine />
        </RecordsProvider>
      </InputSumProvider>
    </AppWrapper>
  );
};

export default App;
