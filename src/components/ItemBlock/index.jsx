import PropTypes from 'prop-types';
import React from 'react';

import * as S from './ItemBlock.style';

const ItemBlock = ({ isMoney, unit, count, name, price, stock, category }) => {
  return (
    <>
      {isMoney ? (
        <S.BlockBackground>
          <S.InnerText>{count}</S.InnerText>
          <S.InnerColor isMoney category={count && 'money'}>{`$${unit}`}</S.InnerColor>
        </S.BlockBackground>
      ) : (
        <S.BlockBackground>
          <S.InnerColor category={stock && category}>{name?.toUpperCase()}</S.InnerColor>
          <S.InnerText>{stock ? `$${price}` : 'SOLD OUT'}</S.InnerText>
        </S.BlockBackground>
      )}
    </>
  );
};

ItemBlock.propTypes = {
  isMoney: PropTypes.bool,
  unit: PropTypes.number,
  count: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  category: PropTypes.string,
  categoryId: PropTypes.number,
};

export default ItemBlock;
