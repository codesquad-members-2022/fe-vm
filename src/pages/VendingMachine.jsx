import styled from "styled-components";
import { VendProductContainer, VendController } from "components";

const StyledVendingMachine = styled.div`
  margin-top: 50px;
  padding: 20px 20px 100px 20px;
  border-radius: 20px;
  background-color: #ff0000;
`;

const VendingMachineTitle = styled.p`
  font-size: 2em;
  font-weight: 800;
  color: #fff;
  font-family: cursive;
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
        <VendProductContainer />
        <VendController />
      </VendingMachineTop>
      <VendProductOutlet />
    </StyledVendingMachine>
  );
};

export { VendingMachine };
