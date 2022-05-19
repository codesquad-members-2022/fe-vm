import styled from "styled-components";

const ProductStockManager = ({ productInfo, updateProductInfo }) => {
  let timeoutId;
  let stockChangeNum = 0;

  const handleStockChangeButtonClick = (type) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    stockChangeNum += type === "increment" ? 1 : -1;
    const newProductInfo = { ...productInfo };
    newProductInfo.stock = Math.max(productInfo.stock + stockChangeNum, 0);
    timeoutId = setTimeout(() => updateProductInfo(productInfo.id, newProductInfo), 1000);
  };

  return (
    <ProductStockManagerWrapper>
      <ProductName>{productInfo.name}</ProductName>
      <UtilWrapper>
        <StockChangeButton onClick={() => handleStockChangeButtonClick("decrement")}>-</StockChangeButton>
        <StockDisplay>{productInfo.stock}</StockDisplay>
        <StockChangeButton onClick={() => handleStockChangeButtonClick("increment")}>+</StockChangeButton>
      </UtilWrapper>
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

const UtilWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
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
