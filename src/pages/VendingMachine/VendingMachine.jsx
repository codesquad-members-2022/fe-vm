import DispenseArea from "components/VendingMachine/DispenseArea/DispenseArea";
import ProductList from "components/VendingMachine/ProductList/ProductList";

import {
  Wrapper,
  ProductListWrapper,
  ProgressWrapper,
} from "./VendingMachine.styled";

const VendingMachine = () => {
  return (
    <Wrapper>
      <ProductListWrapper>
        <ProductList />
      </ProductListWrapper>

      <ProgressWrapper>
        <DispenseArea />
      </ProgressWrapper>
    </Wrapper>
  );
};

export default VendingMachine;
