import styled from "styled-components";
import * as uiConst from "../constant/uiConstant";
import { vendingMachineProductList } from "../mockData/mockData";
import Product from "../component/Product";

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
      <VendingMachineRightCol></VendingMachineRightCol>
    </VendingMachineBox>
  );
}

//TODO: width, height 매직 넘버 없애라

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const VendingMachineBox = styled.div`
  width: ${uiConst.VENDING_MACHINE_WIDTH}px;
  border: 5px solid black;
  margin: 0 auto;
  display: flex;
`;

const VendingMachineLeftCol = styled.div`
  border: 2px solid red;
  width: 100px;
  min-height: ${uiConst.VENDING_MACHINE_HEIHGT}px;
  width: 600px;
`;

const VendingMachineRightCol = styled.div`
  border: 2px solid blue;
  width: 100px;
  height: ${uiConst.VENDING_MACHINE_HEIHGT}px;
  width: 400px;
`;

function VendingMachineCredit() {}

function VendingMachineReturnBtn() {}

function VendingMachineLog() {}

export default VendingMachine;
