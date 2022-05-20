import styled from "styled-components";

const StyledVendingMachine = styled.div`
  margin-top: 100px;
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

export { StyledVendingMachine, VendingMachineTitle, VendingMachineTop };
