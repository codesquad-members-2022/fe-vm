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

const Product = ({ info, index }) => {
  const { inputMoney, handleClickProduct } = useContext(myContext);
  console.log(index);

  return (
    <ProductItem>
      <Btn
        as="button"
        active={inputMoney >= info.price && info.number > 0}
        disable={info.number === 0}
        onClick={() => {
          handleClickProduct(info.name, index);
        }}
      >
        <ProductImg
          src={`${process.env.PUBLIC_URL}${info.src}`}
          alt={info.name}
        />
        <Title as="h3">{info.name}</Title>
        <Price as="strong">{info.price.toLocaleString()}</Price>
      </Btn>
    </ProductItem>
  );
};

export default React.memo(Product);
