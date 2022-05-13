import styled from "styled-components";

const ProductStockManager = ({ tempProductInfo, setTempProductsInfo }) => {
  const changeTempStock = () => {
    //todo: 기능 구현
  };

  return (
    <ProductStockManagerWrapper>
      <ProductName>{tempProductInfo.name}</ProductName>
      <StockChangeButton onClick={changeTempStock}>-</StockChangeButton>
      <StockDisplay>{tempProductInfo.stock}</StockDisplay>
      <StockChangeButton onClick={changeTempStock}>+</StockChangeButton>
    </ProductStockManagerWrapper>
  );
};

const ProductStockManagerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;

const ProductName = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StockChangeButton = styled.button`
  width: 30px;
  height: 30px;
`;

const StockDisplay = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

export default ProductStockManager;
