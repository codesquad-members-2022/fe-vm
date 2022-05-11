import styled from "styled-components";
import LogMessages from "../components/VendingMachine/LogMessages";
import MoneySlot from "../components/VendingMachine/MoneySlot";
import ReturnButton from "../components/VendingMachine/ReturnButton";
import Showcase from "../components/VendingMachine/Showcase";

export default function VendingMachine() {
  return (
    <VMWrapper>
      <Showcase />
      <VMController>
        <MoneySlot />
        <ReturnButton />
        <LogMessages />
      </VMController>
    </VMWrapper>
  );
}

const VMWrapper = styled.div`
  display: flex;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const VMController = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
