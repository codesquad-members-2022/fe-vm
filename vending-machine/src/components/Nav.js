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
  gap: 20px;
  height: 100px;
`;
const VendingMachineBtn = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.gray};
  font-weight: bold;
  font-size: 20px;
  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
  &:active {
    background: ${({ theme }) => theme.colors.darkGray};
  }
`;
const WalletBtn = styled(VendingMachineBtn)``;
export default Nav;
