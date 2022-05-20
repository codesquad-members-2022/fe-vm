import { VendProductContainer, VendController } from "components";
import { StyledVendingMachine, VendingMachineTitle, VendingMachineTop } from "./VendingMachine.styled";

const VendingMachine = () => {
  return (
    <StyledVendingMachine>
      <VendingMachineTitle>DocaCola</VendingMachineTitle>
      <VendingMachineTop>
        <VendProductContainer />
        <VendController />
      </VendingMachineTop>
    </StyledVendingMachine>
  );
};

export { VendingMachine };
