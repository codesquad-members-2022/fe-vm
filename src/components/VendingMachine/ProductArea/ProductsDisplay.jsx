import { useContext } from "react";
import styled from "styled-components";
import Product from "./Product";
import { ProductsInfo } from "contextProviders/ProductsInfoProvider";

const ProductsDisplay = ({ handlePurchaseBtnClick }) => {
  const { productsInfo } = useContext(ProductsInfo);
  return (
    <DisplayLayout>
      {productsInfo?.map((productInfo) => (
        <Product
          key={productInfo.id}
          productInfo={productInfo}
          handlePurchaseBtnClick={handlePurchaseBtnClick}
        />
      ))}
    </DisplayLayout>
  );
};

const DisplayLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap;
  box-shadow: inset 0 30px 60px 10px rgba(0, 0, 0, 0.3);
`;

export default ProductsDisplay;
