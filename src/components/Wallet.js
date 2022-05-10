import styled from "styled-components";

const WalletWrap = styled.div`
  display: flex;
  width: 80vw;
  height: 80vh;
  margin: auto;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #d3d3d3;
  margin-top: 5%;
`;

const Wallet = () => {
  return <WalletWrap></WalletWrap>;
};

export default Wallet;
