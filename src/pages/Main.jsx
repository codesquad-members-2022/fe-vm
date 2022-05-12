import VendingMachine from "../components/VendingMachine/VendingMachine";
import Wallet from "../components/Wallet/Wallet";
import { BalanceProvider } from "../contextProviders/BalanceProvider";
import { RecordsProvider } from "../contextProviders/RecordsProvider";
import styled from "styled-components";

const Main = () => {
  return (
    <RecordsProvider>
      <BalanceProvider>
        <MainWrapper>
          <VendingMachine />
          <Wallet />
        </MainWrapper>
      </BalanceProvider>
    </RecordsProvider>
  );
};

const MainWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  width: 1440px;
`;

export default Main;
