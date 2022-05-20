import React, { useContext } from 'react';

import ProductBox from '@components/molecules/ProductBox';
import * as S from '@components/organisms/ProductList/ProductList.style';
import { MoneyContext } from '@context/money/provider';
import { productsApi } from '@lib/api';
import useAsync from '@lib/hooks/useAsync';

const ProductList = () => {
  const [{ data: products }, refetch] = useAsync(productsApi.getAllProducts);
  const { state, spendMoney } = useContext(MoneyContext);

  // TODO: loading, error 처리

  const buyProduct = id => () => {
    const { price, quantity } = products.find(product => product.id === id);
    spendMoney(price);
    productsApi.reduceProductQuantity({ id, data: { quantity: quantity - 1 } }).then(refetch);
  };

  return (
    products &&
    state && (
      <S.Container>
        {products.map(product => (
          <ProductBox
            key={product.id}
            product={product}
            insertedMoney={state.insertedMoney}
            buyProduct={buyProduct}
          />
        ))}
      </S.Container>
    )
  );
};

export default ProductList;
