import React from 'react';

import ProductBox from '@components/molecules/ProductBox';
import * as S from '@components/organisms/ProductList/ProductList.style';
import products from '@data/products';

// TODO: 상품 데이터 상태 관리
const ProductList = () => {
  return (
    <S.Container>
      {products.map(product => (
        <ProductBox key={product.id} {...product} />
      ))}
    </S.Container>
  );
};

export default ProductList;
