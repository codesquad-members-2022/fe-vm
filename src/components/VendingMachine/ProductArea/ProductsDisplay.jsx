import { useContext } from "react";
import styled from "styled-components";
import Product from "./Product";
import { ProductsInfo } from "../../../contextProviders/ProductsInfoProvider";

const ProductsDisplay = () => {
  const { productsInfo } = useContext(ProductsInfo);
  return (
    <DisplayLayout>
      {productsInfo?.map((productInfo, idx) => (
        <Product key={productInfo.id} productInfo={productInfo} productIdx={idx} />
      ))}
    </DisplayLayout>
  );
};

const DisplayLayout = styled.div`
  position: relative;
  height: calc(100% - 100px);
  margin: 50px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey4};
  box-shadow: inset 0 30px 60px 10px rgba(0, 0, 0, 0.3);
`;

export default ProductsDisplay;
