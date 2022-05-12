import VendingMachine from "../components/VendingMachine/VendingMachine";
import Wallet from "../components/Wallet/Wallet";
import { InputSumProvider } from "../ContextProvider";
import { RecordsProvider } from "../ContextProvider";

const Main = () => {
  return (
    <RecordsProvider>
      <InputSumProvider>
        <VendingMachine />
        <Wallet />
      </InputSumProvider>
    </RecordsProvider>
  );
};

export default Main;
