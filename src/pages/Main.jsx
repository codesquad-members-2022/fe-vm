import styled from "styled-components";
import { RecordsProvider } from "contextProviders/RecordsProvider";
import { BalanceProvider } from "contextProviders/BalanceProvider";
import VendingMachine from "components/VendingMachine/VendingMachine";
import Wallet from "components/Wallet/Wallet";

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
  margin: 100px 0;
  justify-content: space-between;
  width: 1440px;
`;

export default Main;
