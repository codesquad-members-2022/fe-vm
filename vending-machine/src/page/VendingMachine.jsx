import styled from "styled-components";
import * as uiConst from "../constant/uiConstant";
import { vendingMachineProductList } from "../mockData/mockData";
import Product from "../component/Product";
import OrderBox from "../component/OrderBox";

function VendingMachine() {
  const products = vendingMachineProductList.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      price={product.price}
      quantity={product.quantity}
    />
  ));

  return (
    <VendingMachineBox>
      <VendingMachineLeftCol>
        <ProductContainer>{products}</ProductContainer>
      </VendingMachineLeftCol>
      <VendingMachineRightCol>
        <OrderBox />
      </VendingMachineRightCol>
    </VendingMachineBox>
  );
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const VendingMachineBox = styled.div`
  width: ${uiConst.VENDING_MACHINE_WIDTH}px;
  margin: 0 auto;
  display: flex;
`;

const VendingMachineLeftCol = styled.div`
  border: 5px solid #000;
  min-height: ${uiConst.VENDING_MACHINE_HEIHGT}px;
  width: 60%;
`;

const VendingMachineRightCol = styled.div`
  border: 5px solid #000;
  height: ${uiConst.VENDING_MACHINE_HEIHGT}px;
  width: 40%;
`;

export default VendingMachine;
