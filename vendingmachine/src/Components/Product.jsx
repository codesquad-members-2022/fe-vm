import { useContext } from 'react';
import {
  ProductItem,
  Btn,
  ProductImg,
  Title,
  Price,
} from 'components/Product.Styled';
import React from 'react';
import { myContext } from 'components/App';

const Product = ({ price, number, name, src, index }) => {
  const { inputMoney, handleClickProduct } = useContext(myContext);

  return (
    <ProductItem>
      <Btn
        as="button"
        active={inputMoney >= price && number > 0}
        disable={number === 0}
        onClick={handleClickProduct.bind(null, name, index)}
      >
        <ProductImg src={`${process.env.PUBLIC_URL}${src}`} alt={name} />
        <Title as="h3">{name}</Title>
        <Price as="strong">{price.toLocaleString()}</Price>
      </Btn>
    </ProductItem>
  );
};

export default React.memo(Product);
