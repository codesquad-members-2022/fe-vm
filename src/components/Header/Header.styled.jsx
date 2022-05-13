import styled from "styled-components";

const HeaderBlock = styled.ul`
  display: flex;
  width: 200px;
  margin: 0 auto;
  margin-top: 70px;
`;

const VendingMachineButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  background: #3f3f3f;

  width: 200px;
  height: 58px;

  font-size: 18px;
  text-align: center;
  color: #ffffff;

  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;

  a {
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
  }
`;

const WalletButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 10px;
  background: #bcbcbc;

  width: 200px;
  height: 58px;

  box-shadow: 0px 1px 30px rgba(224, 224, 224, 0.3);
  border-radius: 6px;

  a {
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
  }
`;

export { HeaderBlock, VendingMachineButton, WalletButton };
