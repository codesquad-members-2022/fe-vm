import styled from "styled-components";
import { Vendproduct, VendController } from "components";

const StyledVendingMachine = styled.div`
  background-color: #ff0000;
  padding: 20px 20px 100px 20px;
  border-radius: 20px;
`;

const VendingMachineTitle = styled.p`
  font-size: 2em;
  font-weight: 800;
  color: #fff;
`;

const VendingMachineTop = styled.div`
  display: flex;
`;

const VendProductOutlet = styled.div`
  width: 100%;
  height: 170px;
  background-color: #ddd;
  margin-top: 50px;
`;

const VendingMachine = () => {
  return (
    <StyledVendingMachine>
      <VendingMachineTitle>DocaCola</VendingMachineTitle>
      <VendingMachineTop>
        <Vendproduct />
        <VendController />
      </VendingMachineTop>
      <VendProductOutlet />
    </StyledVendingMachine>
  );
};

export { VendingMachine };
