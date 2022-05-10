import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavBtns>
      <VendingMachineBtn>자판기</VendingMachineBtn>
      <WalletBtn>지갑</WalletBtn>
    </NavBtns>
  );
}
const NavBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const VendingMachineBtn = styled.button`
  width: 100px;
  height: 50px;
  border: none;
`;
const WalletBtn = styled(VendingMachineBtn)``;
export default Nav;
