import React from "react";
import Info from "./Info";
import Menu from "./Menu";
import styled from "styled-components";
import { WidthSort } from "../style/Globalstyles";

function VendingMachine() {
  return (
    <MachineWrap>
      <Machine>
        <Menu></Menu>
        <Info></Info>
      </Machine>
    </MachineWrap>
  );
}

const Machine = styled.div`
  display: flex;
  width: 1300px;
  height: 700px;
  border: 5px solid black;
`;
const MachineWrap = styled.div`
  width: 100%;
  ${WidthSort}
`;
export default VendingMachine;
