import styled from "styled-components";
import { useContext } from "react";

const Wallet = () => {
  return <WalletWrapper></WalletWrapper>;
};

const WalletWrapper = styled.div`
  width: 350px;
  height: 800px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grey4};
`;

export default Wallet;
