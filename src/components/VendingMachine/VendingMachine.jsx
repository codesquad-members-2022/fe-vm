import styled from "styled-components";
import ProductArea from "./ProductArea/ProductArea";
import UtilArea from "./UtilArea/UtilArea";

const VendingMachine = () => {
  return (
    <VendingMachineWrapper>
      <ProductArea />
      <UtilArea />
    </VendingMachineWrapper>
  );
};

const VendingMachineWrapper = styled.div`
  display: flex;
  height: 900px;
`;

export default VendingMachine;
