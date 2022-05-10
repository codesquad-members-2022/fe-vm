import styled from "styled-components";
import Product from "./Product";

const DisplayLayout = styled.div`
  height: calc(100% - 100px);
  margin: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.skyBlue};
`;

const ProductsDisplay = ({ productsInfo, stockData, changeStock }) => {
  return (
    <DisplayLayout>
      {productsInfo.map((productInfo) => (
        <Product
          key={productInfo.id}
          productInfo={productInfo}
          stock={stockData[productInfo.id]}
          changeStock={changeStock}
        />
      ))}
    </DisplayLayout>
  );
};

export default ProductsDisplay;
