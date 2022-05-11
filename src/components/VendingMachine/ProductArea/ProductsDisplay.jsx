import styled from "styled-components";
import Product from "./Product";

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
