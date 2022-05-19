/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ErrorContext, MoneyContext } from 'components/App';
import { MESSAGES, PHRASES } from 'constants/messages';
import { copyObject } from 'utils';

function Product({ name, price, stock, products, setProducts }) {
  const { curMoney, setMoney } = useContext(MoneyContext);
  const { showErrorMsg } = useContext(ErrorContext);
  const hasStock = stock >= 1;
  const canPurchase = curMoney >= price && hasStock;

  return (
    <div>
      <Name disabled={!hasStock} canPurchase={canPurchase} onClick={handlePurchaseProduct}>
        {name}
      </Name>
      <Row>
        <Price>{price}</Price>
        <Stock>{hasStock ? stock : PHRASES.SOLD_OUT}</Stock>
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
