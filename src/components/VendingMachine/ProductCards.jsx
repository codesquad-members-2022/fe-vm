import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { COLORS, PRODUCT_STATUS } from 'constants';
import { TimerContext, ProductsContext, WalletCashesContext, LogMessagesContext } from 'context';
import { createNextId } from 'util/util';
import ProductCard from 'components/VendingMachine/ProductCard';

const ProductCards = () => {
  const { clearReturnCashesTimer } = useContext(TimerContext);
  const { logMessages, setLogMessages } = useContext(LogMessagesContext);
  const { products, setProducts } = useContext(ProductsContext);
  const { totalInputCash, setTotalInputCash } = useContext(WalletCashesContext);

  const getSaleState = ({ count, price }) => {
    if (count <= 0) return PRODUCT_STATUS.SOLDOUT;
    if (price <= totalInputCash) return PRODUCT_STATUS.ACTIVE;
    return PRODUCT_STATUS.ONSALE;
  };

  const clickActiveProduct = ({ id, name, price }) => {
    const newProducts = products.map(product =>
      id === product.id ? { ...product, count: product.count - 1 } : product,
    );
    setProducts(newProducts);
    setTotalInputCash(totalInputCash - price);

    const newLogId = createNextId(logMessages);
    const newLogMessage = { id: newLogId, date: new Date(), type: 'PRODUCT_SELECTED', value: name };
    setLogMessages(prev => [...prev, newLogMessage]);

    setTimeout(() => {
      const newLogId = createNextId(logMessages);
      const newLogMessage = {
        id: newLogId,
        date: new Date(),
        type: 'PRODUCT_SHIPPED',
        value: name,
      };
      setLogMessages(prev => [...prev, newLogMessage]);
    }, 2000);
  };

  useEffect(() => {
    if (totalInputCash === 0) return clearReturnCashesTimer();
  });

  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          status={getSaleState({ ...product })}
          clickActiveProduct={clickActiveProduct}
        />
      ))}
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  grid-area: Products;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  padding: 64px;
  border-radius: 24px;
  background: ${COLORS.GRAY_1};
`;

export default ProductCards;
