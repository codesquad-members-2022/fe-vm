import styled from "styled-components";
import ProductArea from "./ProductArea/ProductArea";
import UtilArea from "./UtilArea/UtilArea";

const VendingMachineWrapper = styled.div`
  display: flex;
  height: 900px;
  margin: 100px auto;
`;

const VendingMachine = () => {
  return (
    <VendingMachineWrapper>
      <ProductArea />
      <UtilArea />
    </VendingMachineWrapper>
  );
};

export default VendingMachine;
