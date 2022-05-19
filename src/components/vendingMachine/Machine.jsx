import styled from "styled-components";

import Products from "./Products";
import Info from "./Info";

const VendingMachine = () => {
  return (
    <MachineWrap>
      <ProductWrap>
        <Products />
        <ProductOut />
      </ProductWrap>
      <Info />
    </MachineWrap>
  );
};

const ProductOut = styled.div`
  width: 320px;
  height: 120px;
  background: linear-gradient(blue, white);
  margin: auto auto;
  margin-top: 20px;
  border-radius: 10px;
`;

const ProductWrap = styled.div`
  width: 75%;
  height: 100%;
`;

const MachineWrap = styled.div`
  display: flex;
  width: 65vw;
  height: 85vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: inset 3px 3px 30px 5px grey;
  background-color: #eaeaea;
  margin-top: 5%;
`;

export default VendingMachine;
