import React, { useContext } from 'react';
import styled from 'styled-components';
import { ErrorContext, MoneyContext, LoadingContext, EventLogContext } from 'components/App';
import { MESSAGES, PHRASES } from 'constants/messages';
import { copyObject } from 'utils';
import DELAY_MS from 'constants/delay';

function Product({ name, price, stock, products, setProducts }) {
  const { curMoney, setMoney } = useContext(MoneyContext);
  const { showErrorMsg } = useContext(ErrorContext);
  const { setLoading } = useContext(LoadingContext);
  const { eventLog, setEventLog } = useContext(EventLogContext);
  const hasStock = stock >= 1;
  const canPurchase = curMoney >= price && hasStock;

  return (
    <div>
      <Name
        disabled={!hasStock}
        canPurchase={canPurchase}
        onClick={() => {
          setLoading(true);
          setTimeout(handlePurchaseProduct, DELAY_MS.PURCHASE);
        }}
      >
        {name}
      </Name>
      <Row>
        <Price>{price}</Price>
        <Stock>{hasStock ? `${stock}개` : PHRASES.SOLD_OUT}</Stock>
      </Row>
    </div>
  );

  function handlePurchaseProduct() {
    if (!canPurchase) {
      showErrorMsg(MESSAGES.ERROR.NOT_ENOUGH_MONEY);
      return;
    }

    const copiedProducts = products.map(copyObject);
    const updatedProducts = copiedProducts.map(decreaseStock);
    const updatedMoney = curMoney - price;

    setProducts(updatedProducts);
    setMoney(updatedMoney);
    setEventLog([...eventLog, { type: 'PURCHASE', value: name }]);

    function decreaseStock(product) {
      const isTargetProduct = product.name === name;
      if (!isTargetProduct) {
        return product;
      }
      return { ...product, stock: stock - 1 };
    }
  }
}

export default Product;

const Name = styled.button`
  border-color: ${({ canPurchase }) => (canPurchase ? 'red' : 'black')};
  width: 100px;
  height: 50px;
  padding: 0;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Stock = styled.div``;

const Price = styled.div`
  text-align: center;
`;
