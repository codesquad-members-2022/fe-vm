import { useContext } from 'react';
import styled, { css } from 'styled-components';
import React from 'react';
import {
  FlexCenter,
  ProductText,
  ButtonCommon,
  boxShadowBorderRadi,
} from '../styled-components/util';
import { myContext } from './App';

const Product = ({ info, index }) => {
  const { inputMoney, handleClickProduct } = useContext(myContext);

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

const ProductItem = styled.li`
  width: 20%;
  cursor: pointer;
`;

const Btn = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.medium};
  ${boxShadowBorderRadi}
  ${ButtonCommon}

  ${({ active }) =>
    active &&
    css`
      border: 0.2rem solid ${({ theme }) => theme.color.red};
    `}

  ${({ disable }) =>
    disable &&
    css`
      background: ${({ theme }) => theme.color.grey3};
    `}

  &:hover {
    background: ${({ disable }) =>
      !disable &&
      'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'};
  }
`;

const ProductImg = styled.img`
  display: block;
  width: 5rem;
`;

const Title = styled(ProductText)`
  margin-top: ${({ theme }) => theme.margin.medium};
  color: ${({ theme }) => theme.color.grey1};
`;

const Price = styled(ProductText)``;

export default React.memo(Product);
