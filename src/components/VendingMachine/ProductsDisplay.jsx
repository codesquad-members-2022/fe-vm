import styled from "styled-components";
import Product from "./Product";
import Glass from "../common/Glass";

const DisplayLayout = styled.div`
  position: relative;
  height: calc(100% - 100px);
  margin: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.grey4};
  box-shadow: inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`;

const ProductsDisplay = ({ productsInfo, stockData, changeStock }) => {
  return (
    <DisplayLayout>
      <Glass />
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
