import styled from "styled-components";

import Products from "./Products";
import Info from "./Info";

const MachineWrap = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  margin: auto;
  border-radius: 10px;
  background-color: #d3d3d3;
  margin-top: 5%;
`;

const VendingMachine = () => {
  return (
    <MachineWrap>
      <Products />
      <Info />
    </MachineWrap>
  );
};

export default VendingMachine;
