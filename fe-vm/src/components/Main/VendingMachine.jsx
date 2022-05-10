import styled from "styled-components";
import Info from "./Info";
import Menu from "./Menu";

const VendingMachine = () => {
  return (
    <VendingMachineContainer>
      <Menu />
      <Info />
    </VendingMachineContainer>
  );
};

const VendingMachineContainer = styled.div`
  display: flex;
  min-width: 1500px;
  border: 1rem solid black;
  box-sizing: border-box;
`;

export default VendingMachine;
